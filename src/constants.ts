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
  Briefcase
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'SYSTEM', href: '#system' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'RESOURCES', href: '#resources' },
  { name: 'TERMINAL', href: '#terminal' },
];

export const SKILLS = [
  { name: 'Apache JMeter', level: 95, icon: Activity },
  { name: 'HP LoadRunner', level: 90, icon: Server },
  { name: 'New Relic & Zabbix', level: 88, icon: Monitor },
  { name: 'AWS Kubernetes', level: 85, icon: Globe },
  { name: 'Docker & Linux', level: 85, icon: Layers },
  { name: 'Oracle SQL & Java', level: 82, icon: Database },
];

export const EXPERIENCE = [
  {
    role: 'IT Analyst',
    company: 'Tata Consultancy Services',
    period: '2023 - PRESENT',
    description: 'Leading performance engineering initiatives, optimizing client/server and web-based applications for high availability and scalability.'
  },
  {
    role: 'Senior Associate',
    company: 'Wipro Limited',
    period: '2020 - 2023',
    description: 'Executed end-to-end performance testing, developed JMeter scripts, and collaborated with DBAs to resolve system bottlenecks.'
  }
];

export const PROJECTS = [
  {
    title: 'Personal Finance Management (PFM)',
    description: 'Performance testing for Yodlee Retail Banking Solutions, securely aggregating data from 14,000+ sources. Created test plans, reviewed SQL queries, and generated performance scorecards.',
    metrics: { role: 'Perf Engineer', tools: 'JMeter, SQL', monitoring: 'Zabbix' },
    tags: ['JMeter', 'SQL', 'Zabbix', 'Capacity Planning'],
    github: '#',
  },
  {
    title: 'Enterprise Load Simulation',
    description: 'Developed robust scripts in Apache JMeter and LoadRunner to emulate realistic user behavior for load, stress, and endurance testing.',
    metrics: { load: 'High Concurrency', duration: 'Endurance', type: 'Stress Test' },
    tags: ['LoadRunner', 'JMeter', 'Performance'],
    github: '#',
  },
  {
    title: 'System Bottleneck Resolution',
    description: 'Monitored essential server performance counters with Zabbix and NewRelic. Identified bottlenecks and collaborated with developers to optimize application performance.',
    metrics: { monitoring: 'NewRelic', analysis: 'JProfiler', OS: 'Linux' },
    tags: ['NewRelic', 'JProfiler', 'Linux', 'Docker'],
    github: '#',
  },
];

export const STATS = [
  { label: 'EXPERIENCE', value: '4.5+ YRS', icon: Briefcase },
  { label: 'COMPANIES', value: '2', icon: Server },
  { label: 'TOOLS', value: '10+', icon: Cpu },
  { label: 'LOCATION', value: 'MYSURU', icon: Globe },
];
