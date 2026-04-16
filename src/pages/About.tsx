import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <Section bg="green">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="A Sanctuary for the Curious Mind" 
            subtitle="Our Story" 
            align="center"
            className="text-how-parchment mb-8"
          />
          <p className="text-xl text-how-parchment/80 leading-relaxed text-balance">
            House of Wisdom was founded on a simple but profound belief: education should not be a passive reception of facts, but an active, joyful exploration of the world and our place within it.
          </p>
        </div>
      </Section>

      {/* Mission & Positioning */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] rounded-t-full overflow-hidden relative">
             <img 
              src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop" 
              alt="Learning environment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6 text-balance">Cultivating Intellect and Character.</h2>
            <p className="text-lg text-how-ink/70 mb-6 leading-relaxed">
              We are not a traditional school, nor are we simply a museum. We are a living educational institution that bridges the gap between formal education and lifelong curiosity.
            </p>
            <p className="text-lg text-how-ink/70 mb-8 leading-relaxed">
              Our approach integrates the sciences, humanities, and arts to provide a holistic understanding of the world. We serve families seeking enrichment, schools looking for immersive experiences, and adults pursuing continuous growth.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="font-serif text-2xl mb-2 text-how-green">Our Mission</h4>
                <p className="text-sm text-how-ink/70">To ignite a lifelong passion for learning through immersive, interdisciplinary experiences.</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-2 text-how-green">Our Vision</h4>
                <p className="text-sm text-how-ink/70">A world where every individual is empowered to understand their past and shape their future.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Every Child is a Hero */}
      <Section bg="parchment-dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto bg-how-bronze/20 rounded-full flex items-center justify-center text-how-bronze mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Every Child is a Hero</h2>
          <p className="text-xl text-how-ink/80 leading-relaxed mb-10">
            In our philosophy, learning is an epic journey. Every child who walks through our doors or logs into our portal is the protagonist of their own story. We provide the maps, the tools, and the guides—but they are the heroes who must embark on the adventure of discovery.
          </p>
          <Button href="/programs/kids" variant="primary">Begin the Journey</Button>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader 
          title="The Evolution of Wisdom" 
          subtitle="Our Timeline" 
          align="center"
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-how-bronze/30 -translate-x-1/2"></div>
          
          {[
            { year: "2018", title: "The Foundation", desc: "House of Wisdom began as a small series of weekend workshops for families." },
            { year: "2020", title: "Digital Expansion", desc: "Launched our first online portal to serve learners globally during unprecedented times." },
            { year: "2022", title: "The Seven Episodes", desc: "Introduced our signature 'Big History' curriculum, unifying our educational approach." },
            { year: "2024", title: "A New Campus", desc: "Opened our dedicated physical space, featuring interactive timeline walls and exhibition areas." }
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col md:flex-row items-start mb-16 last:mb-0 group">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 order-2 md:order-1 pl-16 md:pl-0 mt-1 md:mt-0">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-how-green transition-colors">{item.title}</h3>
                <p className="text-how-ink/70">{item.desc}</p>
              </div>
              
              <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-how-parchment border-2 border-how-bronze flex items-center justify-center -translate-x-0 md:-translate-x-1/2 z-10 text-sm font-bold text-how-green">
                {item.year}
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-3 md:order-3 hidden md:block"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Resources */}
      <Section bg="green-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Our Resources" 
              subtitle="Tools for Discovery" 
              className="text-how-parchment"
            />
            <p className="text-how-parchment/80 text-lg mb-8 leading-relaxed">
              We have curated and developed a comprehensive suite of educational resources designed to make complex concepts tangible and engaging.
            </p>
            <div className="space-y-6">
              {[
                { title: "Timeline Walls", desc: "Interactive physical and digital installations tracing the history of the universe." },
                { title: "Curated Library", desc: "A hand-picked collection of books spanning science, history, and philosophy." },
                { title: "Learning Kits", desc: "Take-home boxes filled with experiments, artifacts, and activities." }
              ].map((res, i) => (
                <div key={i} className="border-l-2 border-how-bronze pl-6">
                  <h4 className="font-serif text-xl text-how-parchment mb-2">{res.title}</h4>
                  <p className="text-how-parchment/60 text-sm">{res.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/products" variant="secondary">Browse Resources</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
              <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop" alt="Books" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop" alt="Tools" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </Section>

      {/* Team Teaser */}
      <Section>
        <SectionHeader 
          title="Guided by Experts" 
          subtitle="Our Team" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="text-center group">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={`https://i.pravatar.cc/300?img=${i + 10}`} alt="Team member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-serif mb-1">Dr. Jane Doe</h3>
              <p className="text-sm text-how-bronze uppercase tracking-widest font-bold">Director of Education</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/contact" variant="outline">Join Our Team</Button>
        </div>
      </Section>
    </div>
  );
}
