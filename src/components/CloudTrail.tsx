import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export const CloudTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: Particle[] = []
    const particleCount = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      opacity: number
      canvas: HTMLCanvasElement

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 0.5 + 0.2
        this.opacity = Math.random() * 0.3 + 0.1
      }

      update() {
        this.x += this.speedX
        if (this.x > this.canvas.width) {
          this.x = 0
          this.y = Math.random() * this.canvas.height
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        const color = theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
        ctx.fillStyle = color
        ctx.fill()
      }
    }

    const init = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas))
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      init()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: theme === 'dark' ? 0.2 : 0.1 }}
    />
  )
} 