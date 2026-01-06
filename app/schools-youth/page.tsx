"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const youthKeynotes = [
  {
    id: "challenge-assumptions-youth",
    title: "Challenge Your Assumptions",
    subtitle: "How Great Student Leaders Stop Assuming and Start Asking",
    description:
      "In this interactive keynote, students learn how to navigate difficult conversations, build bridges with people who think differently, and become the kind of leaders who bring people together instead of tearing them apart. Perfect for student council, leadership conferences, and school assemblies.",
    outcomes: [
      "Understand how assumptions sabotage relationships",
      "Learn practical tools for better communication",
      "Build confidence in difficult conversations",
      "Develop empathy and curiosity as leadership skills",
    ],
  },
  {
    id: "get-on-the-bull-youth",
    title: "Get On The Bull",
    subtitle: "Overcoming The Challenges of Life & Leadership",
    description:
      "Bull riding is one of the most extreme sports in the world. But each day, leaders face challenges that are just as intimidating as a 1600-pound bovine. Based on Dallin's book of the same title, Get On The Bull gives student leaders the skills they need to lift, inspire, and transform the lives of those they lead.",
    note: "If your event allows it, Dallin can even bring a mechanical bull to your event so participants can practice what they learn!",
    outcomes: [
      "Embrace challenges instead of avoiding them",
      "Develop resilience and grit",
      "Turn pressure into performance",
      "Lead by example in difficult situations",
    ],
  },
  {
    id: "trust-gauntlet-youth",
    title: "The Trust Gauntlet",
    subtitle: "How Great Students Become Great Leaders",
    description:
      "Trust isn't just a nice-to-have. It's the backbone of every successful relationship. Yet interpersonal and public trust are near an all-time low as young people feel increasingly isolated by media, technology, and their own fears. The Trust Gauntlet is a deeply interactive keynote experience, where students won't just learn to build courage and trust each other—they'll actually do it together in real time.",
    outcomes: [
      "Build genuine trust with peers",
      "Overcome social anxiety and fear of judgment",
      "Create inclusive environments",
      "Develop authentic leadership presence",
    ],
  },
];

const youthLogos = [
  "Utah State Student Council",
  "BYU Leadership",
  "High School Leadership Programs",
  "Teen Leadership Conferences",
];

export default function SchoolsYouthPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    eventDate: "",
    audienceSize: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Dallin's team will be in touch within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-card-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white mb-4">
                GIVE STUDENT <span className="text-copper">LEADERS</span>
              </h1>
              <p className="text-xl text-text-secondary mb-6">
                The Mindset And Skills They Need to Thrive
              </p>
              <Link
                href="#book-youth"
                className="inline-flex items-center px-8 py-4 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors"
              >
                Book for Your School
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Schools */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {youthLogos.map((logo) => (
              <span
                key={logo}
                className="text-sm md:text-base text-gray-400 font-medium"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-4">
              SEE DALLIN IN <span className="text-copper">ACTION</span>
            </h2>
            <p className="text-text-secondary">
              Watch how Dallin connects with student audiences and delivers 
              lasting impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-background"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wsG6N6gpvm4"
              title="Dallin Cooper Youth Keynote"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Youth Keynotes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-white mb-4">
              YOUTH <span className="text-copper">PROGRAMS</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Interactive keynotes designed specifically for student leaders, 
              school assemblies, and youth conferences.
            </p>
          </motion.div>

          <div className="space-y-12">
            {youthKeynotes.map((keynote, index) => (
              <motion.div
                key={keynote.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-white mb-2">
                      {keynote.title}
                    </h3>
                    <p className="text-copper mb-4">{keynote.subtitle}</p>
                    <p className="text-text-secondary mb-4">{keynote.description}</p>
                    {keynote.note && (
                      <p className="text-text-secondary/70 text-sm italic mb-4">
                        {keynote.note}
                      </p>
                    )}
                    <Link
                      href="#book-youth"
                      className="inline-flex items-center text-copper hover:text-copper-light transition-colors group"
                    >
                      Explore This Keynote
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

                  <div className="bg-background rounded-xl p-6">
                    <h4 className="text-white font-semibold mb-4">
                      Students Will Learn To:
                    </h4>
                    <ul className="space-y-3">
                      {keynote.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <svg
                            className="w-5 h-5 text-copper mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonial */}
      <section className="py-16 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white text-center mb-8">
              WHAT PEOPLE ARE <span className="text-copper">SAYING</span>
            </h2>

            <blockquote className="text-center">
              <p className="font-[var(--font-oswald)] text-2xl text-white leading-relaxed mb-6">
                &ldquo;I had students coming up and saying &apos;Why didn&apos;t anyone 
                tell me any of this before?&apos; and &apos;They should do this every 
                year.&apos; It was incredible!&rdquo;
              </p>
              <cite className="text-copper">— School Administrator</cite>
            </blockquote>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 border border-card-border">
                <p className="text-white/90 italic mb-4">
                  &ldquo;Dallin&apos;s message hit home. I learned things I can actually 
                  use tomorrow with my friends and in student council.&rdquo;
                </p>
                <p className="text-text-secondary text-sm">
                  — Daniel, Utah Teen Leadership Conference
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-card-border">
                <p className="text-white/90 italic mb-4">
                  &ldquo;Best assembly we&apos;ve ever had. Students were engaged the 
                  entire time and are still talking about it weeks later.&rdquo;
                </p>
                <p className="text-text-secondary text-sm">
                  — High School Principal
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-youth" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-4">
                BOOK FOR YOUR <span className="text-copper">SCHOOL</span>
              </h2>
              <p className="text-text-secondary mb-6">
                Ready to give your students an experience they&apos;ll never forget? 
                Fill out the form and Dallin&apos;s team will be in touch within 24 
                hours to discuss your event.
              </p>
              <p className="text-text-secondary mb-4">
                Or call directly:
              </p>
              <a
                href="tel:+18017071488"
                className="inline-flex items-center text-copper text-xl font-semibold hover:text-copper-light transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (801) 707-1488
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card-bg border border-card-border rounded-2xl p-6"
              >
                <div className="grid gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-copper"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-background border border-card-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-copper"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-background border border-card-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-copper"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-1">
                      School / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.school}
                      onChange={(e) =>
                        setFormData({ ...formData, school: e.target.value })
                      }
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-copper"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-1">
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                        className="w-full bg-background border border-card-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-copper"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-1">
                        Audience Size
                      </label>
                      <select
                        value={formData.audienceSize}
                        onChange={(e) =>
                          setFormData({ ...formData, audienceSize: e.target.value })
                        }
                        className="w-full bg-background border border-card-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-copper"
                      >
                        <option value="">Select...</option>
                        <option value="1-100">1-100 students</option>
                        <option value="101-300">101-300 students</option>
                        <option value="301-500">301-500 students</option>
                        <option value="500+">500+ students</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-1">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-copper"
                    >
                      <option value="">Select...</option>
                      <option value="assembly">School Assembly</option>
                      <option value="leadership">Leadership Conference</option>
                      <option value="student-council">Student Council Event</option>
                      <option value="graduation">Graduation/Commencement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-1">
                      Tell us about your event
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-copper resize-none"
                      placeholder="What are your goals? What do you want students to walk away with?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-copper hover:bg-copper-dark text-background font-semibold rounded-lg transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

