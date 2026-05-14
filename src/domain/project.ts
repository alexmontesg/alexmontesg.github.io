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
  private _technologies: string[] | null = null;

  getAllTechnologies(): string[] {
    // Assumed to be always static
    if (this._technologies) return this._technologies;
    this._technologies = [
      ...new Set(this.getAll().flatMap((p) => [...p.technologies])),
    ].sort();
    return this._technologies;
  }
}
