import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../lib/firebase'

export default function Portal() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ full_name: '', email: '', phone: '', notes: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!db || !isFirebaseConfigured) {
      setError('Firebase is not configured yet. Please update the site settings first.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      await addDoc(collection(db, 'portal_submissions'), {
        ...formData,
        createdAt: serverTimestamp(),
      })
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-lg">
        <button
          onClick={() => navigate('/')}
          className="text-brand-bronze hover:text-brand-bronze-dark text-sm font-medium mb-8 flex items-center gap-1 transition-colors"
        >
          ← Back to Home
        </button>

        <h1 className="font-display text-3xl font-bold text-stone-900 mb-2">
          Client Portal
        </h1>
        <p className="text-stone-500 mb-8 text-sm leading-relaxed">
          Use this form to request a consultation update or submit a message to your attorney.
        </p>

        {success ? (
          <div className="card-light p-10 text-center">
            <p className="text-4xl mb-4">✓</p>
            <h2 className="font-display text-2xl text-brand-bronze mb-2">Message received!</h2>
            <p className="text-stone-500 text-sm">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-light p-8 flex flex-col gap-5">

            {[
              { label: 'Full Name', name: 'full_name', type: 'text', placeholder: 'Jane Doe' },
              { label: 'Email Address', name: 'email', type: 'email', placeholder: 'jane@example.com' },
              { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '(555) 000-0000' },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="text-stone-500 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  required
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze/30 transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="text-stone-500 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Please describe your request or question (up to 1,000 characters)…"
                maxLength={1000}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze/30 transition-colors resize-none"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-bronze hover:bg-brand-bronze-dark text-white font-semibold py-4 rounded-xl transition-colors disabled:opacity-50 mt-1"
            >
              {loading ? 'Submitting…' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
