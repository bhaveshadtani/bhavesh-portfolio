import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2" aria-label="Home">
          {/* <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-semibold">M</div> */}
          <span className="font-heading text-lg">Full Stack Developer</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href="#contact" aria-label="Hire Me">Hire Me</a>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a href="src\assets\Bhavesh-Resume.pdf" download aria-label="Download Resume">Resume</a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}