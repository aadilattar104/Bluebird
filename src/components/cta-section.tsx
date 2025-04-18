"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useMagneticHover } from "./hooks/use-magnetic-hover"

export function CTASection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const primaryBtnRef = useRef(null)
  const secondaryBtnRef = useRef(null)
  useMagneticHover(primaryBtnRef, { strength: 30 })
  useMagneticHover(secondaryBtnRef, { strength: 20 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
      id="cta"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Elevate Your Exam Preparation?
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join Bluebird Edu today and take your pilot certification journey to new heights.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <div ref={primaryBtnRef}>
              <Button size="lg" className="bg-black text-primary hover:bg-white/90 relative z-10" asChild>
                <Link href="/register">Get Started Now</Link>
              </Button>
            </div>
            <div ref={secondaryBtnRef}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10 relative z-10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
