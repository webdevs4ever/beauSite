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
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [selectedTimes, setSelectedTimes] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [timeError, setTimeError] = useState(false)

  const toggleTime = (time) => {
    setSelectedTimes(prev => {
      if (prev.includes(time)) {
        setTimeError(false)
        return prev.filter(t => t !== time)
      }
      if (prev.length >= 3) {
        setTimeError(true)
        return prev
      }
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
    } catch (submitError) {
      setError(submitError.message || 'Something went wrong. Please try again.')
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

            {/* Best Times to Call */}
            <div>
              <label className="text-white/60 text-xs uppercase tracking-widest mb-3 block">Best Times to Call (PICK UP TO THREE)</label>
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
                          ? 'bg-teal-500 border-teal-400 text-white shadow-md shadow-teal-900/40'
                          : 'bg-white/5 border-white/10 text-white/50 hover:border-teal-500/50 hover:text-white/80'
                      }`}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>
              {timeError && (
                <p className="text-red-400 text-xs mt-2">Maximum of 3 time slots allowed.</p>
              )}
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
