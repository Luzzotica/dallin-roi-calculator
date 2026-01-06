import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-card-border">
      {/* Book Now Section */}
      <div id="book-now" className="py-16 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-white mb-4">
            Ready To Get Started?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Dallin&apos;s excited to make your event life-changing and absolutely unforgettable 
            for your audience. Fill out the form or call to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/meeting-planners#book-now"
              className="px-8 py-4 bg-copper hover:bg-copper-dark text-background font-semibold rounded transition-colors"
            >
              Contact Dallin
            </Link>
            <a
              href="tel:+18017071-4- "
              className="px-8 py-4 border-2 border-copper text-copper hover:bg-copper/10 font-semibold rounded transition-colors"
            >
              Call: (801) 707-1488
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-white font-semibold mb-4">Dallin Cooper</h3>
              <p className="text-text-secondary text-sm">
                Leadership, conflict resolution, and communication speaker helping 
                audiences challenge their assumptions to communicate effectively.
              </p>
            </div>

            {/* Speaking */}
            <div>
              <h3 className="text-white font-semibold mb-4">Speaking</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#keynotes" className="text-text-secondary hover:text-copper text-sm transition-colors">
                    Keynotes
                  </Link>
                </li>
                <li>
                  <Link href="/meeting-planners" className="text-text-secondary hover:text-copper text-sm transition-colors">
                    Meeting Planners
                  </Link>
                </li>
                <li>
                  <Link href="/schools-youth" className="text-text-secondary hover:text-copper text-sm transition-colors">
                    Schools & Youth
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-text-secondary hover:text-copper text-sm transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/books" className="text-text-secondary hover:text-copper text-sm transition-colors">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-text-secondary hover:text-copper text-sm transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/calculator" className="text-text-secondary hover:text-copper text-sm transition-colors">
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.youtube.com/@DallinCooper" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-copper text-sm transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/dallincooper/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-copper text-sm transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/dallincooper/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-copper text-sm transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} Dallin Cooper. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="mailto:contact@dallincooper.com" 
                className="text-text-secondary hover:text-copper text-sm transition-colors"
              >
                contact@dallincooper.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

