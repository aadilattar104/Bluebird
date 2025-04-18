"use client"

import { useEffect, useRef } from "react"

export function BackgroundGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient
    const createGradient = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )

      gradient.addColorStop(0, "rgba(240, 249, 255, 0.8)")
      gradient.addColorStop(0.5, "rgba(245, 250, 255, 0.4)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      return gradient
    }

    // Animation
    let angle = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move gradient center based on time
      const centerX = canvas.width / 2 + Math.sin(angle) * 100
      const centerY = canvas.height / 2 + Math.cos(angle) * 100

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width / 1.5)

      gradient.addColorStop(0, "rgba(230, 245, 255, 0.8)")
      gradient.addColorStop(0.5, "rgba(240, 248, 255, 0.4)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      angle += 0.002
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
