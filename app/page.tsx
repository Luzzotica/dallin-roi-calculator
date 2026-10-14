import BookingWizard from "@/components/BookingWizard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Dallin Cooper | Leadership & Communication Speaker",
  description:
    "Request a quote for Dallin Cooper's keynotes, workshops, and trainings. Calculate your ROI and discover how Dallin can transform your team's communication.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card-bg">
      <BookingWizard />
    </div>
  );
}
