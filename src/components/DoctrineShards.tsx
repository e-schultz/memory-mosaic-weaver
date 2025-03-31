
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
    <section className={cn("space-y-8", className)} aria-labelledby="doctrine-shards-heading">
      <h2 id="doctrine-shards-heading" className="text-2xl md:text-3xl font-semibold mb-8 gradient-text">Doctrine Shards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nodes.map((node, index) => (
          <Card 
            key={index} 
            className="doctrine-card group hover:translate-y-[-5px] focus-within:ring-2 focus-within:ring-accent p-6"
            tabIndex={0}
            role="article"
            aria-labelledby={`doctrine-title-${index}`}
          >
            <div className="flex items-center mb-4">
              <SigilSymbol 
                symbol={node.sigil} 
                className="text-3xl mr-3 group-hover:animate-pulse-slow" 
                ariaLabel={`Doctrine sigil ${node.sigil}`}
              />
              <h3 id={`doctrine-title-${index}`} className="text-xl font-semibold">{node.key.split('.').join(' · ')}</h3>
            </div>
            <p className="text-base text-foreground/90 leading-relaxed">{node.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DoctrineShards;
