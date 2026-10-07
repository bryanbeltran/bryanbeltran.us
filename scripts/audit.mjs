import { spawnSync } from 'node:child_process'

const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
const result = spawnSync(command, ['audit', '--json'], {
  encoding: 'utf8',
  maxBuffer: 10 * 1024 * 1024,
})

if (result.error) {
  console.error(`Unable to run pnpm audit: ${result.error.message}`)
  process.exit(1)
}

let report
try {
  report = JSON.parse(result.stdout)
} catch {
  console.error('pnpm audit did not return valid JSON.')
  console.error(result.stdout || result.stderr)
  process.exit(1)
}

const acceptedResidual = {
  'GHSA-8988-4f7v-96qf': {
    module: '@opentelemetry/core',
    patchedVersions: '>=2.8.0',
    reason:
      "The patched major version breaks Contentlayer's OpenTelemetry 1.x SDK; build-time tracing is not exposed to requests.",
  },
  'GHSA-vfj7-8cjw-p6xm': {
    module: 'braces',
    patchedVersions: '<0.0.0',
    reason: 'No patched release exists; only trusted build-time patterns reach this parser.',
  },
  'GHSA-hp3w-g68c-fv3c': {
    module: 'sprintf-js',
    patchedVersions: '<0.0.0',
    reason: 'No patched release exists; it only parses repository-controlled front matter.',
  },
}

const advisories = Object.values(report.advisories ?? {})

if (result.status !== 0 && advisories.length === 0) {
  console.error(`pnpm audit exited with status ${result.status}.`)
  console.error(result.stderr)
  process.exit(1)
}

const blocking = advisories.filter((advisory) => {
  const accepted = acceptedResidual[advisory.github_advisory_id]
  return !(
    accepted &&
    accepted.module === advisory.module_name &&
    accepted.patchedVersions === advisory.patched_versions
  )
})

if (blocking.length > 0) {
  console.error(`pnpm audit found ${blocking.length} actionable advisories:`)
  for (const advisory of blocking) {
    console.error(
      `- ${advisory.module_name} (${advisory.severity}): ${advisory.github_advisory_id}`
    )
  }
  process.exit(1)
}

for (const advisory of advisories) {
  const accepted = acceptedResidual[advisory.github_advisory_id]
  if (accepted) {
    console.warn(`Accepted ${advisory.module_name} advisory: ${accepted.reason}`)
  }
}

console.log('Dependency audit passed: all fixable advisories are remediated.')
