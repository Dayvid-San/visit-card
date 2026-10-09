// Fixed category taxonomy for portfolio projects (programmerProjects /
// researchProjects Firestore docs, field `category`). A single choice per
// project, not a multi-tag system, picked in the admin dashboard's project
// form and used to filter app/portfolio/page.tsx. Named ProjectCategoryTag,
// not ProjectCategory, to avoid colliding with the dashboard's existing
// ProjectCategory ("programmer" | "research", the Developer/Academic split).
export const PROJECT_CATEGORIES = ["IA", "Agentes", "Corporativo", "Mobile", "Web", "IoT"] as const;

export type ProjectCategoryTag = (typeof PROJECT_CATEGORIES)[number];
