import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="w-full py-12 px-4 md:px-12 bg-void-black dark:bg-void-black bg-paper-white text-tech-gray border-t border-tech-gray/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand / Copyright */}
                <div className="text-center md:text-left">
                    <h3 className="font-sans font-bold text-xl dark:text-off-white text-ink-black tracking-tight mb-2">
                        KEN GANZA
                    </h3>
                    <p className="font-mono text-xs opacity-60">
                        &copy; {new Date().getFullYear()} // SYSTEM.ALL_RIGHTS_RESERVED
                    </p>
                </div>

                {/* System Status Indicator */}
                <div className="flex items-center gap-2 font-mono text-xs border border-tech-gray/30 px-3 py-1 rounded-full">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green"></span>
                    </span>
                    <span className="dark:text-off-white text-ink-black">SYSTEM STATUS: OPERATIONAL</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                        className="hover:text-electric-amber transition-colors duration-300 dark:text-off-white text-ink-black">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="hover:text-electric-amber transition-colors duration-300 dark:text-off-white text-ink-black">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:kenny@example.com"
                        className="hover:text-electric-amber transition-colors duration-300 dark:text-off-white text-ink-black">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
