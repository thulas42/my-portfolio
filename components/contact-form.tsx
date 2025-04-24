'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        e.currentTarget,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      setStatus('sent');
      (e.target as HTMLFormElement).reset();
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
              className="w-full p-3 rounded bg-dark-900 border border-primary/20 text-light focus:border-primary focus:outline-none"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-light mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              required
              className="w-full p-3 rounded bg-dark-900 border border-primary/20 text-light focus:border-primary focus:outline-none"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-light mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full p-3 rounded bg-dark-900 border border-primary/20 text-light focus:border-primary focus:outline-none"
            />
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