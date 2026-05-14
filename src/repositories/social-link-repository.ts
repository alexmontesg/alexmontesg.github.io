import { FaGithub, FaLinkedinIn, FaMapMarker } from "react-icons/fa";
import {
  BaseSocialLinkRepository,
  type SocialLink,
} from "../domain/social-link";

export class InMemorySocialLinkRepository extends BaseSocialLinkRepository {
  private links: SocialLink[] = [
    {
      Icon: FaMapMarker,
      text: "Gijón, Spain",
    },
    {
      Icon: FaLinkedinIn,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/alejandromontesg/",
      subtitle: "@alejandromontesg",
    },
    {
      Icon: FaGithub,
      text: "Github",
      href: "https://github.com/alexmontesg",
      subtitle: "@alexmontesg",
    },
  ];

  getAll(): SocialLink[] {
    return this.links;
  }
}
