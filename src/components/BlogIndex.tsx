import { useRef } from 'react'
import gsap from 'gsap'

import { blogPosts } from '../data/blogData'

export default function BlogIndex() {
    const containerRef = useRef<HTMLDivElement>(null)
    const shapeRef = useRef<HTMLDivElement>(null)

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, shapeType: string) => {
        const target = e.currentTarget
        const title = target.querySelector('.post-title')
        const abstract = target.querySelector('.post-abstract')

        gsap.to(title, { x: 20, duration: 0.4, ease: 'power2.out' })
        gsap.to(abstract, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })

        // Shape interaction
        if (shapeRef.current) {
            gsap.to(shapeRef.current, {
                opacity: 0.15,
                scale: 1,
                rotation: Math.random() * 90,
                borderRadius: shapeType === 'circle' ? '50%' : shapeType === 'triangle' ? '0%' : '0%',
                duration: 0.5
            })
        }
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget
        const title = target.querySelector('.post-title')
        const abstract = target.querySelector('.post-abstract')

        gsap.to(title, { x: 0, duration: 0.4, ease: 'power2.out' })
        gsap.to(abstract, { opacity: 0, x: -10, duration: 0.4, ease: 'power2.in' })

        if (shapeRef.current) {
            gsap.to(shapeRef.current, { opacity: 0, scale: 0.5, duration: 0.5 })
        }
    }

    return (
        <section ref={containerRef} className="relative w-full py-32 px-4 md:px-12 bg-paper-white dark:bg-void-black text-ink-black dark:text-off-white min-h-[80vh] transition-colors duration-500">
            <div className="max-w-5xl mx-auto relative">
                <div className="flex items-center gap-4 mb-24">
                    <span className="w-3 h-3 bg-electric-amber rounded-full" />
                    <h2 className="font-mono text-sm uppercase tracking-widest text-tech-gray">
            // Thoughts & Writing
                    </h2>
                </div>

                {/* Background Shape Container */}
                <div
                    ref={shapeRef}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-amber opacity-0 pointer-events-none blur-3xl z-0"
                />

                <div className="space-y-0 relative z-10">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="blog-post group border-t border-tech-gray/20 dark:border-tech-gray py-12 cursor-pointer relative"
                            data-shape={post.shape}
                            onMouseEnter={(e) => handleMouseEnter(e, post.shape)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <h3 className="post-title font-sans font-bold text-4xl md:text-6xl text-ink-black dark:text-off-white group-hover:text-electric-amber transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <span className="font-mono text-sm text-tech-gray whitespace-nowrap">
                                    {post.date}
                                </span>
                            </div>

                            <p className="post-abstract font-mono text-lg text-ink-black/60 dark:text-off-white/60 mt-4 max-w-xl opacity-0 -translate-x-4 absolute top-full md:top-auto md:right-0 md:mt-0 pointer-events-none">
                                {post.abstract}
                            </p>
                        </div>
                    ))}
                    <div className="border-t border-tech-gray/20 dark:border-tech-gray" />
                </div>
            </div>
        </section>
    )
}
