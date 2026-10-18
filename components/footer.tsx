export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 py-8 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-slate-600 text-sm">© {currentYear} Furtuna Yimer. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/furtuna103" className="text-slate-600 hover:text-blue-600 transition text-sm font-medium">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/furtuna-yimer-783ab226a/" className="text-slate-600 hover:text-blue-600 transition text-sm font-medium">
            LinkedIn
          </a>
          <a
            href="mailto:furtunatilahun@gmail.com"
            className="text-slate-600 hover:text-blue-600 transition text-sm font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
