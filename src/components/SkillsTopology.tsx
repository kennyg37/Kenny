import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { skillsData, Skill } from '../data/skillsData'

export default function SkillsTopology() {
    const containerRef = useRef<HTMLDivElement>(null)


    const categories = {
        interface: skillsData.filter(s => s.category === 'interface'),
        logic: skillsData.filter(s => s.category === 'logic'),
        core: skillsData.filter(s => s.category === 'core')
    }



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

    }, { scope: containerRef })

    const handleMouseEnter = (skillId: string) => {
        const isDark = document.documentElement.classList.contains('dark')

        // Dimming Effect
        gsap.to('.skill-card', {
            opacity: 0.1,
            scale: 0.95,
            duration: 0.3
        })

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
                backgroundColor: isDark ? '#262626' : '#ffffff', // Tech Gray (Dark) : White (Light)
                color: isDark ? '#e5e5e5' : '#1a1a1a' // Ensure Text Contrast
            })
        })
    }

    const handleMouseLeave = () => {
        const isDark = document.documentElement.classList.contains('dark')

        // Reset All
        gsap.to('.skill-card', {
            opacity: 1,
            scale: 1,
            borderColor: isDark ? '#262626' : 'rgba(26, 26, 26, 0.2)', // Reset border
            boxShadow: 'none',
            backgroundColor: isDark ? '#0a0a0a' : '#ffffff', // Reset BG
            color: isDark ? '#e5e5e5' : '#1a1a1a', // Reset Text
            duration: 0.3
        })
    }

    return (
        <section ref={containerRef} className="relative w-full py-32 px-4 md:px-12 bg-paper-white dark:bg-void-black text-ink-black dark:text-off-white transition-colors duration-500">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex items-center gap-4 mb-16">
                    <span className="w-3 h-3 bg-electric-amber rounded-full animate-pulse" />
                    <h2 className="font-mono text-sm uppercase tracking-widest text-tech-gray">
            // Full Stack Topology
                    </h2>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {/* Column 1: SKILLS */}
                    <div className="skill-column space-y-6">
                        <h3 className="font-sans text-2xl border-b border-tech-gray/20 dark:border-tech-gray pb-4 mb-8 text-ink-black dark:text-off-white">Skills</h3>
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
                        <h3 className="font-mono text-xl border-b border-tech-gray/20 dark:border-tech-gray pb-4 mb-8 text-tech-gray">Logic</h3>
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
                        <h3 className="font-mono text-xl border-b border-tech-gray/20 dark:border-tech-gray pb-4 mb-8 text-tech-gray">Core</h3>
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
            className="skill-card relative p-6 border border-tech-gray/20 dark:border-tech-gray bg-white dark:bg-void-black hover:z-10 cursor-crosshair transition-colors"
            onMouseEnter={() => onEnter(skill.id)}
            onMouseLeave={onLeave}
        >
            <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-tech-gray">{skill.version}</span>
                <div className={`w-2 h-2 rounded-full ${skill.usage === 'High' ? 'bg-terminal-green' : 'bg-electric-amber'}`} />
            </div>

            <h4 className="font-sans font-bold text-xl tracking-tight text-center my-2 text-ink-black dark:text-off-white">
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
