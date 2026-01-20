import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const reticleRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const reticle = reticleRef.current

        if (!cursor || !reticle) return

        // Center the cursor initially
        gsap.set([cursor, reticle], { xPercent: -50, yPercent: -50 })

        const moveCursor = (e: MouseEvent) => {
            // Basic follow movement
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            })
            gsap.to(reticle, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            })

            // Magnetic Snapping Check
            const target = e.target as HTMLElement
            const magneticElement = target.closest('[data-magnetic]') as HTMLElement

            if (magneticElement) {
                const rect = magneticElement.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2

                // Snap reticle to center of element
                gsap.to(reticle, {
                    x: centerX,
                    y: centerY,
                    scale: 1.5,
                    duration: 0.4,
                    ease: 'elastic.out(1, 0.3)'
                })

                // Change color to indicate active state
                gsap.to(reticle, {
                    stroke: '#ff9d00', // Electric Amber
                    duration: 0.2
                })
            } else {
                // Reset scale and color
                gsap.to(reticle, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                })
                gsap.to(reticle, {
                    stroke: '#ff9d00', // Electric Amber (default)
                    duration: 0.2
                })
            }
        }

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <>
            {/* Center Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-1 h-1 bg-electric-amber rounded-full pointer-events-none z-50"
            />

            {/* SVG Reticle */}
            <svg
                ref={reticleRef}
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 overflow-visible"
                viewBox="0 0 24 24"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="#ff9d00"
                    strokeWidth="1"
                    strokeDasharray="4 4" // Dashed line for technical look
                />
                <line x1="12" y1="2" x2="12" y2="6" stroke="#ff9d00" strokeWidth="1" />
                <line x1="12" y1="18" x2="12" y2="22" stroke="#ff9d00" strokeWidth="1" />
                <line x1="2" y1="12" x2="6" y2="12" stroke="#ff9d00" strokeWidth="1" />
                <line x1="18" y1="12" x2="22" y2="12" stroke="#ff9d00" strokeWidth="1" />
            </svg>
        </>
    )
}
