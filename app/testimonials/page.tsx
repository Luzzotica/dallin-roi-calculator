"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Dallin Cooper was a huge hit at our senior leaders conference! He was everything we were looking for: engaging, knowledgeable, highly relatable, and even funny! He connected with the audience in a genuine way, sharing real life stories that drove home a memorable message. Our team was inspired and equipped with practical tools to have more meaningful conversations. Can't recommend him highly enough.",
    author: "Bridget Alexander",
    company: "Charter Communications",
  },
  {
    quote:
      "I recently had the pleasure of hearing Dallin Cooper speak to an audience of business and meeting professionals. Dallin is an extremely impressive keynote speaker – knowledgeable, engaging, and energizing! I highly recommend him for any audience.",
    author: "Kathleen Ryan, CGMP",
    company: "Boeing",
  },
  {
    quote:
      "His presentation was truly exceptional. What struck me most about Dallin's presentation was his ability to tailor his message to our specific needs and interests. He took the time to understand our team's goals and challenges, and crafted a presentation that was both relevant and impactful.",
    author: "Emily Havelka",
    title: "Marketing & Communications Leader",
    company: "GE Vernova Advanced Research Center",
  },
  {
    quote:
      "5 stars, 10/10! Extremely insightful and informative. Great demonstrations and valuable skill coaching.",
    author: "Preston Bottema",
    company: "Meta",
  },
  {
    quote:
      "This is truly one of the best professional talks I've ever been to. I walked away with specific things that I could apply to my life immediately. Most importantly, I walked away hopeful that the divisiveness of our time can be overcome.",
    author: "Daniel Kent",
    company: "Hillyard Anderson & Olsen P.C.",
  },
  {
    quote:
      "He nailed it. His presentation was the perfect mix of entertainment, engagement, and education. As someone who has worked in L&D for years, it takes a lot for me to feel like a presentation is a true success. Dallin's session was a slam dunk!",
    author: "Josh Kramer",
    title: "Executive Director",
    company: "North Dakota Association of Rural Electric Cooperatives",
  },
  {
    quote:
      "Dallin's keynote was nothing short of amazing! He delivered captivating storytelling, actionable ideas, genuine warmth, and lots of laughter along the way. Every participant in the room was engaged, even an hour in. He connected deeply with our audience and made an incredible impact.",
    author: "MGMA Conference Organizer",
    company: "MGMA",
  },
  {
    quote:
      "This session was nothing short of amazing! Dallin was so informative, personable, genuine, and super entertaining!",
    author: "Andreia Crook",
    company: "Tennessee Medical Group Management Association",
  },
  {
    quote:
      "I have seen thousands of presentations as an audiovisual professional…the way he was able to convey his message with deep meaning really transformed the audience today. He made us laugh and really connected.",
    author: "Andy Johnson",
    company: "ANDX Entertainment",
  },
];

const clientLogos = [
  "Meta",
  "Boeing",
  "Charter",
  "GE",
  "MGMA",
  "RE/MAX",
  "TEDx",
  "ABA",
];

export default function TestimonialsPage() {
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
            <h1 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white">
              <span className="text-copper">TESTIMONIALS</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="font-[var(--font-oswald)] text-lg md:text-xl text-gray-400 font-semibold"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 relative"
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-6 text-copper/20 font-serif text-6xl">
                  &ldquo;
                </div>

                <blockquote className="text-white/90 leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-copper/20 border border-copper/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-copper font-semibold text-sm">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-text-secondary text-sm">
                      {testimonial.title && `${testimonial.title}, `}
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-4">
              JOIN THE <span className="text-copper">SUCCESS STORIES</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Ready to give your audience an unforgettable experience? Book Dallin 
              for your next event and see why leaders trust him to transform their 
              teams.
            </p>
            <Link
              href="/meeting-planners#book-now"
              className="inline-flex items-center px-8 py-4 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors"
            >
              Book Dallin Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

