import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, getScopedCollectionName, isFirebaseConfigured } from '../lib/firebase'

export default function SpecialNeeds() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!db || !isFirebaseConfigured) {
      setError('Firebase is not configured yet. Please update the site settings first.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      await addDoc(collection(db, getScopedCollectionName('special_needs_submissions')), {
        ...formData,
        createdAt: serverTimestamp(),
      })
      setSuccess(true)
    } catch (submitError) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-gray-950">
      <div className="w-full max-w-lg">
        <button
          onClick={() => navigate('/')}
          className="text-brand-teal hover:text-brand-teal-dark text-sm font-medium mb-6 flex items-center gap-1 transition-colors"
        >
          ← Back
        </button>

        <h1 className="font-display text-3xl font-bold text-white mb-2">
          Take Your First Step
        </h1>
        <p className="text-white/50 mb-8 text-sm">
          Complete this form and get a call from one of our team members.
        </p>

        {success ? (
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-4xl mb-4">🎉</p>
            <h2 className="font-display text-2xl text-brand-teal mb-2">You're all set!</h2>
            <p className="text-white/60 text-sm">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-dark rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <label className="text-white/60 text-xs uppercase tracking-widest mb-1 block">Full Name</label>
              <input
                type="text"
                name="full_name"
                required
                value={formData.full_name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-teal transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-white/60 text-xs uppercase tracking-widest mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-teal transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-white/60 text-xs uppercase tracking-widest mb-1 block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-teal transition-colors"
                placeholder="(555) 000-0000"
              />
            </div>

            <div>
              <label className="text-white/60 text-xs uppercase tracking-widest mb-1 block">Notes</label>
              <input
                type="text"
                name="notes"
                required
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-teal transition-colors"
                placeholder="Anything else?"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold py-4 rounded-xl transition-colors disabled:opacity-50 mt-2"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
