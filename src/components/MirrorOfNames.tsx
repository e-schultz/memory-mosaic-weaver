
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
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Mirror of Names</h2>
      
      <Card className="mirror-card">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Base Identity</h3>
          <p className="text-3xl text-psyche-ivory font-semibold">{baseName}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border-2 border-psyche-mute/40 rounded-md bg-psyche-dark/70">
            <h4 className="text-xl text-psyche-accent flex items-center justify-center font-bold">
              <SigilSymbol symbol="⟁" /> Inversion
            </h4>
            <p className="mt-3 text-xl font-medium">{inversion.name}</p>
            {inversion.qualities && (
              <p className="text-sm mt-2 text-psyche-mute italic">{inversion.qualities}</p>
            )}
          </div>
          
          <div className="text-center p-4 border-2 border-psyche-mute/40 rounded-md bg-psyche-dark/70">
            <h4 className="text-xl text-psyche-accent flex items-center justify-center font-bold">
              <SigilSymbol symbol="⊗" /> Contradiction
            </h4>
            <p className="mt-3 text-xl font-medium">{contradiction.name}</p>
            {contradiction.qualities && (
              <p className="text-sm mt-2 text-psyche-mute italic">{contradiction.qualities}</p>
            )}
          </div>
          
          <div className="text-center p-4 border-2 border-psyche-mute/40 rounded-md bg-psyche-dark/70">
            <h4 className="text-xl text-psyche-accent flex items-center justify-center font-bold">
              <SigilSymbol symbol="⇝" /> Evolution
            </h4>
            <p className="mt-3 text-xl font-medium">{evolution.name}</p>
            {evolution.qualities && (
              <p className="text-sm mt-2 text-psyche-mute italic">{evolution.qualities}</p>
            )}
          </div>
        </div>
        
        <div className="mt-8 p-4 border-2 border-psyche-mute/40 rounded-md bg-psyche-dark/70">
          <h4 className="text-center text-xl text-psyche-accent font-bold mb-3">2025 Identity Services</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {all2025.renderedAs.map((service, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full text-base bg-psyche-light text-psyche-accent border-2 border-psyche-accent/30 font-bold"
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
