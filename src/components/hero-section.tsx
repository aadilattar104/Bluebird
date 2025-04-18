"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { useMagneticHover } from "./hooks/use-magnetic-hover"

export function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Transform values for airplane animation
  const planeX = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])
  const planeY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"])
  const planeRotate = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 15, 25])
  const planeScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2])

  // Magnetic hover for buttons
  const primaryBtnRef = useRef(null)
  const secondaryBtnRef = useRef(null)
  useMagneticHover(primaryBtnRef, { strength: 30 })
  useMagneticHover(secondaryBtnRef, { strength: 20 })

  return (
    <section
      ref={containerRef}
      className="w-full h-screen py-12 md:py-24 lg:py-32 bg-white relative bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-center space-y-4 mt-15">
            <div className="space-y-4">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block">Master Your Pilot Exams with</span>
                <TypeAnimation
                  sequence={["Bluebird Edu", 1000, "Confidence", 1000, "Precision", 1000]}
                  wrapper="span"
                  speed={50}
                  className="text-primary"
                  repeat={Number.POSITIVE_INFINITY}
                />
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Comprehensive mock tests and practice questions for aviation professionals. Prepare for your pilot exams
                with confidence.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div ref={primaryBtnRef}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 relative z-10" asChild>
                  <Link href="/register">Start Free Trial</Link>
                </Button>
              </div>
              <div ref={secondaryBtnRef}>
                <Button size="lg" variant="outline" className="relative z-10" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Airplane animation */}
      <motion.div
        className="absolute bottom-[10%] left-[-10%] z-20 w-[300px] h-[150px] md:w-[400px] md:h-[200px] lg:w-[500px] lg:h-[250px]"
        style={{
          x: planeX,
          y: planeY,
          rotate: planeRotate,
          scale: planeScale,
        }}
      >
        <Image src="/animated-plane.svg" alt="Airplane" fill className="object-contain" priority />
      </motion.div>

      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white opacity-70"></div>
    </section>
  )
}
