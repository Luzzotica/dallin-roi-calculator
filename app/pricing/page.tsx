"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-card-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white mb-4">
              TRANSPARENT <span className="text-copper">PRICING</span>
            </h1>
            <div className="w-20 h-1 bg-copper mb-8" />
          </motion.div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
              <h2 className="font-[var(--font-oswald)] text-2xl font-bold text-white mb-4">
                Speaking Fees
              </h2>
              <p className="text-text-secondary mb-6">
                Dallin believes in transparent, straightforward pricing. Investment 
                varies based on the type of engagement, travel requirements, and 
                customization needs.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-copper pl-4">
                  <h3 className="text-white font-semibold mb-2">Keynote Presentations</h3>
                  <p className="text-text-secondary">
                    45-90 minute high-energy presentations for conferences, 
                    corporate events, and association meetings.
                  </p>
                </div>
                
                <div className="border-l-4 border-copper pl-4">
                  <h3 className="text-white font-semibold mb-2">Workshops & Training</h3>
                  <p className="text-text-secondary">
                    Half-day or full-day interactive sessions with hands-on 
                    exercises and team activities.
                  </p>
                </div>
                
                <div className="border-l-4 border-copper pl-4">
                  <h3 className="text-white font-semibold mb-2">Virtual Presentations</h3>
                  <p className="text-text-secondary">
                    Engaging remote keynotes and workshops delivered via Zoom, 
                    Teams, or your preferred platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
              <h2 className="font-[var(--font-oswald)] text-2xl font-bold text-white mb-4">
                What&apos;s Included
              </h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pre-event consultation call to customize content
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customized presentation for your audience
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional headshots and promotional materials
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Social media promotion of your event
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Book signing availability (books at discounted bulk rates)
                </li>
              </ul>
            </div>

            <div className="bg-copper/10 border border-copper/30 rounded-2xl p-8">
              <h2 className="font-[var(--font-oswald)] text-2xl font-bold text-white mb-4">
                Get a Custom Quote
              </h2>
              <p className="text-text-secondary mb-6">
                Every event is unique. Contact Dallin&apos;s team for a customized 
                quote based on your specific needs, audience size, and event format.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/meeting-planners#book-now"
                  className="inline-flex items-center justify-center px-6 py-3 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:+18017071488"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-copper text-copper hover:bg-copper/10 font-semibold rounded transition-colors"
                >
                  Call: (801) 707-1488
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

