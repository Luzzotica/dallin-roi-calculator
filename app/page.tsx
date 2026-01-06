"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const keynotes = [
  {
    id: "challenge-assumptions",
    title: "Challenge Your Assumptions",
    subtitle: "How Great Leaders Stop Assuming the Worst and Start Asking for the Best",
    description:
      "At some point, we've all felt the struggle of trying to communicate with someone who has completely different perspectives, values, or beliefs. And yet, we also believe we need to come together. But how? In this high-energy, interactive keynote, Dallin Cooper teaches audiences how to stay curious, challenge their assumptions, and build trust—especially in difficult conversations.",
    themes: ["Leadership", "High-Performance", "Sales", "Customer Service"],
    testimonial: {
      quote: "This session was nothing short of amazing! Dallin was so informative, personable, genuine, and super entertaining!",
      author: "Andreia Crook",
      company: "Tennessee Medical Group Management Association",
    },
    image: "/images/keynote-challenge.jpg",
  },
  {
    id: "get-on-the-bull",
    title: "Get On The Bull",
    subtitle: "Navigating The Line Between Grit & Burnout",
    description:
      "Bull riding is one of the most extreme sports in the world. But each day, we face challenges that are just as intimidating as a 1600-pound bovine. In this high-energy keynote, Dallin Cooper gives leaders and high-performing teams the tools to embrace pressure, navigate uncertainty, and turn challenges into momentum that drives lasting success.",
    themes: ["Leadership", "High-Performance", "Sales", "Customer Service"],
    testimonial: null,
    note: "*This program is available as either a standard keynote, or as an immersive, mechanical bull experience.",
    image: "/images/keynote-bull.jpg",
  },
  {
    id: "trust-gauntlet",
    title: "The Trust Gauntlet",
    subtitle: "How Great Teams Maximize Momentum, Connection, and Culture",
    description:
      "Trust isn't just a nice-to-have. It's the backbone of every successful business, high-performing team, and lasting customer relationship. Yet workplace and public trust are near an all-time low. When trust is low, engagement drops, turnover rises, and opportunities slip away. But when leaders know how to intentionally build and protect trust, they create cultures where people thrive, innovate, and deliver results.",
    themes: ["Sales", "Customer Service", "Leadership"],
    testimonial: {
      quote: "Dallin is an extremely impressive keynote speaker – knowledgeable, engaging, and energizing! I highly recommend him for any audience.",
      author: "Kathleen Ryan",
      title: "Director of Customer Engagement",
      company: "Boeing Defense, Space and Security",
    },
    image: "/images/keynote-trust.jpg",
  },
];

const clientLogos = [
  "Meta",
  "Charter",
  "GE",
  "MGMA",
  "ABA",
  "TEDx",
  "RE/MAX",
  "Boeing",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-background to-card-bg overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              CHALLENGE YOUR
              <br />
              <span className="text-copper">ASSUMPTIONS</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              How great leaders stop assuming the worst and start{" "}
              <span className="underline">asking for the best</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.youtube.com/watch?v=wsG6N6gpvm4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-accent hover:bg-blue-accent-dark text-white font-semibold rounded transition-colors group"
              >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Dallin Speak
              </a>
              <Link
                href="/meeting-planners#book-now"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-copper text-copper hover:bg-copper hover:text-background font-semibold rounded transition-colors"
              >
                Book Dallin
              </Link>
            </div>
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

      {/* Video Section */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://www.youtube.com/watch?v=wsG6N6gpvm4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-accent hover:bg-blue-accent-dark text-white font-semibold rounded transition-colors"
              >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo Video
              </a>
              <a
                href="https://www.youtube.com/watch?v=GgUqd_u84Vg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded transition-colors"
              >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                See Dallin&apos;s TEDx Talk
              </a>
            </div>
          </motion.div>

          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wsG6N6gpvm4"
              title="Dallin Cooper Keynote Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Keynotes Section */}
      <section id="keynotes" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white mb-4">
              KEYNOTE <span className="text-copper">PROGRAMS</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              High-energy presentations that transform how your team communicates, 
              leads, and builds trust.
            </p>
          </motion.div>

          <div className="space-y-16">
            {keynotes.map((keynote, index) => (
              <motion.div
                key={keynote.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {keynote.themes.map((theme) => (
                      <span
                        key={theme}
                        className="px-3 py-1 bg-copper/20 text-copper text-sm rounded-full"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-2">
                    {keynote.title}
                  </h3>
                  <p className="text-copper text-lg mb-4">{keynote.subtitle}</p>
                  <p className="text-text-secondary mb-6">{keynote.description}</p>
                  {keynote.note && (
                    <p className="text-text-secondary/70 text-sm italic mb-6">
                      {keynote.note}
                    </p>
                  )}
                  {keynote.testimonial && (
                    <blockquote className="border-l-4 border-copper pl-4 mb-6">
                      <p className="text-white/90 italic mb-2">
                        &ldquo;{keynote.testimonial.quote}&rdquo;
                      </p>
                      <cite className="text-text-secondary text-sm">
                        — {keynote.testimonial.author}
                        {keynote.testimonial.title && `, ${keynote.testimonial.title}`}
                        {keynote.testimonial.company && `, ${keynote.testimonial.company}`}
                      </cite>
                    </blockquote>
                  )}
                  <Link
                    href={`/meeting-planners#book-now`}
                    className="inline-flex items-center text-copper hover:text-copper-light transition-colors group"
                  >
                    More About This Keynote
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </Link>
                </div>

                {/* Image Placeholder */}
                <div
                  className={`bg-card-bg rounded-2xl aspect-video flex items-center justify-center border border-card-border ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-copper/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-text-secondary">Keynote Preview</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Testimonial */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-[var(--font-oswald)] text-2xl md:text-3xl text-white leading-relaxed mb-6">
              &ldquo;I have seen thousands of presentations as an audiovisual 
              professional…the way he was able to convey his message with deep 
              meaning really transformed the audience today. He made us laugh 
              and really connected.&rdquo;
            </p>
            <cite className="text-copper">
              — Andy Johnson, ANDX Entertainment
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-[var(--font-oswald)] text-4xl font-bold text-white mb-4">
                GET ON THE <span className="text-copper">BULL</span>
              </h2>
              <p className="text-text-secondary mb-6">
                Developing Attitudes and Behaviors For Effective Leadership
              </p>
              <a
                href="https://www.amazon.com/dp/B0B167WWVM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors"
              >
                Order Now
              </a>
              <blockquote className="mt-8 border-l-4 border-copper pl-4">
                <p className="text-white/90 italic mb-2">
                  &ldquo;Get On The Bull was a great ride! It&apos;s built on a 
                  fascinating metaphor that makes this quick read all the more 
                  interesting, and makes its lessons all the more accessible. 
                  You have something to learn from these insightful and intense 
                  stories—and you&apos;re going to enjoy it.&rdquo;
                </p>
                <cite className="text-text-secondary text-sm">
                  — David Kasperson, Co-author of the Wall Street Journal 
                  bestseller <em>Trust & Inspire</em>
                </cite>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="bg-card-bg rounded-2xl p-8 border border-card-border">
                <div className="w-64 h-80 bg-gradient-to-b from-copper/20 to-copper/5 rounded-lg flex items-center justify-center">
                  <span className="font-[var(--font-oswald)] text-2xl text-copper text-center px-4">
                    GET ON THE BULL
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white mb-6">
              READY TO TRANSFORM YOUR
              <br />
              <span className="text-copper">NEXT EVENT?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Dallin brings energy, authenticity, and actionable insights to every 
              stage. Book now to give your audience an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/meeting-planners#book-now"
                className="px-8 py-4 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors text-lg"
              >
                Book Dallin
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 border-2 border-copper text-copper hover:bg-copper/10 font-semibold rounded transition-colors text-lg"
              >
                Calculate Your ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
