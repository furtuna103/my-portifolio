"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-6 leading-tight text-slate-900">Front-End & MERN Stack Developer</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md">
            Building interactive, responsive, and scalable web applications using modern frameworks like React and
            Next.js.
          </p>
          <div className="flex gap-4">
            <Button
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }
>
  Get in Touch
</Button>
            <a href="/Furtuna Yimer Resume.pdf" download>
            <Button
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-50 px-6 py-2 bg-transparent"
            >
              Download CV
            </Button>
            </a>
           <a href="https://github.com/furtuna103" target="_blank" rel="noopener noreferrer">
  <Button variant="ghost" className="text-slate-900 hover:bg-slate-100 px-6 py-2">
    View GitHub
  </Button>
</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-linear-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center border border-blue-200">
            <div className="text-center">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-slate-700 font-semibold">Frontend & MERN Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
