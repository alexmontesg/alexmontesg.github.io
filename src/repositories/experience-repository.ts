import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { MdManageAccounts, MdScience } from "react-icons/md";
import { TbCodeDots } from "react-icons/tb";
import { BaseExperienceRepository, type Experience } from "@/domain/experience";

export class InMemoryExperienceRepository extends BaseExperienceRepository {
  private experience: Experience[] = [
    {
      Icon: BsFillRocketTakeoffFill,
      company: "Caravelo",
      position: "Delivery Lead",
      startDate: "Nov 1, 2025",
      endDate: "Apr 16, 2026",
      description:
        "Led frontend development for an airline subscription platform, building scalable, mobile-first applications with Vue.js, TypeScript, PHP, and Laravel. Developed customer onboarding experiences and AI-powered workflows to streamline task analysis and development, while improving engineering standards through technical leadership and a 20% increase in test coverage using Jest and Testing Library.",
    },
    {
      Icon: MdManageAccounts,
      company: "Caravelo",
      position: "Engineering Manager",
      startDate: "Jan 1, 2024",
      endDate: "Oct 1, 2025",
      description:
        "Led frontend architecture for multi-tenant airline platforms, creating a component-driven design system that reduced technical debt and accelerated delivery across airline tenants. Managed and contributed hands-on to a cross-functional engineering team delivering subscription products and new product lines, while streamlining airline onboarding processes to reduce setup time by 60%. Collaborated closely with product teams to align technical decisions with business goals and introduced engineering best practices across testing, CI/CD, code reviews, and documentation.",
    },
    {
      Icon: TbCodeDots,
      company: "Caravelo",
      position: "Tech Lead",
      startDate: "Dec 31, 2023",
      endDate: "Nov 1, 2021",
      description:
        "Led the technical direction and architecture of AI-driven customer support platforms, building scalable NLP and intent recognition systems with Node.js and TypeScript. Drove the migration from PHP-rendered frontends to a modern Vue.js ecosystem, improving maintainability, responsiveness, and user experience. Collaborated closely with product and design teams while mentoring engineers on clean architecture, reusable components, and scalable integration patterns.",
    },
    {
      Icon: FaRobot,
      company: "Caravelo",
      position: "Conversational AI Developer",
      startDate: "Sep 24, 2017",
      endDate: "Oct 31, 2021",
      description:
        "Developed and maintained conversational platforms for airline and travel customers using Node.js and Java, enabling booking, check-in, and support workflows through chat interfaces. Integrated chatbot systems with airline reservation platforms for real-time ticket management and improved conversational accuracy by introducing intent classification processes and performance measurement frameworks for Dialogflow agents.",
    },
    {
      Icon: MdScience,
      company: "Eindhoven University of Technology",
      position: "PhD Student",
      startDate: "Oct 1, 2013",
      endDate: "Sep 30, 2017",
      description:
        "Designed and implemented WiBAF, a browser-based personalization framework that enabled privacy-focused adaptive user experiences through client-side data processing. Integrated the framework with websites and CMS platforms such as WordPress, applying it to adaptive learning and accessibility projects, including tools supporting students with autism.",
    },
  ];

  getAll(): Experience[] {
    return this.experience;
  }
}
