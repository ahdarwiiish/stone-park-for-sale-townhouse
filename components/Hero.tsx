import React from 'react';
import { PROPERTY_DATA, BROCHURE_URL, FALLBACK_IMAGES } from '../constants';
import { MapPin, Calendar, CheckCircle, ArrowRight, FileDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/page-36.jpg" 
          onError={(e) => {
            const target = e.currentTarget;
            // Prevent infinite error loop
            if (target.src !== FALLBACK_IMAGES.HERO) {
                target.src = FALLBACK_IMAGES.HERO;
            }
          }} 
          alt="Stone Park Townhouse Front View"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-down">
          <span className="inline-block px-4 py-1.5 bg-amber-600 text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-full shadow-lg shadow-amber-900/50">
            Exclusive Resale Opportunity
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight tracking-tight">
            {PROPERTY_DATA.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Own a slice of luxury in <span className="text-amber-400 font-semibold">{PROPERTY_DATA.projectPhase}</span>. 
            <br className="hidden md:block"/> Directly on the Ring Road.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-10 text-sm md:text-base text-slate-300 font-medium">
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-amber-500 mr-2" />
            Stone Park
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-amber-500 mr-2" />
            Jan 2027
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
            Core & Shell
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-lg font-bold rounded-lg shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center"
          >
            I'm Interested
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
           <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 text-lg font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center"
          >
            <FileDown className="mr-2 w-5 h-5 text-amber-600" />
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;