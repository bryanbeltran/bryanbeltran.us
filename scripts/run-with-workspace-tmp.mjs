import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const minimumSystemTempBytes = 512 * 1024 * 1024
const command = process.argv.slice(2)

if (command.length === 0) {
  console.error('Usage: run-with-workspace-tmp.mjs <command> [args...]')
  process.exit(2)
}

function availableBytes(directory) {
  try {
    const stats = fs.statfsSync(directory)
    return Number(stats.bavail) * Number(stats.bsize)
  } catch {
    return Number.POSITIVE_INFINITY
  }
}

const systemTemp = os.tmpdir()
const useWorkspaceTemp =
  process.env.FORCE_WORKSPACE_TMP === '1' || availableBytes(systemTemp) < minimumSystemTempBytes
const childEnv = { ...process.env }
let runTemp

if (useWorkspaceTemp) {
  const tempRoot = path.resolve(process.cwd(), '.tmp', 'workspace-runs')
  fs.mkdirSync(tempRoot, { recursive: true })
  runTemp = fs.mkdtempSync(path.join(tempRoot, 'run-'))
  childEnv.TMPDIR = runTemp
  childEnv.TMP = runTemp
  childEnv.TEMP = runTemp
  console.error(`Using workspace temp directory: ${runTemp}`)
}

const result = spawnSync(command[0], command.slice(1), {
  env: childEnv,
  stdio: 'inherit',
})

if (runTemp) {
  try {
    fs.rmSync(runTemp, { recursive: true, force: true })
  } catch (error) {
    console.warn(`Could not remove workspace temp directory ${runTemp}: ${error.message}`)
  }
}

if (result.error) {
  console.error(result.error.message)
  process.exit(1)
}

if (result.signal) {
  console.error(`Command terminated by ${result.signal}`)
  process.exit(1)
}

process.exit(result.status ?? 1)
