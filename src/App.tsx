import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  YAxis, 
  Tooltip, 
  AreaChart, 
  Area 
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Cpu, 
  Database, 
  Github, 
  Globe, 
  Layers, 
  Linkedin, 
  Mail, 
  Maximize2, 
  Monitor, 
  Server, 
  Terminal, 
  Zap,
  ChevronRight,
  ExternalLink,
  Code2
} from 'lucide-react';
import { cn } from './lib/utils';
import { NAV_LINKS, SKILLS, PROJECTS, STATS, EXPERIENCE } from './constants';

// --- Components ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
      scrolled ? "bg-nexus-bg/80 backdrop-blur-lg border-nexus-accent/20 py-3" : "bg-transparent border-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 bg-nexus-accent rounded-sm flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
            <Zap className="w-5 h-5 text-nexus-bg fill-current" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-xl nexus-glow">PERF_NEXUS</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono text-xs tracking-widest text-nexus-text/60 hover:text-nexus-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-nexus-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={() => window.open('https://www.linkedin.com/in/nagarjuna835', '_blank')} className="p-2 glass-card hover:bg-nexus-accent/10 transition-colors">
            <Linkedin className="w-4 h-4" />
          </button>
          <button onClick={() => window.location.href='mailto:nagarjun835@gmail.com'} className="px-4 py-2 bg-nexus-accent text-nexus-bg font-mono text-xs font-bold rounded-sm hover:brightness-110 transition-all">
            CONNECT_
          </button>
        </div>
      </div>
    </header>
  );
};

const PerformanceChart = () => {
  const [data, setData] = useState<{ time: string; value: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newValue = Math.floor(Math.random() * 30) + 10;
        const newData = [...prev, { time: new Date().toLocaleTimeString(), value: newValue }];
        if (newData.length > 20) return newData.slice(1);
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-48 w-full mt-8 opacity-50">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00FF9C" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00FF9C" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip 
            contentStyle={{ backgroundColor: '#050505', border: '1px solid #00FF9C', borderRadius: '4px' }}
            itemStyle={{ color: '#00FF9C', fontSize: '10px', fontFamily: 'monospace' }}
            labelStyle={{ display: 'none' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#00FF9C" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="system" className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="px-3 py-1 bg-nexus-accent/10 border border-nexus-accent/30 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-nexus-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-nexus-accent tracking-widest uppercase">System Status: Optimized</span>
            </div>
            <span className="text-[10px] font-mono text-nexus-text/40 tracking-widest uppercase">Uptime: 99.99%</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-4"
          >
            NAGARJUNA S
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl font-mono text-nexus-accent nexus-glow mb-8"
          >
            PERFORMANCE ENGINEER
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-nexus-text/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10"
          >
            With 4.5+ years of experience in performance testing and engineering at TCS and Wipro. 
            Specializing in end-to-end testing, high-concurrency systems, and bottleneck identification 
            using JMeter, LoadRunner, and New Relic.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-nexus-accent text-nexus-bg font-mono font-bold rounded-sm flex items-center gap-2 hover:scale-105 transition-transform">
              VIEW_PROJECTS <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => window.open('https://www.linkedin.com/in/nagarjuna835', '_blank')} className="px-8 py-4 border border-white/10 hover:bg-white/5 font-mono text-xs font-bold rounded-sm transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LINKEDIN_PROFILE
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 hidden lg:block">
        <PerformanceChart />
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-nexus-muted/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-12">PROFESSIONAL_TIMELINE</h2>
        <div className="space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-l-2 border-l-nexus-accent/50 hover:border-l-nexus-accent transition-all relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-nexus-accent">{exp.role}</h3>
                  <div className="text-lg font-mono text-nexus-text/80">{exp.company}</div>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-sm font-mono text-xs text-nexus-text/60">
                  {exp.period}
                </div>
              </div>
              <p className="text-nexus-text/60 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Telemetry = () => {
  return (
    <section id="telemetry" className="py-20 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 border-l-2 border-l-nexus-accent/50 group hover:border-l-nexus-accent transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <stat.icon className="w-5 h-5 text-nexus-accent/60 group-hover:text-nexus-accent transition-colors" />
                <span className="text-[10px] font-mono text-nexus-text/30">0{idx + 1}</span>
              </div>
              <div className="text-3xl font-mono font-bold mb-1">{stat.value}</div>
              <div className="text-[10px] font-mono text-nexus-text/40 tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">OPTIMIZED_PROJECTS</h2>
            <p className="text-nexus-text/50 font-mono text-xs uppercase tracking-widest">Case studies in efficiency and scale</p>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-white/5 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Code2 className="w-12 h-12" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-nexus-accent transition-colors">{project.title}</h3>
              <p className="text-nexus-text/60 text-sm mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-white/5">
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div key={key}>
                    <div className="text-nexus-accent font-mono text-sm font-bold">{val}</div>
                    <div className="text-[8px] font-mono text-nexus-text/40 uppercase tracking-tighter">{key}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/5 text-[9px] font-mono text-nexus-text/60 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resources = () => {
  return (
    <section id="resources" className="py-32 bg-nexus-muted/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">RESOURCE_ALLOCATION</h2>
            <p className="text-nexus-text/60 mb-12 leading-relaxed">
              A breakdown of technical proficiency across the performance stack. 
              Each metric represents real-world application and optimization experience.
            </p>

            <div className="space-y-8">
              {SKILLS.map((skill, idx) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 text-nexus-accent" />
                      <span className="uppercase tracking-widest">{skill.name}</span>
                    </div>
                    <span className="text-nexus-accent">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-nexus-accent shadow-[0_0_10px_rgba(0,255,156,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square glass-card p-12 flex items-center justify-center border-nexus-accent/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.1)_0%,transparent_70%)]" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-nexus-accent/10 rounded-full flex items-center justify-center mb-6 border border-nexus-accent/20">
                  <Cpu className="w-12 h-12 text-nexus-accent animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4">SYSTEM_CORE</h3>
                <p className="text-nexus-text/50 text-sm max-w-xs font-mono">
                  Optimizing the critical path through deep-level system analysis and hardware-aware software design.
                </p>
              </div>
              
              {/* Decorative elements */}
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-full h-[1px] bg-nexus-accent/10" 
                  style={{ top: `${25 * (i + 1)}%`, transform: `rotate(${i * 45}deg)` }} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TerminalSection = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'Initializing Performance Nexus Terminal...',
    'System: Online',
    'User: Guest_Access',
    'Type "help" for available commands.'
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = '';

    switch(cmd) {
      case 'help':
        response = 'Available commands: about, skills, experience, contact, clear, status';
        break;
      case 'about':
        response = 'Nagarjuna S - Performance Engineer with 4.5+ years of experience at TCS and Wipro.';
        break;
      case 'skills':
        response = 'JMeter, LoadRunner, Zabbix, New Relic, AWS Kubernetes, Docker, Linux, Oracle SQL, Java.';
        break;
      case 'experience':
        response = 'IT Analyst @ TCS (2023-Present) | Senior Associate @ Wipro (2020-2023).';
        break;
      case 'contact':
        response = 'Email: nagarjun835@gmail.com | LinkedIn: linkedin.com/in/nagarjuna835 | Phone: 8971151169';
        break;
      case 'status':
        response = 'All systems operational. Ready for new challenges.';
        break;
      case 'clear':
        setLogs([]);
        setInput('');
        return;
      default:
        response = `Command not found: ${cmd}. Type "help" for list.`;
    }

    setLogs(prev => [...prev, `> ${input}`, response]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-nexus-muted/50 px-4 py-2 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] font-mono text-nexus-text/40 uppercase tracking-widest">nexus_terminal_v2.4.0</div>
            </div>
            <div className="p-6 h-80 overflow-y-auto font-mono text-xs text-nexus-accent/80 space-y-1 custom-scrollbar">
              {logs.map((log, i) => (
                <div key={i} className={log.startsWith('>') ? 'text-nexus-text' : ''}>{log}</div>
              ))}
              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
                <span className="text-nexus-accent">nagarjuna@system:~$</span>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-grow text-nexus-text"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-nexus-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-nexus-accent" />
              <span className="font-mono font-bold text-xl tracking-tighter">NAGARJUNA S</span>
            </div>
            <p className="text-nexus-text/40 text-xs font-mono max-w-xs text-center md:text-left">
              Built for speed. Optimized for scale. <br />
              © 2026 Nagarjuna S. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/nagarjuna835" target="_blank" rel="noreferrer" className="p-3 glass-card hover:text-nexus-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:nagarjun835@gmail.com" className="p-3 glass-card hover:text-nexus-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-right hidden md:block">
            <div className="text-[10px] font-mono text-nexus-text/30 uppercase tracking-widest mb-2">Location</div>
            <div className="text-sm font-mono">MYSURU, KARNATAKA</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <div className="scanline" />
      
      <Header />
      
      <main>
        <Hero />
        <Experience />
        <Telemetry />
        <Projects />
        <Resources />
        <TerminalSection />
      </main>

      <Footer />

      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-20">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-nexus-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-nexus-secondary/10 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
