export default function About() {
  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "RESTful APIs",
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
              I'm a MERN Stack & Frontend Developer specializing in designing and building scalable, responsive, and high-performance web applications. 
              With expertise spanning MongoDB, Express.js, React.js, and Node.js, I handle end-to-end development—from robust backend APIs and database architecture to clean, intuitive user interfaces.
            </p>
            <p className="text-slate-700 leading-relaxed">
              My passion lies in collaborating with cross-functional teams to deliver clean, maintainable code, optimize web performance, and create seamless digital experiences that solve real-world problems.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600 text-sm mb-6">Addis Ababa, Ethiopia</p>
            <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
            <a href="mailto:furtunatilahun@gmail.com" className="text-blue-600 hover:text-blue-700 text-sm block mb-1 break-words">
              furtunatilahun@gmail.com
            </a>
            <a href="tel:+251970711967" className="text-blue-600 hover:text-blue-700 text-sm">
              +251 970 711 967
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg text-center text-slate-700 hover:bg-blue-100 transition font-medium text-sm"
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