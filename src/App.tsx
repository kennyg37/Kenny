import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Works from './components/Works'
import SkillsTopology from './components/SkillsTopology'
import ExperienceLog from './components/ExperienceLog'
import BlogIndex from './components/BlogIndex'
import ContactTerminal from './components/ContactTerminal'

function App() {
    return (
        <SmoothScroll>
            <CustomCursor />
            <main className="bg-void-black min-h-screen selection:bg-electric-amber selection:text-void-black">
                <Hero />
                <Works />
                <SkillsTopology />
                <ExperienceLog />
                <BlogIndex />
                <ContactTerminal />
                {/* Placeholder for future sections */}
                <div className="h-screen flex items-center justify-center">
                    <p className="font-mono text-tech-gray">More content coming soon...</p>
                </div>
            </main>
        </SmoothScroll>
    )
}

export default App
