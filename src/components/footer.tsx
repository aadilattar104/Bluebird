"use client"

import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="w-full border-t py-6 md:py-0 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-primary" />
          <p className="text-sm text-black">© 2024 Bluebird Edu. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
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
