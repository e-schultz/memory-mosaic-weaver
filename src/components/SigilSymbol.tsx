
import React from 'react';
import { cn } from "@/lib/utils";

interface SigilSymbolProps {
  symbol: string;
  className?: string;
  ariaLabel?: string;
}

const SigilSymbol: React.FC<SigilSymbolProps> = ({ symbol, className, ariaLabel }) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center justify-center text-accent text-4xl font-bold drop-shadow-[0_0_8px_rgba(255,56,92,0.7)]", 
        className
      )}
      role="img" 
      aria-label={ariaLabel || `Sigil symbol ${symbol}`}
    >
      {symbol}
    </span>
  );
};

export default SigilSymbol;
