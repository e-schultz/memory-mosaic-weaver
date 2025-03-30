
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
    <Card className={cn("doctrine-card overflow-hidden transition-all duration-500 mb-8", className)}>
      <div 
        className="cursor-pointer hover:text-psyche-accent transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <SigilSymbol symbol="⌬" className="text-xl" /> 
            <span>{id.substring(0, 8)}</span>
          </h3>
          <span className="text-sm px-3 py-1 rounded-md bg-psyche-accent/20 text-psyche-accent font-bold">{tone}</span>
        </div>
        <p className="text-xl mb-6 italic text-psyche-ivory font-medium">"<span className="text-psyche-gold">{query}</span>"</p>
      </div>
      
      <div className={cn(
        "grid gap-4 transition-all duration-500 overflow-hidden", 
        expanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="min-h-0 overflow-hidden">
          {responses.map((item, index) => (
            <div key={index} className="mb-5 border-l-4 border-psyche-accent/70 pl-4">
              <span className="text-sm uppercase tracking-wider text-psyche-accent block mb-2 font-bold">
                {item.service}
              </span>
              <p className="text-lg font-medium">{item.response}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PromptSimulation;
