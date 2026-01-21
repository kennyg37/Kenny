import { useState, useRef, useEffect } from 'react'

interface TerminalLine {
    type: 'input' | 'output' | 'error' | 'system'
    content: string
}

export default function ContactTerminal() {
    const [history, setHistory] = useState<TerminalLine[]>([
        { type: 'system', content: 'KennyOS v2.0.4 [Secure Connection Established]' },
        { type: 'system', content: 'Type "help" for available commands.' }
    ])
    const [input, setInput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const commands: { [key: string]: (args: string[]) => TerminalLine[] } = {
        help: () => [
            { type: 'output', content: 'Available commands:' },
            { type: 'output', content: '  email    - Copy email address to clipboard' },
            { type: 'output', content: '  github   - Open GitHub profile' },
            { type: 'output', content: '  linkedin - Open LinkedIn profile' },
            { type: 'output', content: '  clear    - Clear terminal history' },
        ],
        email: () => {
            navigator.clipboard.writeText('kalisaken8@gmail.com')
            return [{ type: 'output', content: 'Email copied to clipboard: kalisaken8@gmail.com' }]
        },
        github: () => {
            window.open('https://github.com/kennyg37', '_blank')
            return [{ type: 'output', content: 'Opening GitHub...' }]
        },
        linkedin: () => {
            window.open('https://linkedin.com/in/ken-ganza', '_blank')
            return [{ type: 'output', content: 'Opening LinkedIn...' }]
        },
        clear: () => {
            setHistory([])
            return []
        }
    }

    const [isExpanded, setIsExpanded] = useState(false)

    const handleCommand = (cmdString: string) => {
        const trimmed = cmdString.trim()
        if (!trimmed) return

        const [cmd, ...args] = trimmed.split(' ')
        const newHistory: TerminalLine[] = [...history, { type: 'input', content: trimmed }]

        if (commands[cmd.toLowerCase()]) {
            const output = commands[cmd.toLowerCase()](args)
            if (cmd.toLowerCase() === 'clear') {
                setHistory([])
                return
            }
            setHistory([...newHistory, ...output])
        } else {
            setHistory([...newHistory, { type: 'error', content: `Command not found: ${cmd}` }])
        }
        setInput('')
        setIsExpanded(true)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input)
        }
    }

    const listRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom of list and ensure input is visible
    useEffect(() => {
        // Internal scroll for the list
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight
        }

        // Window scroll to keep input in view (handling the expansion transition)
        const scrollInputIntoView = () => {
            inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }

        // Scroll immediately
        scrollInputIntoView()

        // And scroll periodically during the transition if expanding
        if (isExpanded) {
            const timeouts = [100, 300, 550].map(delay =>
                setTimeout(scrollInputIntoView, delay)
            )
            return () => timeouts.forEach(clearTimeout)
        }
    }, [history, isExpanded])

    // Keep focus on input
    useEffect(() => {
        const timeout = setTimeout(() => {
            inputRef.current?.focus()
        }, 10)
        return () => clearTimeout(timeout)
    }, [history, isExpanded])

    const handleContainerClick = () => {
        inputRef.current?.focus()
    }

    return (
        <div
            onClick={handleContainerClick}
            className={`w-full mx-auto border border-tech-gray/20 dark:border-tech-gray bg-white dark:bg-black/50 p-4 rounded-sm shadow-xl backdrop-blur-sm font-mono transition-all duration-500 ease-spring cursor-text ${isExpanded ? 'max-w-4xl shadow-2xl bg-white/90 dark:bg-black/80' : 'max-w-2xl'
                }`}
        >
            <div className="flex items-center gap-2 mb-4 border-b border-tech-gray/20 dark:border-tech-gray pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-tech-gray">guest@kenny-portfolio:~</span>
            </div>

            <div
                ref={listRef}
                className={`overflow-y-auto space-y-2 mb-4 scrollbar-thin scrollbar-thumb-tech-gray scrollbar-track-transparent transition-all duration-500 ${isExpanded ? 'h-96' : 'h-48'
                    }`}
            >
                {history.map((line, i) => (
                    <div key={i} className={`${line.type === 'error' ? 'text-red-500' :
                        line.type === 'input' ? 'text-ink-black dark:text-off-white' :
                            line.type === 'system' ? 'text-tech-gray' :
                                'text-electric-amber'
                        }`}>
                        {line.type === 'input' && <span className="text-terminal-green mr-2">$</span>}
                        {line.content}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 mb-2">
                <span className="text-terminal-green">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-ink-black dark:text-off-white placeholder-tech-gray focus:ring-0"
                    placeholder="Type 'help'..."
                />
            </div>
        </div>
    )
}
