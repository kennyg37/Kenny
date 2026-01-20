import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { skillsData, Skill } from '../data/skillsData'

export default function SkillsTopology() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [connections, setConnections] = useState<{ x1: number, y1: number, x2: number, y2: number, id: string }[]>([])

    const categories = {
        interface: skillsData.filter(s => s.category === 'interface'),
        logic: skillsData.filter(s => s.category === 'logic'),
        core: skillsData.filter(s => s.category === 'core')
    }

    // Calculate connections on mount and resize
    const updateConnections = () => {
        const newConnections: { x1: number, y1: number, x2: number, y2: number, id: string }[] = []

        skillsData.forEach(skill => {
            const sourceEl = document.getElementById(`skill-${skill.id}`)
            if (!sourceEl) return

            const sourceRect = sourceEl.getBoundingClientRect()
            const containerRect = containerRef.current?.getBoundingClientRect()
            if (!containerRect) return

            const x1 = sourceRect.left - containerRect.left + sourceRect.width / 2
            const y1 = sourceRect.top - containerRect.top + sourceRect.height / 2

            skill.relatedIds.forEach(relatedId => {
                const targetEl = document.getElementById(`skill-${relatedId}`)
                if (!targetEl) return

                const targetRect = targetEl.getBoundingClientRect()
                const x2 = targetRect.left - containerRect.left + targetRect.width / 2
                const y2 = targetRect.top - containerRect.top + targetRect.height / 2

                // Avoid duplicates (bidirectional) by sorting IDs
                const connectionId = [skill.id, relatedId].sort().join('-')
                if (!newConnections.find(c => c.id === connectionId)) {
                    newConnections.push({ x1, y1, x2, y2, id: connectionId })
                }
            })
        })
        setConnections(newConnections)
    }

    useEffect(() => {
        // Delay to ensure DOM is ready
        const timer = setTimeout(updateConnections, 500)
        window.addEventListener('resize', updateConnections)
        return () => {
            clearTimeout(timer)
            window.removeEventListener('resize', updateConnections)
        }
    }, [])

    useGSAP(() => {
        // Initial "Handshake" Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top center',
                end: 'bottom bottom',
            }
        })

        tl.from('.skill-column', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        })
            .from('.skill-card', {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: 'back.out(1.7)'
            }, '-=0.4')
            .from('.connection-line', {
                opacity: 0,
                duration: 1,
                stagger: 0.02
            }, '-=0.5')

    }, { scope: containerRef })

    const handleMouseEnter = (skillId: string) => {
        // Dimming Effect
        gsap.to('.skill-card', {
            opacity: 0.1,
            scale: 0.95,
            duration: 0.3
        })
        gsap.to('.connection-line', { opacity: 0.05, duration: 0.3 })

        // Highlight Hovered & Related
        const skill = skillsData.find(s => s.id === skillId)
        const relatedIds = skill?.relatedIds || []
        const idsToHighlight = [skillId, ...relatedIds]

        idsToHighlight.forEach(id => {
            gsap.to(`#skill-${id}`, {
                opacity: 1,
                scale: 1.05,
                duration: 0.3,
                borderColor: '#ff9d00', // Electric Amber
                boxShadow: '0 0 20px rgba(255, 157, 0, 0.2)',
                backgroundColor: '#262626' // Tech Gray
            })
        })

        // Highlight Connections
        relatedIds.forEach(relatedId => {
            const connectionId = [skillId, relatedId].sort().join('-')
            gsap.to(`#conn-${connectionId}`, {
                opacity: 1,
                stroke: '#ff9d00',
                strokeWidth: 2,
                duration: 0.3
            })
        })
    }

    const handleMouseLeave = () => {
        // Reset All
        gsap.to('.skill-card', {
            opacity: 1,
            scale: 1,
            borderColor: '#262626',
            boxShadow: 'none',
            backgroundColor: '#0a0a0a', // Void Black
            duration: 0.3
        })
        gsap.to('.connection-line', {
            opacity: 0.2,
            stroke: '#262626',
            strokeWidth: 1,
            duration: 0.3
        })
    }

    return (
        <section ref={containerRef} className="relative w-full py-32 px-4 md:px-12 bg-void-black text-off-white">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex items-center gap-4 mb-16">
                    <span className="w-3 h-3 bg-electric-amber rounded-full animate-pulse" />
                    <h2 className="font-mono text-sm uppercase tracking-widest text-tech-gray">
            // Full Stack Topology
                    </h2>
                </div>

                {/* SVG Connections Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                    {connections.map(conn => (
                        <line
                            key={conn.id}
                            id={`conn-${conn.id}`}
                            className="connection-line"
                            x1={conn.x1}
                            y1={conn.y1}
                            x2={conn.x2}
                            y2={conn.y2}
                            stroke="#262626"
                            strokeWidth="1"
                            opacity="0.2"
                        />
                    ))}
                </svg>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {/* Column 1: INTERFACE */}
                    <div className="skill-column space-y-6">
                        <h3 className="font-sans text-2xl border-b border-tech-gray pb-4 mb-8 text-off-white">Interface</h3>
                        {categories.interface.map(skill => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                onEnter={handleMouseEnter}
                                onLeave={handleMouseLeave}
                            />
                        ))}
                    </div>

                    {/* Column 2: LOGIC */}
                    <div className="skill-column space-y-6 md:mt-12">
                        <h3 className="font-mono text-xl border-b border-tech-gray pb-4 mb-8 text-tech-gray">Logic</h3>
                        {categories.logic.map(skill => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                onEnter={handleMouseEnter}
                                onLeave={handleMouseLeave}
                            />
                        ))}
                    </div>

                    {/* Column 3: CORE */}
                    <div className="skill-column space-y-6 md:mt-24">
                        <h3 className="font-mono text-xl border-b border-tech-gray pb-4 mb-8 text-tech-gray">Core</h3>
                        {categories.core.map(skill => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                onEnter={handleMouseEnter}
                                onLeave={handleMouseLeave}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function SkillCard({ skill, onEnter, onLeave }: { skill: Skill, onEnter: (id: string) => void, onLeave: () => void }) {
    return (
        <div
            id={`skill-${skill.id}`}
            className="skill-card relative p-6 border border-tech-gray bg-void-black hover:z-10 cursor-crosshair transition-colors"
            onMouseEnter={() => onEnter(skill.id)}
            onMouseLeave={onLeave}
        >
            <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-tech-gray">{skill.version}</span>
                <div className={`w-2 h-2 rounded-full ${skill.usage === 'High' ? 'bg-terminal-green' : 'bg-electric-amber'}`} />
            </div>

            <h4 className="font-sans font-bold text-xl tracking-tight text-center my-2 text-off-white">
                {skill.name}
            </h4>

            <div className="flex justify-between items-end mt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-tech-gray">
                    ID: {skill.id}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-tech-gray">
                    USE: {skill.usage}
                </span>
            </div>
        </div>
    )
}
