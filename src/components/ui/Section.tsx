import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  bg?: 'parchment' | 'parchment-dark' | 'green' | 'green-dark' | 'white';
}

export function Section({ children, className, containerClassName, id, bg = 'parchment' }: SectionProps) {
  const bgColors = {
    'parchment': 'bg-how-parchment',
    'parchment-dark': 'bg-how-parchment-dark',
    'green': 'bg-how-green text-how-parchment',
    'green-dark': 'bg-how-green-dark text-how-parchment',
    'white': 'bg-how-white',
  };

  return (
    <section id={id} className={cn('py-24 md:py-32', bgColors[bg], className)}>
      <div className={cn('max-w-7xl mx-auto px-6 md:px-12', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ 
  title, 
  subtitle, 
  align = 'left',
  className
}: { 
  title: string; 
  subtitle?: string; 
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn('mb-16', align === 'center' && 'text-center mx-auto max-w-3xl', className)}>
      {subtitle && (
        <span className="block text-sm font-bold tracking-widest uppercase text-how-bronze mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance leading-tight">
        {title}
      </h2>
    </div>
  );
}
