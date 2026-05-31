import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="font-display text-white text-lg font-bold mb-3">
            Zimny McCoy, <span className="text-brand-bronze-light">PLLC</span>
          </h3>
          <p className="text-sm leading-relaxed text-stone-400">
            Special education attorneys dedicated to advocating for families and children
            across New York City.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Navigate
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#services" className="hover:text-brand-bronze-light transition-colors">What We Do</a></li>
            <li><a href="#about" className="hover:text-brand-bronze-light transition-colors">About Us</a></li>
            <li><Link to="/special-needs" className="hover:text-brand-bronze-light transition-colors">Intake Form</Link></li>
            <li><Link to="/login" className="hover:text-brand-bronze-light transition-colors">Secure Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Contact
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>New York City, NY</li>
            <li>
              <a href="mailto:info@zimnymccoy.com" className="hover:text-brand-bronze-light transition-colors">
                info@zimnymccoy.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-stone-700 px-4 sm:px-6 py-5 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Zimny McCoy, PLLC. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <p>The information on this site is for general informational purposes only and does not constitute legal advice.</p>
          <Link to="/privacy" className="whitespace-nowrap hover:text-stone-300 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
