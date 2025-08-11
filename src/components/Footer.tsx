import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto grid gap-10 md:grid-cols-4">
        <section aria-label="About" className="space-y-3">
          <h2 className="font-heading text-xl">Bhavesh Adtani</h2>
          <p className="text-sm text-muted-foreground">
            Full Stack Developer crafting performant, elegant web apps for modern businesses.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="https://github.com/bhaveshadtani"
              aria-label="GitHub"
              className="hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhavesh-adtani/"
              aria-label="LinkedIn"
              className="hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-5" />
            </a>
            <a href="mailto:bhaveshadtani2001@gmail.com" aria-label="Email" className="hover:text-foreground">
              <Mail className="size-5" />
            </a>
          </div>
        </section>

        <nav aria-label="Quick Links" className="space-y-3">
          <h2 className="font-heading text-lg">Quick Links</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#hero" className="hover:text-foreground">Home</a></li>
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#skills" className="hover:text-foreground">Skills</a></li>
            <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </nav>

        <section aria-label="Services" className="space-y-3">
          <h2 className="font-heading text-lg">Services</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Full-Stack Development</li>
            <li>Front end development</li>
            <li>Back end development</li>
            <li>API Development</li>
            <li>Database Design</li>
          </ul>
        </section>

        <address aria-label="Get in Touch" className="not-italic space-y-3">
          <h2 className="font-heading text-lg">Get in Touch</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4" />
              <a href="mailto:bhaveshadtani2001@gmail.com" className="hover:text-foreground">bhaveshadtani2001@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4" />
              <a href="tel:+91 9033835654" className="hover:text-foreground">+91 9033835654</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>Ahmedabad, India</span>
            </li>
            <li>
              {/* text-green-300 bg-green-500/20 */}
              <span className="inline-flex items-center px-4 py-2 bg-green-300 text-green-800 rounded-full mb-4 dark:bg-green-500/10 dark:text-green-300">
                <div className="w-2 h-2 bg-green-800 rounded-full mr-2 animate-pulse dark:bg-green-300"></div>
                Available for freelance
              </span>
            </li>
          </ul>
        </address>
      </div>

      <div className="container mx-auto mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Bhavesh Adtani. All rights reserved.</p>
        <nav aria-label="Footer Navigation" className="flex gap-4">
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#experience" className="hover:text-foreground">Experience</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}