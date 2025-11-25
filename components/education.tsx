export default function Education() {
  const awards = [
    {
      title: "Top 3 Best Graduation Projects",
      organization: "Adama Science and Technology University",
      detail: 'Co-developed "Hahu", an inclusive learning platform for children with Down syndrome.',
    },
    {
      title: "1st Place – Department of Computer Science and Engineering",
      organization: "Adama Science and Technology University",
      detail: "Recognized for outstanding  project achievements.",
    },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-slate-400">Education & </span>
          <span className="text-blue-400">Awards</span>
        </h2>

        <div className="mb-12">
          <div className="border-l-2 border-blue-500/50 pl-6 py-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">Bachelor of Science in Computer Science and Engineering</h3>
              <span className="text-sm text-blue-400 font-medium">2020 - 2025</span>
            </div>
            <p className="text-slate-300 font-medium">Adama Science and Technology University, Adama, Ethiopia</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Awards & Achievements</h3>
          <div className="space-y-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 hover:bg-blue-500/20 transition"
              >
                <h4 className="text-lg font-semibold text-white mb-1">{award.title}</h4>
                <p className="text-blue-400 text-sm font-medium mb-2">{award.organization}</p>
                <p className="text-slate-300">{award.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
