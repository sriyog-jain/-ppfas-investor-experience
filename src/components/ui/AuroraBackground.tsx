import React, { useEffect, useRef } from 'react'

const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.001

      ctx.fillStyle = '#0F0F0F'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

      const hue1 = Math.sin(time) * 30 + 160
      const hue2 = Math.sin(time + Math.PI / 3) * 30 + 260
      const hue3 = Math.sin(time + (2 * Math.PI) / 3) * 30 + 120

      gradient.addColorStop(0, `hsla(${hue1}, 100%, 30%, 0.3)`)
      gradient.addColorStop(0.5, `hsla(${hue2}, 100%, 25%, 0.2)`)
      gradient.addColorStop(1, `hsla(${hue3}, 100%, 35%, 0.3)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < 5; i += 1) {
        const noiseGradient = ctx.createRadialGradient(
          Math.sin(time + i) * canvas.width,
          Math.cos(time + i) * canvas.height,
          0,
          Math.sin(time + i) * canvas.width,
          Math.cos(time + i) * canvas.height,
          canvas.width * 0.5
        )

        const noiseHue = Math.sin(time + i * 1.2) * 30 + 160
        noiseGradient.addColorStop(0, `hsla(${noiseHue}, 100%, 40%, 0.1)`)
        noiseGradient.addColorStop(1, `hsla(${noiseHue}, 100%, 40%, 0)`)

        ctx.fillStyle = noiseGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default AuroraBackground
