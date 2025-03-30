
import React from 'react';
import { cn } from "@/lib/utils";
import SigilSymbol from "./SigilSymbol";

interface DoctrineNode {
  key: string;
  description: string;
  sigil: string;
}

interface DoctrineSharedsProps {
  nodes: DoctrineNode[];
  className?: string;
}

const DoctrineShards: React.FC<DoctrineSharedsProps> = ({ nodes, className }) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">Doctrine Shards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nodes.map((node, index) => (
          <div 
            key={index} 
            className="doctrine-card group hover:translate-y-[-5px]"
          >
            <div className="flex items-center mb-2">
              <SigilSymbol symbol={node.sigil} className="text-2xl mr-2 group-hover:animate-pulse-slow" />
              <h3 className="text-lg font-semibold">{node.key.split('.').join(' · ')}</h3>
            </div>
            <p className="text-sm text-psyche-ivory/80">{node.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctrineShards;
