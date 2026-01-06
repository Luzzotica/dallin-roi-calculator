"use client";

import { useState } from "react";

interface TooltipProps {
  content: string;
}

export default function Tooltip({ content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-flex ml-1.5">
      <button
        type="button"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="w-4 h-4 rounded-full bg-card-border hover:bg-copper/30 text-text-secondary hover:text-copper text-xs font-medium flex items-center justify-center transition-colors cursor-help"
        aria-label="More information"
      >
        ?
      </button>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50">
          <div className="bg-card-bg border border-card-border rounded-lg px-3 py-2 shadow-xl text-xs text-text-secondary max-w-xs whitespace-normal text-left">
            {content}
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="border-8 border-transparent border-t-card-border" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-[1px] border-[7px] border-transparent border-t-card-bg" />
            </div>
          </div>
        </div>
      )}
    </span>
  );
}

