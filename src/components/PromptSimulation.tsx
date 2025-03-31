
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import SigilSymbol from "./SigilSymbol";
import { Card } from "@/components/ui/card";
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

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
  
  // Extract date information for clearer display
  const formattedDate = id.includes('-') 
    ? id.split('-')[0] 
    : id.substring(0, 8);
  
  // Format date with more readable structure if it's a valid date format
  const displayDate = formattedDate.length === 8 
    ? `${formattedDate.substring(0, 4)}-${formattedDate.substring(4, 6)}-${formattedDate.substring(6, 8)}`
    : formattedDate;

  return (
    <Card className={cn(
      "doctrine-card overflow-hidden transition-all duration-500 mb-8 relative", 
      expanded ? "bg-card/80" : "", 
      className
    )}>
      <div 
        className="cursor-pointer hover:bg-card/80 transition-colors p-5 rounded-t-md"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-2">
            <SigilSymbol symbol="⌬" className="text-xl bg-accent/10 rounded-full p-2" /> 
            <h3 className="text-xl font-bold flex items-center bg-accent/10 py-1 px-3 rounded-md hover:bg-accent/20 transition-colors">
              {displayDate}
            </h3>
            {expanded ? 
              <ChevronUp className="h-5 w-5 text-muted-foreground ml-2" /> : 
              <ChevronDown className="h-5 w-5 text-muted-foreground ml-2" />
            }
          </div>
          <span className="text-sm px-3 py-1 rounded-md bg-accent/20 text-accent font-bold uppercase tracking-wider">{tone}</span>
        </div>
        <p className="text-xl mb-3 italic text-foreground font-medium">"<span className="text-psyche-gold">{query}</span>"</p>
        
        {!expanded && responses.length > 0 && (
          <div className="absolute bottom-4 right-4">
            <AlertCircle className="h-5 w-5 text-accent animate-pulse" />
          </div>
        )}
      </div>
      
      <div className={cn(
        "grid gap-4 transition-all duration-500 overflow-hidden px-5 pb-5", 
        expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 h-0"
      )}>
        <div className="min-h-0 overflow-hidden">
          {responses.map((item, index) => (
            <div key={index} className="mb-5 border-l-4 border-accent/70 pl-4 bg-background/30 p-3 rounded-r-md">
              <span className="text-sm uppercase tracking-wider text-accent block mb-2 font-bold">
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
