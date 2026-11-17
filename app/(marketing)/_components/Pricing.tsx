
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

const included = [
    "Code To Launch boilerplate (private repo access)",
    "MarketPilot Claude skill",
    "Full documentation",
    "All future updates",
    "Lifetime access",
] as const;

const questions = [
    {
        question: "What is Code To Launch?",
        answer:
            "A production ready Next.js 16 SaaS boilerplate. Everything wired up, auth, payments, database, email, file uploads, background jobs, rate limiting.",
    },
    {
        question: "What is MarketPilot?",
        answer:
            "A Claude AI skill that acts as your personal marketing strategist. It helps you shape your positioning, set your price, plan how to reach customers, and improve conversion and retention, based on your business.",
    },
    {
        question: "Is this a subscription?",
        answer: "One-time payment. No subscription. No upsells.",
    },
] as const;

const smoothTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1] as const,
};

export default function Pricing() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <section
            id="pricing"
            className="scroll-mt-24 border-t border-dove/70 py-20 sm:py-24"
        >
            <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
                <div className="mx-auto max-w-[840px]">
                    {/* Pricing heading */}
                    <div className="mb-8 text-center">
                        <h2 className="text-balance text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-jet-ink sm:text-4xl md:text-5xl">
                            One price. Everything included.
                        </h2>
                    </div>

                    {/* Pricing card */}
                    <article
                        id="purchase"
                        className="rounded-2xl bg-cream p-6 sm:p-10"
                    >
                        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                            <div>
                                <p className="text-sm font-medium text-fog">
                                    Code To Launch
                                </p>

                                <p className="mt-5 flex items-baseline gap-3">
                                    <s className="text-2xl text-pewter">$149</s>
                                    <span className="text-6xl font-normal leading-none tracking-[-0.025em] text-jet-ink">
                                        $99
                                    </span>
                                </p>

                                <p className="mt-4 text-sm leading-6 text-fog">
                                    One-time payment. No subscription. No upsells.
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {included.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm leading-5 text-jet-ink"
                                    >
                                        <Check
                                            aria-hidden="true"
                                            className="mt-0.5 size-4 shrink-0"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 border-t border-dove/70 pt-6 text-center">
                            <LinkButton
                                href={checkoutUrl ?? "#purchase"}
                                scroll={false}
                                className="min-h-12 px-5 py-3"
                            >
                                Get Code To Launch — $99
                                <ArrowUpRight
                                    aria-hidden="true"
                                    className="size-4"
                                />
                            </LinkButton>
                        </div>
                    </article>

                    <p className="mt-4 text-center text-sm text-fog">
                        One-time payment. Lifetime access. No subscription.
                    </p>

                    {/* Apple-inspired FAQ */}
                    <section
                        className="mt-20 border-t border-dove/70 pt-16 sm:mt-24 sm:pt-20"
                        aria-labelledby="faq-title"
                    >
                        <div className="mx-auto max-w-[760px]">
                            <h2
                                id="faq-title"
                                className="text-3xl font-normal leading-tight tracking-[-0.025em] text-jet-ink sm:text-4xl"
                            >
                                Frequently Asked Questions
                            </h2>

                            <div className="mt-8 divide-y divide-dove/70 border-y border-dove/70">
                                {questions.map(({ question, answer }, index) => {
                                    const isOpen = activeFaq === index;
                                    const panelId = `faq-panel-${index}`;

                                    return (
                                        <motion.article
                                            layout
                                            key={question}
                                            transition={{
                                                layout: {
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 36,
                                                    mass: 0.8,
                                                },
                                            }}
                                        >
                                            <button
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                                onClick={() =>
                                                    setActiveFaq(isOpen ? null : index)
                                                }
                                                className="group flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium text-jet-ink outline-none transition-colors duration-200 hover:text-steel focus-visible:ring-2 focus-visible:ring-jet-ink focus-visible:ring-offset-4"
                                            >
                                                <span>{question}</span>

                                                <motion.span
                                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                                    transition={{
                                                        duration: 0.25,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    }}
                                                    className="flex size-6 shrink-0 items-center justify-center text-jet-ink/50 transition-colors duration-200 group-hover:text-jet-ink"
                                                    aria-hidden="true"
                                                >
                                                    <span className="relative block size-3">
                                                        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                                                        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
                                                    </span>
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        key="content"
                                                        id={panelId}
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                            y: -8,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                            y: -8,
                                                        }}
                                                        transition={{
                                                            height: smoothTransition,
                                                            opacity: {
                                                                duration: 0.3,
                                                                ease: "easeOut",
                                                            },
                                                            y: smoothTransition,
                                                        }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="max-w-[680px] pb-6 pr-10 text-sm leading-7 text-steel">
                                                            {answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.article>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}