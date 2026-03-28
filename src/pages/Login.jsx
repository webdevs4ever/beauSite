import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, isFirebaseConfigured } from '../lib/firebase'

export default function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setCredentials((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!auth || !isFirebaseConfigured) {
      setError('Firebase is not configured yet. Add your Firebase environment variables to continue.')
      return
    }

    setLoading(true)
    setError('')

    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      navigate('/portal')
    } catch (signInError) {
      setError('We could not sign you in with those details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-10 overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1543716091-a840c05249ec?w=1400&q=80)',
          filter: 'brightness(0.35)',
        }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_32%),linear-gradient(to_bottom,rgba(2,6,23,0.45),rgba(2,6,23,0.9))] z-0" />

      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <section className="glass-dark rounded-[2rem] border border-white/10 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark transition-colors"
              >
                ← Back to home
              </Link>

              <div className="mt-10 max-w-xl">
                <p className="text-brand-teal/80 text-xs font-semibold tracking-[0.35em] uppercase">
                  Zimny McCoy, PLLC
                </p>
                <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Secure client login for families who need answers fast.
                </h1>
                <p className="mt-5 text-white/65 text-base leading-relaxed">
                  Sign in to review updates, share documents, and stay connected with
                  your legal team in one place.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">Access</p>
                <p className="mt-2 text-sm text-white/80">Case notes, next steps, and shared files.</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">Privacy</p>
                <p className="mt-2 text-sm text-white/80">Protected sign-in backed by your secure portal.</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">Support</p>
                <p className="mt-2 text-sm text-white/80">Need help logging in? Contact the office directly.</p>
              </div>
            </div>
          </section>

          <section className="glass rounded-[2rem] p-6 md:p-8 border border-white/15 shadow-2xl shadow-black/30">
            <div className="rounded-[1.5rem] bg-slate-950/65 border border-white/10 p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-teal/75">
                Client Portal
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Sign in
              </h2>
              <p className="mt-2 text-sm text-white/55">
                Use the email and password provided for your portal account.
              </p>
              {!isFirebaseConfigured ? (
                <p className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
                  Add your Firebase app keys in `.env` before testing login.
                </p>
              ) : null}

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/55"
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
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/25 focus:border-brand-teal focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="password"
                      className="block text-xs uppercase tracking-[0.22em] text-white/55"
                    >
                      Password
                    </label>
                    <a
                      href="mailto:km@zimnymccoylaw.com?subject=Portal%20login%20help"
                      className="text-xs font-medium text-brand-teal hover:text-brand-teal-dark transition-colors"
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
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/25 focus:border-brand-teal focus:outline-none transition-colors"
                  />
                </div>

                {error ? <p className="text-sm text-red-300">{error}</p> : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full rounded-2xl bg-brand-blue px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Signing in...' : 'Sign in to portal'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
