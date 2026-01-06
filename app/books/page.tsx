"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const books = [
  {
    title: "Get On The Bull",
    subtitle: "Developing Attitudes and Behaviors For Effective Leadership",
    description:
      "Bull riding is one of the most extreme sports in the world. But each day, we face challenges that are just as intimidating as a 1600-pound bovine. Get On The Bull uses powerful stories and practical principles to help you develop the attitudes and behaviors needed for effective leadership.",
    available: true,
    amazonLink: "https://www.amazon.com/dp/B0B167WWVM",
    quote: {
      text: "Get On The Bull was a great ride! It's built on a fascinating metaphor that makes this quick read all the more interesting, and makes its lessons all the more accessible. You have something to learn from these insightful and intense stories—and you're going to enjoy it.",
      author: "David Kasperson",
      title: "Co-author of the Wall Street Journal bestseller Trust & Inspire",
    },
  },
];

export default function BooksPage() {
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
              <span className="text-copper">BOOKS!</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Books are available for bulk order at discounted rates for your event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Books */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-16"
            >
              <div>
                <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-2">
                  {book.title}
                </h2>
                <p className="text-copper text-lg mb-4">{book.subtitle}</p>
                <p className="text-text-secondary mb-6">{book.description}</p>
                
                {book.available && (
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors mb-8"
                  >
                    Order Now
                  </a>
                )}

                {book.quote && (
                  <blockquote className="border-l-4 border-copper pl-4">
                    <p className="text-white/90 italic mb-2">
                      &ldquo;{book.quote.text}&rdquo;
                    </p>
                    <cite className="text-text-secondary text-sm">
                      — {book.quote.author}
                      {book.quote.title && (
                        <>
                          <br />
                          <span className="text-text-secondary/70">
                            {book.quote.title}
                          </span>
                        </>
                      )}
                    </cite>
                  </blockquote>
                )}
              </div>

              <div className="flex justify-center">
                <div className="bg-card-bg rounded-2xl p-8 border border-card-border">
                  <div className="relative w-64 h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/getonthebullbook.png"
                      alt="Get On The Bull Book Cover"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-card-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="flex justify-center lg:order-2">
              <div className="bg-background rounded-2xl p-8 border border-card-border">
                <div className="w-64 h-80 bg-gradient-to-b from-blue-accent/20 to-blue-accent/5 rounded-lg flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className="font-[var(--font-oswald)] text-xl text-blue-accent">
                      COMING SOON
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-4">
                COMING <span className="text-copper">SOON!</span>
              </h2>
              <p className="text-text-secondary mb-6">
                Dallin is currently working on two new books that dive deeper into 
                the principles of effective communication, trust-building, and 
                leadership. Stay tuned for announcements!
              </p>
              <p className="text-text-secondary">
                Want to be notified when new books are released? Sign up for 
                updates at your next event or reach out to Dallin&apos;s team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-4">
              BULK <span className="text-copper">ORDERS</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Planning an event? Books make great gifts for attendees and reinforce 
              the message long after the keynote ends. Contact us for special bulk 
              pricing.
            </p>
            <Link
              href="/meeting-planners#book-now"
              className="inline-flex items-center px-8 py-4 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors"
            >
              Inquire About Bulk Orders
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

