import React from 'react';
import { PROPERTY_DATA } from '../constants';
import { BedDouble, Bath, Ruler, Trees, Home, Compass } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Ruler, label: 'BUA', value: `${PROPERTY_DATA.bua}m²` },
    { icon: Trees, label: 'Garden', value: `${PROPERTY_DATA.garden}m²` },
    { icon: Home, label: 'Land Area', value: `${PROPERTY_DATA.land}m²` },
    { icon: BedDouble, label: 'Bedrooms', value: PROPERTY_DATA.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: PROPERTY_DATA.bathrooms },
    { icon: Compass, label: 'Orientation', value: 'Bahary (North)' },
  ];

  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 font-serif mb-4">Property Specifications</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A meticulously designed middle townhouse offering spacious living areas and a prime location within the Stone Park community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-amber-100 text-amber-700 rounded-full mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{feature.value}</h3>
                <p className="text-slate-500 uppercase text-sm tracking-wider mt-1">{feature.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-serif font-bold mb-2">Ready for customization</h3>
                <p className="text-slate-400">Delivered as Core & Shell, giving you the freedom to design your dream interior.</p>
            </div>
            <div className="flex gap-2">
                 <div className="px-6 py-3 bg-slate-800 rounded border border-slate-700 text-center">
                    <span className="block text-amber-500 font-bold text-xl">Jan 2027</span>
                    <span className="text-xs text-slate-400 uppercase">Delivery</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;