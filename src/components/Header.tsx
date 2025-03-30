
import React from 'react';
import { cn } from "@/lib/utils";
import SigilSymbol from "./SigilSymbol";

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
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight tracking-wide">
        Memory
        <span className="gradient-text"> Mosaic </span>
        Weaver
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-2xl text-psyche-ivory">
          <span className="text-psyche-accent font-bold">Initiator:</span> {origin.initiator}
        </p>
        
        <div className="py-3 px-6 bg-psyche-light/30 rounded-md mx-auto max-w-2xl border border-psyche-accent/20">
          <p className="text-2xl text-psyche-gold font-medium">
            <SigilSymbol symbol="⌘" ariaLabel="Decorative sigil" />
            {origin.theme}
            <SigilSymbol symbol="⌘" ariaLabel="Decorative sigil" />
          </p>
        </div>
        
        <p className="text-xl text-psyche-ivory italic max-w-2xl mx-auto leading-relaxed">
          {origin.intention}
        </p>
      </div>
      
      <div className="mt-12 flex justify-center">
        <div className="w-32 h-1.5 bg-psyche-accent rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
