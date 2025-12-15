import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="prose prose-slate max-w-none text-sm text-slate-600">
            {content}
          </div>
        </div>
        <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-xl flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const PrivacyContent = () => (
  <div className="space-y-4">
    <p><strong>Last Updated: October 2023</strong></p>
    <p>This Privacy Policy describes how we collect, use, and handle your personal information when you use our website to inquire about real estate listings.</p>
    <h4>1. Information We Collect</h4>
    <p>We collect information you provide directly to us, such as when you fill out a contact form. This includes your name, phone number, and email address.</p>
    <h4>2. How We Use Information</h4>
    <p>We use this information solely to communicate with you regarding the specific property listing you have inquired about. We do not sell or share your data with third-party marketing agencies.</p>
    <h4>3. Data Security</h4>
    <p>We implement reasonable security measures to protect your personal information.</p>
    <h4>4. Your Rights</h4>
    <p>You may contact us at any time to request the deletion of your contact information from our records.</p>
  </div>
);

export const TermsContent = () => (
  <div className="space-y-4">
    <p><strong>Last Updated: October 2023</strong></p>
    <h4>1. General</h4>
    <p>By accessing this website, you agree to be bound by these Terms and Conditions.</p>
    <h4>2. Property Details</h4>
    <p>All property details provided (prices, dimensions, delivery dates) are subject to change and should be verified directly with the owner before signing any contracts. The images shown may include artistic renderings or placeholders.</p>
    <h4>3. Limitation of Liability</h4>
    <p>We are not liable for any inaccuracies in the property description or for any decisions made based on the information provided on this landing page.</p>
  </div>
);

export default LegalModal;
