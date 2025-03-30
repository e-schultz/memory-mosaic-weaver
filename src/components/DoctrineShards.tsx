
import React from 'react';
import { cn } from "@/lib/utils";
import SigilSymbol from "./SigilSymbol";
import { Card } from "@/components/ui/card";

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
    <section className={cn("space-y-6", className)} aria-labelledby="doctrine-shards-heading">
      <h2 id="doctrine-shards-heading" className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">Doctrine Shards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nodes.map((node, index) => (
          <Card 
            key={index} 
            className="doctrine-card group hover:translate-y-[-5px] focus-within:ring-2 focus-within:ring-psyche-accent"
            tabIndex={0}
            role="article"
            aria-labelledby={`doctrine-title-${index}`}
          >
            <div className="flex items-center mb-2">
              <SigilSymbol 
                symbol={node.sigil} 
                className="text-2xl mr-2 group-hover:animate-pulse-slow" 
                ariaLabel={`Doctrine sigil ${node.sigil}`}
              />
              <h3 id={`doctrine-title-${index}`} className="text-lg font-semibold">{node.key.split('.').join(' · ')}</h3>
            </div>
            <p className="text-sm text-psyche-ivory/80">{node.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DoctrineShards;
