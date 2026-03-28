import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-2xl w-full">

        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/404-illustration.png"
            alt="404 illustration"
            className="w-72 md:w-full max-w-sm object-contain"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-8xl font-black text-gray-900 leading-none mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Something's missing.
          </h2>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            This page is missing or you entered the link incorrectly.
          </p>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors mx-auto md:mx-0"
          >
            Go to website <span>›</span>
          </button>
        </div>

      </div>
    </div>
  )
}