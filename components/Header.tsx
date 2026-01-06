"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "Speaking",
    href: "#",
    submenu: [
      { label: "Keynotes", href: "/#keynotes" },
      { label: "Meeting Planners", href: "/meeting-planners" },
      { label: "Schools & Youth", href: "/schools-youth" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  { label: "Books", href: "/books" },
  { label: "Testimonials", href: "/testimonials" },
  {
    label: "Meeting Planners",
    href: "/meeting-planners",
    submenu: [
      { label: "Process", href: "/meeting-planners#process" },
      { label: "A/V Requirements", href: "/meeting-planners#av" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/DallinLogo.png"
              alt="Dallin Cooper"
              width={180}
              height={38}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {item.submenu ? (
                  <button className="text-white hover:text-copper transition-colors flex items-center gap-1 py-2">
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeSubmenu === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-copper transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-card-bg border border-card-border rounded-lg py-2 min-w-[200px] shadow-xl">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-text-secondary hover:text-copper hover:bg-background/50 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Book Dallin Button */}
          <div className="hidden lg:block">
            <Link
              href="/meeting-planners#book-now"
              className="px-6 py-2.5 border-2 border-copper text-copper hover:bg-copper hover:text-background font-semibold rounded transition-colors"
            >
              Book Dallin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-card-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        className="w-full text-left text-white hover:text-copper py-2 flex items-center justify-between"
                        onClick={() =>
                          setActiveSubmenu(activeSubmenu === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            activeSubmenu === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeSubmenu === item.label && (
                        <div className="pl-4 border-l border-card-border ml-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-2 text-text-secondary hover:text-copper transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white hover:text-copper py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/meeting-planners#book-now"
                className="mt-4 px-6 py-2.5 border-2 border-copper text-copper hover:bg-copper hover:text-background font-semibold rounded transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Dallin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

