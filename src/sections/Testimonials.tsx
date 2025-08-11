import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "A. Manager",
    role: "Engineering Manager",
    quote:
      "Delivers high-quality features consistently and elevates team standards.",
  },
  {
    name: "B. Teammate",
    role: "Senior Developer",
    quote:
      "Strong ownership and attention to detail. Pleasure to collaborate with.",
  },
] as const;

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="border-t border-border py-20">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center font-heading text-3xl md:text-4xl">Testimonials</h2>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{t.name.split(" ")[0][0]}{t.name.split(" ").slice(-1)[0][0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">“{t.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}