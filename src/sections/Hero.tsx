import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-abstract.jpg";
// import heroImage from "@/assets/hero-executive-bg.jpg";
import profileImage from "@/assets/profile-photo.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top; 0
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="hero" aria-label="Hero" className="relative">
      <div ref={ref} className="relative isolate">
        <img
          src={heroImage}
          alt="Abstract tech background in navy with electric blue accents"
          className="absolute inset-0 h-[56vh] w-full object-cover opacity-60 dark:opacity-40"
          loading="eager"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at var(--x) var(--y), hsl(var(--primary) / 0.15), transparent 40%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />

        <div className="container relative mx-auto flex min-h-[56vh] flex-col items-center justify-center text-center">
          <img src={profileImage} alt="Profile Picture" className="mb-4 h-24 w-24 rounded-full ring-2 ring-primary/20 object-cover md:h-28 md:w-28" loading="lazy" />
          <h1 className="font-heading text-4xl leading-tight md:text-6xl">
            Bhavesh Adtani
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-muted-foreground md:text-lg">
            Full Stack Developer | JavaScript Enthusiast | Problem Solver
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* <Button asChild variant="hero" size="lg"> */}
            <Button asChild size="lg">
              <a href="#contact" aria-label="Hire Me">Hire Me</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="src\assets\Bhavesh-Resume.pdf" download aria-label="Download Resume">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
