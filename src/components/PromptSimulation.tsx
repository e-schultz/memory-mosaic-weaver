
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import SigilSymbol from "./SigilSymbol";
import { Card } from "@/components/ui/card";

interface ResponseItem {
  service: string;
  response: string;
}

interface PromptSimulationProps {
  id: string;
  query: string;
  tone: string;
  responses: ResponseItem[];
  className?: string;
}

const PromptSimulation: React.FC<PromptSimulationProps> = ({ 
  id, 
  query, 
  tone, 
  responses,
  className 
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={cn("doctrine-card overflow-hidden transition-all duration-500 mb-6", className)}>
      <div 
        className="cursor-pointer hover:text-psyche-accent transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <SigilSymbol symbol="⌬" className="text-sm" /> 
            <span>{id.substring(0, 8)}</span>
          </h3>
          <span className="text-xs px-2 py-1 rounded bg-psyche-medium text-psyche-accent">{tone}</span>
        </div>
        <p className="text-lg mb-4 italic text-psyche-ivory/90">"{query}"</p>
      </div>
      
      <div className={cn(
        "grid gap-4 transition-all duration-500 overflow-hidden", 
        expanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="min-h-0 overflow-hidden">
          {responses.map((item, index) => (
            <div key={index} className="mb-4 border-l-2 border-psyche-mute pl-4">
              <span className="text-xs uppercase tracking-wider text-psyche-accent/80 block mb-1">
                {item.service}
              </span>
              <p className="text-sm">{item.response}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PromptSimulation;
