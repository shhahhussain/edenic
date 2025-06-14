import { animationTokens } from './tokens'

export const getReducedMotionDuration = (duration: number): number => {
  if (typeof window === 'undefined') return duration
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return prefersReducedMotion ? duration / 2 : duration
}

export const getReducedMotionEase = (ease: string): string => {
  if (typeof window === 'undefined') return ease
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return prefersReducedMotion ? animationTokens.easing.easeOut : ease
}

export const shouldAnimate = (): boolean => {
  if (typeof window === 'undefined') return true
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const getReducedMotionTransition = (duration: number, ease: string) => {
  return {
    duration: getReducedMotionDuration(duration) / 1000,
    ease: getReducedMotionEase(ease)
  }
} 