
import React from 'react';
import { cn } from "@/lib/utils";

interface SigilSymbolProps {
  symbol: string;
  className?: string;
}

const SigilSymbol: React.FC<SigilSymbolProps> = ({ symbol, className }) => {
  return (
    <span className={cn("sigil", className)}>
      {symbol}
    </span>
  );
};

export default SigilSymbol;
