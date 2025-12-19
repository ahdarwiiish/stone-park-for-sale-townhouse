import React, { useState } from 'react';
import LegalModal, { PrivacyContent, TermsContent } from './LegalModals';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-xl font-bold font-serif text-white tracking-tight">STONE PARK</span>
              <p className="mt-4 text-sm max-w-xs">
                Premium residential community offering luxury living on the Ring Road.
                <br />
                <span dir="rtl" className="block mt-2">مجتمع سكني راقي بموقع متميز على الدائري.</span>
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links | روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#details" className="hover:text-amber-500 transition-colors">Details | تفاصيل</a></li>
                <li><a href="#financials" className="hover:text-amber-500 transition-colors">Financials | الأسعار</a></li>
                <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery | المعرض</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Address & Legal | العنوان</h4>
              <p className="text-sm mb-4">
                Stone Park Compound,<br />
                Ring Road, New Cairo, Egypt<br />
                <span dir="rtl" className="block mt-1">كمبوند ستون بارك، الطريق الدائري، القاهرة الجديدة.</span>
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <button onClick={() => setActiveModal('privacy')} className="hover:text-white underline text-left">Privacy Policy | سياسة الخصوصية</button>
                <button onClick={() => setActiveModal('terms')} className="hover:text-white underline text-left">Terms & Conditions | الشروط والأحكام</button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Stone Park Listing. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={<PrivacyContent />}
      />
      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms & Conditions"
        content={<TermsContent />}
      />
    </>
  );
};

export default Footer;
