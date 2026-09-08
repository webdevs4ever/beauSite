import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// ── Why Choose Us data ────────────────────────────────────────────────────────
const REASONS = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8 text-brand-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Experienced Advocates',
    body: 'Decades of experience navigating IEPs, 504 plans, and special education law on behalf of NYC families.',
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8 text-brand-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Family-Centered Approach',
    body: 'We listen first. Every case is treated with the personal attention and compassion your child deserves.',
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8 text-brand-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Proven Results',
    body: 'A strong track record securing appropriate services, placements, and compensatory education for our clients.',
  },
]

// ── Stats data ────────────────────────────────────────────────────────────────
const STATS = [
  { value: '20+', label: 'Years of Experience' },
  { value: '3,000+', label: 'Families Helped' },
  { value: '100%', label: 'Dedicated to Special Education' },
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      setTimeout(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.state])

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-warm flex flex-col lg:flex-row lg:min-h-[88vh]">
        {/* Mobile photo — full width, shown only below lg */}
        <div className="lg:hidden w-full h-[28rem] relative overflow-hidden">
          <img
            src="/zimnymccoy_mobile.png"
            alt="Zimny McCoy founding attorneys"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Left panel — firm description */}
        <div className="flex-1 lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-10 lg:py-20">
          <p className="text-brand-bronze text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
            Special Education Attorneys · New York City
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-5">
            Advocating for Families with Special Education Needs
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-3 max-w-lg">
            Zimny McCoy, PLLC is a New York City law firm exclusively dedicated to special education law.
            We represent families navigating IEPs, 504 plans, due process hearings, and federal court proceedings.
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Kim and Wendy were New York City Teaching Fellows in the same cohort in 2009 (cohort 18), and both taught special education in New York City schools for several years. More recently, Lisa, Kim and Wendy all worked together at another law firm practicing education law and collaborating with one another for several years. Kim, Lisa and Wendy all have significant experience in the field of special education, bring different strengths to the firm, and have a passion for special education advocacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/special-needs"
              className="bg-brand-bronze hover:bg-brand-bronze-dark text-white font-semibold px-8 py-4 rounded-xl text-center transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/login"
              className="border border-brand-bronze text-brand-bronze hover:bg-brand-bronze hover:text-white font-semibold px-8 py-4 rounded-xl text-center transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right panel — desktop only */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <img
            src="/team_photo.png"
            alt="Zimny McCoy founding attorneys"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-warm/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────────────── */}
      <section id="services" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-bronze text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            Why Families Choose Zimny McCoy
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 text-center mb-14">
            Experience You Can Trust
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {REASONS.map(({ id, icon, title, body }) => (
              <div key={id} className="card-light p-8 flex flex-col gap-4">
                <div className="w-14 h-14 bg-brand-warm rounded-2xl flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bronze py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-4xl font-bold text-white mb-1">{value}</p>
              <p className="text-brand-cream/80 text-sm uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Our Firm ───────────────────────────────────────────────────── */}
      <section id="about" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Pill tag */}
          <span className="inline-block bg-brand-warm text-brand-bronze text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Our Firm
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
            Your Special Education Experts
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            Our attorneys share one mission: helping your child succeed. Our leadership guides a
            broader team of professionals supporting families like yours.
          </p>

          {/* Circular profiles */}
          <div className="flex flex-col sm:flex-row justify-center gap-14 mb-14">
            {[
              { src: '/kim_profile.png',    name: 'Kimberly McCoy', title: 'Founding Partner' },
              { src: '/wendy_profile.jpeg', name: 'Wendy Zimny',    title: 'Founding Partner' },
            ].map(({ src, name, title }) => (
              <div key={name} className="flex flex-col items-center gap-4">
                <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-brand-warm shadow-md">
                  <img
                    src={src}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-lg">{name}</p>
                  <p className="text-stone-500 text-sm mt-0.5">{title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/bios"
            className="inline-block bg-stone-900 hover:bg-stone-700 text-white font-semibold px-10 py-4 rounded-xl transition-colors"
          >
            Meet Our Team
          </Link>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-stone-500 mb-10 leading-relaxed">
            Complete our intake form and a member of our team will contact you to discuss
            how we can help your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/special-needs"
              className="bg-brand-bronze hover:bg-brand-bronze-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Start Your Intake Form
            </Link>
            <Link
              to="/login"
              className="border border-brand-bronze text-brand-bronze hover:bg-brand-warm font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Existing Clients
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
