"use client"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Plane } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-black text-white relative overflow-hidden"
      id="cta"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Airplane Animation */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-white"
          initial={{
            x: "-5%",
            y: "80%",
            opacity: 0,
          }}
          animate={{
            x: "105%",
            y: "5%",
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
          }}
        >
          <Plane size={40} className="rotate-[30deg] text-white" />
        </motion.div>
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center stroke-white"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Elevate Your Exam Preparation?
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
              Join Bluebird Edu today and take your pilot certification journey to new heights.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 hover:text-black relative z-10 transform transition-transform duration-300 hover:scale-105"
              asChild
            >
              <Link href="/register">Get Started Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 relative z-10 transform transition-transform duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}