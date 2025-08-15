import React from 'react'

const Loader = ({ size = 'md', color = 'amber' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20'
  }

  const colorClasses = {
    amber: 'text-amber-600',
    gray: 'text-gray-600',
    white: 'text-white',
    black: 'text-gray-900'
  }

  return (
    <div className="flex justify-center items-center">
      <div className={`${sizeClasses[size]} ${colorClasses[color]} relative`}>
        {/* Wood grain inspired loader */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full rounded-full border-2 border-current border-t-transparent animate-spin"></div>
        </div>
        
        {/* Furniture icon in center (optional) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-1/2 w-1/2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Loader