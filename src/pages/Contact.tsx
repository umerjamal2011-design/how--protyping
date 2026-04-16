import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Phone, Linkedin, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: "What age groups do your programs cater to?",
    a: "We offer programs for all ages. Our Kids Programs typically range from 5-12 years, while our Adult Programs and Topical Sessions are designed for ages 16 and up. We also have family-oriented activities suitable for all ages."
  },
  {
    q: "Do you offer school group discounts?",
    a: "Yes, we offer specialized packages and pricing for school groups and educational institutions. Please contact our institutional team for a custom quote."
  },
  {
    q: "How does the LMS subscription work?",
    a: "Our digital portal operates on a monthly or annual subscription basis. You gain unlimited access to our library of recorded sessions, digital resources, and interactive courses as long as your subscription is active."
  },
  {
    q: "Can we collaborate on a custom exhibition?",
    a: "Absolutely. We frequently partner with schools, museums, and community centers to design and install custom educational exhibitions, including our signature Timeline Walls."
  }
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24">
      {/* Hero / Contact Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader 
              title="Let's Connect" 
              subtitle="Get in Touch" 
            />
            <p className="text-lg text-how-ink/70 mb-10 leading-relaxed">
              Whether you're a parent looking for the right program, an educator seeking resources, or an organization wanting to collaborate, we're here to help.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-how-green/10 flex items-center justify-center text-how-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Visit Us</h4>
                  <p className="text-how-ink/70">123 Education Boulevard<br/>Knowledge District, City 10010</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-how-green/10 flex items-center justify-center text-how-green shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email Us</h4>
                  <p className="text-how-ink/70">hello@h-o-w.org<br/>partnerships@h-o-w.org</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-how-green/10 flex items-center justify-center text-how-green shrink-0">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Follow Us</h4>
                  <a href="#" className="text-how-green hover:underline">House of Wisdom on LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-how-white p-8 md:p-12 rounded-3xl shadow-xl border border-how-parchment-dark">
            <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold tracking-widest uppercase text-how-ink/60 mb-2">First Name</label>
                  <input type="text" className="w-full bg-how-parchment border border-how-parchment-dark rounded-xl px-4 py-3 focus:outline-none focus:border-how-green transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-widest uppercase text-how-ink/60 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-how-parchment border border-how-parchment-dark rounded-xl px-4 py-3 focus:outline-none focus:border-how-green transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-how-ink/60 mb-2">Email Address</label>
                <input type="email" className="w-full bg-how-parchment border border-how-parchment-dark rounded-xl px-4 py-3 focus:outline-none focus:border-how-green transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-how-ink/60 mb-2">Inquiry Type</label>
                <select className="w-full bg-how-parchment border border-how-parchment-dark rounded-xl px-4 py-3 focus:outline-none focus:border-how-green transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Program Registration</option>
                  <option>School Partnership</option>
                  <option>LMS Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-how-ink/60 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-how-parchment border border-how-parchment-dark rounded-xl px-4 py-3 focus:outline-none focus:border-how-green transition-colors resize-none"></textarea>
              </div>
              <Button className="w-full">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Partner / Collaborate */}
      <Section bg="green">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="Partner With Us" 
            subtitle="Collaborate" 
            align="center"
            className="text-how-parchment mb-8"
          />
          <p className="text-xl text-how-parchment/80 leading-relaxed mb-10 text-balance">
            We believe that education is a collaborative effort. We partner with schools, cultural institutions, and thought leaders to expand our reach and deepen our impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              "Co-create educational content and curriculum.",
              "Host our traveling exhibitions at your venue.",
              "Integrate our LMS into your school's digital ecosystem."
            ].map((item, i) => (
              <div key={i} className="bg-how-green-dark p-6 rounded-2xl border border-how-parchment/10">
                <div className="w-8 h-8 rounded-full bg-how-bronze/20 flex items-center justify-center text-how-bronze mb-4">
                  {i + 1}
                </div>
                <p className="text-how-parchment/90">{item}</p>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="lg">Download Partnership Deck</Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="parchment-dark">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Clarity & Trust" 
            align="center"
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-how-white rounded-2xl overflow-hidden shadow-sm border border-how-parchment-dark">
                <button 
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-serif text-xl pr-8">{faq.q}</span>
                  <span className="text-how-green shrink-0">
                    {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-how-ink/70 leading-relaxed border-t border-how-parchment-dark/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
