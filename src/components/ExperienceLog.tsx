import { useRef, useState } from 'react'
import { experienceData, educationData } from '../data/resumeData'

export default function ExperienceLog() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-12 bg-paper-white dark:bg-void-black text-ink-black dark:text-off-white transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <span className="w-3 h-3 bg-electric-amber rounded-full animate-pulse" />
                    <h2 className="font-mono text-sm uppercase tracking-widest text-tech-gray">
            // System Log: Experience
                    </h2>
                </div>

                <div className="relative border-l border-tech-gray/20 dark:border-tech-gray ml-3 md:ml-6 space-y-12">
                    {experienceData.map((item) => (
                        <div key={item.id} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Node */}
                            <div
                                className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border border-tech-gray/50 dark:border-tech-gray bg-paper-white dark:bg-void-black transition-colors duration-300 ${expandedId === item.id ? 'bg-electric-amber border-electric-amber' : 'group-hover:bg-tech-gray'
                                    }`}
                            />

                            {/* Header (Clickable) */}
                            <div
                                onClick={() => toggleExpand(item.id)}
                                className="cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                    <span className="font-mono text-sm text-tech-gray">{item.period}</span>
                                    <h3 className="font-sans font-bold text-2xl md:text-3xl text-ink-black dark:text-off-white group-hover:text-electric-amber transition-colors duration-300">
                                        {item.role} <span className="font-mono text-base text-tech-gray">@ {item.company}</span>
                                    </h3>
                                </div>
                            </div>

                            {/* Content (Accordion) */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === item.id ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                                    }`}
                            >
                                <div className="font-mono text-sm text-ink-black/80 dark:text-off-white/80 space-y-4 border-l-2 border-electric-amber/20 pl-4">
                                    {item.description.map((desc, i) => (
                                        <p key={i} className="typing-effect">
                                            {`> ${desc}`}
                                        </p>
                                    ))}
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {item.tech.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-tech-gray/10 dark:bg-tech-gray/20 text-electric-amber text-xs rounded-sm border border-tech-gray/20 dark:border-tech-gray/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Grid */}
                <div className="mt-32">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="w-3 h-3 bg-terminal-green rounded-full" />
                        <h2 className="font-mono text-sm uppercase tracking-widest text-tech-gray">
              // Education Data
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4 border-t border-tech-gray pt-8">
                        <div className="font-mono text-xs text-tech-gray uppercase">Degree</div>
                        <div className="font-mono text-xs text-tech-gray uppercase">Institution</div>
                        <div className="font-mono text-xs text-tech-gray uppercase">Year</div>

                        {educationData.map((edu) => (
                            <div key={edu.id} className="contents group">
                                <div className="font-sans font-bold text-lg group-hover:text-terminal-green transition-colors">{edu.degree}</div>
                                <div className="font-mono text-sm text-off-white/70">{edu.school}</div>
                                <div className="font-mono text-sm text-tech-gray">{edu.year}</div>
                                <div className="col-span-full h-px bg-tech-gray/30 my-4" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
