import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function UploadingBadge() {
  const [visible, setVisible] = useState(true)
  const elapsed = useRef(0)
  const timer = useRef(null)

  useEffect(() => {
    const tick = () => {
      setVisible(v => !v)
      elapsed.current += 1
      const interval = elapsed.current < 6 ? 10000 : 120000
      timer.current = setTimeout(tick, interval)
    }
    timer.current = setTimeout(tick, 10000)
    return () => clearTimeout(timer.current)
  }, [])

  return (
    <span className={`text-teal-400/60 text-xs tracking-widest transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      downloading...
    </span>
  )
}

const PARTNERS = [
  {
    id: 1,
    name: 'Kimberly McCoy',
    title: 'Partner',
    bio: `Kimberly McCoy is a dedicated special education attorney with over 17 years of experience advocating for children with disabilities and their families. She has been practicing law since her admission to the bar in 2012 and brings a unique, well-rounded perspective shaped by her extensive background in both education and law.

Prior to founding The Law Firm of Zimny & McCoy, Kimberly worked at INCLUDEnyc as the Director of Parent & Family Engagement, Early Childhood, where she led programs supporting families, educators, and community stakeholders in navigating disability systems. Her work focused on empowering families with the knowledge and tools needed to secure appropriate services and supports for their children.

Kimberly is both an attorney and a certified special educator, with hands-on experience across a wide range of roles in the field. Her career spans work as an early childhood evaluator, home-based ABA instructor, community school teacher, NYC Department of Education District 75 teacher, and charter school administrator. This depth of experience allows her to approach each case with a comprehensive understanding of how educational systems function—and how they can fall short for students with disabilities.

In addition to her professional expertise, Kimberly is also the parent of two boys, one with autism and ADHD, giving her a deeply personal understanding of the challenges families face. She is committed to advocating with compassion, clarity, and determination to ensure that every child receives the education and support they deserve.

Kimberly earned both her Bachelor's and Master's degrees in Special Education from City College and received her Juris Doctorate from Seton Hall University School of Law.`,
    image: '/kim_profile.png',
  },
  {
    id: 2,
    name: 'Wendy Zimny',
    title: 'Partner',
    bio: `Wendy has worked in special education for over 17 years. She lives in the Bronx with her son and her one-year-old Newfoundland puppy, Monty. Before co-founding Zimny McCoy, PLLC with her partners, Kimberly McCoy and Lisa Gibertoni, Wendy worked as a special education attorney for the Law Offices of H. Jeffrey Marcus for ten years, where she continues to hold an Of Counsel position.

Before joining the Law Office of H. Jeffrey Marcus, Wendy worked as a Special Education teacher in New York City for nearly 7 years. She was a DOE teacher for 5 years and spent 2 years teaching at a Charter school, both located in central Harlem. Prior to working in education, Wendy worked various public interest/public service jobs, including working for the ACLU, National Lawyers Guild, and East Bay Sanctuary Covenant, and volunteered as an Auxiliary Police Officer in New York City for a year.

Wendy also has two adult children, both of whom graduated from New York City public schools. Wendy's oldest child has Autism and ADHD diagnoses, and had an IEP throughout his education. Wendy has years of experience developing and implementing IEPs as a teacher, and participating in CSE meetings as a parent, in addition to over ten years' experience practicing law in the field of special education.

Wendy graduated from Boston University School of Law, has a masters degree in Criminal Justice from Boston University and a masters degree in Special Education from CUNY City College. She has a BA from the University of Tennessee.`,
    image: '/wendy_profile.jpeg',
  },
  {
    id: 3,
    name: 'Lisa Gibertoni',
    title: 'Partner',
    bio: `Lisa has been practicing special education law since 2012, exclusively since 2016. She has represented parents through all phases of the litigation process, up through and including federal court appeals where necessary, against school districts large and small throughout NY State. Lisa enjoys providing counsel and reassurance to parents who may be new to the legal aspects of their child's special education needs and the specific rights that they can enforce against their school districts.

Lisa often says that law and education have been her two passions her whole life, but what she really enjoys is supporting people through difficult times and helping them achieve their goals. Before focusing exclusively on special education law, Lisa practiced family law both privately and as a member of the Erie County Bar Association's Aid to Indigent Prisoners Society, Inc. (more commonly known as the Assigned Counsel Program). Between college and law school, she taught SAT, LSAT, and GRE preparation courses for a well-known company and worked as a paralegal in a Connecticut law firm representing plaintiffs in asbestos injury and other toxic tort cases.

Lisa is originally from Connecticut but moved to Buffalo in 2004, where she continues to live, eat wings, and root for the Bills with her husband and daughter.

Lisa earned her Bachelor's from Vassar College and received her Juris Doctorate from University of Buffalo School of Law.`,
    image: null,
  },
]

export default function Bios() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen relative flex flex-col items-center px-4 py-10">
      {/* Background */}
      <div className="fixed inset-0 bg-gray-950 z-0" />
      <div className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(45,212,191,0.12) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-6">

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="self-start text-white/50 hover:text-brand-teal text-sm transition-colors"
        >
          ← Back
        </button>

        {/* Header */}
        <header className="text-center mb-2">
          <h1 className="font-display text-4xl font-black text-white tracking-tight">
            Our Team
          </h1>
          <p className="text-white/40 mt-2 text-xs font-medium tracking-widest uppercase">
            Zimny McCoy, PLLC
          </p>
        </header>

        {/* Bio Cards */}
        {PARTNERS.map((partner) => (
          <div key={partner.id} className="glass-dark rounded-[2rem] p-6 flex flex-col sm:flex-row gap-6">
            {/* Hero Image */}
            <div className="flex-shrink-0">
              {partner.image ? (
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-40 h-48 object-cover rounded-2xl"
                />
              ) : (
                <div className="w-40 h-48 rounded-2xl bg-teal-950 border border-teal-800/40 flex flex-col items-center justify-center gap-3">
                  <span className="font-display text-4xl font-black text-teal-400 tracking-tight">
                    {partner.name.split(' ').map(n => n[0]).join('')}
                  </span>
                  <UploadingBadge />
                </div>
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-2">
              <div>
                <h2 className="font-display text-2xl text-teal-400">{partner.name}</h2>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">{partner.title}</p>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="text-white/70 text-sm leading-relaxed">{partner.bio}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
