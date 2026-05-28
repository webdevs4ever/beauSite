import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, getScopedCollectionName, isFirebaseConfigured } from '../lib/firebase'

const TIME_SLOTS = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM',
]

export default function SpecialNeeds() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ full_name: '', email: '', phone: '', notes: '' })
  const [selectedTimes, setSelectedTimes] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [timeError, setTimeError] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const toggleTime = (time) => {
    setSelectedTimes(prev => {
      if (prev.includes(time)) { setTimeError(false); return prev.filter(t => t !== time) }
      if (prev.length >= 3) { setTimeError(true); return prev }
      setTimeError(false)
      return [...prev, time]
    })
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
      await addDoc(collection(db, 'special_needs_submissions'), {
        ...formData,
        best_times_to_call: selectedTimes,
        createdAt: serverTimestamp(),
      })
      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
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
          Take Your First Step
        </h1>
        <p className="text-stone-500 mb-8 text-sm leading-relaxed">
          Complete this form and a member of our team will reach out to discuss how we can help your family.
        </p>

        {success ? (
          <div className="card-light p-10 text-center">
            <p className="text-4xl mb-4">✓</p>
            <h2 className="font-display text-2xl text-brand-bronze mb-2">You're all set!</h2>
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

            {/* Best Times to Call */}
            <div>
              <label className="text-stone-500 text-xs uppercase tracking-widest mb-3 block font-medium">
                Best Times to Call <span className="normal-case">(pick up to 3)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {TIME_SLOTS.map(time => {
                  const selected = selectedTimes.includes(time)
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => toggleTime(time)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                        selected
                          ? 'bg-brand-bronze border-brand-bronze text-white shadow-sm'
                          : 'bg-white border-stone-200 text-stone-600 hover:border-brand-bronze/50 hover:text-brand-bronze'
                      }`}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>
              {timeError && <p className="text-red-500 text-xs mt-2">Maximum of 3 time slots allowed.</p>}
            </div>

            <div>
              <label className="text-stone-500 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                Notes
              </label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Anything you'd like us to know..."
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
