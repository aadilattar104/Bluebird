"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useMagneticHover } from "./hooks/use-magnetic-hover"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const getStartedRef = useRef(null)
  useMagneticHover(getStartedRef, { strength: 20 })

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.header
      className={`sticky top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="#" className="flex items-center space-x-2">

            <span className="inline-block text-black text-3xl font-bold">Bluebird Edu</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" className="text-black font-medium" onClick={scrollToSection("features")}>
              Features
            </Button>
            <Button variant="ghost" className="text-black font-medium" onClick={scrollToSection("how-it-works")}>
              How It Works
            </Button>
            <Button variant="ghost" className="text-black font-medium" onClick={scrollToSection("pricing")}>
              Pricing
            </Button>
            <Button variant="ghost" className="text-black font-medium" onClick={scrollToSection("about")}>
              About
            </Button>
            <div ref={getStartedRef}>
              <Button variant="default" className="text-sm font-medium relative z-10" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
