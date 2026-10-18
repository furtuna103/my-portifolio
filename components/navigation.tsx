"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold text-blue-600">
          Furtuna Yimer
        </Link>
        <div className="flex gap-8 items-center">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
            About
          </a>
          <a href="#experience" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
            Skills
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
            Contact
          </a>
          <a href="/Furtuna Yimer Resume.pdf" download><Button className="bg-blue-600 hover:bg-blue-700 text-white">Download CV</Button></a>
         
        </div>
      </div>
    </nav>
  )
}
