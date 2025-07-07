"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F4E9] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <div
            className="w-20 h-20 bg-[#E3AE2C] flex items-center justify-center text-[#17472F] font-bold text-3xl mx-auto mb-6"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          >
            A
          </div>
          <h1 className="text-6xl font-bold text-[#17472F] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#17472F] mb-4">Page Not Found</h2>
          <p className="text-[#2D2D2D] mb-8">Sorry, the page you are looking for doesn't exist or has been moved.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-[#17472F] text-[#17472F] hover:bg-[#17472F] hover:text-white bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
