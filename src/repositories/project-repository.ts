import type { Project } from "../domain/project";
import { BaseProjectRepository } from "../domain/project";

export class InMemoryProjectRepository extends BaseProjectRepository {
  private projects: Project[] = [
    {
      title: "Team Tiger",
      role: {
        title: "Delivery Lead",
        description:
          "I coordinated the frontend delivery and personally implemented the frontend components and middleware booking flow to ensure a seamless subscription and transaction experience.",
      },
      description:
        "Team Tiger is a flexible travel subscription service that allows passengers to lock in fixed fares for multiple trips across Tigerair Taiwan's regional network. It provides a streamlined booking experience and cost predictability for frequent travelers looking to explore various international destinations.",
      technologies: new Set([
        "Vue.js",
        "Typescript",
        "Jest",
        "Testing Library",
        "Nuxt.js",
        "PHP",
        "Laravel",
      ]),
      url: "https://subscriptions.tigerairtw.com/",
    },
    {
      title: "Roshn Saudi League x Flight Pass",
      role: {
        title: "Delivery Lead",
        description:
          "I led the full-stack delivery, customizing a core product to align with Saudia's specific business logic and high-traffic performance needs.",
      },
      description:
        "The Saudia Flight Pass is a specialized travel subscription designed for football fans to follow the Roshn Saudi League across the Kingdom at fixed, competitive rates. It offers flexible domestic travel between match cities with the choice of quarterly or yearly plans, ensuring supporters never miss a game.",
      technologies: new Set([
        "Vue.js",
        "Typescript",
        "Jest",
        "Testing Library",
        "PHP",
        "Laravel",
      ]),
      url: "https://rsl.saudia.com/sv/subscriptions",
    },
    {
      title: "Wizzair All You Can Fly",
      role: {
        title: "Engineering Manager",
        description:
          "I oversaw the technical integration and coordinated the project's delivery, while contributing hands-on to the development of the frontend and middleware to ensure a robust, scalable booking experience.",
      },
      description:
        "All You Can Fly is a first-of-its-kind subscription program for Wizz Air, offering members the ability to book last-minute flights across an extensive international network for a flat annual fee. The platform manages high-demand inventory in real-time, providing spontaneous travelers with unprecedented access to low-cost regional and international travel.",
      technologies: new Set([
        "Vue.js",
        "Typescript",
        "PHP",
        "Laravel",
        "Engineering Management",
        "Project Management",
        "Team Leadership",
      ]),
      url: "https://multipass.wizzair.com/w6/subscriptions",
    },
    {
      title: "Jetsmart Go",
      role: {
        title: "Engineering Manager",
        description:
          "I spearheaded the technical delivery with a deep hands-on focus, directly developing the frontend and middleware architectures while overseeing the end-to-end integration to ensure a high-performance, scalable solution.",
      },
      description:
        "JetSmart GO is a comprehensive flight subscription service designed to offer travelers consistent, low-cost access to a wide range of domestic and international routes. The platform provides a tailored booking experience, allowing users to manage their travel frequency with maximum flexibility and cost efficiency.",
      technologies: new Set([
        "Vue.js",
        "Typescript",
        "PHP",
        "Laravel",
        "Engineering Management",
        "Project Management",
        "Team Leadership",
      ]),
      url: "https://multipass.wizzair.com/w6/subscriptions",
    },
    {
      title: "Kris: eDreams AI Chatbot",
      role: {
        title: "Tech Lead",
        description:
          "I led the technical architecture and implemented the core integrations between the chatbot eDreams and Genesys APIs, ensuring reliable, real-time data flow for seamless self-service.",
      },
      description:
        "Kris is an intelligent AI assistant built for eDreams ODIGEO and all its brands to automate global customer support. It streamlines the travel experience by managing bookings, providing real-time flight updates, and resolving inquiries for millions of users worldwide.",
      technologies: new Set([
        "Node.js",
        "Dialogflow",
        "Botkit",
        "NLP",
        "Artificial Intelligence",
        "Java",
      ]),
    },
    {
      title: "Vane: Volaris AI Chatbot",
      role: {
        title: "Tech Lead",
        description:
          "I defined the technical architecture and led development, while directly improving the NLP pipelines for better accuracy. My role also involved mentoring the team and conducting training to ensure best practices in building and maintaining the bot's conversational logic.",
      },
      description:
        "Vane is an advanced AI travel assistant for Volaris, designed to handle high-volume customer queries and automate the booking and check-in process. The chatbot serves as a 24/7 digital concierge, providing instant support and reducing operational overhead through sophisticated natural language processing.",
      technologies: new Set([
        "Node.js",
        "Dialogflow",
        "Botkit",
        "NLP",
        "Artificial Intelligence",
        "Java",
      ]),
    },
    {
      title: "WiBAF: Within-Browser Adaptation Framework",
      role: {
        title: "PhD Student",
        description:
          "I designed the core architecture and developed the framework as part of my doctoral thesis. This included defining a domain-specific language for adaptation, implementing the browser-based engine, and mentoring students to build privacy-preserving applications on the platform.",
      },
      description:
        "WiBAF is a research-led framework designed to balance personalization and privacy by shifting user modeling and adaptation logic from the server to the client side. It enables websites to deliver tailored content and presentation—such as visual or structural adjustments—without requiring personal data to leave the user's browser.",
      technologies: new Set([
        "JavaScript",
        "Wordpress",
        "Machine Learning",
        "Web Personalization",
        "User Modeling",
      ]),
    },
  ];

  getAll(): Project[] {
    return this.projects;
  }
}
