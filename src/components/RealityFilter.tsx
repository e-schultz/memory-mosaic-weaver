
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SigilSymbol from "./SigilSymbol";

interface FilterProps {
  appliedTo: string;
  function: string;
  result: string;
  className?: string;
}

const RealityFilter: React.FC<FilterProps> = ({ 
  appliedTo, 
  function: filterFunction, 
  result,
  className 
}) => {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("space-y-6", className)}>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text">Reality Filter</h2>
      
      <Card className="doctrine-card">
        <div className="flex items-center mb-6">
          <SigilSymbol symbol="⌁" className="text-4xl" />
          <h3 className="text-3xl font-bold ml-2">Filter Configuration</h3>
        </div>
        
        <div className="space-y-6">
          <div className="border-l-4 border-psyche-accent pl-6 py-2">
            <span className="text-xl text-psyche-accent font-bold block mb-2">Applied To</span>
            <p className="text-2xl font-bold text-psyche-ivory">{appliedTo}</p>
          </div>
          
          <div className="border-l-4 border-psyche-accent pl-6 py-2">
            <span className="text-xl text-psyche-accent font-bold block mb-2">Function</span>
            <p className="text-2xl font-bold text-psyche-ivory">{filterFunction}</p>
          </div>
          
          <div className="mt-8">
            <div className="flex justify-between text-xl mb-2">
              <span className="font-bold">Reality Verification</span>
              <span className="font-bold text-psyche-gold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-4 bg-psyche-medium" />
          </div>
          
          <div className="mt-6 p-6 bg-psyche-light/50 rounded-md border-2 border-psyche-accent/50">
            <span className="text-xl text-psyche-accent font-bold block mb-2">Result</span>
            <p className="text-2xl font-bold text-psyche-ivory">{result}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RealityFilter;
