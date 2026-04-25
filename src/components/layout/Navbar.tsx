import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Products & Services', href: '/products' },
    { name: 'LMS / Portal', href: '/portal' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent',
        isScrolled
          ? 'bg-how-parchment/90 backdrop-blur-md border-how-ink/10 py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group z-50">
          <img 
            src="https://h-o-w.org/wp-content/uploads/2025/06/Asset-1xxxhdpi.png" 
            alt="House of Wisdom" 
            className={cn(
              "h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105",
              !isScrolled && "brightness-0 invert drop-shadow-md"
            )}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300",
                isScrolled 
                  ? "text-how-ink/80 hover:text-how-green" 
                  : "text-white/90 hover:text-white drop-shadow-md"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "ml-4 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300",
              isScrolled
                ? "border-how-green text-how-green hover:bg-how-green hover:text-how-white"
                : "border-white/90 text-white/90 hover:bg-white focus:bg-white hover:text-black focus:text-black shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            )}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden z-50 p-2 transition-colors duration-300",
            (isScrolled || mobileMenuOpen) ? "text-how-ink" : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 pt-24 bg-how-parchment z-40 flex flex-col px-6 pb-6 overflow-y-auto"
            >
              <nav className="flex flex-col gap-6 text-center mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-2xl font-serif text-how-ink hover:text-how-green transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px w-12 bg-how-ink/20 mx-auto my-4" />
                <Link
                  to="/contact"
                  className="text-xl font-serif text-how-green"
                >
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
