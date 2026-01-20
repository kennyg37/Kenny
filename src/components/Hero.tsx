import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [statusLog, setStatusLog] = useState<string>('Initializing...')

    // Scramble Text Effect Hook/Logic
    const useScramble = (element: HTMLElement | null, finalText: string, duration: number = 1) => {
        if (!element) return
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'
        let iterations = 0

        gsap.to({}, {
            duration: duration,
            onUpdate: () => {
                element.innerText = finalText
                    .split('')
                    .map((_, index) => {
                        if (index < iterations) {
                            return finalText[index]
                        }
                        return chars[Math.floor(Math.random() * 26)]
                    })
                    .join('')
                iterations += finalText.length / (duration * 60) // Approx 60fps
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
                    ctx.fillStyle = '#0a0a0a' // Void Black
                    ctx.fillRect(0, 0, canvas.width, canvas.height)

                    ctx.strokeStyle = '#262626' // Tech Gray
                    ctx.fillStyle = '#ff9d00' // Electric Amber

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
                    requestAnimationFrame(animate)
                }
                animate()
            }
        }

        // Scramble Text Trigger
        const title = document.getElementById('hero-title')
        const subtitle = document.getElementById('hero-subtitle')

        if (title) useScramble(title, 'KEN GANZA', 2)
        if (subtitle) useScramble(subtitle, 'FULL STACK // SYSTEMS ARCHITECT', 2.5)

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-void-black text-off-white">
            {/* Topology Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />

            <div className="z-10 text-center space-y-6">
                <h1 id="hero-title" className="font-sans font-bold text-[10vw] leading-none tracking-tighter text-off-white">
                    {/* Text injected by GSAP */}
                </h1>
                <p id="hero-subtitle" className="font-mono text-sm md:text-xl text-electric-amber tracking-[0.2em] uppercase">
                    {/* Text injected by GSAP */}
                </p>
            </div>

            {/* System Status Log */}
            <div className="absolute bottom-12 left-12 font-mono text-xs text-electric-amber/80">
                <span className="w-2 h-2 bg-terminal-green inline-block rounded-full mr-2 animate-pulse" />
                {statusLog}
            </div>
        </section>
    )
}
