import React, { useState } from 'react';
import { Shield, Plane, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tourDate: '',
    buyerStatus: 'Principal Buyer',
    accommodations: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const statusOptions = ['Principal Buyer', 'Family Office', "Buyer's Broker"];

  return (
    <section id="acquisition" className="py-28 px-6 bg-[#0B0C0E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Broker Profile & Trust Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                Private Representation
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F5F0] font-light mt-2 leading-tight">
                Arrange a Confidential Showing
              </h2>
              <p className="text-[#9CA3AF] text-sm font-light mt-4 leading-relaxed">
                Showings for Solaria Estate are conducted exclusively for verified purchasers under strict confidentiality. Private helipad arrival coordination available upon request.
              </p>
            </div>

            {/* Broker Card */}
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-[#131518] border border-[#24262B]">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Elena Vance Principal Broker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl text-[#F5F5F0]">Elena Vance &amp; Partners</p>
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">
                  Ultra-Prime Oceanfront Division
                </p>
                <p className="text-xs text-neutral-400 mt-1 font-mono">
                  +1 (831) 498-8200 • direct@solaria-estate.com
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3.5">
              <div className="flex items-center space-x-3 text-sm text-[#9CA3AF]">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>Fully vetted title &amp; certified geologic foundation reports available</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#9CA3AF]">
                <Shield className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>Standard Non-Disclosure Agreement (NDA) required prior to entry</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#9CA3AF]">
                <Plane className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>Monterey Regional Executive Jet Terminal concierge transfer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#131518] border border-[#24262B] shadow-2xl space-y-6">
              <div className="border-b border-[#24262B] pb-4">
                <h3 className="font-serif text-2xl text-[#F5F5F0]">
                  Request Private Appointment
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Please provide your preferred scheduling window and representative details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Sterling"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#24262B] text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Confidential Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@advisory.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#24262B] text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Telephone / Signal
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#24262B] text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Preferred Tour Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.tourDate}
                      onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#24262B] text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                    Representation Status
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {statusOptions.map((status) => (
                      <label
                        key={status}
                        className={`flex items-center space-x-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.buyerStatus === status
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                            : 'border-[#24262B] bg-[#0B0C0E] text-neutral-400 hover:border-[#D4AF37]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="buyerStatus"
                          value={status}
                          checked={formData.buyerStatus === status}
                          onChange={(e) =>
                            setFormData({ ...formData, buyerStatus: e.target.value })
                          }
                          className="accent-[#D4AF37]"
                        />
                        <span className="text-xs">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Special Accommodations or Inquiries
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify any security protocols, arrival by air, or private preview requests..."
                    value={formData.accommodations}
                    onChange={(e) =>
                      setFormData({ ...formData, accommodations: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#24262B] text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E8C86A] hover:to-[#D4AF37] text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] active:scale-[0.99]"
                  >
                    Submit Confidential Booking Request
                  </button>
                </div>

                {isSubmitted && (
                  <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-center animate-fade-in">
                    <p className="text-xs font-mono text-[#D4AF37]">
                      ✓ Showing request received. The listing partner will contact you directly within 4 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
