'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Reveal } from './ui';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const inputCls =
    'w-full px-5 py-3.5 rounded-[14px] border border-[#e6e6e6] bg-white text-[#0b0d21] text-[15px] placeholder:text-[#a2a3b1] focus:outline-none focus:border-[#4555fd] focus:ring-2 focus:ring-[#4555fd]/15 transition-all';

  return (
    <section id="contact" className="section-pad bg-[#fafafa]">
      <div className="container-marklab grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-14 items-start">
        {/* Form card */}
        <Reveal>
          <div className="card rounded-[24px] p-8 lg:p-12 shadow-sm bg-white">
            <h2 className="h3">Send us a message</h2>
            <p className="text-body mt-3 mb-10 leading-relaxed text-[#4e516a]">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <span className="w-16 h-16 rounded-full bg-[#edf2ff] text-[#4555fd] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={30} />
                </span>
                <h3 className="h4">Thank you! Your submission has been received!</h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0b0d21] mb-2.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={inputCls}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0b0d21] mb-2.5">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={inputCls}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0b0d21] mb-2.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className={inputCls}
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0b0d21] mb-2.5">
                    Notes *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full justify-center mt-8 !py-4 shadow-md hover:shadow-lg transition-all">
                  <span className="text-[16px]">Send Inquiry</span>
                  <span className="btn-arrows" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Info cards */}
        <Reveal delay={0.1} className="space-y-5">
          {[
            {
              icon: MapPin,
              label: 'Office',
              content: <p className="text-body mt-1.5 leading-relaxed text-[#4e516a]">Indore, Madhya Pradesh,<br />India</p>,
            },
            {
              icon: Mail,
              label: 'Email',
              content: (
                <a href="mailto:Techcoinfotech@gmail.com" className="text-body mt-1.5 block hover:text-[#4555fd] transition-colors break-all text-[#4e516a]">
                  Techcoinfotech@gmail.com
                </a>
              ),
            },
            {
              icon: Phone,
              label: 'Main',
              content: (
                <div className="mt-1.5 space-y-1">
                  <a href="tel:+916232551312" className="text-body hover:text-[#4555fd] transition-colors block text-[#4e516a]">
                    +91-6232551312
                  </a>
                  <a href="tel:+918770752740" className="text-body hover:text-[#4555fd] transition-colors block text-[#4e516a]">
                    +91-8770752740
                  </a>
                </div>
              ),
            },
          ].map((item) => (
            <div key={item.label} className="card p-7 flex items-start gap-5 bg-white">
              <span className="icon-3d w-14 h-14 shrink-0">
                <item.icon size={24} strokeWidth={1.8} />
              </span>
              <div>
                <p className="font-bold text-[17px] text-[#0b0d21]">{item.label}</p>
                {item.content}
              </div>
            </div>
          ))}

          {/* Map embed */}
          <div className="card overflow-hidden rounded-[20px] shadow-sm">
            <iframe
              title="Techco Infotech location"
              src="https://www.google.com/maps?q=Indore,MadhyaPradesh,India&output=embed"
              className="w-full h-64 border-0 block"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
