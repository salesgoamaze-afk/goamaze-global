'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '@/types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (
      !formData.fullName ||
      !formData.companyName ||
      !formData.email ||
      !formData.country ||
      !formData.message
    ) {
      setError('Please fill in all mandatory fields (Name, Company, Email, Country, and Message).');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          honeypot,
          formLoadedAt,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Failed to deliver message.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setError(
        err?.message ||
          'Failed to send message. Please email sales@goamazeglobal.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 border-blue-500/40 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 shadow-glow">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 font-heading">Message Sent to Sales Desk</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-body">
          Thank you, <strong className="text-white">{formData.fullName}</strong>. Your message has been delivered to <strong className="text-[#F2B544]">sales@goamazeglobal.com</strong>. Our export team will review your inquiry and reply to <strong className="text-white">{formData.email}</strong> shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              companyName: '',
              email: '',
              phone: '',
              country: '',
              subject: '',
              message: '',
            });
          }}
          className="btn-primary py-2.5 px-6 text-xs font-bold"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputStyles =
    'w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all font-body';

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-6 sm:p-8"
    >
      {/* Invisible Honeypot Field (Anti-Bot Trap) */}
      <div className="hidden absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
        <label htmlFor="contact_website_hp">Do not fill this field</label>
        <input
          id="contact_website_hp"
          type="text"
          name="honeypot"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && (
        <div className="mb-6 p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2 font-body">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
            Full Name <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputStyles}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
            Company Name <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Your Company / Organization"
            className={inputStyles}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
            Business Email <span className="text-blue-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className={inputStyles}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
            Country <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            placeholder="Your Country"
            className={inputStyles}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
            Inquiry Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Turmeric Sourcing Partnership / Sample Request"
            className={inputStyles}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
            Message / Inquiry Details <span className="text-blue-400">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your requirement or questions here..."
            className={`${inputStyles} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? 'Sending Message...' : 'Send Inquiry'}</span>
      </button>
    </form>
  );
};

export default ContactForm;
