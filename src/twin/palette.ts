import type { FlowTier, NodeState, RouteStatus, SubstreamId } from '@/types'

export type RGB = readonly [number, number, number]

export const rgbaStr = (c: RGB, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`

export function hexToRgb(hex: string): RGB {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ] as const
}

/**
 * The twin's canvas palette. Near-black foundation, restrained luminance —
 * colour is reserved for meaning (material stream, status, intensity).
 */
export const C = {
  base: [8, 9, 11] as RGB,
  void: [4, 5, 6] as RGB,
  panel: [11, 13, 16] as RGB,
  ink: [233, 236, 241] as RGB,
  dim: [139, 147, 158] as RGB,
  faint: [90, 97, 107] as RGB,
  ghost: [58, 64, 73] as RGB,
  signal: [79, 227, 193] as RGB,
  flow: [108, 155, 255] as RGB,
  warn: [229, 180, 76] as RGB,
  critical: [226, 89, 91] as RGB,
  organic: [143, 208, 106] as RGB,
  glass: [95, 212, 227] as RGB,
  polymer: [169, 140, 255] as RGB,
  paper: [214, 199, 160] as RGB,
}

export const STREAM_COLOR: Record<SubstreamId, RGB> = {
  residual: C.dim,
  organic: C.organic,
  recyclable: C.glass,
  commercial: C.polymer,
}

export const STREAM_COLOR_HEX: Record<SubstreamId, string> = {
  residual: '#8B939E',
  organic: '#8FD06A',
  recyclable: '#5FD4E3',
  commercial: '#A98CFF',
}

/**
 * Node state palette. Utilisation bands (config/network.ts) resolve to these
 * three colours everywhere: glyphs, HUD pips, tables, panels.
 */
export const NODE_STATE_COLOR: Record<NodeState, RGB> = {
  normal: C.signal,
  warning: C.warn,
  critical: C.critical,
}

export const NODE_STATE_COLOR_HEX: Record<NodeState, string> = {
  normal: '#4FE3C1',
  warning: '#E5B44C',
  critical: '#E2595B',
}

/** Route state palette: how a corridor is behaving, not what it carries. */
export const ROUTE_STATUS_COLOR: Record<RouteStatus, RGB> = {
  normal: C.signal,
  busy: C.flow,
  congested: C.warn,
  blocked: C.critical,
}

export const ROUTE_STATUS_COLOR_HEX: Record<RouteStatus, string> = {
  normal: '#4FE3C1',
  busy: '#6C9BFF',
  congested: '#E5B44C',
  blocked: '#E2595B',
}

/** Particle brightness by flow tier, so LOW/MEDIUM/HIGH are legible at a glance. */
export const FLOW_TIER_ALPHA: Record<FlowTier, number> = {
  low: 0.5,
  medium: 0.72,
  high: 0.95,
}

/** Emissions intensity ramp: cool → amber → critical red. */
export function emissionColor(intensity: number): RGB {
  const t = Math.max(0, Math.min(1, intensity))
  if (t < 0.5) {
    const k = t / 0.5
    return [
      Math.round(C.flow[0] + (C.warn[0] - C.flow[0]) * k),
      Math.round(C.flow[1] + (C.warn[1] - C.flow[1]) * k),
      Math.round(C.flow[2] + (C.warn[2] - C.flow[2]) * k),
    ] as RGB
  }
  const k = (t - 0.5) / 0.5
  return [
    Math.round(C.warn[0] + (C.critical[0] - C.warn[0]) * k),
    Math.round(C.warn[1] + (C.critical[1] - C.warn[1]) * k),
    Math.round(C.warn[2] + (C.critical[2] - C.warn[2]) * k),
  ] as RGB
}
