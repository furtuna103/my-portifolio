"use client"
import { useState } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "alif noor Project",
    description:
      "A comprhensive chharity platform that connects donors with verified charitable organizations, enabling transparent and impactful giving experiences.",
    tags: ["React", "Tailwind CSS", "Figma"],
    image: "/Alifnor.jpg",
  },
  {
    id: 2,
    title: "Hahu Down Syndrome Project",
    description:
      "Inclusive educational platform offering accessible resources and support for individuals with Down syndrome, featuring intuitive, responsive, and user-friendly design.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/hahu.png",
    videoPath: "/hahu.mp4",
  },
  {
    id: 3,
    title: "Weather forcast App",
    description:
      "A weather forecasting application that provides real-time weather updates and forecasts for any location worldwide, featuring a clean and intuitive user interface.",
    tags: ["JS"],
    image: "/wheather.png",
  },
]

export default function Projects() {
  const [openVideo, setOpenVideo] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Featured Projects</h2>
        <p className="text-slate-600 mb-12 max-w-2xl">
          A selection of projects showcasing my expertise in frontend development.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white hover:shadow-lg transition rounded-lg overflow-hidden border border-gray-200 group"
            >
              <div className="aspect-video flex items-center justify-center bg-blue-50">
                {project.image.startsWith("/") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl">{project.image}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.videoPath && (
                  <button
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    onClick={() => setOpenVideo(project.videoPath)}
                  >
                    Learn More
                    <ExternalLink size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-black rounded-lg shadow-xl p-4 max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-white hover:text-red-500"
              onClick={() => setOpenVideo(null)}
            >
              ×
            </button>
            <video src={openVideo} controls autoPlay className="rounded-lg w-full" />
          </div>
        </div>
      )}
    </section>
  )
}
