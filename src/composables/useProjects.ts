import { computed } from 'vue';
import Projects from '@/data/Projects.json';

/**
 * Sorts projects by year from most recent to oldest.
 */
export function sortByYearDescending<T extends { year: string }>(projects: T[]): T[] {
    return [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

/**
 * Filters projects by type and sorts them by year.
 */
export function getProjectsByType(type: string) {
    return computed(() => sortByYearDescending(Projects.data.filter(project => project.type === type)));
}

/**
 * Filters featured projects and sorts them by year.
 */
export function getFeaturedProjects() {
    return computed(() => sortByYearDescending(Projects.data.filter(project => project.featured)));
}

/**
 * Groups projects by organization and sorts each group by year.
 */
export function groupProjectsByOrganization(projects: ReturnType<typeof getProjectsByType>) {
    return computed(() => {
        const grouped = projects.value.reduce((acc, project) => {
            if (!acc[project.organization]) acc[project.organization] = [];
            acc[project.organization].push(project);
            return acc;
        }, {} as Record<string, typeof projects.value>);

        Object.keys(grouped).forEach(org => {
            grouped[org] = sortByYearDescending(grouped[org]);
        });

        return grouped;
    });
}
