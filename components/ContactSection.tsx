import React from 'react';
import { PROPERTY_DATA } from '../constants';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Secure Your Future Home Today</h2>
            <p className="text-slate-400 mb-8 text-lg">
              This unit in Stone Park is a rare resale opportunity. Contact the owner directly to negotiate and close the deal.
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${PROPERTY_DATA.contact.phone}`}
                className="flex items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group border border-slate-700"
              >
                <div className="bg-amber-600 p-4 rounded-full mr-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Call Owner Directly</p>
                  <p className="text-2xl font-bold">{PROPERTY_DATA.contact.phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${PROPERTY_DATA.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="bg-[#25D366] p-4 rounded-full mr-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Chat on WhatsApp</p>
                  <p className="text-2xl font-bold text-[#25D366]">Start Chat</p>
                </div>
              </a>

              <a
                href={`mailto:${PROPERTY_DATA.contact.email}`}
                className="flex items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group border border-slate-700"
              >
                <div className="bg-slate-600 p-4 rounded-full mr-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Email Inquiry</p>
                  <p className="text-xl font-bold">{PROPERTY_DATA.contact.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form
              className="space-y-4"
              action={`https://formsubmit.co/${PROPERTY_DATA.contact.email}`}
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Interest in Stone Park Townhouse" />
              <input type="hidden" name="_next" value="https://ahdarwiiish.github.io/stone-park-for-sale-townhouse/thank-you.html" />
              {/* Optional: Add a redirect or auto-response config here if needed, e.g. <input type="hidden" name="_next" value="..." /> */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="+20 1xx xxx xxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="I am interested in the Stone Park Townhouse..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Submit Interest
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                By submitting, you agree to our <button type="button" className="underline hover:text-amber-600">Privacy Policy</button>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
