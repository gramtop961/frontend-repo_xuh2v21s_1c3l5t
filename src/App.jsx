import React, { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FlameKindling,
  Mic,
  Send,
  Image as ImageIcon,
  History,
  Sparkles,
  BookOpen,
  Cpu,
  Wand2,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  PlayCircle,
  PauseCircle,
  Zap,
  GraduationCap,
  Briefcase,
  Laugh,
  Home,
  Settings,
  Sparkle,
} from 'lucide-react'

const COLORS = {
  primary: '#00A8FF', // Neon Blue
  cyan: '#00EFFF', // Electric Cyan
  dark: '#000814', // Dark Space Blue
  navy: '#001D3D', // Deep Navy
  glow: '#64FFFF', // Highlight Glow
}

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function NeonGradient({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(closest-side, #00EFFF, transparent)' }} />
      <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(closest-side, #00A8FF, transparent)' }} />
    </div>
  )
}

function SAILogo({ size = 40, withText = true }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" className="drop-shadow-[0_0_12px_rgba(0,239,255,0.6)]">
          <defs>
            <linearGradient id="saiG" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor={COLORS.primary} />
              <stop offset="50%" stopColor={COLORS.cyan} />
              <stop offset="100%" stopColor={COLORS.glow} />
            </linearGradient>
            <filter id="saiGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="100" height="100" rx="22" fill="#001D3D" />
          <path d="M50 16c14 5 25 18 25 31 0 8-6 14-12 18-6 4-9 9-9 15 0 3-1 5-4 6-3-1-4-3-4-6 0-6-3-11-9-15-6-4-12-10-12-18 0-13 11-26 25-31z" fill="url(#saiG)" filter="url(#saiGlow)" />
          <text x="50" y="88" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="22" fill="#E6F7FF">SAI</text>
        </svg>
      </div>
      {withText && (
        <div>
          <div className="text-xl font-semibold tracking-wide text-[#E6F7FF]">Shahbaz AI</div>
          <div className="-mt-1 text-xs uppercase tracking-widest text-[#8AD8FF]">Powered by BlueFlame</div>
        </div>
      )}
    </div>
  )
}

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-[#000814] text-white relative">
      <NeonGradient />
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/10" style={{ background: 'linear-gradient(to right, rgba(0,8,20,.65), rgba(0,29,61,.35))' }}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="hover:opacity-95 transition-opacity"><SAILogo size={36} /></Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link className="px-3 py-2 rounded-md hover:bg-white/5" to="/">Home</Link>
            <Link className="px-3 py-2 rounded-md hover:bg-white/5" to="/chat">Start Chat</Link>
            <Link className="px-3 py-2 rounded-md hover:bg-white/5" to="/style">Style Guide</Link>
          </nav>
        </div>
      </header>
      <main className="relative z-10">{children}</main>
      <footer className="mt-16 border-t border-white/10/">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-white/60">© {new Date().getFullYear()} Shahbaz AI • BlueFlame Intelligence</div>
      </footer>
    </div>
  )
}

function HomeScreen() {
  const navigate = useNavigate()
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-semibold leading-tight">
              Welcome to <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg,#00A8FF,#00EFFF,#64FFFF)' }}>Shahbaz AI</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-white/70 text-lg">
              Powered by BlueFlame Intelligence
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => navigate('/chat')} className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-[#001D3D] shadow-[0_0_25px_rgba(0,239,255,.35)]" style={{ background: 'linear-gradient(90deg,#00EFFF,#64FFFF)' }}>
                <Sparkles size={18} /> Start Chat
              </button>
              <button onClick={() => navigate('/style')} className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium bg-white/5 hover:bg-white/10 border border-white/10">
                <Wand2 size={18} /> Explore Features
              </button>
              <button onClick={() => navigate('/chat?voice=true')} className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium bg-white/5 hover:bg-white/10 border border-white/10">
                <Mic size={18} /> Voice Mode
              </button>
            </motion.div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: <BookOpen size={18} />, title: 'Summaries', desc: 'Condense articles with clarity.' },
                { icon: <MessageSquare size={18} />, title: 'Q&A', desc: 'Ask anything, get smart answers.' },
                { icon: <ImageIcon size={18} />, title: 'Images', desc: 'Generate neon‑blue visuals.' },
                { icon: <History size={18} />, title: 'Chat History', desc: 'Pick up where you left off.' },
              ].map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05 }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
                  <div className="flex items-center gap-2 text-[#8AD8FF]">{c.icon}<span className="font-medium">{c.title}</span></div>
                  <div className="mt-1 text-sm text-white/65">{c.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl" style={{ background: 'conic-gradient(from 180deg,#00A8FF33,#00EFFF33,#64FFFF33,#00A8FF33)' }} />
            <div className="relative rounded-3xl border border-white/10 bg-[#001324] p-6 shadow-[0_10px_60px_rgba(0,168,255,.15)]">
              <SampleChatPreview />
            </div>
          </div>
        </div>
      </section>
    </Shell>
  )
}

function SampleChatPreview() {
  const bubbles = [
    { role: 'user', text: 'Write a friendly welcome for my portfolio.' },
    { role: 'assistant', text: 'Here\'s a polished intro with a confident tone and a crisp CTA. Want a shorter version too?' },
    { role: 'user', text: 'Shorter, more playful.' },
    { role: 'assistant', text: 'Absolutely! "Hi, I\'m Shahbaz — I craft ideas into crisp experiences. Let\'s build something bright."' },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-[#8AD8FF]"><FlameKindling size={18} /> Gemini‑style • Unique SAI twist</div>
        <div className="text-xs text-white/50">Preview</div>
      </div>
      <div className="space-y-3">
        {bubbles.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${b.role === 'user' ? 'ml-auto bg-white/10' : 'bg-gradient-to-br from-[#001D3D] to-[#001324] border border-white/10'}`}>
            {b.text}
          </motion.div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
        {['Student', 'Professional', 'Fun'].map((m, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-white/70">{m} Mode</div>
        ))}
      </div>
    </div>
  )
}

function useSpeech() {
  const [listening, setListening] = useState(false)
  const recognitionRef = useRef(null)

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) return
    const rec = new SR()
    rec.lang = 'en-US'
    rec.interimResults = true
    recognitionRef.current = rec
  }, [])

  const start = (onText) => {
    if (!recognitionRef.current) return
    const rec = recognitionRef.current
    let finalTranscript = ''
    rec.onresult = (event) => {
      let interim = ''
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) finalTranscript += transcript
        else interim += transcript
      }
      onText(finalTranscript || interim)
    }
    rec.onend = () => setListening(false)
    setListening(true)
    rec.start()
  }

  const stop = () => {
    if (!recognitionRef.current) return
    recognitionRef.current.stop()
    setListening(false)
  }

  return { listening, start, stop, available: !!(window.SpeechRecognition || window.webkitSpeechRecognition) }
}

function ModePills({ mode, setMode }) {
  const pills = [
    { key: 'qa', label: 'Q&A', icon: <Sparkles size={16} /> },
    { key: 'writing', label: 'Writing', icon: <BookOpen size={16} /> },
    { key: 'translation', label: 'Translate', icon: <Cpu size={16} /> },
    { key: 'summary', label: 'Summary', icon: <Zap size={16} /> },
    { key: 'student', label: 'Student', icon: <GraduationCap size={16} /> },
    { key: 'professional', label: 'Professional', icon: <Briefcase size={16} /> },
    { key: 'fun', label: 'Fun', icon: <Laugh size={16} /> },
  ]
  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((p) => (
        <button key={p.key} onClick={() => setMode(p.key)} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${mode === p.key ? 'border-[#00EFFF] bg-[#00EFFF22] text-[#AFFFFF]' : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'}`}>
          {p.icon}{p.label}
        </button>
      ))}
    </div>
  )
}

function QuickActions({ onAction }) {
  const actions = [
    { key: 'summary', label: 'Summaries', icon: <BookOpen size={16} /> },
    { key: 'qa', label: 'Q&A', icon: <MessageSquare size={16} /> },
    { key: 'image', label: 'Images', icon: <ImageIcon size={16} /> },
    { key: 'history', label: 'Chat History', icon: <History size={16} /> },
  ]
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((a, idx) => (
        <button key={a.key} onClick={() => onAction(a.key)} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10">
          {a.icon}{a.label}
        </button>
      ))}
    </div>
  )
}

function HistoryPanel({ open, onClose, onPick }) {
  const [sessions, setSessions] = useState([])
  useEffect(() => {
    if (!open) return
    fetch(`${BACKEND}/api/sessions`).then(r => r.json()).then(d => setSessions(d.sessions || [])).catch(() => {})
  }, [open])
  return (
    <AnimatePresence>
      {open && (
        <motion.aside initial={{ x: 320, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 320, opacity: 0 }} transition={{ type: 'spring', stiffness: 220, damping: 24 }} className="fixed right-0 top-0 h-full w-[320px] border-l border-white/10 bg-[#001324] p-4 z-50">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-[#8AD8FF]">Chat History</div>
            <button onClick={onClose} className="rounded-md p-1 hover:bg-white/5"><ChevronRight /></button>
          </div>
          <div className="mt-3 space-y-2">
            {sessions.length === 0 && <div className="text-xs text-white/50">No sessions yet.</div>}
            {sessions.map((s) => (
              <button key={s._id} onClick={() => { onPick(s._id); onClose() }} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left hover:bg-white/10">
                <div className="text-sm text-white/85">{s.title || 'Chat session'}</div>
                <div className="text-[10px] text-white/50">Mode: {s.mode}</div>
              </button>
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

function ChatScreen() {
  const url = new URL(window.location.href)
  const voiceParam = url.searchParams.get('voice')

  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [mode, setMode] = useState('qa')
  const [sessionId, setSessionId] = useState(null)
  const [showHistory, setShowHistory] = useState(false)
  const [imgPreview, setImgPreview] = useState(null)

  const { listening, start, stop, available } = useSpeech()

  useEffect(() => {
    if (voiceParam === 'true' && available && !listening) {
      start(setInput)
    }
  }, [voiceParam, available])

  const send = async () => {
    if (!input.trim()) return
    setBusy(true)
    const user = { role: 'user', content: input }
    setMessages((m) => [...m, user])
    setInput('')
    try {
      const res = await fetch(`${BACKEND}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: user.content, session_id: sessionId, mode }),
      })
      const data = await res.json()
      setSessionId(data.session_id)
      setMessages((m) => [...m, { role: 'assistant', content: data.reply, suggestions: data.suggestions }])
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Connection issue. Please try again.' }])
    } finally {
      setBusy(false)
    }
  }

  const genImage = async () => {
    if (!input.trim()) return
    setBusy(true)
    try {
      const res = await fetch(`${BACKEND}/api/image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: input }) })
      const data = await res.json()
      setImgPreview(data.image)
      setMessages((m) => [...m, { role: 'assistant', content: 'Generated an image preview for your prompt below.' }])
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Could not generate image right now.' }])
    } finally { setBusy(false) }
  }

  const onQuick = (k) => {
    if (k === 'history') { setShowHistory(true); return }
    if (k === 'image') { genImage(); return }
    if (k === 'summary') { setMode('summary'); setInput('Summarize: ') ; return }
    if (k === 'qa') { setMode('qa'); setInput('') ; return }
  }

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <ModePills mode={mode} setMode={setMode} />
          <div className="flex items-center gap-2">
            <button onClick={() => setShowHistory(true)} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"><History size={16}/>History</button>
            <button onClick={genImage} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"><ImageIcon size={16}/>Image</button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#001324] to-transparent p-4 md:p-6 min-h-[60vh]">
          <QuickActions onAction={onQuick} />
          <div className="mt-4 space-y-3">
            {messages.map((m, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${m.role === 'user' ? 'ml-auto bg-white/10' : 'bg-gradient-to-br from-[#001D3D] to-[#001324] border border-white/10'}`}>
                <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
                {m.suggestions && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.suggestions.map((s, i) => (
                      <button key={i} onClick={() => setInput(s)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10">{s}</button>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {imgPreview && (
              <div className="mt-2">
                <img src={imgPreview} alt="Generated" className="rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,239,255,.25)]" />
              </div>
            )}

            {busy && (
              <div className="flex items-center gap-2 text-white/70 text-sm"><div className="h-2 w-2 animate-pulse rounded-full bg-[#00EFFF]"/> SAI is thinking…</div>
            )}
          </div>
        </div>

        <div className="sticky bottom-4 mt-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#001324]/80 backdrop-blur px-3 py-2">
            <div className="flex items-end gap-2">
              <textarea rows={1} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Shahbaz AI anything…" className="min-h-[44px] max-h-[160px] flex-1 resize-y bg-transparent p-3 text-sm outline-none placeholder:text-white/40" />
              <div className="flex items-center gap-1 pb-1 pr-1">
                {available && (
                  <button onClick={() => (listening ? stop() : start(setInput))} title="Voice input" className={`rounded-xl p-2 border ${listening ? 'border-[#00EFFF] bg-[#00EFFF22]' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                    {listening ? <PauseCircle size={18}/> : <Mic size={18}/>} 
                  </button>
                )}
                <button onClick={send} disabled={busy} title="Send" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 disabled:opacity-50"><Send size={18}/></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HistoryPanel open={showHistory} onClose={() => setShowHistory(false)} onPick={async (id) => {
        setSessionId(id)
        const r = await fetch(`${BACKEND}/api/messages/${id}`)
        const d = await r.json()
        const msgs = (d.messages || []).map(m => ({ role: m.role, content: m.content }))
        setMessages(msgs)
      }} />
    </Shell>
  )
}

function StyleGuide() {
  const swatches = [
    { name: 'Primary Neon Blue', hex: COLORS.primary },
    { name: 'Electric Cyan', hex: COLORS.cyan },
    { name: 'Dark Space Blue', hex: COLORS.dark },
    { name: 'Deep Navy', hex: COLORS.navy },
    { name: 'Highlight Glow', hex: COLORS.glow },
  ]
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold">UI Theme & Components</h2>
            <p className="mt-2 text-white/70">Futuristic, neon‑blue, minimal with animated gradients and soft shadows.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <button className="rounded-2xl px-5 py-3 font-medium text-[#001D3D] shadow-[0_0_25px_rgba(0,239,255,.35)]" style={{ background: 'linear-gradient(90deg,#00EFFF,#64FFFF)' }}>Primary Button</button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85 hover:bg-white/10">Secondary Button</button>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
                <div className="text-sm text-[#8AD8FF] mb-2">Card</div>
                <div className="text-white/80">Beautiful card-style component with rounded corners.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
                <div className="text-sm text-[#8AD8FF] mb-2">FAB</div>
                <div className="flex gap-2">
                  <button className="rounded-full p-3 border border-white/10 bg-white/5 hover:bg-white/10"><Sparkles size={18}/></button>
                  <button className="rounded-full p-3 border border-white/10 bg-white/5 hover:bg-white/10"><Mic size={18}/></button>
                  <button className="rounded-full p-3 border border-white/10 bg-white/5 hover:bg-white/10"><ImageIcon size={18}/></button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm text-white/60">Typography</div>
              <h3 className="mt-2 text-2xl font-semibold">Inter / Manrope family</h3>
              <p className="text-white/70">Clean, modern, and highly legible for a premium feel.</p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-[#001324] p-4">
              <div className="text-sm text-[#8AD8FF] mb-3">Brand Kit</div>
              <SAILogo size={64} withText={true} />
              <div className="mt-4 space-y-2">
                {swatches.map((s) => (
                  <div key={s.hex} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded" style={{ background: s.hex }} />
                    <div>
                      <div className="text-sm">{s.name}</div>
                      <div className="text-xs text-white/60">{s.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#001324] p-4">
              <div className="text-sm text-[#8AD8FF] mb-3">Sample Screens</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Home: Futuristic welcome with neon gradient</li>
                <li>• Chat: Gemini‑style bubble conversation</li>
                <li>• History: Session picker panel</li>
                <li>• Image Maker: Inline preview generator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/style" element={<StyleGuide />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
