
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
      className={cn("sigil", className)}
      role="img" 
      aria-label={ariaLabel || `Sigil symbol ${symbol}`}
    >
      {symbol}
    </span>
  );
};

export default SigilSymbol;
