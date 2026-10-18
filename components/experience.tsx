export default function Experience() {
  const experiences = [
    {
    id: 1,
    company: "AI Data Evaluator | Revelo",
    position: "AI Data Evaluator",
    period: "Jan 2026 – Apr 2026",
    description:
      "Evaluated AI model outputs against complex technical prompts, analyzing logic flaws, edge cases, and code performance. Applied critical thinking and prompt engineering techniques to improve model accuracy, reliability, and code quality.",
  },
  {
    id: 2,
    company: "Top Tech",
    position: "MERN Stack Developer & Frontend Engineer",
    period: "Jun 2025 – Present",
    description:
      "Architected and developed end-to-end full-stack web applications utilizing MongoDB, Express.js, React.js, and Node.js. Designed and implemented secure RESTful APIs, server-side data models, and database schemas with JWT user authentication. Built dynamic, responsive interfaces using React and Tailwind CSS, ensuring optimal client-server performance and state flow.",
  },
  {
    id: 3,
    company: "Quantum kit Technologies",
    position: "Frontend Developer & QA Tester",
    period: "Jan 2025 – Nov 2025",
    description:
      "Built responsive web applications while maintaining high code quality through continuous testing and UI validation. Integrated complex RESTful backend services and optimized client-side performance for smooth user navigation. Collaborated with design and engineering teams to identify defects, validate fixes, and refine user experience.",
  },
  {
    id: 4,
    company: "INSA Summer Camp",
    position: "Project Designer & Frontend Developer",
    period: "Jul 2025 – Aug 2025",
    description:
      "Designed and developed a Lost and Found Person website for the Afalgugn Project, prioritizing accessibility, usability, and engaging UI/UX design.",
  },
  {
    id: 5,
    company: "E-Tech S.C.",
    position: "Web Developer Intern",
    period: "Jul 2024 – Sep 2024",
    description:
      "Collaborated in building the responsive frontend for an Internship Management System using React.js and dynamic form workflows.",
  },
  {
    id: 6,
    company: "Kuraz Technologies",
    position: "UI/UX Designer & Web Developer Intern",
    period: "Jul 2023 – Sep 2023",
    description:
      "Contributed to web development projects including a university website and a dynamic e-commerce testimonial module.",
  }
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{exp.position}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-slate-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
