'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Serif } from '@/components/ui';

export default function ContactPage() {
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
    'w-full px-5 py-3.5 rounded-[14px] border border-[#e6e6e6] bg-white text-[#0b0d21] text-sm placeholder:text-[#a2a3b1] focus:outline-none focus:border-[#4555fd] focus:ring-2 focus:ring-[#4555fd]/15 transition-all';

  return (
    <>
      {/* Hero banner */}
      <section className="hero-banner">
        <div className="container-marklab relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-44 pb-32">
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h1 text-white!"
            >
              Talk to <Serif>real</Serif> Humans
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-large text-[#dcdde2]! mt-6 max-w-xl"
            >
              No bots, no scripts — just real experts ready to help you grow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section-pad bg-white">
        <div className="container-marklab grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-10 items-start">
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="card rounded-[24px] p-8 lg:p-10">
              <h2 className="h3">Send us a message</h2>
              <p className="text-body mt-2 mb-8">
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0b0d21] mb-2">
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
                      <label className="block text-sm font-medium text-[#0b0d21] mb-2">
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
                    <label className="block text-sm font-medium text-[#0b0d21] mb-2">
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
                    <label className="block text-sm font-medium text-[#0b0d21] mb-2">
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

                  <button type="submit" className="btn btn-primary w-full justify-center">
                    <span>Send Inquiry</span>
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
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: MapPin,
                label: 'Office',
                content: <p className="text-body">Indore, Madhya Pradesh,<br />India</p>,
              },
              {
                icon: Mail,
                label: 'Email',
                content: (
                  <a href="mailto:Techcoinfotech@gmail.com" className="text-body hover:text-[#4555fd] transition-colors break-all">
                    Techcoinfotech@gmail.com
                  </a>
                ),
              },
              {
                icon: Phone,
                label: 'Main',
                content: (
                  <>
                    <a href="tel:+916232551312" className="text-body hover:text-[#4555fd] transition-colors block">
                      +91-6232551312
                    </a>
                    <a href="tel:+918770752740" className="text-body hover:text-[#4555fd] transition-colors block mt-1">
                      +91-8770752740
                    </a>
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="card p-6 flex items-start gap-4">
                <span className="icon-3d w-12 h-12 shrink-0">
                  <item.icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-bold text-[#0b0d21] mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="card overflow-hidden">
              <iframe
                title="Techco Infotech location"
                src="https://www.google.com/maps?q=Indore,MadhyaPradesh,India&output=embed"
                className="w-full h-56 border-0 block"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
