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
})
