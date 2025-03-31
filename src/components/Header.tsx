
import React from 'react';
import { cn } from "@/lib/utils";
import SigilSymbol from "./SigilSymbol";
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
  origin: {
    initiator: string;
    theme: string;
    intention: string;
  };
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ origin, className }) => {
  return (
    <header className={cn("text-center mb-16", className)}>
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight tracking-wide">
        Memory
        <span className="gradient-text"> Mosaic </span>
        Weaver
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-2xl md:text-3xl text-foreground font-bold">
          <span className="text-accent">Initiator:</span> {origin.initiator}
        </p>
        
        <div className="py-4 px-6 bg-card border-2 border-accent/40 rounded-md mx-auto max-w-2xl">
          <p className="text-2xl md:text-3xl text-psyche-gold font-bold">
            <SigilSymbol symbol="⌘" ariaLabel="Decorative sigil" />
            {origin.theme}
            <SigilSymbol symbol="⌘" ariaLabel="Decorative sigil" />
          </p>
        </div>
        
        <p className="text-xl md:text-2xl text-foreground font-medium max-w-2xl mx-auto leading-relaxed">
          {origin.intention}
        </p>
      </div>
      
      <div className="mt-12 flex justify-center">
        <div className="w-32 h-2 bg-accent rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
