
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
        "sigil inline-block text-psyche-gold text-2xl font-bold mx-2 drop-shadow-sm", 
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

