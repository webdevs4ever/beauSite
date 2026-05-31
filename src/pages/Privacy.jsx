const SECTIONS = [
  {
    heading: 'Your Rights',
    body: `By providing a telephone number and submitting the form, you are consenting to be contacted by SMS text message and agreeing to our Privacy Policy. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out of further messaging. Reply HELP for more information.`,
  },
  {
    heading: 'How We Use Your Information',
    body: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
  {
    heading: 'How We Share Your Information',
    body: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.`,
  },
]

export default function Privacy() {
  return (
    <div className="bg-brand-cream min-h-screen">

      {/* Page header */}
      <section className="bg-white border-b border-stone-100 py-14 px-4 sm:px-6 text-center">
        <span className="inline-block bg-brand-warm text-brand-bronze text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Legal
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-stone-500 text-base max-w-xl mx-auto leading-relaxed">
          Last updated: June 1, 2026. This policy describes how Zimny McCoy, PLLC
          collects, uses, and protects the information you provide to us.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-10">
        {SECTIONS.map(({ heading, body }) => (
          <div key={heading} className="card-light p-8">
            <h2 className="font-display text-xl font-bold text-stone-900 mb-3">{heading}</h2>
            <div className="flex flex-col gap-3">
              {body.split('\n\n').map((para, i) => (
                <p key={i} className="text-stone-600 text-sm leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        ))}

        <p className="text-stone-400 text-xs text-center leading-relaxed">
          This privacy policy is provided for informational purposes and does not constitute legal advice.
          For questions, contact us at{' '}
          <a href="mailto:info@zimnymccoy.com" className="text-brand-bronze hover:underline">
            info@zimnymccoy.com
          </a>.
        </p>
      </section>

    </div>
  )
}
