'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQsProps {
  faqs?: FAQ[]
  title?: string
  subtitle?: string
}

export function FAQs({ 
  faqs = [], 
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services'
}: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Default FAQs if none provided
  const defaultFAQs: FAQ[] = [
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, we offer 24/7 emergency services. Our team is always ready to help you with urgent issues at any time of day or night.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We service Brisbane and surrounding areas. Our coverage includes all suburbs in the Greater Brisbane region.'
    },
    {
      question: 'Are your technicians licensed and insured?',
      answer: 'Yes, all our technicians are fully licensed and insured. We maintain the highest standards of professionalism and safety in all our work.'
    },
    {
      question: 'How do I book a service?',
      answer: 'You can book a service by calling us directly, using our online booking form, or sending us an email. We aim to respond to all inquiries within 24 hours.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, cash, EFTPOS, and bank transfers. We also offer Buy Now Pay Later options for eligible customers.'
    }
  ]

  const displayFAQs = faqs.length > 0 ? faqs : defaultFAQs

  return (
    <div className="w-full py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">{title}</h2>
          <p className="text-gray-400">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {displayFAQs.map((faq, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-white"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-[#00E6CA] transition-transform duration-200",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-gray-800 px-6 py-4 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 