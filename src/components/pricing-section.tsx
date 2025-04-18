"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

interface PricingPlanProps {
  title: string
  description: string
  price: string
  features: string[]
  buttonText: string
  buttonVariant?: "default" | "outline"
  highlighted?: boolean
  href: string
  index: number
}

function PricingPlan({
  title,
  description,
  price,
  features,
  buttonText,
  buttonVariant = "default",
  highlighted = false,
  href,
  index,
}: PricingPlanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className={`flex flex-col h-full ${highlighted ? "border-primary shadow-lg" : ""}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="mt-4 text-4xl font-bold">{price}</div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="grid gap-2">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-0 mt-auto">
          <Button
            className={`w-full ${highlighted ? "bg-primary hover:bg-primary/90" : ""}`}
            variant={buttonVariant}
            asChild
          >
            <Link href={href}>{buttonText}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export function PricingSection() {
  const sectionRef = useRef(null)

  const pricingPlans = [
    {
      title: "Free Trial",
      description: "Get started with basic access",
      price: "₹0",
      features: ["10 questions per system", "Access to 3-4 subjects", "Basic progress tracking"],
      buttonText: "Sign Up Free",
      buttonVariant: "default" as const,
      highlighted: false,
      href: "/register",
    },
    {
      title: "Full Access",
      description: "Complete access to one aircraft",
      price: "₹XX.XX",
      features: [
        "Full question bank for one aircraft",
        "Unlimited practice questions",
        "5 complete mock tests",
        "Detailed performance analytics",
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "default" as const,
      highlighted: true,
      href: "/register",
    },
    {
      title: "Test Series",
      description: "Individual test packages",
      price: "₹XX.XX",
      features: [
        "Individual test series purchase",
        "Specific aircraft focus",
        "Results and explanations",
        "Performance comparison",
      ],
      buttonText: "Buy Test Series",
      buttonVariant: "outline" as const,
      highlighted: false,
      href: "/register",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-white" id="pricing">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Flexible options to suit your preparation needs
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              index={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              highlighted={plan.highlighted}
              href={plan.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
