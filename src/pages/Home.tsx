import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowRight, BookOpen, Users, GraduationCap, Calendar, Star, PlayCircle } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop", // Library
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop", // Galaxy
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop", // Math
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", // Classroom
];

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-how-parchment">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          {/* Subtle Vignette instead of heavy mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-how-parchment/40 via-transparent to-how-parchment/40 z-10"></div>
          
          {/* Large Vivid Heptagonal Background Motif - Desktop Only */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vh] h-[150vh] md:w-[120vh] md:h-[120vh] pointer-events-none hidden lg:block">
            <div 
              className="w-full h-full relative aspect-square"
              style={{ clipPath: 'polygon(50% 0%, 92% 21%, 100% 60%, 80% 100%, 20% 100%, 0% 60%, 8% 21%)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={heroImages[currentImageIndex]} 
                    alt="Background" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center">
          {/* Subtle Content Backing Overlay */}
          <div className="absolute inset-x-0 top-[-10%] bottom-[-10%] -z-10 bg-gradient-to-b from-how-parchment/90 via-how-parchment/40 to-transparent blur-3xl opacity-80 pointer-events-none"></div>
          
          <div className="flex flex-col items-center gap-16 md:gap-24">
            {/* Logo Section (Centered) */}
            <div className="w-full max-w-lg">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center"
              >
                {/* Official Logo */}
                <div className="relative w-full">
                  {/* The Official Logo Image */}
                  <img 
                    src="https://h-o-w.org/wp-content/uploads/2025/06/Asset-1xxxhdpi.png" 
                    alt="House of Wisdom Logo" 
                    className="w-full h-auto relative z-10 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dynamic Image Overlay - Tablet/Mobile Only */}
                  <div 
                    className="absolute z-20 pointer-events-none lg:hidden"
                    style={{ 
                      top: '0%', 
                      left: '24.3%', 
                      width: '36.2%', 
                      height: '80.4%' 
                    }}
                  >
                    <div 
                      className="w-full h-full overflow-hidden relative"
                      style={{ clipPath: 'polygon(50% 0%, 92% 21%, 100% 60%, 80% 100%, 20% 100%, 0% 60%, 8% 21%)' }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentImageIndex}
                          src={heroImages[currentImageIndex]} 
                          alt="Learning Journey" 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                          className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>
                      
                      {/* Subtle Sundial Needle Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                          className="w-0.5 h-1/3 bg-how-bronze/30 origin-bottom rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-how-white p-4 md:p-6 rounded-3xl shadow-xl min-w-[240px] md:min-w-[280px] z-30 border border-how-parchment-dark">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-how-bronze/20 flex items-center justify-center text-how-bronze">
                      <Star size={24} fill="currentColor" />
                    </div>
                    <div className="text-left">
                      <p className="font-serif text-lg md:text-xl leading-tight">Every Child</p>
                      <p className="font-serif text-xl italic text-how-green leading-tight">is a Hero</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Text Content Section (Below Logo) */}
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block py-1 px-3 rounded-full border border-how-bronze text-how-bronze text-xs font-bold tracking-widest uppercase mb-6">
                  A Living Educational Institution
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8 text-balance">
                  Nurturing <span className="text-how-green italic">Curiosity</span> & Character.
                </h1>
                <p className="text-lg md:text-2xl text-how-ink/80 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
                  House of Wisdom is a distinctive educational space where families, schools, and learners discover programs, resources, and experiences designed to shape the heroes of tomorrow.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button href="/programs" size="lg" icon>Explore Programs</Button>
                  <Button href="/about" variant="outline" size="lg">Our Story</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <Section bg="parchment-dark">
        <SectionHeader 
          title="Pathways to Wisdom" 
          subtitle="Who We Serve" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "For Families",
              desc: "Enriching programs, camps, and educational toys designed to spark joy and learning at home.",
              icon: Users,
              link: "/programs/kids"
            },
            {
              title: "For Schools",
              desc: "Guided tours, timeline exhibitions, and curriculum-aligned resources for educators.",
              icon: GraduationCap,
              link: "/programs/tours"
            },
            {
              title: "For Lifelong Learners",
              desc: "Topical sessions, adult programs, and deep dives into the Seven Episodes of Big History.",
              icon: BookOpen,
              link: "/programs/adults"
            }
          ].map((path, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-how-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-2xl bg-how-parchment flex items-center justify-center text-how-green mb-8 group-hover:bg-how-green group-hover:text-how-white transition-colors">
                <path.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif mb-4">{path.title}</h3>
              <p className="text-how-ink/70 mb-8 leading-relaxed">{path.desc}</p>
              <Button href={path.link} variant="link" icon>Discover more</Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Upcoming Events Slider (Simplified for prototype) */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader 
            title="Upcoming Events" 
            subtitle="Join the Community" 
            className="mb-0"
          />
          <Button href="/programs" variant="outline">View Calendar</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { date: "Oct 15", title: "Creative Corner: Autumn Arts", type: "Kids Program", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" },
            { date: "Oct 22", title: "The Golden Age of Discovery", type: "Topical Session", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop" },
            { date: "Nov 05", title: "Mathematics in Nature Tour", type: "Guided Tour", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop" }
          ].map((event, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-how-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-how-green">
                  {event.date}
                </div>
              </div>
              <p className="text-sm font-bold tracking-widest uppercase text-how-bronze mb-2">{event.type}</p>
              <h3 className="text-2xl font-serif group-hover:text-how-green transition-colors">{event.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Seven Episodes Feature */}
      <Section bg="green">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Seven Episodes of Big History" 
              subtitle="Our Core Curriculum" 
              className="text-how-parchment"
            />
            <p className="text-how-parchment/80 text-lg mb-8 leading-relaxed">
              Journey through time and space with our signature curriculum. From the Big Bang to the modern era, we connect the dots between science, history, and human achievement to provide a holistic understanding of our world.
            </p>
            <ul className="space-y-4 mb-10">
              {['The Universe & Stars', 'The Earth & Solar System', 'Life & Evolution', 'Early Humans'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-how-parchment">
                  <div className="w-8 h-8 rounded-full border border-how-bronze flex items-center justify-center text-sm font-serif text-how-bronze">
                    {i + 1}
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/programs/big-history" variant="secondary" icon>Explore the Episodes</Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full border border-how-parchment/20 p-8">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop" 
                  alt="Space nebula" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Products & Resources */}
      <Section>
        <SectionHeader 
          title="Resources for Learning" 
          subtitle="Products & Services" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Educational Toys", img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop" },
            { title: "Library Collection", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop" },
            { title: "Learning Kits", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
            { title: "Mathematic Tools", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop" }
          ].map((prod, i) => (
            <Link key={i} to="/products" className="group block">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                <img src={prod.img} alt={prod.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-how-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-serif text-center group-hover:text-how-green transition-colors">{prod.title}</h3>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/products" variant="outline" icon>Browse All Resources</Button>
        </div>
      </Section>

      {/* LMS Teaser */}
      <Section bg="parchment-dark">
        <div className="bg-how-white rounded-[3rem] p-10 md:p-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-how-green">
              <polygon points="0,100 100,0 100,100" />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-how-green/10 text-how-green text-xs font-bold tracking-widest uppercase mb-6">
                Digital Learning Portal
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Continue the Journey Anywhere.</h2>
              <p className="text-lg text-how-ink/70 mb-8 leading-relaxed">
                Access our premium recorded programs, exclusive resources, and interactive courses through our dedicated learning portal. Designed for families and schools to bring the House of Wisdom experience home.
              </p>
              <ul className="space-y-3 mb-10">
                {['Unlimited access to recorded sessions', 'Downloadable learning kits', 'Educator guides and lesson plans'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-how-ink/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-how-bronze"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/portal" size="lg" icon>Explore Memberships</Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-how-parchment-dark">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Digital learning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-how-ink/20">
                  <div className="w-20 h-20 rounded-full bg-how-white/90 backdrop-blur flex items-center justify-center text-how-green shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <PlayCircle size={40} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust / Testimonials */}
      <Section>
        <SectionHeader 
          title="Voices of Wisdom" 
          subtitle="Community Feedback" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "The programs here have completely transformed how my children view learning. They come home excited to share what they've discovered.", author: "Sarah M.", role: "Parent" },
            { quote: "As an educator, the resources provided by House of Wisdom are invaluable. The timeline exhibitions perfectly complement our curriculum.", author: "David T.", role: "Middle School Teacher" },
            { quote: "The adult topical sessions are intellectually stimulating and beautifully presented. A true cultural asset for our community.", author: "Elena R.", role: "Lifelong Learner" }
          ].map((testimonial, i) => (
            <div key={i} className="bg-how-parchment-dark p-10 rounded-3xl relative">
              <div className="text-how-bronze mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.596C16.63 13.98 16.74 13.36 16.74 12.74C16.74 11.24 16.19 9.99 15.09 8.99C13.99 7.99 12.64 7.49 11.04 7.49V4.49C13.44 4.49 15.54 5.29 17.34 6.89C19.14 8.49 20.04 10.59 20.04 13.19C20.04 14.19 19.89 15.19 19.59 16.19L17.19 23H14.017ZM4.977 21L7.37 14.596C7.59 13.98 7.7 13.36 7.7 12.74C7.7 11.24 7.15 9.99 6.05 8.99C4.95 7.99 3.6 7.49 2 7.49V4.49C4.4 4.49 6.5 5.29 8.3 6.89C10.1 8.49 11 10.59 11 13.19C11 14.19 10.85 15.19 10.55 16.19L8.15 23H4.977Z" />
                </svg>
              </div>
              <p className="text-lg font-serif italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-how-ink">{testimonial.author}</p>
                <p className="text-sm text-how-ink/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
