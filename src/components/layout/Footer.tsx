import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-how-green text-how-parchment pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <img 
              src="https://h-o-w.org/wp-content/uploads/2025/06/Asset-1xxxhdpi.png" 
              alt="House of Wisdom" 
              className="h-12 w-auto object-contain mb-6 brightness-0 invert opacity-90"
              referrerPolicy="no-referrer"
            />
            <p className="text-how-parchment/80 text-sm leading-relaxed mb-8 max-w-xs">
              A distinctive educational institution dedicated to nurturing curiosity, intellect, and character in learners of all ages.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-how-parchment/30 flex items-center justify-center hover:bg-how-parchment hover:text-how-green transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-how-parchment/30 flex items-center justify-center hover:bg-how-parchment hover:text-how-green transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-how-bronze-light">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">Programs & Activities</Link></li>
              <li><Link to="/products" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">Products & Services</Link></li>
              <li><Link to="/gallery" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">Gallery & Virtual Tour</Link></li>
              <li><Link to="/portal" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">LMS Portal</Link></li>
            </ul>
          </div>

          {/* Programs Col */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-how-bronze-light">Programs</h4>
            <ul className="space-y-4">
              <li><Link to="/programs/kids" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">Kids Programs</Link></li>
              <li><Link to="/programs/adults" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">Adult Programs</Link></li>
              <li><Link to="/programs/camps" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">Kids Camps</Link></li>
              <li><Link to="/programs/tours" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">Guided Tours</Link></li>
              <li><Link to="/programs/creative-corner" className="text-how-parchment/80 hover:text-how-white transition-colors text-sm">Creative Corner</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-how-bronze-light">Connect</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-how-parchment/80 text-sm">
                <MapPin size={18} className="shrink-0 mt-0.5 text-how-bronze-light" />
                <span>123 Education Boulevard,<br/>Knowledge District, City 10010</span>
              </li>
              <li className="flex items-center gap-3 text-how-parchment/80 text-sm">
                <Mail size={18} className="shrink-0 text-how-bronze-light" />
                <span>hello@h-o-w.org</span>
              </li>
            </ul>
            
            <div className="bg-how-green-dark p-5 rounded-2xl border border-how-parchment/10">
              <h5 className="font-medium text-sm mb-2">Join our newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-b border-how-parchment/30 py-2 text-sm w-full focus:outline-none focus:border-how-bronze-light text-how-parchment placeholder:text-how-parchment/40 transition-colors"
                />
                <button className="p-2 text-how-bronze-light hover:text-how-white transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-how-parchment/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-how-parchment/60">
          <p>© {new Date().getFullYear()} House of Wisdom. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-how-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-how-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
