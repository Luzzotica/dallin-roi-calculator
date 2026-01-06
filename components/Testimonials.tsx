"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I have seen thousands of presentations as an audiovisual professional…the way he was able to convey his message with deep meaning really transformed the audience today. He made us laugh and really connected.",
    name: "Andy Johnson",
    title: "",
    company: "ANDX Entertainment",
  },
  {
    quote:
      "Dallin is an extremely impressive keynote speaker – knowledgeable, engaging, and energizing! I highly recommend him for any audience.",
    name: "Kathleen Ryan",
    title: "Director of Customer Engagement",
    company: "Boeing Defense, Space and Security",
  },
  {
    quote:
      "This session was nothing short of amazing! Dallin was so informative, personable, genuine, and super entertaining!",
    name: "Andreia Crook",
    title: "",
    company: "Tennessee Medical Group Management Association",
  },
  {
    quote:
      "5 stars, 10/10! Extremely insightful and informative. Great demonstrations and valuable skill coaching.",
    name: "Preston Bottema",
    title: "",
    company: "Meta",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-oswald)] text-3xl md:text-5xl font-bold text-white mb-4">
            WHAT CLIENTS <span className="text-copper">SAY</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Leaders and teams trust Dallin to transform their communication culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-copper/20 font-serif text-6xl">
                &ldquo;
              </div>

              <blockquote className="text-white/90 text-lg leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Avatar placeholder with initials */}
                <div className="w-12 h-12 rounded-full bg-copper/20 border border-copper/40 flex items-center justify-center">
                  <span className="text-copper font-semibold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-text-secondary text-sm">
                    {testimonial.title && `${testimonial.title}, `}
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Accent border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-copper/30 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Logo bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-card-border"
        >
          <p className="text-text-secondary text-sm text-center mb-8 uppercase tracking-widest">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {/* Text-based logos for simplicity */}
            {["Meta", "Boeing", "GE", "Charter", "RE/MAX", "TEDx"].map(
              (company) => (
                <span
                  key={company}
                  className="font-[var(--font-oswald)] text-xl md:text-2xl text-white/80 font-semibold"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

