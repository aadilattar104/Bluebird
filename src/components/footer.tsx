"use client"

import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="w-full border-t bg-white py-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container flex flex-col items-center gap-6 text-center">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-primary" />
          <p className="text-sm text-black font-semibold">© 2024 Bluebird Edu. All rights reserved.</p>
        </div>

        {/* Disclaimer - Centered */}
        <div className="text-sm text-black max-w-2xl">
          <p>
            The material on this site is for training purposes only.{" "}
            <span className="text-black">Do not use it for flight!</span>
          </p>
          <p className="mt-2">
            Please note that{" "}
            <Link
              href="https://bluebirdedu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 font-medium"
            >
              bluebirdedu.com
            </Link>{" "}
            is not affiliated in any way with any airplane manufacturer company.
          </p>
        </div>

        {/* Navigation Links - Positioned at bottom right */}
        <div className="flex flex-wrap gap-4 justify-end w-full mt-8">
          <Button variant="ghost" className="text-black font-medium" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button variant="ghost" className="text-black font-medium" asChild>
            <Link href="/terms">Terms of Service</Link>
          </Button>
          <Button variant="ghost" className="text-black font-medium" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </motion.footer>
  )
}