
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/ui/button";

const navLinks = [
    { label: "Products", href: "/#products" },
    { label: "Stack", href: "/#stack" },
    { label: "Pricing", href: "/#pricing" },
] as const;

interface NavbarProps {
    announcementVisible?: boolean;
}

export default function Navbar({
    announcementVisible = false,
}: NavbarProps) {
    const pathname = usePathname();
    const previousPathname = useRef(pathname);

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const shouldReduceMotion = useReducedMotion();

    const checkoutHref =
        process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "/#purchase";

    // Track scroll position for subtle navbar border.
    useEffect(() => {
        const updateScroll = () => {
            setScrolled(window.scrollY > 4);
        };

        updateScroll();

        window.addEventListener("scroll", updateScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    // Handle navigation between routes and hash links.
    useEffect(() => {
        if (previousPathname.current === pathname) return;

        previousPathname.current = pathname;
        setMenuOpen(false);

        const frameId = window.requestAnimationFrame(() => {
            const targetId = decodeURIComponent(
                window.location.hash.slice(1)
            );

            const target = targetId
                ? document.getElementById(targetId)
                : null;

            const behavior = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
                ? "auto"
                : "smooth";

            if (target) {
                target.scrollIntoView({
                    behavior,
                    block: "start",
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior,
                });
            }
        });

        return () => window.cancelAnimationFrame(frameId);
    }, [pathname]);

    return (
        <header
            className={`sticky z-50 bg-background/95 backdrop-blur-md transition-[top] duration-300 ease-out ${announcementVisible ? "top-8 sm:top-10" : "top-0"
                }`}
        >
            {/* Scroll-aware bottom border */}
            <motion.div
                aria-hidden="true"
                initial={false}
                animate={{
                    opacity: scrolled ? 0.55 : 0,
                }}
                transition={{
                    duration: shouldReduceMotion ? 0 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-dove"
            />

            <motion.nav
                initial={shouldReduceMotion ? false : { opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                }}
                aria-label="Main navigation"
                className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8"
            >
                <div className="relative grid min-h-16 grid-cols-[1fr_auto_1fr] items-center">
                    {/* Mobile menu button */}
                    <button
                        type="button"
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation-menu"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="inline-flex size-10 items-center justify-start text-fog transition-colors duration-200 hover:text-jet-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jet-ink md:hidden"
                    >
                        {menuOpen ? (
                            <X aria-hidden="true" size={20} />
                        ) : (
                            <Menu aria-hidden="true" size={20} />
                        )}
                    </button>

                    {/* Logo */}
                    <Link
                        href="/"
                        aria-label="Code To Launch home"
                        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium tracking-[-0.025em] text-jet-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jet-ink md:static md:col-start-1 md:translate-x-0"
                    >
                        Code To Launch
                    </Link>

                    {/* Desktop navigation */}
                    <div className="hidden items-center justify-center gap-0.5 rounded-full border border-white/[0.04] bg-card p-1 md:flex">
                        {navLinks.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                scroll={pathname === "/"}
                                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full px-4 text-[13px] font-medium tracking-[-0.01em] text-white/65 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jet-ink"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile checkout icon */}
                    <Link
                        href={checkoutHref}
                        aria-label="Get Code To Launch — $99"
                        className="col-start-3 inline-flex size-10 shrink-0 items-center justify-self-end text-fog transition-colors duration-200 hover:text-jet-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jet-ink md:hidden"
                    >
                        <ArrowUpRight aria-hidden="true" size={20} />
                    </Link>

                    {/* Desktop checkout button */}
                    <LinkButton
                        href={checkoutHref}
                        size="sm"
                        className="hidden h-10 min-h-10 shrink-0 text-sm transition-all duration-200 ease-out hover:opacity-90 active:scale-[0.98] md:col-start-3 md:justify-self-end md:inline-flex"
                    >
                        Get Code To Launch — $99
                    </LinkButton>
                </div>

                {/* Mobile navigation */}
                <AnimatePresence initial={false}>
                    {menuOpen && (
                        <motion.div
                            id="mobile-navigation-menu"
                            initial={
                                shouldReduceMotion
                                    ? false
                                    : { opacity: 0, height: 0 }
                            }
                            animate={{ opacity: 1, height: "auto" }}
                            exit={
                                shouldReduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, height: 0 }
                            }
                            transition={
                                shouldReduceMotion
                                    ? { duration: 0 }
                                    : {
                                        duration: 0.24,
                                        ease: [0.22, 1, 0.36, 1],
                                    }
                            }
                            className="absolute inset-x-0 top-full overflow-hidden md:hidden"
                        >
                            <div className="rounded-b-xl border-y border-dove/50 bg-card px-1 pb-5 pt-3">
                                <div className="flex flex-col">
                                    {navLinks.map(({ label, href }) => (
                                        <Link
                                            key={label}
                                            href={href}
                                            scroll={pathname === "/"}
                                            onClick={() => setMenuOpen(false)}
                                            className="flex min-h-12 items-center justify-between border-b border-dove/50 px-4 text-base font-medium text-jet-ink transition-colors duration-200 hover:text-fog focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-jet-ink"
                                        >
                                            {label}
                                            <ArrowUpRight
                                                aria-hidden="true"
                                                size={18}
                                            />
                                        </Link>
                                    ))}
                                </div>

                                <LinkButton
                                    href={checkoutHref}
                                    onClick={() => setMenuOpen(false)}
                                    className="mt-5 min-h-11 w-full px-4 py-2"
                                >
                                    Get Code To Launch — $99
                                </LinkButton>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
}