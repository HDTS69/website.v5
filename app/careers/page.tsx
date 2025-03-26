'use client';

import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { MobileHeader } from "@/components/mobile";
import { Navigation } from "@/components/ui/Navigation";
import { navigationItems, actionItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { WaveInput } from '@/components/ui/BookingForm';
import { GoogleReviews } from '@/components/ui/GoogleReviews';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  additionalInfo: string;
  documents: FileList | null;
}

// Common Background Wrapper
function BackgroundWrapper({ 
  children, 
  className = "", 
  id 
}: { 
  children: React.ReactNode, 
  className?: string,
  id?: string 
}) {
  return (
    <section className={`relative w-full bg-black ${className}`} id={id}>
      <BackgroundSparkles useFixed={false} zIndex={5} />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

const CareerPage = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    additionalInfo: '',
    documents: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({ ...prev, [name]: files }));
      
      // Clear error when user selects files
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name';
    } else {
      const nameParts = formData.fullName.trim().split(' ');
      if (nameParts.length < 2 || nameParts[1].trim() === '') {
        newErrors.fullName = 'Please enter both your first and last name';
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else {
      const phoneRegex = /^(?:\+61|0)[2-478](?:[ -]?\d{4}[ -]?\d{4}|\d{8})$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid Australian phone number';
      }
    }
    
    if (!formData.documents) {
      newErrors.documents = 'Please upload your resume and cover letter (if available)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm() || isSubmitting) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <MobileHeader />
      <Navigation items={navigationItems} actionItems={actionItems} />

      <main className="relative w-full">
        {/* Hero Section */}
        <BackgroundWrapper className="relative mt-40 pt-4 sm:pt-20 md:pt-24 lg:pt-28 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
              <div className="max-w-4xl text-center">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="block mt-4 sm:mt-0 text-white">Career Opportunities</span>
                  <span className="block text-[0.7em] mt-2 sm:mt-1 text-gray-300 font-normal">Join our team of skilled professionals and grow your career with us</span>
                  <motion.div 
                    className="absolute -bottom-3 sm:-bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                    transition={{ duration: 1.5 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.h1>
                
                <motion.p 
                  className="text-gray-300 mt-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  We're looking for talented professionals who share our commitment to excellence and customer service. Join our team and be part of a company that values growth, innovation, and success.
                </motion.p>
              </div>
            </div>
          </div>
        </BackgroundWrapper>

        {/* What We Can Offer Section */}
        <BackgroundWrapper className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full"
                >
                  <div className="aspect-video bg-black/40 relative overflow-hidden rounded-2xl border border-[#00E6CA]/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                      <div className="w-full h-full bg-gradient-to-br from-[#00E6CA]/40 to-transparent blur-2xl"></div>
                    </div>
                    <div className="relative z-10 text-center p-8">
                      <svg className="w-20 h-20 text-[#00E6CA]/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-xl font-semibold text-white mb-2">Career Opportunities Video</h3>
                      <p className="text-gray-400">Learn about working with our team</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col justify-center"
                >
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold text-white mb-6 relative inline-block pb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    WHAT WE CAN OFFER YOU
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#00E6CA] to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.h2>
                  
                  <ul className="space-y-5">
                    <motion.li 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00E6CA]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#00E6CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold pt-0.5">We pay above-average wages plus exciting bonuses and incentives!! $$$$</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00E6CA]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#00E6CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold pt-0.5">Well maintained, fully stocked vehicle and latest equipment.</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00E6CA]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#00E6CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold pt-0.5">With several office staff to assist on day-to-day operations. Leaving you burden-free from organising tedious tasks.</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00E6CA]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#00E6CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold pt-0.5">Easy, automated applications that make the jobs effortless.</span>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </BackgroundWrapper>

        {/* Job Details Section */}
        <BackgroundWrapper className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center relative inline-block pb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Available Positions
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.h2>

              <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
                Are you a professional plumber who cares about customer service? Below are our available positions for Brisbane plumbing jobs.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8 mb-8 hover:border-[#00E6CA]/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#00E6CA] mb-4">RESIDENTIAL MAINTENANCE PLUMBER</h3>
                <p className="text-gray-300 mb-4">
                  HD Trade Services – the leading <span className="text-[#00E6CA]">plumbing company in Brisbane</span> is looking for residential maintenance plumbers.
                </p>
                <p className="text-gray-300 mb-4">
                  We are a customer-focused, reliable plumbing company. We are proud to offer a team mentality, good working environment, fully stocked vehicles, office support to enable superior organization, adequate job time to ensure quality workmanship and well-maintained equipment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-black/30 rounded-xl p-6 border border-gray-800/40">
                    <h4 className="text-xl font-bold text-white mb-4 pb-2 border-b border-[#00E6CA]/20">Requirements</h4>
                    <ul className="space-y-3">
                      {["Plumbing Licence", "Experience within the plumbing maintenance sector", "Able to follow procedures", "Friendly, personable nature", "Neat and tidy appearance", "Good communication skills"].map((item) => (
                        <li key={item} className="flex items-start space-x-3 text-gray-300 group">
                          <svg className="w-5 h-5 text-[#00E6CA] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-6 border border-gray-800/40">
                    <h4 className="text-xl font-bold text-white mb-4 pb-2 border-b border-[#00E6CA]/20">Responsibilities</h4>
                    <ul className="space-y-3">
                      {[
                        "All general plumbing works - maintenance and installations.",
                        "Carry out installations of all general plumbing fixtures including but not limited to, hot water systems, toilet, tap sets, shower fittings, etc.",
                        "Willingness to learn how to operate a jet rodding machine.",
                        "Have good knowledge of the relevant plumbing regulations.",
                        "Carry out all works to industry standards."
                      ].map((item) => (
                        <li key={item} className="flex items-start space-x-3 text-gray-300 group">
                          <svg className="w-5 h-5 text-[#00E6CA] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#00E6CA]/5 rounded-xl border border-[#00E6CA]/20">
                  <p className="text-gray-200 text-center">
                    If you meet the above criteria and are interested in working for a professional, organized and friendly plumbing company please call on <a href="tel:1300420911" className="text-[#00E6CA] hover:underline font-semibold">1300 420 911</a>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </BackgroundWrapper>

        {/* Application Form Section */}
        <BackgroundWrapper className="py-20" id="apply-now">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Online Application
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.h2>
              
              <div className="p-6 md:p-8 rounded-2xl border border-[#00E6CA]/20 backdrop-blur-sm bg-black/40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    {isSubmitted ? (
                      <motion.div 
                        className="bg-black/30 rounded-xl p-8 border border-[#00E6CA]/20 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="inline-block p-4 bg-[#00E6CA]/10 rounded-full mb-6">
                          <svg className="w-16 h-16 text-[#00E6CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                        <p className="text-gray-300 text-lg mb-6">Your application has been submitted successfully.</p>
                        <p className="text-gray-300">We'll be in touch with you soon.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                        <div className="space-y-6">
                          <WaveInput
                            required
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            label="Name"
                            error={errors.fullName}
                          />

                          <WaveInput
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            label="Email"
                            error={errors.email}
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                          />

                          <WaveInput
                            required
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            label="Phone"
                            error={errors.phone}
                            pattern="^(?:\+61|0)[2-478](?:[ -]?\d{4}[ -]?\d{4}|\d{8})$"
                          />
                          
                          <WaveInput
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            label="Additional Information"
                            isTextArea
                          />
                        </div>

                        <div className="mt-6 space-y-4">
                          <div className="space-y-2">
                            <label className="flex items-center justify-between">
                              <span className="text-white font-semibold">Upload Resume & Cover Letter <span className="text-[#00E6CA]">*</span></span>
                              {formData.documents && (
                                <span className="text-[#00E6CA] text-sm">{Array.from(formData.documents).map(file => file.name).join(', ')}</span>
                              )}
                            </label>
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className={cn(
                                "w-full px-4 py-3 rounded border",
                                errors.documents ? "border-red-500" : "border-gray-700",
                                "text-left text-gray-400 hover:border-[#00E6CA] transition-colors"
                              )}
                            >
                              {formData.documents ? 'Change Files' : 'Select Files'}
                            </button>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept=".pdf,.doc,.docx"
                              name="documents"
                              onChange={handleFileChange}
                              className="hidden"
                              required
                              multiple
                            />
                            {errors.documents ? (
                              <span className="text-red-500 text-xs">{errors.documents}</span>
                            ) : (
                              <span className="text-gray-400 text-xs">You can upload multiple files (PDF, DOC, DOCX)</span>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-center mt-8">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                              "w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                              "bg-[#00E6CA] hover:bg-[#00E6CA]/90 text-white",
                              "shadow-lg hover:shadow-xl hover:shadow-[#00E6CA]/20",
                              isSubmitting && "opacity-50 cursor-not-allowed"
                            )}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </span>
                            ) : "Submit Application"}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                  
                  {/* Blur placeholder image with better styling */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="rounded-xl w-full h-96 bg-black/40 backdrop-blur-sm border border-[#00E6CA]/20 p-6 flex items-center justify-center overflow-hidden relative group">
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                        <div className="w-full h-full bg-gradient-to-br from-[#00E6CA]/40 to-transparent blur-2xl"></div>
                      </div>
                      <div className="relative z-10 text-center">
                        <svg className="w-24 h-24 text-[#00E6CA]/20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <p className="text-[#00E6CA]/50 text-xl font-semibold">Join Our Team</p>
                        <p className="text-gray-500 mt-2">Become part of our professional team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundWrapper>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerPage; 