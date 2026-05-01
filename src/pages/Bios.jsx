import { useNavigate } from 'react-router-dom'

const PARTNERS = [
  {
    id: 1,
    name: 'Partner Name',
    title: 'Managing Partner',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: null,
  },
  {
    id: 2,
    name: 'Partner Name',
    title: 'Partner',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: null,
  },
  {
    id: 3,
    name: 'Partner Name',
    title: 'Partner',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
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
                <div className="w-40 h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 text-sm">
                  Photo
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
