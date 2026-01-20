import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function Works() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.project-card')

        cards.forEach((card) => {
            // Scroll Reveal
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                        end: 'top center',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Hover Interaction
            const schematic = card.querySelector('.schematic-layer')
            const code = card.querySelector('.code-layer')
            const border = card.querySelector('.card-border')

            card.addEventListener('mouseenter', () => {
                gsap.to(schematic, { opacity: 0.1, scale: 0.95, duration: 0.4 })
                gsap.to(code, { opacity: 1, scale: 1, duration: 0.4 })
                gsap.to(border, { borderColor: '#ff9d00', boxShadow: '0 0 20px rgba(255, 157, 0, 0.2)', duration: 0.3 })
            })

            card.addEventListener('mouseleave', () => {
                gsap.to(schematic, { opacity: 1, scale: 1, duration: 0.4 })
                gsap.to(code, { opacity: 0, scale: 0.95, duration: 0.4 })
                gsap.to(border, { borderColor: '#262626', boxShadow: 'none', duration: 0.3 })
            })
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full py-32 px-4 md:px-12 bg-void-black text-off-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <span className="w-3 h-3 bg-electric-amber rounded-full animate-pulse" />
                    <h2 className="font-mono text-sm uppercase tracking-widest text-tech-gray">
                        // Architecture Repository
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card relative w-full aspect-[4/3] bg-void-black group cursor-none"
                        >
                            {/* Card Border */}
                            <div className="card-border absolute inset-0 border border-tech-gray transition-colors duration-300" />

                            {/* Content Container */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between overflow-hidden">
                                {/* Header: ID + Title */}
                                <div className="flex justify-between items-start z-10">
                                    <span className="font-mono text-xs text-tech-gray">PRJ-00{project.id}</span>
                                    <h3 className="font-sans font-bold text-2xl tracking-tight">{project.title}</h3>
                                </div>

                                {/* Schematic Layer (Center) */}
                                <div className="schematic-layer absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <SchematicVisual type={project.schematicType} />
                                </div>

                                {/* Code Layer (Hidden by default) */}
                                <div className="code-layer absolute inset-0 bg-void-black/95 flex items-center justify-center p-8 opacity-0 transform scale-95">
                                    <pre className="font-mono text-xs text-electric-amber overflow-hidden">
                                        <code>{project.codeSnippet}</code>
                                    </pre>
                                </div>

                                {/* Footer: Tech Stack (Manifest Style) */}
                                <div className="z-10 border-t border-tech-gray/50 pt-4 mt-auto">
                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="font-mono text-[10px] text-tech-gray uppercase tracking-wider">
                                                [{t}]
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function SchematicVisual({ type }: { type: string }) {
    // Simple SVG shapes to represent "schematics"
    const strokeColor = "#262626" // Tech Gray

    switch (type) {
        case 'cylinder':
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-50 animate-spin-slow">
                    <ellipse cx="50" cy="20" rx="30" ry="10" fill="none" stroke={strokeColor} strokeWidth="1" />
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke={strokeColor} strokeWidth="1" />
                    <line x1="20" y1="20" x2="20" y2="80" stroke={strokeColor} strokeWidth="1" />
                    <line x1="80" y1="20" x2="80" y2="80" stroke={strokeColor} strokeWidth="1" />
                </svg>
            )
        case 'cube':
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-50">
                    <rect x="25" y="25" width="50" height="50" fill="none" stroke={strokeColor} strokeWidth="1" />
                    <line x1="25" y1="25" x2="75" y2="75" stroke={strokeColor} strokeWidth="1" />
                    <line x1="75" y1="25" x2="25" y2="75" stroke={strokeColor} strokeWidth="1" />
                </svg>
            )
        case 'network':
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-50">
                    <circle cx="50" cy="50" r="5" fill={strokeColor} />
                    <circle cx="20" cy="20" r="3" fill="none" stroke={strokeColor} />
                    <circle cx="80" cy="80" r="3" fill="none" stroke={strokeColor} />
                    <circle cx="80" cy="20" r="3" fill="none" stroke={strokeColor} />
                    <circle cx="20" cy="80" r="3" fill="none" stroke={strokeColor} />
                    <line x1="50" y1="50" x2="20" y2="20" stroke={strokeColor} strokeWidth="0.5" />
                    <line x1="50" y1="50" x2="80" y2="80" stroke={strokeColor} strokeWidth="0.5" />
                    <line x1="50" y1="50" x2="80" y2="20" stroke={strokeColor} strokeWidth="0.5" />
                    <line x1="50" y1="50" x2="20" y2="80" stroke={strokeColor} strokeWidth="0.5" />
                </svg>
            )
        default: // grid
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-50">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            )
    }
}
