'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validateForm = (formData: FormData): boolean => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;
    
    // Name validation
    const name = formData.get('from_name') as string;
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }
    
    // Email validation
    const email = formData.get('from_email') as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Message validation
    const message = formData.get('message') as string;
    if (!message || message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    if (!validateForm(formData)) {
      return;
    }
    
    setStatus('sending');

    try {
      // Send email with EmailJS - this will trigger the auto-reply if configured in EmailJS
      await emailjs.sendForm(
        'service_g13p4xb', 
        'template_cpxwhoc',
        e.currentTarget,
        '6HbvE_Db3868FNRtP'
      );
      
      setStatus('sent');
      (e.target as HTMLFormElement).reset();
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-dark-800 p-8 rounded-lg shadow-xl border border-primary/20"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-light mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              className="w-full p-3 rounded bg-white border border-primary/20 text-dark focus:border-primary focus:outline-none"
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-light mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              required
              className="w-full p-3 rounded bg-white border border-primary/20 text-dark focus:border-primary focus:outline-none"
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>
          
          <input type="hidden" name="to_email" value="thulanizondo42@gmail.com" />
          <input type="hidden" name="reply_to" value="" />
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-light mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full p-3 rounded bg-white border border-primary/20 text-dark focus:border-primary focus:outline-none"
            />
            {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-primary text-white py-3 px-6 rounded hover:bg-primary/80 transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500 text-center">Failed to send message. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}; 