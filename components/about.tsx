export default function About() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML & CSS",,
    "Figma",
    "Adobe Illustrator",
    "Git",
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">About Me</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-slate-700 leading-relaxed mb-6">
              I'm a frontend developer specializing in designing & building interactive, responsive, and scalable web applications.
              With expertise in React and Next.js, I contribute to testing website features, identifying bugs, and
              improving overall performance and user experience.
            </p>
            <p className="text-slate-700 leading-relaxed">
              My passion lies in collaborating with design and development teams to deliver clean, maintainable, and
              well-documented code that enhances user experience.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600 text-sm mb-6">Addis Ababa, Ethiopia</p>
            <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
            <a href="mailto:fortunatiehun@gmail.com" className="text-blue-600 hover:text-blue-700 text-sm block mb-1">
              furtunatilahun@gmail.com
            </a>
            <a href="tel:+251970711987" className="text-blue-600 hover:text-blue-700 text-sm">
              +251 970 711 987
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg text-center text-slate-700 hover:bg-blue-100 transition font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
