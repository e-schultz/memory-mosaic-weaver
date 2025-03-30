
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
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Memory
        <span className="gradient-text"> Mosaic </span>
        Weaver
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="text-lg text-psyche-ivory/80">
          <span className="text-psyche-accent font-semibold">Initiator:</span> {origin.initiator}
        </p>
        
        <p className="text-lg text-psyche-ivory/80">
          <SigilSymbol symbol="⌘" />
          <span className="text-psyche-gold">{origin.theme}</span>
          <SigilSymbol symbol="⌘" />
        </p>
        
        <p className="text-base text-psyche-ivory/70 italic">
          {origin.intention}
        </p>
      </div>
      
      <div className="mt-8 flex justify-center">
        <div className="w-16 h-1 bg-psyche-accent rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
