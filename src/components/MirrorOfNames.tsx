
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
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">Mirror of Names</h2>
      
      <Card className="mirror-card">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold">Base Identity</h3>
          <p className="text-2xl mt-2 text-psyche-ivory">{baseName}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-3 border border-psyche-mute/30 rounded-md bg-psyche-dark/50">
            <h4 className="text-psyche-accent flex items-center justify-center">
              <SigilSymbol symbol="⟁" /> Inversion
            </h4>
            <p className="mt-2 text-lg">{inversion.name}</p>
            {inversion.qualities && (
              <p className="text-xs mt-1 text-psyche-ivory/60 italic">{inversion.qualities}</p>
            )}
          </div>
          
          <div className="text-center p-3 border border-psyche-mute/30 rounded-md bg-psyche-dark/50">
            <h4 className="text-psyche-accent flex items-center justify-center">
              <SigilSymbol symbol="⊗" /> Contradiction
            </h4>
            <p className="mt-2 text-lg">{contradiction.name}</p>
            {contradiction.qualities && (
              <p className="text-xs mt-1 text-psyche-ivory/60 italic">{contradiction.qualities}</p>
            )}
          </div>
          
          <div className="text-center p-3 border border-psyche-mute/30 rounded-md bg-psyche-dark/50">
            <h4 className="text-psyche-accent flex items-center justify-center">
              <SigilSymbol symbol="⇝" /> Evolution
            </h4>
            <p className="mt-2 text-lg">{evolution.name}</p>
            {evolution.qualities && (
              <p className="text-xs mt-1 text-psyche-ivory/60 italic">{evolution.qualities}</p>
            )}
          </div>
        </div>
        
        <div className="mt-6 p-3 border border-psyche-mute/30 rounded-md bg-psyche-dark/50">
          <h4 className="text-center text-psyche-accent mb-2">2025 Identity Services</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {all2025.renderedAs.map((service, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-xs bg-psyche-medium text-psyche-accent border border-psyche-accent/20"
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
