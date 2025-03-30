
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
    <header className={cn("text-center mb-12", className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-wide">
        Memory
        <span className="gradient-text"> Mosaic </span>
        Weaver
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-xl text-psyche-ivory">
          <span className="text-psyche-accent font-semibold">Initiator:</span> {origin.initiator}
        </p>
        
        <div className="py-2 px-4 bg-psyche-medium/40 rounded-md mx-auto max-w-2xl">
          <p className="text-xl text-psyche-gold">
            <SigilSymbol symbol="⌘" ariaLabel="Decorative sigil" />
            {origin.theme}
            <SigilSymbol symbol="⌘" ariaLabel="Decorative sigil" />
          </p>
        </div>
        
        <p className="text-lg text-psyche-ivory/90 italic max-w-2xl mx-auto">
          {origin.intention}
        </p>
      </div>
      
      <div className="mt-10 flex justify-center">
        <div className="w-24 h-1 bg-psyche-accent rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
