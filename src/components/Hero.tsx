import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ContactTerminal from './ContactTerminal'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [statusLog, setStatusLog] = useState<string>('Initializing...')

    // Scramble Text Effect Hook/Logic
    const useScramble = (element: HTMLElement | null, finalText: string, duration: number = 1) => {
        if (!element) return
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'
        const state = { i: 0 }

        gsap.to(state, {
            i: finalText.length,
            duration: duration,
            ease: "none",
            onUpdate: () => {
                const revealIndex = Math.floor(state.i)
                element.innerText = finalText
                    .split('')
                    .map((char, index) => {
                        if (index < revealIndex) {
                            return char
                        }
                        return chars[Math.floor(Math.random() * chars.length)]
                    })
                    .join('')
            },
            onComplete: () => {
                element.innerText = finalText
            }
        })
    }

    useGSAP(() => {
        // Boot Sequence Timeline
        // Removed unused 'tl' variable

        // Status Log Sequence
        const logs = [
            "Running diagnostics... OK",
            "Initializing Rust modules... OK",
            "Establishing secure channel... OK",
            "Generating interface... OK"
        ]

        let logIndex = 0
        const logInterval = setInterval(() => {
            if (logIndex < logs.length) {
                setStatusLog(logs[logIndex])
                logIndex++
            } else {
                clearInterval(logInterval)
            }
        }, 800)

        // Topology Canvas Animation
        const canvas = canvasRef.current
        let animationFrameId: number

        if (canvas) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight

                const nodes: { x: number, y: number, vx: number, vy: number }[] = []
                for (let i = 0; i < 50; i++) {
                    nodes.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5
                    })
                }

                const animate = () => {
                    const isDark = document.documentElement.classList.contains('dark')

                    ctx.fillStyle = isDark ? '#0a0a0a' : '#f5f5f5' // Void Black : Paper White
                    ctx.fillRect(0, 0, canvas.width, canvas.height)

                    ctx.strokeStyle = isDark ? '#262626' : '#e5e5e5' // Tech Gray : Subtle Gray
                    ctx.fillStyle = '#ff9d00' // Electric Amber (Constant accent)

                    nodes.forEach(node => {
                        node.x += node.vx
                        node.y += node.vy

                        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
                        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

                        ctx.beginPath()
                        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
                        ctx.fill()

                        nodes.forEach(other => {
                            const dx = node.x - other.x
                            const dy = node.y - other.y
                            const dist = Math.sqrt(dx * dx + dy * dy)

                            if (dist < 150) {
                                ctx.beginPath()
                                ctx.moveTo(node.x, node.y)
                                ctx.lineTo(other.x, other.y)
                                ctx.stroke()
                            }
                        })
                    })
                    animationFrameId = requestAnimationFrame(animate)
                }
                animate()
            }
        }

        // Scramble Text Trigger
        const title = document.getElementById('hero-title')
        const subtitle = document.getElementById('hero-subtitle')

        if (title) useScramble(title, 'KEN GANZA', 2)
        if (subtitle) useScramble(subtitle, 'FULL STACK // SYSTEMS ARCHITECT', 2.5)

        return () => {
            clearInterval(logInterval)
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
        }

    }, { scope: containerRef })



    return (
        <section ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-paper-white dark:bg-void-black text-ink-black dark:text-off-white transition-colors duration-500 pt-16 pb-12">
            {/* Topology Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />

            <div className="z-10 w-full max-w-7xl px-4 flex flex-col items-center gap-12">
                <div className="text-center space-y-6">
                    <h1 id="hero-title" className="font-sans font-bold text-[10vw] leading-none tracking-tighter text-ink-black dark:text-off-white">
                        {/* Text injected by GSAP */}
                    </h1>
                    <p id="hero-subtitle" className="font-mono text-sm md:text-xl text-electric-amber tracking-[0.2em] uppercase">
                        {/* Text injected by GSAP */}
                    </p>
                </div>

                <div className="w-full max-w-2xl transform scale-90 md:scale-100 origin-top">
                    <ContactTerminal />
                </div>
            </div>

            {/* System Status Log */}
            <div className="absolute bottom-12 left-12 font-mono text-xs text-electric-amber/80 hidden md:block">
                <span className="w-2 h-2 bg-terminal-green inline-block rounded-full mr-2 animate-pulse" />
                {statusLog}
            </div>
        </section>
    )
}
