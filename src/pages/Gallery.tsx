import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { PlayCircle, Maximize2 } from 'lucide-react';

export function Gallery() {
  return (
    <div className="pt-24">
      {/* Hero / Virtual Tour */}
      <Section bg="parchment-dark">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader 
            title="Experience the Space" 
            subtitle="Virtual Tour" 
            align="center"
          />
          <p className="text-xl text-how-ink/70 leading-relaxed mb-12 text-balance max-w-3xl mx-auto">
            Step inside the House of Wisdom from anywhere in the world. Explore our timeline walls, library, and interactive exhibition spaces.
          </p>
          
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer border-8 border-how-white">
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" 
              alt="Virtual Tour Preview" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-how-ink/30 flex items-center justify-center transition-colors group-hover:bg-how-ink/40">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-how-white/90 backdrop-blur flex items-center justify-center text-how-green shadow-xl mb-4 group-hover:scale-110 transition-transform">
                  <PlayCircle size={48} strokeWidth={1.5} />
                </div>
                <span className="text-how-white font-bold tracking-widest uppercase text-sm drop-shadow-md">Launch 3D Tour</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Grid */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader 
            title="Moments of Discovery" 
            subtitle="Photo Gallery" 
            className="mb-0"
          />
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full bg-how-green text-how-white text-sm font-medium">All</button>
            <button className="px-4 py-2 rounded-full bg-transparent border border-how-ink/20 text-how-ink/70 hover:border-how-green hover:text-how-green text-sm font-medium transition-colors">Exhibitions</button>
            <button className="px-4 py-2 rounded-full bg-transparent border border-how-ink/20 text-how-ink/70 hover:border-how-green hover:text-how-green text-sm font-medium transition-colors">Programs</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {[
            { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", span: "md:col-span-2 lg:col-span-2 md:row-span-2" },
            { img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop", span: "" },
            { img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop", span: "" },
            { img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop", span: "md:col-span-2 lg:col-span-1" },
            { img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop", span: "md:col-span-1 lg:col-span-2" }
          ].map((item, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden relative group cursor-zoom-in ${item.span}`}>
              <img 
                src={item.img} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-how-ink/0 group-hover:bg-how-ink/20 transition-colors flex items-center justify-center">
                <Maximize2 size={32} className="text-how-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline">Load More</Button>
        </div>
      </Section>

      {/* Upcoming Events List */}
      <Section bg="green">
        <SectionHeader 
          title="Mark Your Calendar" 
          subtitle="Upcoming Events" 
          align="center"
          className="text-how-parchment"
        />
        <div className="max-w-4xl mx-auto bg-how-white rounded-3xl overflow-hidden shadow-xl">
          {[
            { date: "Oct 15", day: "Saturday", time: "10:00 AM", title: "Creative Corner: Autumn Arts", type: "Kids Program" },
            { date: "Oct 22", day: "Saturday", time: "2:00 PM", title: "The Golden Age of Discovery", type: "Topical Session" },
            { date: "Nov 05", day: "Sunday", time: "11:00 AM", title: "Mathematics in Nature Tour", type: "Guided Tour" },
            { date: "Nov 12", day: "Saturday", time: "9:00 AM", title: "Little Scientists Weekend Camp", type: "Kids Camps" }
          ].map((event, i) => (
            <div key={i} className="flex flex-col md:flex-row border-b border-how-parchment-dark last:border-0 hover:bg-how-parchment/50 transition-colors">
              <div className="md:w-48 p-6 md:p-8 bg-how-parchment-dark/30 flex flex-col justify-center items-center md:items-start md:border-r border-how-parchment-dark">
                <span className="text-3xl font-serif text-how-green mb-1">{event.date}</span>
                <span className="text-sm font-bold tracking-widest uppercase text-how-ink/50">{event.day}</span>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                <span className="text-xs font-bold tracking-widest uppercase text-how-bronze mb-2">{event.type} • {event.time}</span>
                <h3 className="text-2xl font-serif text-how-ink mb-4">{event.title}</h3>
                <Button variant="link" icon>Register Now</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
