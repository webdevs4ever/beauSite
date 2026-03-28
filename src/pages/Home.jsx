import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { sanityClient, SITE_SETTINGS_QUERY, HERO_CARDS_QUERY, ANNOUNCEMENTS_QUERY } from '../lib/sanity'
import HeroCard from '../components/HeroCard'
import AnnouncementCard from '../components/AnnouncementCard'

// ── Static fallback data (used before Sanity is wired up) ──────────────────
const FALLBACK_SETTINGS = {
  tagline: 'SPECIAL EDUCATION ATTORNEYS',
  contactUrl: '/login',
}

const FALLBACK_CARDS = [
  {
    _id: '1',
    title: 'Intake form',
    description: 'Complete this form and get a call from someone on our team',
    icon: 'form',
    pageLink: '/special-needs',
  },
  {
    _id: '2',
    title: 'Schedule and Consultation',
    description: 'Complete the portal form to request your next meeting or update',
    icon: 'school',
    pageLink: '/portal',
  },
]

const FALLBACK_ANNOUNCEMENTS = [
  {
    _id: 'a1',
    title: 'MEET THE TEAM ⚡',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ctaText: 'FOLLOW US ON SOCIAL',
    ctaUrl: '/login',
  },
]
// ──────────────────────────────────────────────────────────────────────────

function ensureRequiredCards(cards) {
  const nextCards = [...cards]
  const existingLinks = new Set(cards.map((card) => card.pageLink))

  for (const fallbackCard of FALLBACK_CARDS) {
    if (!existingLinks.has(fallbackCard.pageLink)) {
      nextCards.push(fallbackCard)
    }
  }

  return nextCards
}

export default function Home() {
  const [settings, setSettings] = useState(FALLBACK_SETTINGS)
  const [cards, setCards] = useState(FALLBACK_CARDS)
  const [announcements, setAnnouncements] = useState(FALLBACK_ANNOUNCEMENTS)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Only fetch from Sanity if a real project ID has been set
    if (!sanityClient) return

    setLoading(true)
    Promise.all([
      sanityClient.fetch(SITE_SETTINGS_QUERY),
      sanityClient.fetch(HERO_CARDS_QUERY),
      sanityClient.fetch(ANNOUNCEMENTS_QUERY),
    ])
      .then(([s, c, a]) => {
        if (s) setSettings(s)
        if (c?.length) setCards(ensureRequiredCards(c))
        if (a?.length) setAnnouncements(a)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen relative flex flex-col items-center px-4 py-10">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1543716091-a840c05249ec?w=1400&q=80)',
          filter: 'brightness(0.45)',
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col gap-8">

        {/* Header */}
        <header className="text-center pt-6">
          <h1 className="font-display text-4xl font-black text-brand-teal tracking-tight">
            Zimny McCoy, PLLC.
          </h1>
          <p className="text-brand-teal/80 mt-2 text-sm font-medium tracking-widest uppercase">
            {settings.tagline}
          </p>
        </header>

        {/* Hero Cards */}
        <section className="glass-dark rounded-3xl p-4 flex flex-col gap-3">
          {cards.map((card) => (
            <HeroCard key={card._id} {...card} />
          ))}
        </section>

        {/* Contact Button */}
        <Link
          to="/login"
          className="w-full text-center bg-brand-blue hover:bg-brand-blue-dark
                     text-white font-semibold py-4 rounded-2xl transition-colors
                     shadow-lg shadow-blue-900/30"
        >
          Contact Us
        </Link>

        {/* Announcements */}
        <section>
          <h2 className="font-display text-2xl font-bold text-white text-center mb-4">
            Announcements
          </h2>
          <div className="flex flex-col gap-4">
            {announcements.map((a) => (
              <AnnouncementCard key={a._id} {...a} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
