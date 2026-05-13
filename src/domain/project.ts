export type Project = {
  title: string;
  role: {
    title: string;
    description: string;
  };
  description: string;
  url?: string;
  technologies: Set<string>;
};

export interface ProjectRepository {
  getAll(): Project[];
  getAllTechnologies(): string[];
}

export abstract class BaseProjectRepository implements ProjectRepository {
  abstract getAll(): Project[];

  getAllTechnologies(): string[] {
    return [
      ...new Set(this.getAll().flatMap((p) => [...p.technologies])),
    ].sort();
  }
}
