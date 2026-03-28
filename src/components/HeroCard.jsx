import { useNavigate } from 'react-router-dom'

const ICON_MAP = {
  form: '📋',
  school: '🏫',
  home: '🏠',
  star: '⭐',
}

export default function HeroCard({ title, description, icon, pageLink }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(pageLink)}
      className="w-full text-left glass rounded-2xl p-5 flex items-start gap-4
                 hover:bg-white/10 active:scale-[0.98] transition-all duration-200
                 group cursor-pointer"
    >
      <span className="text-3xl mt-0.5 shrink-0">{ICON_MAP[icon] ?? '📄'}</span>
      <div>
        <h3 className="font-semibold text-white text-lg group-hover:text-brand-teal transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-sm mt-1 leading-relaxed">{description}</p>
      </div>
    </button>
  )
}
