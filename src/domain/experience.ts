import type { IconType } from "react-icons";

export type Experience = {
  Icon: IconType;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

export interface ExperienceRepository {
  getAll(): Experience[];
}

export abstract class BaseExperienceRepository implements ExperienceRepository {
  abstract getAll(): Experience[];
}
