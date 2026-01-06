"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-copper/5 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-copper/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-[var(--font-oswald)] text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            READY TO TRANSFORM YOUR
            <br />
            <span className="text-copper">TEAM&apos;S COMMUNICATION?</span>
          </h2>

          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing thousands to miscommunication. Dallin Cooper&apos;s keynotes,
            workshops, and trainings help teams communicate with clarity,
            confidence, and impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://dallincooper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-copper hover:bg-copper-dark text-background font-semibold rounded text-lg transition-colors duration-200 group"
            >
              Book Dallin
              <svg
                className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/watch?v=wsG6N6gpvm4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-copper text-copper hover:bg-copper/10 font-semibold rounded text-lg transition-colors duration-200 group"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Demo Reel
            </a>
          </div>

          {/* Contact info hint */}
          <p className="text-text-secondary text-sm mt-8">
            Questions? Reach out at{" "}
            <a
              href="https://dallincooper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              dallincooper.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 pt-8 border-t border-card-border"
      >
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-text-secondary text-sm">
          <p>© {new Date().getFullYear()} Dallin Cooper. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://dallincooper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Main Website
            </a>
            <a
              href="https://www.grammarly.com/business/learn/state-of-business-communications-2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Data Sources
            </a>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}

