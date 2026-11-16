
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface AnnouncementBarProps {
    isVisible: boolean;
    onClose: () => void;
}

export function AnnouncementBar({
    isVisible,
    onClose,
}: AnnouncementBarProps) {
    const shouldReduceMotion = useReducedMotion();

    const proUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

    if (!proUrl) {
        throw new Error("Missing NEXT_PUBLIC_CHECKOUT_URL");
    }

    return (
        <AnimatePresence initial={false}>
            {isVisible && (
                <motion.div
                    key="announcement-bar"
                    initial={
                        shouldReduceMotion ? false : { opacity: 0, y: -8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                        shouldReduceMotion
                            ? { opacity: 0, transition: { duration: 0 } }
                            : {
                                opacity: 0,
                                y: -4,
                                transition: {
                                    duration: 0.2,
                                    ease: [0.4, 0, 1, 1],
                                },
                            }
                    }
                    transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="sticky top-0 z-[60] flex h-9 w-full items-center justify-center border-b border-border bg-gradient-to-r from-[#fcd9d9] via-[#fdf2da] to-[#d6e5ff] px-10 text-xs text-zinc-950 sm:h-10 sm:px-12 sm:text-sm dark:text-zinc-900"
                >

                    <a
                        href={proUrl}
                        className="flex min-w-0 max-w-full items-center justify-center gap-1.5 text-center font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label="Get Code To Launch for $99"
                    >
                        <span className="text-center font-normal leading-tight">
                            Skip the setup. Ship this week.
                        </span>

                        <motion.span
                            whileHover={shouldReduceMotion ? undefined : { x: 1.5 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="group inline-flex shrink-0 items-center font-normal underline-offset-4 hover:underline"
                        >
                            Get lifetime access

                            <span className="ml-1 hidden sm:inline-flex">
                                <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                        </motion.span>
                    </a>


                    <motion.button
                        type="button"
                        onClick={onClose}
                        whileHover={
                            shouldReduceMotion ? undefined : { opacity: 0.72 }
                        }
                        whileTap={
                            shouldReduceMotion ? undefined : { scale: 0.96 }
                        }
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-md p-1 text-zinc-700 transition-colors hover:bg-black/5 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-4"
                        aria-label="Close announcement"
                    >
                        <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}