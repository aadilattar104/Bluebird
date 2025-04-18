"use client"

import type React from "react"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, BarChart3, Plane, Shield, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <div className="grid gap-1">
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function FeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Comprehensive Question Bank",
      description: "Access thousands of MCQs across 13 subject categories with detailed explanations.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Practice & Mock Tests",
      description:
        "Subject-specific practice with immediate feedback and timed mock tests that simulate exam conditions.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Progress Tracking",
      description: "Monitor your performance with detailed analytics and identify areas for improvement.",
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      title: "Aircraft-Specific Content",
      description: "Starting with Boeing 737 Max, with plans to expand to Airbus A320 and other aircraft.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Platform",
      description:
        "Encrypted data, secure authentication, and anti-cheating measures to protect the integrity of your learning.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Easy Registration",
      description: "Quick sign-up with email + OTP or Google authentication. No manual approvals needed.",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to prepare for your pilot certification exams
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
