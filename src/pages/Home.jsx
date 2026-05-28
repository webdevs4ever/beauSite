import { Link } from 'react-router-dom'

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
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-stone-900 min-h-[88vh] flex items-stretch">
        {/* Left panel — firm description */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20">
          <p className="text-brand-bronze-light text-sm font-semibold uppercase tracking-widest mb-5">
            Special Education Attorneys · New York City
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6">
            Advocating for Families with Special Education Needs
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-4 max-w-lg">
            Zimny McCoy, PLLC is a New York City law firm exclusively dedicated to special education law.
            We represent families navigating IEPs, 504 plans, due process hearings, and federal court proceedings.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed mb-10 max-w-lg">
            Our attorneys have helped thousands of NYC families secure the services, placements, and
            compensatory education their children are legally entitled to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/special-needs"
              className="bg-brand-bronze hover:bg-brand-bronze-dark text-white font-semibold px-8 py-4 rounded-xl text-center transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a
              href="#about"
              className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-center transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right panel — attorney photo */}
        <div className="hidden lg:block w-[42%] relative overflow-hidden">
          <img
            src="/kim_profile.png"
            alt="Kimberly McCoy, Attorney"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white font-semibold text-lg font-display">Kimberly McCoy</p>
            <p className="text-brand-bronze-light text-sm uppercase tracking-widest">Founding Attorney</p>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────────────── */}
      <section id="services" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-bronze text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            Why Families Choose Us
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

      {/* ── About Us ─────────────────────────────────────────────────────────── */}
      <section id="about" className="bg-brand-warm py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-brand-bronze text-sm font-semibold uppercase tracking-widest mb-3">
              About Our Firm
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
              Fighting for Every Child's Right to Education
            </h2>
            <div className="flex flex-col gap-4 text-stone-600 text-base leading-relaxed">
              <p>
                Zimny McCoy, PLLC is a New York City law firm exclusively dedicated to special education law.
                Founded by attorneys with a deep commitment to disability rights, our firm represents families
                navigating the complexities of the Individuals with Disabilities Education Act (IDEA),
                Section 504, and the Americans with Disabilities Act.
              </p>
              <p>
                We represent parents at IEP meetings, due process hearings, and in federal court proceedings.
                Our attorneys have successfully obtained compensatory education, appropriate placements,
                and meaningful services for hundreds of children across New York City's five boroughs.
              </p>
              <p>
                Whether you are just beginning to understand your child's rights or you are in the middle
                of a dispute with your school district, we are here to guide and advocate for your family.
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="Attorney consulting with a family"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-bronze/10" />
          </div>
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
              to="/portal"
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
