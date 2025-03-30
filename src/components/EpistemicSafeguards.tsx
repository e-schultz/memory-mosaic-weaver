
import React from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import SigilSymbol from "./SigilSymbol";
import { Separator } from "@/components/ui/separator";

interface BiasChecks {
  invoked: boolean;
  originPrompt: string;
  appliedTo: string[];
  tactics: string[];
}

interface EpistemicSafeguardsProps {
  hallucinationCheck: BiasChecks;
  className?: string;
}

const EpistemicSafeguards: React.FC<EpistemicSafeguardsProps> = ({ 
  hallucinationCheck,
  className 
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">Epistemic Safeguards</h2>
      
      <Card className="doctrine-card overflow-hidden">
        <div className="flex items-center mb-4">
          <SigilSymbol symbol="⏧" className="text-2xl" />
          <h3 className="text-xl font-semibold ml-2">Hallucination Protection System</h3>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">System Invoked:</span>
            <span className={cn(
              "px-2 py-1 rounded text-xs",
              hallucinationCheck.invoked 
                ? "bg-green-900/30 text-green-400" 
                : "bg-red-900/30 text-red-400"
            )}>
              {hallucinationCheck.invoked ? "ACTIVE" : "INACTIVE"}
            </span>
          </div>
          
          <div className="p-3 bg-psyche-dark rounded-md mb-4">
            <p className="text-sm text-psyche-ivory/80 italic">"{hallucinationCheck.originPrompt}"</p>
          </div>
        </div>
        
        <Separator className="bg-psyche-mute/30 my-4" />
        
        <div>
          <h4 className="text-psyche-accent text-sm mb-2">Applied To:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {hallucinationCheck.appliedTo.map((item, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-psyche-medium/50 rounded text-xs border border-psyche-mute/30"
              >
                {item}
              </span>
            ))}
          </div>
          
          <h4 className="text-psyche-accent text-sm mb-2">Protection Tactics:</h4>
          <ul className="space-y-2">
            {hallucinationCheck.tactics.map((tactic, index) => (
              <li key={index} className="flex items-start">
                <SigilSymbol symbol="✓" className="text-xs mr-2 mt-1" />
                <span className="text-sm">{tactic}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default EpistemicSafeguards;
