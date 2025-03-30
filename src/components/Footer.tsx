
import React from 'react';
import { cn } from "@/lib/utils";

interface MetaData {
  renderingMode: string;
  FLOATcomponentsEngaged: string[];
  compiledFor: string;
}

interface FooterProps {
  meta: MetaData;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ meta, className }) => {
  return (
    <footer className={cn("mt-16 pt-8 pb-12 border-t border-psyche-mute/30", className)}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm text-psyche-ivory/60">
            <span className="text-psyche-accent">Rendering Mode:</span> {meta.renderingMode}
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm text-center text-psyche-accent mb-3">FLOAT Components Engaged</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {meta.FLOATcomponentsEngaged.map((component, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-psyche-medium/30 rounded text-xs border border-psyche-mute/30"
              >
                {component}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-psyche-ivory/50 italic">
            Compiled for: {meta.compiledFor}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
