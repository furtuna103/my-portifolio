"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Get In Touch</h2>
        <p className="text-slate-600 mb-12">
          I'm always open to new opportunities and interesting projects. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:furtunatilahun@gmail.com"
                  className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition"
                >
                  <Mail size={20} />
                  <span>furtunatilahun@gmail.com</span>
                </a>
                <a
                  href="tel:+251970711987"
                  className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition"
                >
                  <Phone size={20} />
                  <span>+251 970 711 967</span>
                </a>
                <div className="flex items-center gap-4 text-slate-600">
                  <MapPin size={20} />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
