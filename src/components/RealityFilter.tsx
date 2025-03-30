
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
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">Reality Filter</h2>
      
      <Card className="doctrine-card">
        <div className="flex items-center mb-4">
          <SigilSymbol symbol="⌁" className="text-2xl" />
          <h3 className="text-xl font-semibold ml-2">Filter Configuration</h3>
        </div>
        
        <div className="space-y-4">
          <div className="border-l-2 border-psyche-mute pl-4">
            <span className="text-sm text-psyche-accent block mb-1">Applied To</span>
            <p className="text-base">{appliedTo}</p>
          </div>
          
          <div className="border-l-2 border-psyche-mute pl-4">
            <span className="text-sm text-psyche-accent block mb-1">Function</span>
            <p className="text-base">{filterFunction}</p>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Reality Verification</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-psyche-medium" indicatorClassName="bg-psyche-accent" />
          </div>
          
          <div className="mt-4 p-4 bg-psyche-medium/30 rounded-md border border-psyche-accent/20">
            <span className="text-sm text-psyche-accent block mb-1">Result</span>
            <p className="text-base font-semibold">{result}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RealityFilter;
