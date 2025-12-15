import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PROPERTY_DATA } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Details', href: '#details' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Financials', href: '#financials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-bold font-serif text-slate-900 tracking-tight">STONE PARK</span>
              <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">The Hills Willows</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-amber-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${PROPERTY_DATA.contact.phone}`}
              className="inline-flex items-center px-4 py-2 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all rounded-full text-sm font-bold"
            >
              <Phone className="w-4 h-4 mr-2" />
              {PROPERTY_DATA.contact.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PROPERTY_DATA.contact.phone}`}
              className="block w-full text-center mt-4 px-4 py-3 bg-amber-600 text-white font-bold rounded-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
