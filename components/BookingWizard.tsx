"use client";

import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useBookingStore, TOTAL_STEPS, CHALLENGE_LABELS, LOCATION_LABELS, DURATION_OPTIONS, DAYS_OPTIONS, CHALLENGE_RATING_QUESTIONS, type ChallengeType, type LocationType } from "@/lib/store";
import { calculateChallengeROI, calculateEventPrice, formatCurrency, getSeverityLabel, getPriceTierDescription } from "@/lib/calculations";

// Testimonials data
const TESTIMONIALS = [
  {
    quote: "5 stars, 10/10! Extremely insightful and informative. Great demonstrations and valuable skill coaching.",
    author: "Preston Bottema",
    company: "Meta",
  },
  {
    quote: "This session was nothing short of amazing! Dallin was so informative, personable, genuine, and super entertaining!",
    author: "Andreia Crook",
    company: "Tennessee Medical Group Management Association",
  },
  {
    quote: "Dallin is an extremely impressive keynote speaker – knowledgeable, engaging, and energizing! I highly recommend him for any audience.",
    author: "Kathleen Ryan",
    title: "Director of Customer Engagement",
    company: "Boeing Defense, Space and Security",
  },
  {
    quote: "His presentation was truly exceptional. What struck me most about Dallin's presentation was his ability to tailor his message to our specific needs and interests. He took the time to understand our team's goals and challenges, and crafted a presentation that was both relevant and authentic. If you're looking for a speaker who can inspire, educate, and motivate your team, look no further than Dallin Cooper.",
    author: "Emily Havelka",
    title: "Marketing & Communications Leader",
    company: "GE Vernova Advanced Research Center",
  },
];

// Step titles for progress bar
const STEP_TITLES = [
  "Watch Dallin",
  "Event Type",
  "Session Details",
  "Location",
  "Event Date",
  "Your Challenge",
  "Rate Your Challenge",
  "Audience Size",
  "Your ROI",
  "Get in Touch",
];

export default function BookingWizard() {
  const store = useBookingStore();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const canProceed = (): boolean => {
    switch (store.currentStep) {
      case 0: return true; // Video step always can proceed
      case 1: return store.eventType !== null;
      case 2: return store.sessions > 0 && store.duration > 0 && store.days > 0;
      case 3: return store.location !== null;
      case 4: return true; // Date is optional
      case 5: return store.challenge !== null;
      case 6: return store.challengeRating >= 1 && store.challengeRating <= 10;
      case 7: return store.audienceSize > 0;
      case 8: return true; // ROI display
      case 9: return store.name.trim() !== '' && store.email.trim() !== '';
      default: return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      store.nextStep();
    }
  };

  const handleSubmit = () => {
    // For now, just log the data - you can integrate with an API later
    console.log('Booking submission:', {
      eventType: store.eventType,
      sessions: store.sessions,
      duration: store.duration,
      days: store.days,
      location: store.location,
      eventDate: store.eventDate,
      dateConfidence: store.dateConfidence,
      challenge: store.challenge,
      challengeRating: store.challengeRating,
      audienceSize: store.audienceSize,
      name: store.name,
      email: store.email,
      phone: store.phone,
    });
    alert('Thank you! Your request has been submitted. Dallin will be in touch soon.');
  };

  const renderStep = () => {
    switch (store.currentStep) {
      case 0: return <StepVideo />;
      case 1: return <StepEventType />;
      case 2: return <StepSessionDetails />;
      case 3: return <StepLocation />;
      case 4: return <StepEventDate />;
      case 5: return <StepChallenge />;
      case 6: return <StepRateChallenge />;
      case 7: return <StepAudienceSize />;
      case 8: return <StepROIPricing />;
      case 9: return <StepContact onSubmit={handleSubmit} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-text-secondary text-sm">
              Step {store.currentStep + 1} of {TOTAL_STEPS}
            </span>
            <span className="text-copper text-sm font-medium">
              {STEP_TITLES[store.currentStep]}
            </span>
          </div>
          <div className="h-2 bg-card-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-copper"
              initial={{ width: 0 }}
              animate={{ width: `${((store.currentStep + 1) / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-10 min-h-[500px] relative overflow-hidden">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={store.currentStep}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={store.prevStep}
            disabled={store.currentStep === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              store.currentStep === 0
                ? "opacity-0 pointer-events-none"
                : "border-2 border-card-border text-text-secondary hover:border-copper hover:text-copper"
            }`}
          >
            ← Back
          </button>

          {store.currentStep < TOTAL_STEPS - 1 && (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                canProceed()
                  ? "bg-copper text-background hover:bg-copper-dark"
                  : "bg-card-border text-text-secondary cursor-not-allowed"
              }`}
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// STEP COMPONENTS
// ==========================================

function StepVideo() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          See Dallin <span className="text-copper">In Action</span>
        </h2>
        <p className="text-text-secondary text-lg">
          Watch this demo to get a feel for Dallin&apos;s style and energy.
        </p>
      </div>

      {/* YouTube Embed */}
      <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-card-border">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/wsG6N6gpvm4"
          title="Dallin Cooper Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Testimonials */}
      <div className="space-y-4">
        <h3 className="text-white font-semibold text-lg text-center">
          What People Are Saying
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/50 border border-card-border rounded-xl p-4"
            >
              <p className="text-white/90 text-sm italic mb-2 line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <cite className="text-copper text-xs not-italic">
                — {testimonial.author}
                {testimonial.title && `, ${testimonial.title}`}
                {testimonial.company && `, ${testimonial.company}`}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepEventType() {
  const { eventType, setEventType } = useBookingStore();

  const options = [
    {
      value: 'conference' as const,
      title: 'Conference',
      description: 'Public conference, association meeting, or industry event',
      icon: '🎤',
    },
    {
      value: 'private' as const,
      title: 'Private (Internal/Corporate)',
      description: 'Company meeting, team training, or internal leadership event',
      icon: '🏢',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          What type of <span className="text-copper">event</span> is this?
        </h2>
        <p className="text-text-secondary text-lg">
          Help us understand your event format.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setEventType(option.value)}
            className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
              eventType === option.value
                ? "border-copper bg-copper/10"
                : "border-card-border hover:border-copper/50 bg-transparent"
            }`}
          >
            <span className="text-4xl mb-4 block">{option.icon}</span>
            <p className={`font-semibold text-lg ${eventType === option.value ? "text-copper" : "text-white"}`}>
              {option.title}
            </p>
            <p className="text-text-secondary text-sm mt-1">
              {option.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepSessionDetails() {
  const { sessions, setSessions, duration, setDuration, days, setDays } = useBookingStore();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          Tell us about your <span className="text-copper">sessions</span>
        </h2>
        <p className="text-text-secondary text-lg">
          How many sessions, how long, and over how many days?
        </p>
      </div>

      <div className="space-y-6 max-w-xl mx-auto">
        {/* Number of Sessions */}
        <div>
          <label className="block text-white font-semibold mb-3">
            How many sessions?
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSessions(Math.max(1, sessions - 1))}
              className="w-12 h-12 rounded-lg border-2 border-card-border text-white hover:border-copper transition-colors"
            >
              -
            </button>
            <span className="text-3xl font-bold text-copper w-16 text-center">
              {sessions}
            </span>
            <button
              onClick={() => setSessions(Math.min(10, sessions + 1))}
              className="w-12 h-12 rounded-lg border-2 border-card-border text-white hover:border-copper transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-white font-semibold mb-3">
            Session Duration
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {DURATION_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => setDuration(option.value)}
                className={`p-3 rounded-lg border-2 text-sm transition-all ${
                  duration === option.value
                    ? "border-copper bg-copper/10 text-copper"
                    : "border-card-border text-text-secondary hover:border-copper/50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Days */}
        <div>
          <label className="block text-white font-semibold mb-3">
            Will sessions take place over multiple days?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {DAYS_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => setDays(option.value)}
                className={`p-3 rounded-lg border-2 text-sm transition-all ${
                  days === option.value
                    ? "border-copper bg-copper/10 text-copper"
                    : "border-card-border text-text-secondary hover:border-copper/50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepLocation() {
  const { location, setLocation } = useBookingStore();

  const locations: { value: LocationType; icon: string }[] = [
    { value: 'us-canada', icon: '🇺🇸' },
    { value: 'europe', icon: '🇪🇺' },
    { value: 'asia-australia', icon: '🌏' },
    { value: 'africa', icon: '🌍' },
    { value: 'south-america', icon: '🌎' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          Where is your <span className="text-copper">event</span> located?
        </h2>
        <p className="text-text-secondary text-lg">
          This helps us plan travel and logistics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl mx-auto">
        {locations.map((loc) => (
          <button
            key={loc.value}
            onClick={() => setLocation(loc.value)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              location === loc.value
                ? "border-copper bg-copper/10"
                : "border-card-border hover:border-copper/50 bg-transparent"
            }`}
          >
            <span className="text-2xl mr-2">{loc.icon}</span>
            <span className={`font-medium ${location === loc.value ? "text-copper" : "text-white"}`}>
              {LOCATION_LABELS[loc.value]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepEventDate() {
  const { eventDate, setEventDate, dateConfidence, setDateConfidence } = useBookingStore();

  // Convert string to Date for DatePicker
  const selectedDate = eventDate ? new Date(eventDate) : null;

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setEventDate(date.toISOString().split('T')[0]);
    } else {
      setEventDate(null);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          When is your <span className="text-copper">event</span>?
        </h2>
        <p className="text-text-secondary text-lg">
          Don&apos;t worry if you&apos;re not sure yet!
        </p>
      </div>

      <div className="space-y-6 max-w-md mx-auto">
        {/* Date Picker */}
        <div>
          <label className="block text-white font-semibold mb-3">
            Event Date (optional)
          </label>
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              placeholderText="Click to select a date"
              isClearable
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="w-full bg-background border-2 border-card-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-copper placeholder-text-secondary/50 cursor-pointer"
              calendarClassName="booking-calendar"
              wrapperClassName="w-full block"
              popperClassName="z-50"
              showPopperArrow={false}
            />
          </div>
          <button
            onClick={() => setEventDate(null)}
            className="text-text-secondary text-sm mt-2 hover:text-copper transition-colors"
          >
            We don&apos;t have a date yet
          </button>
        </div>

        {/* Confidence Slider */}
        <div>
          <label className="block text-white font-semibold mb-3">
            How confident are you about this date?
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={dateConfidence}
            onChange={(e) => setDateConfidence(parseInt(e.target.value))}
            className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-copper"
            style={{
              background: `linear-gradient(to right, #C9A75B 0%, #C9A75B ${((dateConfidence - 1) / 9) * 100}%, #262626 ${((dateConfidence - 1) / 9) * 100}%, #262626 100%)`,
            }}
          />
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-text-secondary">1 - Just an idea</span>
            <span className="text-copper font-semibold">{dateConfidence}</span>
            <span className="text-text-secondary">10 - Confirmed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepChallenge() {
  const { challenge, setChallenge } = useBookingStore();

  const challenges: { value: ChallengeType; description: string; icon: string }[] = [
    { value: 'miscommunication', description: 'Teams are not on the same page', icon: '💬' },
    { value: 'burnout', description: 'People are exhausted and disengaged', icon: '🔥' },
    { value: 'conflict', description: 'Tension and disagreements are common', icon: '⚡' },
    { value: 'low-trust', description: 'People don\'t trust leadership or each other', icon: '🤝' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          What&apos;s the biggest <span className="text-copper">challenge</span>?
        </h2>
        <p className="text-text-secondary text-lg">
          What is your organization facing right now?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {challenges.map((ch) => (
          <button
            key={ch.value}
            onClick={() => setChallenge(ch.value)}
            className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
              challenge === ch.value
                ? "border-copper bg-copper/10"
                : "border-card-border hover:border-copper/50 bg-transparent"
            }`}
          >
            <span className="text-3xl mb-3 block">{ch.icon}</span>
            <p className={`font-semibold text-lg ${challenge === ch.value ? "text-copper" : "text-white"}`}>
              {CHALLENGE_LABELS[ch.value]}
            </p>
            <p className="text-text-secondary text-sm mt-1">
              {ch.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepRateChallenge() {
  const { challenge, challengeRating, setChallengeRating } = useBookingStore();
  const ratingQuestion = challenge ? CHALLENGE_RATING_QUESTIONS[challenge] : 'How is your team doing?';

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-copper">{ratingQuestion}</span>
        </h2>
        <p className="text-text-secondary text-lg">
          Rate your current situation from 1 (needs work) to 10 (excellent)
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Rating Slider */}
        <div>
          <input
            type="range"
            min="1"
            max="10"
            value={challengeRating}
            onChange={(e) => setChallengeRating(parseInt(e.target.value))}
            className="w-full h-3 bg-card-border rounded-lg appearance-none cursor-pointer accent-copper"
            style={{
              background: `linear-gradient(to right, #C9A75B 0%, #C9A75B ${((challengeRating - 1) / 9) * 100}%, #262626 ${((challengeRating - 1) / 9) * 100}%, #262626 100%)`,
            }}
          />
          <div className="flex justify-between mt-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button
                key={num}
                onClick={() => setChallengeRating(num)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                  challengeRating === num
                    ? "bg-copper text-background"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Rating Labels */}
        <div className="bg-background/50 rounded-xl p-6 text-center">
          <p className="text-copper text-2xl font-bold mb-2">
            {getSeverityLabel(challengeRating)}
          </p>
          <p className="text-text-secondary text-sm">
            {challengeRating <= 3 && "Significant room for improvement — Dallin can make a big impact"}
            {challengeRating >= 4 && challengeRating <= 6 && "There's opportunity to level up your team"}
            {challengeRating >= 7 && challengeRating <= 9 && "Already doing well — fine-tuning can help"}
            {challengeRating === 10 && "Excellent! Let's maintain that momentum"}
          </p>
        </div>

        {/* Rating Guide */}
        <div className="grid grid-cols-4 gap-2 text-sm">
          <div className="text-center p-2 rounded bg-red-500/10 border border-red-500/20">
            <span className="text-red-400">1-3</span>
            <p className="text-text-secondary text-xs">Needs work</p>
          </div>
          <div className="text-center p-2 rounded bg-yellow-500/10 border border-yellow-500/20">
            <span className="text-yellow-400">4-6</span>
            <p className="text-text-secondary text-xs">Okay</p>
          </div>
          <div className="text-center p-2 rounded bg-green-500/10 border border-green-500/20">
            <span className="text-green-400">7-9</span>
            <p className="text-text-secondary text-xs">Good</p>
          </div>
          <div className="text-center p-2 rounded bg-copper/10 border border-copper/20">
            <span className="text-copper">10</span>
            <p className="text-text-secondary text-xs">Excellent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepAudienceSize() {
  const { audienceSize, setAudienceSize } = useBookingStore();

  const handleChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1) {
      setAudienceSize(Math.min(num, 10000));
    } else if (value === '') {
      setAudienceSize(1);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          How big is your <span className="text-copper">audience</span>?
        </h2>
        <p className="text-text-secondary text-lg">
          This won&apos;t change your price — it just helps us prepare and calculate your ROI.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={Math.min(audienceSize, 1000)}
            onChange={(e) => setAudienceSize(parseInt(e.target.value, 10))}
            className="flex-1 h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-copper"
            style={{
              background: `linear-gradient(to right, #C9A75B 0%, #C9A75B ${((Math.min(audienceSize, 1000) - 10) / 990) * 100}%, #262626 ${((Math.min(audienceSize, 1000) - 10) / 990) * 100}%, #262626 100%)`,
            }}
          />
          <div className="relative">
            <input
              type="number"
              min="1"
              max="10000"
              value={audienceSize}
              onChange={(e) => handleChange(e.target.value)}
              className="w-28 bg-background border-2 border-card-border rounded-lg px-3 py-2 text-white text-center text-xl font-bold focus:outline-none focus:border-copper"
            />
          </div>
        </div>
        <p className="text-text-secondary text-sm text-center">
          people in your audience
        </p>

        {/* Quick Select Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {[25, 50, 100, 200, 500, 1000].map((size) => (
            <button
              key={size}
              onClick={() => setAudienceSize(size)}
              className={`px-4 py-2 rounded-lg border-2 text-sm transition-all ${
                audienceSize === size
                  ? "border-copper bg-copper/10 text-copper"
                  : "border-card-border text-text-secondary hover:border-copper/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepROIPricing() {
  const store = useBookingStore();
  
  // Calculate ROI and pricing
  const roiData = store.challenge 
    ? calculateChallengeROI(store.challenge, store.challengeRating, store.audienceSize)
    : null;
  
  const priceData = store.location
    ? calculateEventPrice(store.duration, store.location, store.sessions, store.days)
    : null;

  if (!roiData || !priceData) {
    return (
      <div className="text-center py-20">
        <p className="text-text-secondary">Please complete previous steps first.</p>
      </div>
    );
  }

  const roiMultiple = priceData.totalPrice > 0 
    ? Math.round(roiData.potentialAnnualSavings / priceData.totalPrice)
    : 0;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          Your <span className="text-copper">ROI</span> Breakdown
        </h2>
        <p className="text-text-secondary text-lg">
          See how Dallin&apos;s session pays for itself.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pricing Card */}
        <div className="bg-background/50 border border-card-border rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">Estimated Investment</h3>
          <p className="font-[var(--font-oswald)] text-4xl font-bold text-copper mb-2">
            {formatCurrency(priceData.totalPrice)}
          </p>
          <p className="text-text-secondary text-sm mb-4">
            {getPriceTierDescription(priceData.priceTier)}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Duration</span>
              <span className="text-white">{store.duration} min × {store.sessions} session(s)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Location</span>
              <span className="text-white">{store.location ? LOCATION_LABELS[store.location] : '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Days</span>
              <span className="text-white">{store.days} day(s)</span>
            </div>
          </div>
        </div>

        {/* ROI Card */}
        <div className="bg-background/50 border border-card-border rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">Potential Annual Savings</h3>
          <p className="font-[var(--font-oswald)] text-4xl font-bold text-green-400 mb-2">
            {formatCurrency(roiData.potentialAnnualSavings)}
          </p>
          <p className="text-text-secondary text-sm mb-4">
            Based on {store.audienceSize} employees and {Math.round(roiData.improvementRate * 100)}% improvement
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Challenge Area</span>
              <span className="text-white">{store.challenge ? CHALLENGE_LABELS[store.challenge] : '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Current Rating</span>
              <span className="text-white">{store.challengeRating}/10 ({getSeverityLabel(store.challengeRating)})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Hours Saved/Year</span>
              <span className="text-white">{roiData.hoursRecoveredPerYear.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Multiple */}
      <div className="bg-copper/10 border border-copper rounded-xl p-6 text-center">
        <p className="text-text-secondary mb-2">Your potential return on investment</p>
        <p className="font-[var(--font-oswald)] text-5xl font-bold text-copper">
          {roiMultiple}x
        </p>
        <p className="text-white mt-2">
          For every $1 invested, you could save <span className="text-copper">${roiMultiple}</span>
        </p>
      </div>

      {/* Disclaimer */}
      <p className="text-text-secondary/60 text-xs text-center">
        * ROI estimates based on industry research. Actual results may vary.
      </p>
    </div>
  );
}

function StepContact({ onSubmit }: { onSubmit: () => void }) {
  const { name, setName, email, setEmail, phone, setPhone } = useBookingStore();

  const isValid = name.trim() !== '' && email.trim() !== '';

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-[var(--font-bitter)] text-3xl md:text-4xl font-bold text-white mb-4">
          Let&apos;s <span className="text-copper">connect</span>
        </h2>
        <p className="text-text-secondary text-lg">
          Leave your details and Dallin will be in touch to discuss your event.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block text-white font-semibold mb-2">
            Your Name <span className="text-copper">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className="w-full bg-background border-2 border-card-border rounded-lg px-4 py-3 text-white placeholder-text-secondary/50 focus:outline-none focus:border-copper"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">
            Email Address <span className="text-copper">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@company.com"
            className="w-full bg-background border-2 border-card-border rounded-lg px-4 py-3 text-white placeholder-text-secondary/50 focus:outline-none focus:border-copper"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">
            Phone Number <span className="text-text-secondary text-sm">(optional)</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="w-full bg-background border-2 border-card-border rounded-lg px-4 py-3 text-white placeholder-text-secondary/50 focus:outline-none focus:border-copper"
          />
        </div>

        <button
          onClick={onSubmit}
          disabled={!isValid}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-all mt-6 ${
            isValid
              ? "bg-copper text-background hover:bg-copper-dark"
              : "bg-card-border text-text-secondary cursor-not-allowed"
          }`}
        >
          Request to Speak with Dallin
        </button>

        <p className="text-text-secondary/60 text-xs text-center">
          By submitting, you agree to be contacted about your event inquiry.
        </p>
      </div>
    </div>
  );
}

