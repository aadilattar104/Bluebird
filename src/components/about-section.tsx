"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import pilotImage from "@/components/images/pilot.jpg" // Adjust path if needed

export function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      ref={sectionRef}
      className="w-full h-screen py-12 md:py-24 lg:py-32 bg-white relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/wind-turbine.svg')`,
      }}
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left side - Pilot image */}
          <motion.div 
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-1"
            variants={itemVariants}
          >
            <Image
              src={pilotImage}
              alt="Professional Pilot"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* Right side - About text */}
          <motion.div 
            className="flex flex-col justify-center space-y-4 order-2 lg:order-2"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <motion.h2
                className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl"
                variants={itemVariants}
              >
                About Bluebird Edu
              </motion.h2>
              <motion.p
                className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                variants={itemVariants}
              >
                Bluebird Edu is dedicated to helping aviation professionals excel in their certification exams. Our
                platform provides comprehensive study materials, practice questions, and mock tests designed by industry
                experts.
              </motion.p>
              <motion.p
                className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                variants={itemVariants}
              >
                We currently focus on Boeing 737 Max certification, with plans to expand to other aircraft types. Our
                goal is to make exam preparation efficient, effective, and accessible for all aviation professionals.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/80"></div>
    </motion.section>
  )
}
