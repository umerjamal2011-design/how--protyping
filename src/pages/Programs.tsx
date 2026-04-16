import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  "All Programs",
  "Kids Programs",
  "Adult Programs",
  "Topical Sessions",
  "Creative Corner",
  "Guided Tours",
  "Kids Camps"
];

const programs = [
  { id: 1, title: "The Golden Age of Discovery", category: "Topical Sessions", age: "Adults", duration: "2 Hours", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop" },
  { id: 2, title: "Autumn Arts & Crafts", category: "Creative Corner", age: "6-10 Years", duration: "90 Mins", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" },
  { id: 3, title: "Mathematics in Nature", category: "Guided Tours", age: "All Ages", duration: "1 Hour", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Little Scientists Camp", category: "Kids Camps", age: "8-12 Years", duration: "5 Days", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
  { id: 5, title: "Introduction to Philosophy", category: "Adult Programs", age: "Adults", duration: "4 Weeks", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop" },
  { id: 6, title: "Storytelling Workshop", category: "Kids Programs", age: "5-8 Years", duration: "1 Hour", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop" },
];

export function Programs() {
  const [activeCategory, setActiveCategory] = useState("All Programs");

  const filteredPrograms = activeCategory === "All Programs" 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24">
      <Section bg="parchment-dark" className="pb-12">
        <SectionHeader 
          title="Programs & Activities" 
          subtitle="Discover Your Path" 
          align="center"
          className="mb-12"
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat 
                  ? "bg-how-green text-how-white border-how-green" 
                  : "bg-transparent text-how-ink/70 border-how-ink/20 hover:border-how-green hover:text-how-green"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      <Section className="pt-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map(program => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={program.id}
                className="group flex flex-col h-full bg-how-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-how-parchment-dark"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={program.img} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-how-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-how-green uppercase tracking-wider">
                    {program.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-how-green transition-colors line-clamp-2">{program.title}</h3>
                  
                  <div className="flex items-center gap-4 mb-8 mt-auto pt-4 border-t border-how-parchment-dark">
                    <div className="flex flex-col">
                      <span className="text-xs text-how-ink/50 uppercase tracking-wider font-bold mb-1">Age Group</span>
                      <span className="text-sm font-medium">{program.age}</span>
                    </div>
                    <div className="w-px h-8 bg-how-parchment-dark"></div>
                    <div className="flex flex-col">
                      <span className="text-xs text-how-ink/50 uppercase tracking-wider font-bold mb-1">Duration</span>
                      <span className="text-sm font-medium">{program.duration}</span>
                    </div>
                  </div>
                  
                  <Button href={`/programs/${program.id}`} variant="outline" className="w-full">View Details</Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredPrograms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-how-ink/50 font-serif">No programs found in this category.</p>
            <Button onClick={() => setActiveCategory("All Programs")} variant="link" className="mt-4">View all programs</Button>
          </div>
        )}
      </Section>
    </div>
  );
}
