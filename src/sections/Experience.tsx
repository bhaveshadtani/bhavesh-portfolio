export default function Experience() {
  const items = [
    {
      role: "Associate Full-Stack Developer",
      org: "ZealousWeb Technologies Pvt. Ltd, Ahmedabad",
      time: "Aug 2023 - Present",
      bullets: [
        "Developed scalable web applications using Next.js, React.js, Node.js, and TypeScript.",
        "Independently handled front-end development for multiple enterprise-grade projects.",
        "Engineered dozens of scalable components for production applications, boosting UI performance by 30% using memoization, lazy loading, and efficient state handling with Context API and custom hooks.",
        "Led integration efforts for advanced UI patterns and state management strategies using Zustand and custom utilities to handle large-scale data.",
        "Collaborated with cross-functional teams to align technical solutions with client goals, reducing change requests by 25%.",
        "Delivered reusable utility functions and components, improving developer efficiency by 40%.",
      ],
    },
    {
      role: "Software Developer",
      org: "TechnoMark Solutions, Ahmedabad",
      time: "Jan 2023 – June 2023",
      bullets: [
        "Collaborated with a full-stack development team to build and test internal tool features.",
        "Gained hands-on experience in REST APIs, React.js, and MongoDB.",
        "Implemented dynamic UI components and responsive layouts.",
      ],
    },
  ];

  //   Master of Computer Applications CGPA: 8.10 / 10.0
  // Marwadi University, Rajkot 2021 – 2023
  // Bachelor of Science in Information Technology CGPA: 8.92 / 10.0
  // Atmiya University, Rajkot 2018 – 2021
  const education = [
    {
      title: "Master of Computer Applications",
      org: "Marwadi University, Rajkot",
      time: "2021 - 2023",
      cgpa: "8.10 / 10.0",
    },
    {
      title: "BSc in Information Technology",
      org: "Atmiya University, Rajkot",
      time: "2018 - 2021",
      cgpa: "8.92 / 10.0",
    },
  ];

  return (
    <section id="experience" aria-label="Experience & Education" className="border-t border-border py-20">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center font-heading text-3xl md:text-4xl">Experience & Education</h2>
        <div className="mx-auto max-w-3xl">
          <ol className="relative border-s border-border">
            {items.map((it) => (
              <li key={it.role} className="ms-6 pb-10 last:pb-0">
                <span className="absolute -start-2.5 mt-2 h-4 w-4 rounded-full border border-border bg-background"></span>
                <div className="rounded-lg border bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{it.role} · {it.org}</h3>
                    <span className="text-sm text-muted-foreground">{it.time}</span>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {it.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            {
              education.map((edu) => (
                <li key={edu.title} className="ms-6">
                  <span className="absolute -start-2.5 mt-2 h-4 w-4 rounded-full border border-border bg-background"></span>
                  <div className="rounded-lg border bg-card p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{edu.title} · {edu.org}</h3>
                      <span className="text-sm text-muted-foreground">{edu.time}</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm text-muted-foreground">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </section>
  );
}