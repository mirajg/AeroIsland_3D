
import React from 'react'
import Link from 'next/link'

const Button = ({ text, linkHref }) => {
    return (
        <>
            <div className="absolute top-2 right-2 z-50 animate-fade-in transition-all duration-300">
                <Link
                    id="popupBtnWrapper"
                    href={linkHref}
                    className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md text-gray-900 font-medium rounded-full shadow-2xl border relative border-gray-100 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 group"
                >
                    {/* Pulsing indicator dot */}
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />

                    <span>{text}</span>

                    {/* Animated arrow icon */}
                    <svg
                        className="w-4 h-4 text-gray-500 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </>
    )
}

export default Button