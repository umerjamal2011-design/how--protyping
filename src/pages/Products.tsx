import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const productCategories = [
  {
    title: "Library for Kids & Adults",
    desc: "A curated collection of books spanning science, history, philosophy, and literature. Designed to complement our programs and spark independent discovery.",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop"
  },
  {
    title: "Educational Toys",
    desc: "Carefully selected toys that promote cognitive development, spatial reasoning, and creative problem-solving for various age groups.",
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Learning Kits & Booklets",
    desc: "Take-home resources packed with experiments, activities, and guided reading materials that extend the House of Wisdom experience.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
  },
  {
    title: "Mathematic Tools",
    desc: "Physical manipulatives and tools designed to make abstract mathematical concepts tangible and intuitive.",
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Products() {
  return (
    <div className="pt-24">
      <Section bg="green">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="Products & Services" 
            subtitle="Tools for the Journey" 
            align="center"
            className="text-how-parchment mb-8"
          />
          <p className="text-xl text-how-parchment/80 leading-relaxed text-balance">
            Discover our curated selection of educational resources, designed to support learning at home, in the classroom, and beyond.
          </p>
        </div>
      </Section>

      {/* Main Categories */}
      <Section>
        <div className="space-y-24">
          {productCategories.map((cat, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg relative group">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-how-green/10 mix-blend-overlay"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">{cat.title}</h2>
                <p className="text-lg text-how-ink/70 mb-8 leading-relaxed">{cat.desc}</p>
                <Button href={`/products/${cat.title.toLowerCase().replace(/ /g, '-')}`} variant="outline" icon>Explore Collection</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Institutional Services */}
      <Section bg="parchment-dark">
        <SectionHeader 
          title="Institutional Services" 
          subtitle="For Schools & Organizations" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-how-white p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-serif mb-4 text-how-green">Educational Exhibitions & Demos</h3>
            <p className="text-how-ink/70 mb-8 leading-relaxed">
              We bring the House of Wisdom experience to your institution. Our traveling exhibitions and interactive demonstrations are designed to align with curriculum standards while providing an unforgettable learning experience.
            </p>
            <Button href="/contact" variant="link" icon>Request a Demo</Button>
          </div>
          <div className="bg-how-white p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-serif mb-4 text-how-green">Timeline Walls / 7 Stages</h3>
            <p className="text-how-ink/70 mb-8 leading-relaxed">
              Custom installations of our signature "Seven Episodes of Big History" timeline. These physical and digital walls transform corridors and common areas into immersive learning environments.
            </p>
            <Button href="/contact" variant="link" icon>Inquire about Installation</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
