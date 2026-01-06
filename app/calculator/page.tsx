import Calculator from "@/components/Calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communication ROI Calculator | Dallin Cooper",
  description:
    "Calculate the cost of poor communication in your organization and discover how Dallin Cooper's keynotes, workshops, and trainings can transform your team.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-card-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white mb-4">
            COMMUNICATION <span className="text-copper">ROI CALCULATOR</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Poor communication costs US businesses{" "}
            <span className="text-white font-semibold">$1.2 trillion annually</span>
            —that&apos;s{" "}
            <span className="text-white font-semibold">$12,506 per employee</span>{" "}
            every year. Find out what it&apos;s costing you.
          </p>
        </div>
      </section>

      {/* Calculator Component */}
      <Calculator />

      {/* Source Attribution */}
      <section className="py-12 border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-text-secondary text-sm">
            Data sources:{" "}
            <a
              href="https://www.grammarly.com/business/learn/state-of-business-communications-2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              Grammarly + Harris Poll
            </a>
            {", "}
            <a
              href="https://www.vantagepartners.com/insights/costs-of-poor-communication-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              Vantage Partners
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

