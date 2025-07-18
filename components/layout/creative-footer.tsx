"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sazzadhossain",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sazzadhossain",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    href: "mailto:sazzad.hossain882@gmail.com",
    icon: Mail,
    color: "hover:text-purple-600",
  },
]

export function CreativeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-background border-t overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23a855f7' fillOpacity='0.4' fillRule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SAZZAD HOSSAIN
              </span>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
              Full-Stack Developer passionate about creating digital experiences that make a difference. Always
              learning, always building, always improving.
            </p>

            {/* Fun Stats */}
            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Code className="h-4 w-4 text-purple-600" />
                <span>2+ Years Coding</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Coffee className="h-4 w-4 text-orange-600" />
                <span>∞ Cups of Coffee</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.div key={social.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-muted rounded-2xl flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Let's Connect</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <Link href="mailto:sazzad.hossain882@gmail.com" className="hover:text-purple-600 transition-colors">
                  sazzad.hossain882@gmail.com
                </Link>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <Link href="tel:+8801706419870" className="hover:text-purple-600 transition-colors">
                  +880 1706 419870
                </Link>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {new Date().getFullYear()} Sazzad Hossain. Crafted with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-orange-600" />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Built with Next.js & Tailwind CSS</span>
            <Button
              onClick={scrollToTop}
              size="sm"
              variant="outline"
              className="rounded-full w-10 h-10 p-0 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent bg-transparent"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
