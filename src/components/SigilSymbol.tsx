
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
        "sigil inline-block text-psyche-accent text-3xl font-bold mx-2 drop-shadow-[0_0_4px_rgba(255,56,92,0.5)]", 
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
