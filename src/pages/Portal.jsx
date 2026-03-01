import { useNavigate } from 'react-router-dom'

export default function Portal() {
  const navigate = useNavigate()

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
          Credit Portal
        </h1>
        <p className="text-white/50 mb-8 text-sm">
          Credit rules everything around me. We know. But let's help you sing a new song.
        </p>

        {/* 👇 Drop your JotForm embed here */}
        <div className="glass rounded-2xl p-6 min-h-[400px] flex items-center justify-center">
          <p className="text-white/30 text-sm">[ Embed JotForm iframe here ]</p>
        </div>
      </div>
    </div>
  )
}
