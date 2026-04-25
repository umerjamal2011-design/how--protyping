import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowRight, BookOpen, Users, GraduationCap, Calendar, Star, PlayCircle } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop", // Majestic Galaxy
  "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2074&auto=format&fit=crop", // Purple Deep Space
  "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f41?q=80&w=2000&auto=format&fit=crop", // Starfield & Cosmic Dust
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Earth from Orbit
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
          {/* Full Screen Earth Background - Desktop Only */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden bg-black">
            {/* Using a static frame of Earth as requested */}
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              alt="Planet Earth" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center">
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
                  {/* --- DESKTOP LOGO DISPLAY --- */}
                  <div className="relative w-full hidden lg:block">
                    {/* Base image: Inverted to white (assuming original black text) */}
                    <img 
                      src="https://h-o-w.org/wp-content/uploads/2025/06/Asset-1xxxhdpi.png" 
                      alt="House of Wisdom Logo" 
                      className="w-full h-auto relative z-10 pointer-events-none brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Overlay: Original image masked to only the center mark (green part) */}
                    <img 
                      src="https://h-o-w.org/wp-content/uploads/2025/06/Asset-1xxxhdpi.png" 
                      alt="" 
                      className="w-full h-auto absolute inset-0 z-20 pointer-events-none"
                      style={{ clipPath: 'polygon(25% 0.5%, 61% 0.5%, 61% 88.5%, 25% 88.5%)' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* --- MOBILE LOGO DISPLAY --- */}
                  <div className="relative w-full lg:hidden">
                    {/* The Official Logo Image */}
                    <img 
                      src="https://h-o-w.org/wp-content/uploads/2025/06/Asset-1xxxhdpi.png" 
                      alt="House of Wisdom Logo" 
                      className="w-full h-auto relative z-10 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
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
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8 text-balance lg:text-white drop-shadow-sm lg:drop-shadow-md transition-colors">
                  Nurturing <span className="text-how-green lg:text-[#B2D2A4] auto-color italic">Curiosity</span> & Character.
                </h1>
                <p className="text-lg md:text-2xl text-how-ink/80 lg:text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty lg:drop-shadow-md transition-colors">
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
              link: "/programs/kids",
              img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop"
            },
            {
              title: "For Schools",
              desc: "Guided tours, timeline exhibitions, and curriculum-aligned resources for educators.",
              icon: GraduationCap,
              link: "/programs/tours",
              img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            },
            {
              title: "For Lifelong Learners",
              desc: "Topical sessions, adult programs, and deep dives into the Seven Episodes of Big History.",
              icon: BookOpen,
              link: "/programs/adults",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((path, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all min-h-[480px] lg:min-h-[560px] flex flex-col justify-end p-8 md:p-10"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={path.img} 
                  alt={path.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 md:mb-8 border border-white/30 group-hover:bg-how-green group-hover:border-how-green transition-colors duration-300">
                  <path.icon size={28} strokeWidth={1.5} className="md:w-[32px] md:h-[32px]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4 text-white drop-shadow-sm">{path.title}</h3>
                <p className="text-white/80 mb-6 md:mb-8 leading-relaxed max-w-sm drop-shadow-sm text-sm md:text-base">{path.desc}</p>
                <div className="inline-flex items-center gap-2 text-how-green font-medium group-hover:text-how-bronze transition-colors">
                  <Link to={path.link} className="flex items-center gap-2 hover:underline underline-offset-4">
                    <span>Discover more</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* All Programs Slider */}
      <section className="py-16 md:py-24 overflow-hidden relative bg-[#8DC63F] text-how-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            title="Explore All Programs" 
            subtitle="Discover Your Path" 
            className="[&>span]:text-how-ink [&>h2]:text-how-ink"
          />
        </div>
        
        {/* Full-bleed scrollable container */}
        <div className="w-full relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 pt-4 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { id: "young-explorers-camp", title: "Young Explorers Camp", category: "Kids", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop" },
              { id: "big-history-workshop", title: "Big History Workshop", category: "Teens", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop" },
              { id: "astronomy-night", title: "Astronomy Night", category: "Family", img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f41?q=80&w=2000&auto=format&fit=crop" },
              { id: "educator-training", title: "Educator Training", category: "Teachers", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" },
              { id: "leadership-seminar", title: "Leadership Seminar", category: "Adults", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
              { id: "creative-arts", title: "Creative Arts", category: "All Ages", img: "https://images.unsplash.com/photo-1460661419201-66c76c13d22d?q=80&w=2071&auto=format&fit=crop" },
            ].map((program, i) => (
              <a 
                key={i} 
                href={`#${program.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(program.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative flex-none w-[280px] md:w-[360px] aspect-[4/5] rounded-3xl overflow-hidden snap-start shrink-0 shadow-md hover:shadow-xl transition-all"
              >
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-how-ink/90 via-how-ink/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-4 self-start">
                    {program.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-2 leading-tight drop-shadow-md">{program.title}</h3>
                  <div className="flex items-center text-how-green font-medium mt-2 gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            html {
              scroll-behavior: smooth;
            }
          `}} />
        </div>
      </section>

      {/* Program Detailed Sections */}
      {[
        {
          id: "young-explorers-camp",
          title: "Young Explorers Camp",
          subtitle: "Kids Program",
          desc: "A hands-on camp designed to ignite curiosity in young minds. Children will engage in interactive experiments, outdoor explorations, and creative projects that make learning an adventure.",
          features: ["Interactive science experiments", "Nature exploration", "Creative arts and crafts"],
          img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop",
          bg: "white",
        },
        {
          id: "big-history-workshop",
          title: "Big History Workshop",
          subtitle: "Teens Program",
          desc: "Dive deep into the grand narrative of the universe. This workshop connects diverse disciplines to help teens understand how everything in our world is interconnected.",
          features: ["Cosmic evolution mapping", "Historical timeline building", "Critical thinking exercises"],
          img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop",
          bg: "parchment",
        },
        {
          id: "astronomy-night",
          title: "Astronomy Night",
          subtitle: "Family Experience",
          desc: "Join us under the stars for an evening of cosmic discovery. Perfect for families wanting to learn about constellations, planets, and the vastness of space together.",
          features: ["Stargazing with telescopes", "Constellation storytelling", "Astrophysics basics for all ages"],
          img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f41?q=80&w=2000&auto=format&fit=crop",
          bg: "green-dark",
        },
        {
          id: "educator-training",
          title: "Educator Training",
          subtitle: "Professional Development",
          desc: "Empower your teaching with innovative methodologies. Our training sessions provide educators with the tools to deliver engaging, cross-disciplinary lessons.",
          features: ["Curriculum integration strategies", "Interactive teaching techniques", "Resource sharing network"],
          img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
          bg: "white",
        },
        {
          id: "leadership-seminar",
          title: "Leadership Seminar",
          subtitle: "Adult Program",
          desc: "Develop your leadership potential through the lens of history and philosophy. Learn how the greatest minds shaped the world and apply those lessons today.",
          features: ["Philosophical leadership frameworks", "Historical case studies", "Strategic planning workshops"],
          img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
          bg: "parchment",
        },
        {
          id: "creative-arts",
          title: "Creative Arts",
          subtitle: "All Ages",
          desc: "Express yourself through various artistic mediums. Our creative arts program encourages participants to explore their imagination while learning new skills.",
          features: ["Painting and sculpting", "Digital art introduction", "Collaborative community projects"],
          img: "https://images.unsplash.com/photo-1460661419201-66c76c13d22d?q=80&w=2071&auto=format&fit=crop",
          bg: "green",
        }
      ].map((prog, index) => (
        <Section bg={prog.bg as any} id={prog.id} key={prog.id}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={index % 2 === 1 ? "lg:order-last" : ""}>
              <SectionHeader 
                title={prog.title} 
                subtitle={prog.subtitle} 
              />
              <p className="opacity-80 text-lg mb-8 leading-relaxed">
                {prog.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {prog.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-how-bronze flex items-center justify-center text-sm font-serif text-how-bronze shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/programs" variant={prog.bg.includes('green') ? 'secondary' : 'primary'} icon>Enroll Now</Button>
            </div>
            <div className={`relative ${index % 2 === 1 ? "lg:order-first" : ""}`}>
              <div className="aspect-square rounded-full border border-current opacity-20 p-8 absolute inset-0"></div>
              <div className="w-full h-full rounded-full overflow-hidden relative m-4 md:m-8 aspect-square flex border border-current">
                <img 
                  src={prog.img} 
                  alt={prog.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Upcoming Events Slider (Simplified for prototype) */}
      <Section bg="parchment-dark">
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
