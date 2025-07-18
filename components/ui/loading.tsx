"use client"

import { motion } from "framer-motion"
import { Loader2, Code, Zap, Sparkles } from "lucide-react"

interface LoadingProps {
  size?: "sm" | "md" | "lg"
  variant?: "spinner" | "dots" | "pulse" | "skeleton"
  text?: string
  className?: string
}

export function Loading({ size = "md", variant = "spinner", text, className = "" }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const containerSizes = {
    sm: "p-4",
    md: "p-8",
    lg: "p-12",
  }

  if (variant === "spinner") {
    return (
      <div className={`flex flex-col items-center justify-center ${containerSizes[size]} ${className}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="mb-4"
        >
          <Loader2 className={`${sizeClasses[size]} text-blue-600`} />
        </motion.div>
        {text && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground animate-pulse"
          >
            {text}
          </motion.p>
        )}
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className={`flex flex-col items-center justify-center ${containerSizes[size]} ${className}`}>
        <div className="flex space-x-2 mb-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-blue-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        {text && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            {text}
          </motion.p>
        )}
      </div>
    )
  }

  if (variant === "pulse") {
    return (
      <div className={`flex flex-col items-center justify-center ${containerSizes[size]} ${className}`}>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="mb-4"
        >
          <div className="relative">
            <Code className={`${sizeClasses[size]} text-blue-600`} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles className="w-3 h-3 text-yellow-500" />
            </motion.div>
          </div>
        </motion.div>
        {text && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            {text}
          </motion.p>
        )}
      </div>
    )
  }

  if (variant === "skeleton") {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-muted rounded w-5/6"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-32 bg-muted rounded-lg mb-4"></div>
          <div className="h-4 bg-muted rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-muted rounded w-1/3"></div>
        </div>
      </div>
    )
  }

  return null
}

// Full page loading component
export function PageLoading({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="mb-6"
        >
          <div className="relative">
            <Zap className="w-16 h-16 text-blue-600 mx-auto" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-16 h-16 border-2 border-blue-600/30 rounded-full mx-auto"
            />
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold mb-2"
        >
          {text}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground"
        >
          Please wait while we load your content
        </motion.p>
      </div>
    </div>
  )
}

// Card loading skeleton
export function CardLoading({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-muted rounded-lg h-48 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
