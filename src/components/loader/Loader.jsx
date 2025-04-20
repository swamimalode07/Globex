import React from 'react'

function Loader() {
  return (
    <div>
    <div role="status" className="absolute top-0 right-0 bottom-0 left-0 m-auto w-[6em] h-[6em] md:w-[10em] md:h-[10em] z-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-full h-full">
        <path
          fill="none"
          stroke="#387DFF"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="300 385"
          strokeDashoffset="0"
          d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
        >
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="2s"
            values="685;-685"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  
  )
}

export default Loader