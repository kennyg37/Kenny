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
    const bottomRef = useRef<HTMLDivElement>(null)

    const commands: { [key: string]: (args: string[]) => TerminalLine[] } = {
        help: () => [
            { type: 'output', content: 'Available commands:' },
            { type: 'output', content: '  email    - Copy email address to clipboard' },
            { type: 'output', content: '  github   - Open GitHub profile' },
            { type: 'output', content: '  linkedin - Open LinkedIn profile' },
            { type: 'output', content: '  clear    - Clear terminal history' },
        ],
        email: () => {
            navigator.clipboard.writeText('kenny@example.com')
            return [{ type: 'output', content: 'Email copied to clipboard: kenny@example.com' }]
        },
        github: () => {
            window.open('https://github.com', '_blank')
            return [{ type: 'output', content: 'Opening GitHub...' }]
        },
        linkedin: () => {
            window.open('https://linkedin.com', '_blank')
            return [{ type: 'output', content: 'Opening LinkedIn...' }]
        },
        clear: () => {
            setHistory([])
            return []
        }
    }

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
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input)
        }
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history])

    return (
        <section className="w-full py-32 px-4 md:px-12 bg-void-black text-off-white font-mono">
            <div className="max-w-3xl mx-auto border border-tech-gray bg-black/50 p-6 rounded-sm shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-tech-gray pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-tech-gray">guest@kenny-portfolio:~</span>
                </div>

                <div className="h-64 overflow-y-auto space-y-2 mb-4 scrollbar-thin scrollbar-thumb-tech-gray scrollbar-track-transparent">
                    {history.map((line, i) => (
                        <div key={i} className={`${line.type === 'error' ? 'text-red-500' :
                                line.type === 'input' ? 'text-off-white' :
                                    line.type === 'system' ? 'text-tech-gray' :
                                        'text-electric-amber'
                            }`}>
                            {line.type === 'input' && <span className="text-terminal-green mr-2">$</span>}
                            {line.content}
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-terminal-green">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-off-white placeholder-tech-gray focus:ring-0"
                        placeholder="Type 'help'..."
                        autoFocus
                    />
                </div>
            </div>
        </section>
    )
}
