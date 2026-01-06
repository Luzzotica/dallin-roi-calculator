"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#0d0d0d]" />
      
      {/* Subtle accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-copper/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-oswald)] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          WHAT&apos;S POOR COMMUNICATION
          <br />
          <span className="text-copper">COSTING YOUR TEAM?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Poor communication costs US businesses{" "}
          <span className="text-white font-semibold">$1.2 trillion annually</span>
          —that&apos;s{" "}
          <span className="text-white font-semibold">$12,506 per employee</span>{" "}
          every year. Find out what it&apos;s costing you.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
        >
          <div className="text-center">
            <p className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-copper">
              $12,506
            </p>
            <p className="text-text-secondary text-sm mt-1">per employee/year</p>
          </div>
          <div className="text-center">
            <p className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-copper">
              7.47
            </p>
            <p className="text-text-secondary text-sm mt-1">hours wasted/week</p>
          </div>
          <div className="text-center">
            <p className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-copper">
              $1.2T
            </p>
            <p className="text-text-secondary text-sm mt-1">US annual loss</p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToCalculator}
            className="px-8 py-4 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors duration-200 text-lg"
          >
            Calculate Your ROI
          </button>
          <a
            href="https://dallincooper.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-copper text-copper hover:bg-copper/10 font-semibold rounded transition-colors duration-200 text-lg"
          >
            Book Dallin
          </a>
        </motion.div>

        {/* Source attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-text-secondary/60 text-xs mt-12"
        >
          Sources:{" "}
          <a
            href="https://www.grammarly.com/business/learn/state-of-business-communications-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text-secondary"
          >
            Grammarly + Harris Poll
          </a>
          {", "}
          <a
            href="https://www.vantagepartners.com/insights/costs-of-poor-communication-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text-secondary"
          >
            Vantage Partners
          </a>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-text-secondary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

