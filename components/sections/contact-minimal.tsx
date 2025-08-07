'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Users, MessageCircle } from 'lucide-react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
    icon: FaGithub,
    name: 'GitHub',
    href: 'https://github.com/sazz07',
    description: 'Check out my code',
  },
  {
    icon: FaLinkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-sazzad-hossain-996b84347',
    description: "Let's connect professionally",
  },
  {
    icon: FaFacebookF,
    name: 'Facebook',
    href: 'https://www.facebook.com/mdsazzad.hossain.399',
    description: "Let's connect socially",
  },
];

// const stats = [
//   {
//     icon: Clock,
//     label: 'Response Time',
//     value: '< 24 hours',
//     description: 'Quick replies guaranteed',
//   },
//   {
//     icon: Zap,
//     label: 'Projects Completed',
//     value: '50+',
//     description: 'Successful deliveries',
//   },
//   {
//     icon: Users,
//     label: 'Happy Clients',
//     value: '30+',
//     description: 'Satisfied customers',
//   },
//   {
//     icon: Award,
//     label: 'Years Experience',
//     value: '3+',
//     description: 'In web development',
//   },
// ];

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(5, 'Message must be at least 5 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactMinimal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

  const onSubmit = async (data: ContactFormData) => {
    if (!apiUrl) {
      toast.error('Contact API URL is not configured.');
      return;
    }

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send message');

      toast.success(
        "Message sent! Thank you for your message. I'll get back to you soon."
      );
      reset();
    } catch {
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <section
      id='contact'
      className='py-20 lg:py-32 px-6 lg:px-12 bg-muted/20 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <motion.h2
            className='text-4xl lg:text-6xl font-bold mb-6 tracking-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'>
              Let&apos;s Work
            </span>
            <br />
            <span className='text-foreground'>Together</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8'
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'
          >
            Ready to bring your ideas to life? I&apos;m always excited about new
            opportunities and meaningful collaborations. Let&apos;s create
            something amazing together.
          </motion.p>
        </motion.div>

        {mounted && (
          <div className='grid lg:grid-cols-12 gap-8 lg:gap-16'>
            {/* Left Column - Contact Info */}
            <div className='lg:col-span-5 space-y-8'>
              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='space-y-4'
              >
                <h3 className='text-2xl font-semibold mb-6'>Get In Touch</h3>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <Link
                      href={item.href}
                      className='group block p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-500'
                    >
                      <div className='flex items-start gap-4'>
                        <div className='size-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                          <item.icon className='size-5 text-blue-600 group-hover:text-purple-600 transition-colors duration-300' />
                        </div>
                        <div className='space-y-1 flex-1'>
                          <p className='font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300'>
                            {item.label}
                          </p>
                          <p className='text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
                            {item.value}
                          </p>
                          <p className='text-xs text-muted-foreground'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='space-y-6'
              >
                <h4 className='text-xl font-semibold'>Follow Me</h4>
                <div className='flex gap-4'>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -4 }}
                    >
                      <Link
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:shadow-xl transition-all duration-300'
                        title={social.description}
                      >
                        <social.icon className='size-6 group-hover:scale-110 transition-transform duration-300' />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <div className='lg:col-span-7'>
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-xl'
              >
                <div className='mb-8'>
                  <h3 className='text-xl font-semibold mb-2 flex items-center gap-2'>
                    <MessageCircle className='size-6 text-blue-600' />
                    Send Me a Message
                  </h3>
                  <p className='text-muted-foreground'>
                    Tell me about your project, and I&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                  <div className='grid sm:grid-cols-2 gap-6'>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor='name'
                        className='text-xs font-medium mb-3 text-foreground flex items-center gap-2'
                      >
                        <Users className='size-4' />
                        Name
                      </label>
                      <Input
                        id='name'
                        {...register('name')}
                        required
                        aria-invalid={!!errors.name}
                        className={`h-12 bg-background/50 border-border/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                          errors.name
                            ? 'border-destructive focus:border-destructive'
                            : ''
                        }`}
                        placeholder='Your full name'
                        autoComplete='name'
                      />
                      {errors.name && (
                        <p className='text-destructive text-xs mt-2'>
                          {errors.name.message}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor='email'
                        className='text-xs font-medium mb-3 text-foreground flex items-center gap-2'
                      >
                        <Mail className='size-4' />
                        Email
                      </label>
                      <Input
                        id='email'
                        type='email'
                        {...register('email')}
                        required
                        aria-invalid={!!errors.email}
                        className={`h-12 bg-background/50 border-border/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                          errors.email
                            ? 'border-destructive focus:border-destructive'
                            : ''
                        }`}
                        placeholder='your.email@example.com'
                        autoComplete='email'
                      />
                      {errors.email && (
                        <p className='text-destructive text-xs mt-2'>
                          {errors.email.message}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor='message'
                      className='text-xs font-medium mb-3 text-foreground flex items-center gap-2'
                    >
                      <MessageCircle className='size-4' />
                      Message
                    </label>
                    <Textarea
                      id='message'
                      rows={6}
                      {...register('message')}
                      required
                      aria-invalid={!!errors.message}
                      className={`bg-background/50 border-border/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none transition-all duration-300 min-h-[120px] ${
                        errors.message
                          ? 'border-destructive focus:border-destructive'
                          : ''
                      }`}
                      placeholder='Tell me about your project, ideas, or just say hello...'
                      autoComplete='off'
                    />
                    {errors.message && (
                      <p className='text-destructive text-xs mt-2'>
                        {errors.message.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2'
                    >
                      {isSubmitting ? (
                        <>
                          <div className='size-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className='size-4' />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>

                {/* What happens next */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className='mt-8 p-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl border border-border/30'
                >
                  <h4 className='font-semibold mb-3 text-foreground'>
                    What happens next?
                  </h4>
                  <div className='space-y-2 text-sm text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                      <div className='size-1.5 bg-blue-600 rounded-full shrink-0' />
                      <span>I&apos;ll review your message within 24 hours</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='size-1.5 bg-purple-600 rounded-full shrink-0' />
                      <span>
                        We&apos;ll schedule a meeting to discuss your project
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='size-1.5 bg-cyan-600 rounded-full shrink-0' />
                      <span>
                        We&apos;ll provide a detailed proposal and timeline
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='border-t border-border/50 mt-20 pt-12 text-center'
        >
          <p className='text-muted-foreground'>
            © {new Date().getFullYear()} Sazzad Hossain. Crafted with attention
            to detail and passion for excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
