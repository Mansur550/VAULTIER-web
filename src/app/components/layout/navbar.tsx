
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  UserRound,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { label: "New Arrivals", href: "/shop?sort=newest" },
  { label: "Clothing", href: "/category/clothing" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">


        {/* Mobile menu button */}
        <div className="flex flex-1 items-center md:hidden ">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

          >
            {menuOpen ? (
              <X size={21} strokeWidth={1.6} />
            ) : (
              <Menu size={21} strokeWidth={1.6} />
            )}

          </button>
        </div>

        {/* Home */}
        <Link
          href="/"
          aria-label="Vaultier home"
          className="shrink-0 text-2xl font-bold tracking-[-0.06em] text-black sm:text-[28px]"
        >
          VAULTIER.
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex xl:gap-10"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}

              className="group relative whitespace-nowrap text-[15px] font-medium font-semibold text-neutral-800 transition-colors duration-200 hover:font-semibold hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"

            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action icons */}
        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-3">
          <Link
            href="/shop"
            aria-label="Search products"
            className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100"
          >
            <Search size={20} strokeWidth={1.6} />
          </Link>

          <Link
            href="/account"
            aria-label="My account"
            className="hidden size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 sm:inline-flex"
          >
            <UserRound size={20} strokeWidth={1.6} />
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100"
          >
            <ShoppingBag size={20} strokeWidth={1.6} />
          </Link>

        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-neutral-200 bg-white px-5 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-neutral-100 py-4 text-sm font-medium text-neutral-800 transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/account"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-sm font-medium text-neutral-800 transition-colors hover:text-black sm:hidden"
            >
              My Account
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
