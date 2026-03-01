export default function AnnouncementCard({ title, body, ctaText, ctaUrl }) {
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <h3 className="font-display text-xl font-bold text-brand-teal mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed mb-4">{body}</p>
      {ctaText && ctaUrl && (
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-teal hover:text-brand-teal-dark underline underline-offset-2 text-sm font-medium transition-colors"
        >
          {ctaText}
        </a>
      )}
    </div>
  )
}
