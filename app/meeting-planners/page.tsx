"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We'll discuss your event goals, audience, and what you want attendees to walk away with. This helps Dallin customize his presentation to maximize impact.",
  },
  {
    number: "02",
    title: "Proposal & Agreement",
    description:
      "You'll receive a detailed proposal with pricing, logistics, and customization options. Once approved, we'll lock in your date.",
  },
  {
    number: "03",
    title: "Pre-Event Planning",
    description:
      "Dallin's team will coordinate A/V requirements, promotional materials, and any special requests. We'll handle the details so you don't have to.",
  },
  {
    number: "04",
    title: "The Event",
    description:
      "Dallin arrives early, ready to deliver an unforgettable experience. He's available for meet-and-greets, book signings, and photos.",
  },
  {
    number: "05",
    title: "Follow-Up",
    description:
      "After the event, we'll check in to gather feedback and ensure your audience got maximum value from the experience.",
  },
];

export default function MeetingPlannersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventDate: "",
    eventType: "",
    audienceSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    alert("Thank you! Dallin's team will be in touch within 24 hours.");
  };

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
              MEETING <span className="text-copper">PLANNERS</span>
            </h1>
            <p className="text-xl text-text-secondary">
              <strong className="text-white">What you can expect working with Dallin</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-white mb-4">
              THE <span className="text-copper">PROCESS</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From first contact to standing ovation, here&apos;s what working with 
              Dallin looks like.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-bg border border-card-border rounded-2xl p-6"
              >
                <span className="font-[var(--font-oswald)] text-4xl font-bold text-copper/30">
                  {step.number}
                </span>
                <h3 className="font-[var(--font-oswald)] text-xl font-bold text-white mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A/V Requirements */}
      <section id="av" className="py-16 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-8">
              A/V <span className="text-copper">REQUIREMENTS</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 border border-card-border">
                <h3 className="text-white font-semibold mb-4">Stage Setup</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    Wireless lavalier microphone (preferred) or handheld
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    Confidence monitor or downstage monitor
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    HDMI connection for laptop
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    Slide advancer/clicker
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-6 border border-card-border">
                <h3 className="text-white font-semibold mb-4">Room Setup</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    Screen visible to all attendees
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    Adequate lighting on stage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    Small table for materials/water
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    Room for audience interaction activities
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-text-secondary text-sm mt-6">
              Have questions about technical requirements? Dallin&apos;s team is happy 
              to discuss your specific venue setup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-now" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-4">
                READY TO <span className="text-copper">GET STARTED?</span>
              </h2>
              <p className="text-text-secondary mb-6">
                Dallin&apos;s excited to make your event life-changing and absolutely 
                unforgettable for your audience. Just fill out the form and Dallin 
                or one of his team will be in contact within 24 hours.
              </p>
              <p className="text-text-secondary mb-4">
                Or if you&apos;d like to talk to a real live person on the phone:
              </p>
              <a
                href="tel:+18017071488"
                className="inline-flex items-center text-copper text-xl font-semibold hover:text-copper-light transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
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
                        <option value="1-50">1-50</option>
                        <option value="51-100">51-100</option>
                        <option value="101-250">101-250</option>
                        <option value="251-500">251-500</option>
                        <option value="500+">500+</option>
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
                      <option value="keynote">Keynote</option>
                      <option value="workshop">Workshop</option>
                      <option value="training">Training Session</option>
                      <option value="virtual">Virtual Event</option>
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
                      placeholder="What are your goals for this event? What do you want attendees to walk away with?"
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

