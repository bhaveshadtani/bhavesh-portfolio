import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import SME from "../assets/SME.png";
import Tixstock from "../assets/Tixstock.png";
import ZealOverview from "../assets/ZealOverview.png";
import CatStat from "../assets/CatStat.png";

const projects = [
  {
    src: SME,
    title: "SME (Show Me Ethanol)",
    description:
      `• Independently handled front-end development for a custom ERP system
• Built dynamic modules for sales, user, and data management
• Created drag-and-drop image upload, dynamic auto-fill forms, and reusable field renderers
• Integrated e-signature and resend-invitation-to-user feature
• Reduced code duplication by 50% through reusable utilities`,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Sequelize", "JWT", "REST APIs"],
    live: "#",
    github: "#",
  },
  {
    src: Tixstock,
    title: "Tixstock",
    description:
      `• Focused on debugging and performance optimization
• Fixed legacy code bugs, improving reliability and maintainability
• Improved app performance by 40% through code refactoring and lazy loading techniques`,
    stack: ["React.js", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    src: CatStat,
    title: "CatStat",
    description:
      `• Led front-end development of a dynamic analytics dashboard platform.
• Implemented modules for revenue metrics, growth insights, and network activity.
• Added multi-factor authentication (email, SMS, authenticator app) and trusted device
functionality.
• Enabled users to view and manage trusted devices, enhancing security and control.`,
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    src: "./src/assets/ZealOverview.png",
    title: "ZealOverview",
    description:
      `• Developed both back-end APIs and front-end interfaces for a CRM and productivity
management system.
• Designed scalable back-end architecture with Sequelize, implementing authentication,
role-based access control, and secure JWT-based sessions.
• Created reusable UI components and utility functions, reducing development time by 30%.
• Enhanced app performance by optimizing DB queries and implementing front-end code
splitting.`,
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Sequelize", "JWT", "REST APIs"],
    live: "#",
    github: "#",
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="border-t border-border py-20">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center font-heading text-3xl md:text-4xl">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group overflow-hidden">
              <div className="relative h-50 w-full bg-gradient-to-tr from-secondary to-muted">
                <img src={p.src} alt={p.title} className="object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                {/* <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(400px circle at 20% 20%, hsl(var(--primary) / 0.15), transparent 40%)" }} /> */}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
                {/* <div className="flex gap-2">
                  <Button asChild size="sm">
                    <a href={p.live} target="_blank" rel="noreferrer noopener" aria-label={`${p.title} live demo`}>
                      Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={p.github} target="_blank" rel="noreferrer noopener" aria-label={`${p.title} GitHub`}>
                      GitHub <Github className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}