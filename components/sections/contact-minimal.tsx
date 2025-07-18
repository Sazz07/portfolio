'use client';

import type React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sazzad.hossain882@gmail.com',
    href: 'mailto:sazzad.hossain882@gmail.com',
    description: 'Best way to reach me',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1706 419870',
    href: 'tel:+8801706419870',
    description: 'Available during business hours',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
    description: 'GMT+6 timezone',
  },
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/sazzadhossain',
    description: 'Check out my code',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/sazzadhossain',
    description: "Let's connect professionally",
  },
];

export function ContactMinimal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form and show success
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id='contact' className='py-16 lg:py-24 px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className='grid lg:grid-cols-12 gap-8 lg:gap-16'
        >
          {/* Left Column - Title & Info */}
          <div className='lg:col-span-5'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl lg:text-4xl font-light mb-6'>
                Let's Work Together
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='h-px bg-foreground mb-8'
              />

              <div className='space-y-6 mb-12'>
                <p className='text-base lg:text-lg text-muted-foreground leading-relaxed'>
                  I'm always interested in new opportunities, challenging
                  projects, and meaningful collaborations. Whether you have a
                  project in mind or just want to say hello, I'd love to hear
                  from you.
                </p>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Clock className='h-4 w-4' />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className='space-y-6 mb-12'>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={item.href}
                    className='group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300'
                  >
                    <div className='w-12 h-12 rounded-xl border border-border/50 flex items-center justify-center group-hover:border-border transition-colors duration-300'>
                      <item.icon className='h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300' />
                    </div>
                    <div className='space-y-1'>
                      <p className='font-medium text-foreground'>
                        {item.label}
                      </p>
                      <p className='text-muted-foreground'>{item.value}</p>
                      <p className='text-xs text-muted-foreground'>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='space-y-4'
            >
              <h4 className='font-medium text-foreground'>Follow Me</h4>
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Link
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center justify-center w-12 h-12 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300'
                      title={social.description}
                    >
                      <social.icon className='h-5 w-5 group-hover:scale-110 transition-transform duration-300' />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='lg:col-span-7'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8'
            >
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className='mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3'
                >
                  <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400' />
                  <div>
                    <p className='font-medium text-green-800 dark:text-green-200'>
                      Message sent successfully!
                    </p>
                    <p className='text-sm text-green-600 dark:text-green-400'>
                      I'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid sm:grid-cols-2 gap-6'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-3 text-foreground'
                    >
                      Name *
                    </label>
                    <Input
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='h-12 border-0 border-b-2 border-border/30 rounded-none bg-transparent focus:border-foreground transition-colors duration-300 px-0'
                      placeholder='Your full name'
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-3 text-foreground'
                    >
                      Email *
                    </label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='h-12 border-0 border-b-2 border-border/30 rounded-none bg-transparent focus:border-foreground transition-colors duration-300 px-0'
                      placeholder='your.email@example.com'
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium mb-3 text-foreground'
                  >
                    Subject *
                  </label>
                  <Input
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='h-12 border-0 border-b-2 border-border/30 rounded-none bg-transparent focus:border-foreground transition-colors duration-300 px-0'
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-3 text-foreground'
                  >
                    Message *
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='border-0 border-b-2 border-border/30 rounded-none bg-transparent focus:border-foreground resize-none transition-colors duration-300 px-0'
                    placeholder='Tell me about your project, ideas, or just say hello...'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type='submit'
                    disabled={isSubmitting || isSubmitted}
                    className='w-full h-12 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50'
                  >
                    {isSubmitting ? (
                      <div className='flex items-center gap-2'>
                        <div className='w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin' />
                        <span>Sending...</span>
                      </div>
                    ) : isSubmitted ? (
                      <div className='flex items-center gap-2'>
                        <CheckCircle className='h-4 w-4' />
                        <span>Message Sent!</span>
                      </div>
                    ) : (
                      <div className='flex items-center gap-2'>
                        <Send className='h-4 w-4' />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='border-t border-border/50 mt-16 lg:mt-24 pt-12 text-center space-y-4'
        >
          <p className='text-muted-foreground text-sm'>
            © {new Date().getFullYear()} Sazzad Hossain. Crafted with attention
            to detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
