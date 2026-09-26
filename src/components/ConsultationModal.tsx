import React, { useState } from 'react';
import { X, CheckCircle, Send, ShieldCheck } from 'lucide-react';
import type { Counsel } from '../types';
import { submitConsultationRequest } from '../services/counselService';

interface ConsultationModalProps {
  counsel: Counsel | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ counsel, isOpen, onClose }) => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [matterType, setMatterType] = useState('Constitutional Law');
  const [description, setDescription] = useState('');
  const [preferredContact, setPreferredContact] = useState<'email' | 'phone' | 'whatsapp'>('email');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !counsel) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      submitConsultationRequest({
        counselId: counsel.id,
        counselName: counsel.name,
        clientName,
        clientEmail,
        clientPhone,
        matterType,
        description,
        preferredContact,
        submittedAt: new Date().toISOString()
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-navy-900 border border-gold-500/30 rounded-xl shadow-2xl overflow-hidden gold-border-glow">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gold-500/20 bg-navy-850">
          <div>
            <div className="text-xs font-semibold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>Verified Supreme Court Counsel Consultation</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mt-1">
              Request Consultation with {counsel.name}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-slate-100">Consultation Request Submitted Successfully</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your request has been routed to <strong>{counsel.name}</strong>'s chambers registry. You will be contacted via {preferredContact} within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-lg bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-navy-850/60 p-3 rounded-lg border border-gold-500/15 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="font-semibold text-gold-400">{counsel.designation}</span> • {counsel.location}
                </div>
                <div className="text-slate-400">{counsel.barCouncilNo}</div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Advocate, Corporate Representative, or Litigant Name"
                  className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@lawfirm.com"
                    className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Matter Category</label>
                  <select
                    value={matterType}
                    onChange={(e) => setMatterType(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 focus:outline-none focus:border-gold-400 text-sm"
                  >
                    <option value="Constitutional Law">Constitutional Law</option>
                    <option value="Corporate Law">Corporate Law</option>
                    <option value="Arbitration">Arbitration</option>
                    <option value="Criminal Law">Criminal Law / PMLA</option>
                    <option value="Insolvency & Bankruptcy">Insolvency (IBC)</option>
                    <option value="Tax Law">Tax Law / GST</option>
                    <option value="Intellectual Property">Intellectual Property</option>
                    <option value="Civil Litigation">Civil Appeal / SLP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Contact</label>
                  <div className="flex gap-2 pt-1">
                    {(['email', 'phone', 'whatsapp'] as const).map(method => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setPreferredContact(method)}
                        className={`flex-1 py-1.5 px-2 text-xs rounded border transition-colors capitalize ${preferredContact === method
                          ? 'bg-gold-500/20 border-gold-400 text-gold-300 font-semibold'
                          : 'bg-navy-850 border-gold-500/10 text-slate-400 hover:text-slate-200'
                          }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Brief Description of Legal Matter *</label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide brief details on case stage, Supreme Court appeal goals, or urgent interim stays needed..."
                  className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400 text-sm"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-slate-200 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-lg bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition-colors flex items-center gap-2 text-sm shadow-md disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
