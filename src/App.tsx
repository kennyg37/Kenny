import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Works from './components/Works'
import SkillsTopology from './components/SkillsTopology'
import ExperienceLog from './components/ExperienceLog'
import BlogIndex from './components/BlogIndex'
import Footer from './components/Footer'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function Content() {
    const { theme, toggleTheme } = useTheme()

    return (
        <SmoothScroll>
            <CustomCursor />

            {/* Theme Toggle - Fixed Top Right */}
            <button
                onClick={toggleTheme}
                className="fixed top-6 right-6 z-50 p-2 rounded-full bg-tech-gray/20 backdrop-blur-md border border-tech-gray/30 hover:border-electric-amber transition-colors text-off-white mix-blend-difference"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <main className="min-h-screen selection:bg-electric-amber selection:text-void-black bg-paper-white text-ink-black dark:bg-void-black dark:text-off-white transition-colors duration-500">
                <Hero />
                <Works />
                <SkillsTopology />
                <ExperienceLog />
                <BlogIndex />
                <Footer />
            </main>
        </SmoothScroll>
    )
}

function App() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>
    )
}

export default App
