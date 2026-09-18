export const CATEGORIES = {
  'os':               { label: 'OS',              color: '#38bdf8', blurb: 'Schedulers, interrupts, memory, synchronization.' },
  'embedded-linux':   { label: 'Embedded Linux',  color: '#fbbf24', blurb: 'Yocto, U-Boot, device tree, PREEMPT_RT.' },
  'rtos':             { label: 'RTOS',            color: '#22d3ee', blurb: 'FreeRTOS, Zephyr, determinism, jitter.' },
  'networking':       { label: 'Networking',      color: '#a78bfa', blurb: 'lwIP, sockets, MQTT, Ethernet MAC/PHY.' },
  'wifi':             { label: '802.11 (Wi-Fi)',  color: '#fb7185', blurb: 'MAC/PHY, mac80211, hostapd, sniffing.' },
  'misc':             { label: 'Miscellaneous',   color: '#a1a1aa', blurb: 'Tooling, debugging, hardware interfaces.' },
} as const;

export const CATEGORY_ICONS: Record<string, string> = {
  'os': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/></svg>`,
  'embedded-linux': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  'rtos': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  'networking': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="16"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="16" x2="5" y2="16"/><line x1="12" y1="16" x2="19" y2="16"/></svg>`,
  'wifi': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  'misc': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
};

export const POST_TYPES = {
  'build':     { label: 'Build',      glyph: '🔨' },
  'benchmark': { label: 'Benchmark',  glyph: '📊' },
  'debug':     { label: 'Debug',      glyph: '🐛' },
  'port':      { label: 'Port',       glyph: '📦' },
  'deep-dive': { label: 'Deep dive',  glyph: '🔬' },
  'toolbox':   { label: 'Toolbox',    glyph: '🧰' },
} as const;

export const DIFFICULTY = {
  beginner:     { label: 'Beginner',     color: '#22d3ee' },
  intermediate: { label: 'Intermediate', color: '#fbbf24' },
  advanced:     { label: 'Advanced',     color: '#fb7185' },
} as const;
