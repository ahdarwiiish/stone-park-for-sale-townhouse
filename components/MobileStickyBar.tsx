import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PROPERTY_DATA } from '../constants';

const MobileStickyBar: React.FC = () => {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17808652172/okKSCLeuqtQbEIzv6atC',
        'value': 1.0,
        'currency': 'EGP'
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex h-16">
        <a
          href={`tel:${PROPERTY_DATA.contact.phone}`}
          className="flex-1 flex flex-col items-center justify-center text-slate-700 active:bg-slate-50 border-r border-slate-100"
        >
          <Phone className="w-5 h-5 mb-1 text-slate-900" />
          <span className="text-xs font-bold uppercase">Call Now</span>
        </a>
        <a
          href={`https://wa.me/${PROPERTY_DATA.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex-1 flex flex-col items-center justify-center bg-amber-600 text-white active:bg-amber-700"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-bold uppercase">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;