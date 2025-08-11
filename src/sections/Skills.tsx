import { Progress } from "@/components/ui/progress";

const skills = {
  Frontend: [
    { name: "Next.js", value: 92 },
    { name: "React", value: 87 },
    { name: "TypeScript", value: 75 },
    { name: "Tailwind CSS", value: 70 },
  ],
  Backend: [
    { name: "Node.js", value: 80 },
    { name: "Express", value: 80 },
    { name: "REST API", value: 80 },
  ],
  Database: [
    { name: "MySql", value: 75 },
    { name: "Sequelize", value: 85 },
    { name: "MongoDB", value: 75 },
    { name: "Mongoose", value: 85 },
  ],
  Tools: [
    { name: "Git & GitHub", value: 90 },
    { name: "CI/CD", value: 55 },
  ],
} as const;

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="border-t border-border py-20">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center font-heading text-3xl md:text-4xl">Skills</h2>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">{category}</h3>
              <ul className="space-y-4">
                {list.map((s) => (
                  <li key={s.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{s.name}</span>
                      {/* <span>{s.value}%</span> */}
                    </div>
                    <Progress value={s.value} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
