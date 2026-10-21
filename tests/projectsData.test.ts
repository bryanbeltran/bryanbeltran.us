import { describe, expect, it } from 'vitest'
import projectsData, {
  flagshipProjects,
  otherProjects,
  selectedProjects,
} from '@/data/projectsData'

describe('project curation', () => {
  it('keeps SeedStarter as the only flagship project', () => {
    expect(flagshipProjects).toHaveLength(1)
    expect(flagshipProjects[0].title).toBe('SeedStarter')
    expect(flagshipProjects[0].detailsHref).toBe('/projects/seedstarter')
  })

  it('partitions every project into one portfolio tier', () => {
    const tieredProjects = [...flagshipProjects, ...selectedProjects, ...otherProjects]

    expect(tieredProjects).toHaveLength(projectsData.length)
    expect(new Set(tieredProjects.map((project) => project.title)).size).toBe(projectsData.length)
  })

  it('includes the latest education and local-first projects', () => {
    expect(selectedProjects.map((project) => project.title)).toEqual([
      'Room for Words',
      'Voiceprint',
      'Math Garden',
      'Room for Math',
      'Browser Listener',
      'Wiggum',
      'GovDataHub',
    ])
    expect(selectedProjects.find((project) => project.title === 'Room for Words')).toMatchObject({
      href: 'https://roomforwords.com',
      status: 'Launched',
    })
    expect(
      selectedProjects.find((project) => project.title === 'Room for Words')
    ).not.toHaveProperty('repoHref')
    expect(selectedProjects.find((project) => project.title === 'Math Garden')).toMatchObject({
      status: 'In Progress',
    })
    expect(selectedProjects.find((project) => project.title === 'Math Garden')).not.toHaveProperty(
      'href'
    )
    expect(selectedProjects.find((project) => project.title === 'Room for Math')).toMatchObject({
      status: 'In Progress',
    })
    expect(
      selectedProjects.find((project) => project.title === 'Room for Math')
    ).not.toHaveProperty('href')
    expect(selectedProjects.find((project) => project.title === 'Voiceprint')).toMatchObject({
      href: 'https://github.com/bryanbeltran/voiceprint',
      status: 'In Progress',
    })
  })
})
