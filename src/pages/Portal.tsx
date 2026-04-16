import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Check, PlayCircle, Lock, MonitorPlay, BookOpen, Users } from 'lucide-react';

export function Portal() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <Section bg="parchment-dark" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-how-green">
            <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="inline-block py-1 px-3 rounded-full border border-how-bronze text-how-bronze text-xs font-bold tracking-widest uppercase mb-6">
              Digital Learning Portal
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-balance leading-tight">
              Wisdom, <br/><span className="text-how-green italic">Anywhere.</span>
            </h1>
            <p className="text-xl text-how-ink/70 mb-10 leading-relaxed">
              Unlock our complete library of recorded sessions, digital resources, and interactive courses. Designed for families and educators to continue the journey of discovery at their own pace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#plans" size="lg">View Membership Plans</Button>
              <Button href="#" variant="outline" size="lg" icon>Member Login</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-how-white relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital learning dashboard" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-how-ink/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 text-how-white">
                  <PlayCircle size={48} className="text-how-green" />
                  <div>
                    <p className="font-bold">Episode 3: Life & Evolution</p>
                    <p className="text-sm opacity-80">Resume Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader 
          title="What's Inside the Portal?" 
          subtitle="Member Benefits" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MonitorPlay,
              title: "Recorded Sessions",
              desc: "Access our archive of topical sessions, expert talks, and guided tours, available on-demand."
            },
            {
              icon: BookOpen,
              title: "Digital Resources",
              desc: "Downloadable worksheets, reading guides, and interactive timelines to supplement learning."
            },
            {
              icon: Users,
              title: "Community Access",
              desc: "Join discussion forums, connect with other learners, and participate in live Q&A sessions."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-how-parchment-dark p-10 rounded-3xl text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-how-white flex items-center justify-center text-how-green mb-6 shadow-sm">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
              <p className="text-how-ink/70 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Preview Content */}
      <Section bg="green">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader 
            title="Preview Our Courses" 
            subtitle="Start Learning" 
            className="mb-0 text-how-parchment"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-how-parchment rounded-2xl overflow-hidden group">
              <div className="aspect-[16/9] relative">
                <img 
                  src={`https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&sig=${i}`} 
                  alt="Course preview" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-how-ink/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Lock size={32} className="text-how-white" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold tracking-widest uppercase text-how-bronze mb-2 block">Premium Course</span>
                <h3 className="text-xl font-serif mb-2 text-how-ink">The Origins of Language</h3>
                <p className="text-sm text-how-ink/60 mb-4">4 Modules • 2.5 Hours</p>
                <Button href="#plans" variant="outline" className="w-full">Unlock Access</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing / Plans */}
      <Section id="plans">
        <SectionHeader 
          title="Choose Your Pathway" 
          subtitle="Membership Plans" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Family Plan */}
          <div className="bg-how-white p-10 rounded-3xl shadow-sm border border-how-parchment-dark relative">
            <h3 className="text-2xl font-serif mb-2">Family Membership</h3>
            <p className="text-how-ink/60 mb-6">Perfect for home learning and enrichment.</p>
            <div className="mb-8">
              <span className="text-4xl font-serif">$29</span>
              <span className="text-how-ink/60">/month</span>
            </div>
            <ul className="space-y-4 mb-10">
              {['Access to all recorded kids programs', 'Downloadable activity kits', '10% discount on physical products', 'Up to 3 child profiles'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-how-green shrink-0 mt-0.5" />
                  <span className="text-how-ink/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="#" className="w-full">Start 7-Day Trial</Button>
          </div>

          {/* Educator Plan */}
          <div className="bg-how-green p-10 rounded-3xl shadow-xl relative text-how-parchment transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-how-bronze text-how-ink text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-serif mb-2">Educator Portal</h3>
            <p className="text-how-parchment/70 mb-6">Comprehensive resources for classrooms.</p>
            <div className="mb-8">
              <span className="text-4xl font-serif">$79</span>
              <span className="text-how-parchment/70">/month</span>
            </div>
            <ul className="space-y-4 mb-10">
              {['Full access to Big History curriculum', 'Digital timeline assets', 'Lesson plans and educator guides', 'Classroom broadcast license', 'Priority booking for physical tours'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-how-bronze shrink-0 mt-0.5" />
                  <span className="text-how-parchment/90">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="#" variant="secondary" className="w-full">Subscribe Now</Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-how-ink/60 mb-4">Looking for a school-wide or district license?</p>
          <Button href="/contact" variant="link">Contact our institutional team</Button>
        </div>
      </Section>
    </div>
  );
}
