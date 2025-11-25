export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Top Tech",
      position: "QA Tester",
      period: "Present",
      description:
        "Conducted functional and usability testing for web and mobile applications. Identified, documented, and tracked software bugs to improve product reliability and performance. Collaborated closely with developers to validate fixes and ensure product quality across multiple test environments.",
    },
    {
      id: 2,
      company: "INSA Summer Camp – Afalgugn Project",
      position: "Project Designer & Frontend Developer",
      period: "Jul 2025 - Aug 2025",
      description:
        "Designed and developed interactive educational content for the Afalgugn Project. Focused on accessibility, usability, and engaging UI/UX design to facilitate interactive learning.",
    },
    {
      id: 3,
      company: "E-Tech S.C.",
      position: "Web Developer Intern",
      period: "Jul 2024 - Sep 2024",
      description:
        "Collaborated within a development team to build a responsive frontend for an Internship Management System using React.js.",
    },
    {
      id: 4,
      company: "Kuraz Technologies",
      position: "UI/UX Designer & Web Developer Intern",
      period: "Jul 2023 - Sep 2023",
      description:
        "Contributed to the design and development of web platforms, including a university website and an educational agency platform. Developed a testimonial module for an e-commerce platform to enhance engagement.",
    },
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
