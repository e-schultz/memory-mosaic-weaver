
import React from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SigilSymbol from "./SigilSymbol";

interface NameMorphType {
  name: string;
  qualities?: string;
}

interface MirrorOfNamesProps {
  baseName: string;
  inversion: NameMorphType;
  contradiction: NameMorphType;
  evolution: NameMorphType;
  all2025: {
    renderedAs: {
      identityService: string;
    }[];
  };
  className?: string;
}

const MirrorOfNames: React.FC<MirrorOfNamesProps> = ({
  baseName,
  inversion,
  contradiction,
  evolution,
  all2025,
  className
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text">Mirror of Names</h2>
      
      <Card className="mirror-card">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-3">Base Identity</h3>
          <p className="text-3xl text-psyche-ivory font-bold">{baseName}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-5 border-2 border-psyche-accent/40 rounded-md bg-psyche-dark/70">
            <h4 className="text-2xl text-psyche-accent flex items-center justify-center font-bold mb-3">
              <SigilSymbol symbol="⟁" /> Inversion
            </h4>
            <p className="mt-3 text-xl font-bold">{inversion.name}</p>
            {inversion.qualities && (
              <p className="text-base mt-3 text-psyche-gold italic font-medium">{inversion.qualities}</p>
            )}
          </div>
          
          <div className="text-center p-5 border-2 border-psyche-accent/40 rounded-md bg-psyche-dark/70">
            <h4 className="text-2xl text-psyche-accent flex items-center justify-center font-bold mb-3">
              <SigilSymbol symbol="⊗" /> Contradiction
            </h4>
            <p className="mt-3 text-xl font-bold">{contradiction.name}</p>
            {contradiction.qualities && (
              <p className="text-base mt-3 text-psyche-gold italic font-medium">{contradiction.qualities}</p>
            )}
          </div>
          
          <div className="text-center p-5 border-2 border-psyche-accent/40 rounded-md bg-psyche-dark/70">
            <h4 className="text-2xl text-psyche-accent flex items-center justify-center font-bold mb-3">
              <SigilSymbol symbol="⇝" /> Evolution
            </h4>
            <p className="mt-3 text-xl font-bold">{evolution.name}</p>
            {evolution.qualities && (
              <p className="text-base mt-3 text-psyche-gold italic font-medium">{evolution.qualities}</p>
            )}
          </div>
        </div>
        
        <div className="mt-8 p-5 border-2 border-psyche-accent/40 rounded-md bg-psyche-dark/70">
          <h4 className="text-center text-2xl text-psyche-accent font-bold mb-4">2025 Identity Services</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {all2025.renderedAs.map((service, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full text-lg bg-psyche-accent text-psyche-dark border border-psyche-ivory/30 font-bold"
              >
                {service.identityService}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MirrorOfNames;
