import {
  Activity,
  Cpu,
  Database,
  Monitor,
  Terminal,
  Zap
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'SYSTEM', href: '#system' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'RESOURCES', href: '#resources' },
  { name: 'TERMINAL', href: '#terminal' },
];

export const SKILL_CATEGORIES = [
  {
    title: 'Performance Testing',
    icon: Activity,
    description: 'Designing and executing high-concurrency load, stress, and endurance tests.',
    skills: ['Apache JMeter', 'HP LoadRunner']
  },
  {
    title: 'Automation & Scripting',
    icon: Terminal,
    description: 'Building custom utilities to eliminate manual effort and accelerate analysis.',
    skills: ['Python', 'Bash', 'Pywinauto']
  },
  {
    title: 'Monitoring & APM',
    icon: Monitor,
    description: 'Deep-dive bottleneck analysis and real-time system telemetry.',
    skills: ['New Relic', 'Zabbix', 'JProfiler']
  },
  {
    title: 'Infrastructure & Data',
    icon: Database,
    description: 'Navigating complex distributed systems and analyzing database performance.',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Linux', 'Oracle SQL']
  }
];

export const EXPERIENCE = [
  {
    role: 'MTS-Performance Engineer',
    company: 'Athenahealth',
    period: 'PRESENT',
    description: 'Specializing in test planning, advanced scripting, and bottleneck analysis to ensure systems deliver peak reliability and scalability in the Healthcare domain.'
  },
  {
    role: 'IT Analyst-Performance Engineer',
    company: 'Tata Consultancy Services',
    period: '2023 - 2024',
    description: 'Leading performance engineering initiatives, optimizing client/server and web-based applications for high availability and scalability.'
  },
  {
    role: 'Senior Associate-Performance Engineer',
    company: 'Wipro Limited',
    period: '2020 - 2023',
    description: 'Executed end-to-end performance testing, developed JMeter scripts, and collaborated with DBAs to resolve system bottlenecks.'
  }
];

export const PROJECTS = [
  {
    title: 'JTL Visualizer',
    description: 'A custom automation utility designed to help performance engineers in their day-to-day activities by converting and analyzing JMeter JTL files efficiently.',
    metrics: { role: 'Creator', type: 'Automation Tool', domain: 'Performance' },
    tags: ['Python', 'Automation', 'JMeter', 'Data Processing'],
    github: 'https://github.com/nagarjunx/JTL_Visualizer',
    demo: 'https://nagarjunx.github.io/JTL_Visualizer/',
  },
  {
    title: 'Log File Analyzer',
    description: 'A custom automation utility designed to help performance engineers in their day-to-day activities by analyzing and visualizing log files efficiently.',
    metrics: { role: 'Creator', type: 'Automation Tool', domain: 'Performance' },
    tags: ['Python', 'Automation', 'Log Analysis', 'Data Processing'],
    github: 'https://github.com/nagarjunx/logninja',
    demo: 'https://nagarjunx.github.io/logninja/',
  }
];

export const STATS = [
  { label: 'Experience in Performance Engineering', value: '5+ YRS', icon: Terminal },
  { label: 'Concurrent Users Tested / Peak Load Handled', value: '4K+', icon: Activity },
  { label: 'AUTOMATION_COVERAGE', value: '90%', icon: Cpu },
  { label: 'Bottlenecks Identified Pre-Production', value: '95%+ Issues', icon: Zap },
];
