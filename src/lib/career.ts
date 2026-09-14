export const careerSource = "https://www.linkedin.com/in/raksh1tnayak/details/experience/";

export type CareerRole = {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  impact: string;
  highlights: string[];
  technologies: string[];
  accent: string;
};

export type CareerData = {
  source: string;
  roles: CareerRole[];
};

// Keep titles, dates, and achievements aligned with the LinkedIn experience page.
export const careerRoles: CareerRole[] = [
  {
    id: "lowes-software-engineer",
    company: "Lowe’s India",
    title: "Software Engineer",
    period: "Jun 2025 – Present",
    location: "Bengaluru, Karnataka, India · Hybrid · Full-time",
    summary: "Modernizing a routing portal and improving delivery planning, performance, and reliability.",
    impact: "Nearly 70% fewer frontend bugs",
    highlights: [
      "Migrated a legacy routing portal to a microfrontend to improve maintainability and delivery speed.",
      "Optimized stop and map interactions for delivery route planning using the vehicle routing problem.",
      "Reduced frontend bugs by nearly 70% through debugging and targeted fixes.",
      "Removed redundant API calls to improve portal performance.",
      "Built Playwright regression tests with AI-assisted workflows.",
      "Used agentic AI tools to accelerate feature development and automation.",
    ],
    technologies: ["Microfrontends", "APIs", "Playwright", "AI"],
    accent: "#6e57e0",
  },
  {
    id: "falabella-full-stack",
    company: "Falabella India",
    title: "Full Stack Software Engineer",
    period: "May 2023 – Jun 2025",
    location: "Bengaluru, Karnataka, India · Hybrid · Full-time",
    summary: "Built seller landing page tooling across frontend, backend, cloud services, and deployment pipelines.",
    impact: "40% faster deployment",
    highlights: [
      "Created frontend and backend services for seller landing page management.",
      "Built reusable React components and a drag-and-drop customization interface in Jarvis.",
      "Developed an upload API backed by Google Cloud Storage for secure file management.",
      "Used Cloudflare Wrangler edge functions to optimize images and improve load times.",
      "Automated sitemap generation with Google Cloud Functions and scheduled updates with Google Cloud Scheduler.",
      "Accelerated deployment by 40% with GitLab CI/CD pipelines.",
    ],
    technologies: ["React", "APIs", "Google Cloud", "Cloudflare", "GitLab CI/CD", "Kubernetes", "Low-Level Design"],
    accent: "#3a9d8f",
  },
  {
    id: "falabella-associate",
    company: "Falabella India",
    title: "Associate Software Engineer",
    period: "Aug 2022 – May 2023",
    location: "Bengaluru, Karnataka, India · Hybrid · Full-time",
    summary: "Improved responsive commerce interfaces, product detail interactions, and product discovery.",
    impact: "98% unit test coverage",
    highlights: [
      "Addressed UI bugs with a focus on responsive design.",
      "Enhanced product detail pages with Add to Cart and Buy Now features using in-house Core Cart APIs.",
      "Built a product listing page with pagination to improve navigation.",
      "Implemented Jest unit tests, achieving 98% test coverage and significantly reducing post-release defects.",
    ],
    technologies: ["Responsive design", "APIs", "E-commerce", "Jest"],
    accent: "#ef8354",
  },
  {
    id: "falabella-intern",
    company: "Falabella India",
    title: "Software Engineering Intern",
    period: "Mar 2022 – Aug 2022",
    location: "Bengaluru, Karnataka, India · Hybrid · Internship",
    summary: "Contributed to a self-configurable e-commerce app with a complete end-to-end flow.",
    impact: "Reusable components, less duplication",
    highlights: [
      "Contributed to a self-configurable e-commerce app with a complete end-to-end flow.",
      "Resolved responsive UI bugs and created reusable React components to reduce code duplication.",
    ],
    technologies: ["Next.js", "React", "Responsive design", "E-commerce"],
    accent: "#d9578c",
  },
];
