import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { blogPosts } from '../data/blogData'

export default function BlogIndex() {
    const containerRef = useRef<HTMLDivElement>(null)
    const shapeRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const posts = containerRef.current?.querySelectorAll('.blog-post')

        posts?.forEach((post) => {
            const title = post.querySelector('.post-title')
            const abstract = post.querySelector('.post-abstract')
            const shapeType = post.getAttribute('data-shape')

            post.addEventListener('mouseenter', () => {
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
            })

            post.addEventListener('mouseleave', () => {
                gsap.to(title, { x: 0, duration: 0.4, ease: 'power2.out' })
                gsap.to(abstract, { opacity: 0, x: -10, duration: 0.4, ease: 'power2.in' })

                if (shapeRef.current) {
                    gsap.to(shapeRef.current, { opacity: 0, scale: 0.5, duration: 0.5 })
                }
            })
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full py-32 px-4 md:px-12 bg-void-black text-off-white min-h-[80vh]">
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
                            className="blog-post group border-t border-tech-gray py-12 cursor-pointer relative"
                            data-shape={post.shape}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <h3 className="post-title font-sans font-bold text-4xl md:text-6xl group-hover:text-electric-amber transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <span className="font-mono text-sm text-tech-gray whitespace-nowrap">
                                    {post.date}
                                </span>
                            </div>

                            <p className="post-abstract font-mono text-lg text-off-white/60 mt-4 max-w-xl opacity-0 -translate-x-4 absolute top-full md:top-auto md:right-0 md:mt-0 pointer-events-none">
                                {post.abstract}
                            </p>
                        </div>
                    ))}
                    <div className="border-t border-tech-gray" />
                </div>
            </div>
        </section>
    )
}
