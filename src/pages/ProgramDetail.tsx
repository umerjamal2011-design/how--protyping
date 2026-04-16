import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

export function ProgramDetail() {
  const { id } = useParams();

  // Mock data for the template
  const program = {
    title: "The Golden Age of Discovery",
    category: "Topical Sessions",
    age: "Adults",
    duration: "2 Hours",
    location: "Main Auditorium",
    date: "October 22, 2026",
    time: "2:00 PM - 4:00 PM",
    price: "$45",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop",
    description: "Join us for an immersive exploration of the Golden Age of Discovery. This session delves into the technological, cultural, and philosophical shifts that drove humanity to explore the unknown. Through interactive discussions and rare artifact showcases, we will uncover the stories of early explorers and the lasting impact of their journeys on our modern world.",
    learningOutcomes: [
      "Understand the primary motivations behind early global exploration.",
      "Analyze the technological advancements in navigation and cartography.",
      "Discuss the cultural exchanges and conflicts resulting from these journeys.",
      "Examine primary source documents and artifacts from the era."
    ],
    instructor: {
      name: "Dr. Eleanor Vance",
      role: "Historian & Curator",
      img: "https://i.pravatar.cc/300?img=44"
    }
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <Section bg="parchment-dark" className="pb-12">
        <div className="mb-8">
          <Link to="/programs" className="text-sm font-bold tracking-widest uppercase text-how-green hover:text-how-green-dark transition-colors flex items-center gap-2">
            ← Back to Programs
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-how-white text-how-green text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-how-parchment">
              {program.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance leading-tight">
              {program.title}
            </h1>
            <p className="text-xl text-how-ink/70 mb-8 leading-relaxed">
              {program.description.split('.')[0]}.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-how-white px-4 py-2 rounded-full shadow-sm border border-how-parchment text-sm">
                <Users size={16} className="text-how-bronze" />
                <span className="font-medium text-how-ink/80">{program.age}</span>
              </div>
              <div className="flex items-center gap-2 bg-how-white px-4 py-2 rounded-full shadow-sm border border-how-parchment text-sm">
                <Clock size={16} className="text-how-bronze" />
                <span className="font-medium text-how-ink/80">{program.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-how-white px-4 py-2 rounded-full shadow-sm border border-how-parchment text-sm">
                <MapPin size={16} className="text-how-bronze" />
                <span className="font-medium text-how-ink/80">{program.location}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Button size="lg">Register Now</Button>
              <span className="text-2xl font-serif text-how-green">{program.price}</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-how-white">
              <img 
                src={program.img} 
                alt={program.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif mb-6">About the Session</h2>
            <p className="text-lg text-how-ink/70 leading-relaxed mb-12">
              {program.description}
            </p>
            
            <h3 className="text-2xl font-serif mb-6">What You'll Learn</h3>
            <ul className="space-y-4 mb-12">
              {program.learningOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-how-green shrink-0" />
                  <span className="text-lg text-how-ink/80">{outcome}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-serif mb-6">Meet the Instructor</h3>
            <div className="flex items-center gap-6 bg-how-parchment-dark p-6 rounded-2xl">
              <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                <img src={program.instructor.img} alt={program.instructor.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="text-xl font-serif mb-1">{program.instructor.name}</h4>
                <p className="text-how-ink/60 text-sm uppercase tracking-widest font-bold">{program.instructor.role}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-how-white p-8 rounded-3xl shadow-sm border border-how-parchment-dark sticky top-32">
              <h3 className="text-2xl font-serif mb-6">Session Details</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar size={24} className="text-how-bronze shrink-0" />
                  <div>
                    <p className="font-bold text-how-ink mb-1">Date</p>
                    <p className="text-how-ink/70">{program.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-how-bronze shrink-0" />
                  <div>
                    <p className="font-bold text-how-ink mb-1">Time</p>
                    <p className="text-how-ink/70">{program.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-how-bronze shrink-0" />
                  <div>
                    <p className="font-bold text-how-ink mb-1">Location</p>
                    <p className="text-how-ink/70">{program.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-how-parchment-dark">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold text-how-ink">Total</span>
                  <span className="text-2xl font-serif text-how-green">{program.price}</span>
                </div>
                <Button className="w-full">Register Now</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
