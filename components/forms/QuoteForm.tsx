'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  Package,
  FileText,
} from 'lucide-react';
import { QuoteFormData } from '@/types';

export const QuoteForm: React.FC = () => {
  const searchParams = useSearchParams();
  const initialProduct = searchParams?.get('product') || 'turmeric-finger';

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    country: '',
    phoneWhatsapp: '',
    productRequirement:
      initialProduct === 'turmeric-powder'
        ? 'Turmeric Powder'
        : 'Turmeric Finger',
    requiredQuantity: '',
    preferredPackaging: '25 kg PP / Jute Bags',
    destinationPort: '',
    targetDeliveryDate: '',
    additionalRequirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialProduct === 'turmeric-powder') {
      setFormData((prev) => ({ ...prev, productRequirement: 'Turmeric Powder' }));
    } else if (initialProduct === 'turmeric-finger') {
      setFormData((prev) => ({ ...prev, productRequirement: 'Turmeric Finger' }));
    }
  }, [initialProduct]);

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
      !formData.businessEmail ||
      !formData.country ||
      !formData.productRequirement
    ) {
      setError('Please fill in all mandatory fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Failed to send quotation request.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Quote submission error:', err);
      setError(
        err?.message ||
          'Failed to send quotation request. Please check your configuration or contact sales@goamazeglobal.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 sm:p-12 text-center max-w-2xl mx-auto border-blue-500/40">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 font-heading">
          Quotation Request Submitted!
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-body">
          Thank you, <strong className="text-white">{formData.fullName}</strong>. Your quotation details have been sent to <strong className="text-[#F2B544]">sales@goamazeglobal.com</strong>. Our export desk will review your specifications and reply to <strong className="text-white">{formData.businessEmail}</strong> with pricing and shipping estimates.
        </p>
        <div className="p-4 bg-white/5 rounded-2xl text-xs text-slate-300 border border-white/10 mb-6 text-left space-y-1.5 font-body">
          <p className="font-semibold text-blue-300 mb-1 font-heading uppercase tracking-wider text-[11px]">Submitted Inquiry Summary:</p>
          <p>• <span className="text-slate-400">Company:</span> <strong className="text-white">{formData.companyName}</strong> ({formData.country})</p>
          <p>• <span className="text-slate-400">Product:</span> <strong className="text-[#F2B544]">{formData.productRequirement}</strong></p>
          <p>• <span className="text-slate-400">Email:</span> <strong className="text-white">{formData.businessEmail}</strong></p>
          {formData.phoneWhatsapp && <p>• <span className="text-slate-400">Phone:</span> {formData.phoneWhatsapp}</p>}
          {formData.requiredQuantity && <p>• <span className="text-slate-400">Volume:</span> {formData.requiredQuantity}</p>}
          {formData.preferredPackaging && <p>• <span className="text-slate-400">Packaging:</span> {formData.preferredPackaging}</p>}
          {formData.destinationPort && <p>• <span className="text-slate-400">Port:</span> {formData.destinationPort}</p>}
          {formData.targetDeliveryDate && <p>• <span className="text-slate-400">Timeline:</span> {formData.targetDeliveryDate}</p>}
          {formData.additionalRequirements && <p>• <span className="text-slate-400">Notes:</span> {formData.additionalRequirements}</p>}
        </div>
        <div className="flex items-center justify-center pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                companyName: '',
                businessEmail: '',
                country: '',
                phoneWhatsapp: '',
                productRequirement: 'Turmeric Finger',
                requiredQuantity: '',
                preferredPackaging: '25 kg PP / Jute Bags',
                destinationPort: '',
                targetDeliveryDate: '',
                additionalRequirements: '',
              });
            }}
            className="btn-primary py-2.5 px-6 text-xs font-bold"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  const inputStyles =
    'w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all font-body';

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-6 sm:p-10 relative overflow-hidden"
    >
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-sm flex items-center gap-2 font-body">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Section 1: Buyer Information */}
      <div className="mb-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center gap-2 mb-4 font-heading">
          <User className="w-4 h-4" />
          <span>1. Buyer Information</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              placeholder="e.g. John Smith"
              className={inputStyles}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
              Company / Business Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Global Foods Trading LLC"
              className={inputStyles}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
              Business Email <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              name="businessEmail"
              required
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="e.g. purchasing@globalfoods.com"
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
              placeholder="e.g. United Arab Emirates, Germany, USA"
              className={inputStyles}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              name="phoneWhatsapp"
              value={formData.phoneWhatsapp}
              onChange={handleChange}
              placeholder="e.g. +971 50 123 4567"
              className={inputStyles}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Product & Commercial Requirements */}
      <div className="mb-8 pt-6 border-t border-white/10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2 mb-4 font-heading">
          <Package className="w-4 h-4" />
          <span>2. Product & Commercial Requirements</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
              Product Requirement <span className="text-blue-400">*</span>
            </label>
            <select
              name="productRequirement"
              value={formData.productRequirement}
              onChange={handleChange}
              className={inputStyles}
            >
              <option value="Turmeric Finger">Turmeric Finger (Whole Dried)</option>
              <option value="Turmeric Powder">Turmeric Powder (Ground)</option>
              <option value="Both Products">Both (Turmeric Finger & Powder)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
              Estimated Required Quantity
            </label>
            <input
              type="text"
              name="requiredQuantity"
              value={formData.requiredQuantity}
              onChange={handleChange}
              placeholder="e.g. 1 FCL 20ft (approx. 18-20 MT)"
              className={inputStyles}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
              Preferred Packaging
            </label>
            <select
              name="preferredPackaging"
              value={formData.preferredPackaging}
              onChange={handleChange}
              className={inputStyles}
            >
              <option value="25 kg PP / Jute Bags">25 kg PP / Jute Bags</option>
              <option value="50 kg PP / Jute Bags">50 kg PP / Jute Bags</option>
              <option value="25 kg Multiwall Paper Bags">25 kg Multiwall Kraft Paper Bags</option>
              <option value="Custom Bulk / Liner Bags">Custom Bulk / Liner Bags</option>
              <option value="Discuss per Requirement">Discuss per Requirement</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
              Destination Port / City
            </label>
            <input
              type="text"
              name="destinationPort"
              value={formData.destinationPort}
              onChange={handleChange}
              placeholder="e.g. Jebel Ali / Hamburg / New York"
              className={inputStyles}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
              Target Delivery Schedule / Timeline
            </label>
            <input
              type="text"
              name="targetDeliveryDate"
              value={formData.targetDeliveryDate}
              onChange={handleChange}
              placeholder="e.g. Immediate / Next Month / Quarterly Supply"
              className={inputStyles}
            />
          </div>
        </div>
      </div>

      {/* Section 3: Additional Notes */}
      <div className="mb-8 pt-6 border-t border-white/10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2 mb-4 font-heading">
          <FileText className="w-4 h-4" />
          <span>3. Additional Specifications & Requirements</span>
        </h3>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-body">
            Tell us about your requirement (Mesh size, polishing level, testing requirements, Incoterms, etc.)
          </label>
          <textarea
            name="additionalRequirements"
            rows={4}
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Provide any specific quality parameters, required destination documentation, or specific buyer notes..."
            className={`${inputStyles} resize-y`}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Submitting Quotation Request...' : 'Submit Inquiry & Get Quote'}</span>
        </button>

        <p className="text-center text-xs text-slate-400 mt-4 font-body">
          Your inquiry will be processed confidentially by our export desk. Direct email:{' '}
          <a href="mailto:sales@goamazeglobal.com" className="text-blue-400 underline font-medium">
            sales@goamazeglobal.com
          </a>
        </p>
      </div>
    </form>
  );
};

export default QuoteForm;
