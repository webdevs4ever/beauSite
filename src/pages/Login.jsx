import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, isFirebaseConfigured } from '../lib/firebase'

const INFO_CARDS = [
  {
    label: 'Access',
    body: 'Case notes, next steps, and shared files — all in one place.',
  },
  {
    label: 'Privacy',
    body: 'Protected sign-in backed by your secure portal.',
  },
  {
    label: 'Support',
    body: 'Need help logging in? Contact the office directly.',
  },
]

export default function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((c) => ({ ...c, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!auth || !isFirebaseConfigured) {
      setError('Firebase is not configured yet. Add your Firebase environment variables to continue.')
      return
    }
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      navigate('/portal')
    } catch {
      setError('We could not sign you in with those details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl">

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">

          {/* ── Left panel ── */}
          <section className="bg-stone-900 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-bronze-light hover:text-brand-bronze transition-colors"
              >
                ← Back to home
              </Link>

              <div className="mt-10">
                <p className="text-brand-bronze-light text-xs font-semibold uppercase tracking-widest">
                  Zimny McCoy, PLLC
                </p>
                <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Secure client login for families who need answers fast.
                </h1>
                <p className="mt-5 text-stone-400 text-base leading-relaxed">
                  Sign in to review updates, share documents, and stay connected with
                  your legal team in one place.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {INFO_CARDS.map(({ label, body }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-widest text-stone-400">{label}</p>
                  <p className="mt-2 text-sm text-stone-300 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Right panel — form ── */}
          <section className="card-light p-8 md:p-10 flex flex-col justify-center">
            <p className="text-brand-bronze text-xs font-semibold uppercase tracking-widest mb-1">
              Client Portal
            </p>
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-1">
              Sign in
            </h2>
            <p className="text-stone-500 text-sm mb-8">
              Use the email and password provided for your portal account.
            </p>

            {!isFirebaseConfigured && (
              <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                Add your Firebase app keys in <code className="font-mono">.env</code> before testing login.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-widest text-stone-500 mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze/30 transition-colors"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium uppercase tracking-widest text-stone-500"
                  >
                    Password
                  </label>
                  <a
                    href="mailto:km@zimnymccoylaw.com?subject=Portal%20login%20help"
                    className="text-xs font-medium text-brand-bronze hover:text-brand-bronze-dark transition-colors"
                  >
                    Need help?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze/30 transition-colors"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full bg-brand-bronze hover:bg-brand-bronze-dark text-white font-semibold py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in…' : 'Sign in to portal'}
              </button>
            </form>
          </section>

        </div>
      </div>
    </div>
  )
}
