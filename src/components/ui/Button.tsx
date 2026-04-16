import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: boolean;
  onClick?: () => void;
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className,
  icon = false,
  onClick
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full";
  
  const variants = {
    primary: "bg-how-green text-how-parchment hover:bg-how-green-dark border border-transparent",
    secondary: "bg-how-bronze text-how-ink hover:bg-how-bronze-light border border-transparent",
    outline: "border border-how-ink text-how-ink hover:bg-how-ink hover:text-how-parchment",
    ghost: "text-how-ink hover:bg-how-ink/5",
    link: "text-how-green hover:text-how-green-dark underline-offset-4 hover:underline !p-0 !rounded-none",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-3",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    variant !== 'link' && sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={size === 'lg' ? 20 : 16} className={cn("transition-transform group-hover:translate-x-1")} />}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cn(classes, "group")}>
      {content}
    </button>
  );
}
