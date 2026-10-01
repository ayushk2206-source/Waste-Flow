import type { Config } from 'tailwindcss'

/**
 * WasteFlow Nexus design tokens.
 * Dark-first, restrained luminance. One signal accent, three semantic hues.
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#040506',
        base: '#08090B',
        panel: '#0B0D10',
        raised: '#101317',
        ink: {
          DEFAULT: '#E9ECF1',
          dim: '#8B939E',
          faint: '#5A616B',
          ghost: '#3A4049',
        },
        signal: {
          DEFAULT: '#4FE3C1',
          dim: '#2BA88E',
          deep: '#0E2A26',
        },
        flow: {
          DEFAULT: '#6C9BFF',
          dim: '#3D6BD1',
        },
        warn: {
          DEFAULT: '#E5B44C',
          dim: '#8C6B23',
        },
        critical: {
          DEFAULT: '#E2595B',
          dim: '#8A2F31',
        },
        organic: '#8FD06A',
        polymer: '#A98CFF',
        glass: '#5FD4E3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        micro: ['0.5625rem', { lineHeight: '0.875rem', letterSpacing: '0.14em' }],
        label: ['0.625rem', { lineHeight: '0.875rem', letterSpacing: '0.12em' }],
        data: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.06em' }],
      },
      borderColor: {
        hair: 'rgba(255,255,255,0.07)',
        hair2: 'rgba(255,255,255,0.12)',
      },
      backgroundColor: {
        hair: 'rgba(255,255,255,0.04)',
      },
      boxShadow: {
        panel: '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -24px rgba(0,0,0,0.9)',
        glow: '0 0 0 1px rgba(79,227,193,0.28), 0 0 28px -6px rgba(79,227,193,0.35)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.72)', opacity: '0.55' },
          '70%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'status-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(79,227,193,0.5)' },
          '50%': { opacity: '0.72', boxShadow: '0 0 0 5px rgba(79,227,193,0)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '35%': { opacity: '0.6' },
          '100%': { transform: 'translateY(1200%)', opacity: '0' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-6px,0)' },
        },
        'sweep': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '0.85' },
          '45%': { opacity: '1' },
          '55%': { opacity: '0.7' },
        },
        'route-flow': {
          to: { backgroundPosition: '26px 0' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.8s cubic-bezier(0.22,0.61,0.36,1) infinite',
        'status-pulse': 'status-pulse 2.4s ease-in-out infinite',
        scan: 'scan 5.5s linear infinite',
        drift: 'drift 7s ease-in-out infinite',
        sweep: 'sweep 2.6s cubic-bezier(0.4,0,0.2,1) infinite',
        flicker: 'flicker 3.2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        nexus: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
