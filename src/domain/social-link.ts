import type { IconType } from "react-icons";

export type SocialLink = {
  href?: string;
  Icon: IconType;
  text: string;
  subtitle?: string;
};

export interface SocialLinkRepository {
  getAll(): SocialLink[];
}

export abstract class BaseSocialLinkRepository implements SocialLinkRepository {
  abstract getAll(): SocialLink[];
}
