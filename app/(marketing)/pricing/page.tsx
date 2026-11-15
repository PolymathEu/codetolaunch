import type { Metadata } from "next";
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
            "A production-ready Next.js 15 SaaS boilerplate. Everything wired up, auth, payments, database, email, file uploads, background jobs, rate limiting.",
    },
    {
        question: "What is MarketPilot?",
        answer:
            "A Claude AI skill that acts as your personal marketing strategist. Positioning, pricing, Go-to-Market, conversion, retention. Not generic advice, strategy built around your specific business.",
    },
    {
        question: "Is this a subscription?",
        answer: "One-time payment. No subscription. No upsells.",
    },
] as const;

export const metadata: Metadata = {
    title: "Pricing",
    description: "One price. Everything included. $99 one-time payment for Code To Launch.",
};

export default function Page() {
    return (
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
            <section className="pb-12 pt-20 sm:pb-16 sm:pt-28" aria-labelledby="pricing-title">
                <div className="mx-auto max-w-[760px] text-center">
                    <h1 id="pricing-title" className="text-balance text-5xl font-normal leading-[1.02] tracking-[-0.025em] text-jet-ink sm:text-6xl md:text-7xl">
                        One price. Everything included.
                    </h1>
                    <p className="mt-6 text-base leading-7 text-steel sm:text-lg sm:leading-8">
                        One-time payment. No subscription. No upsells.
                    </p>
                </div>
            </section>

            <section className="pb-20 sm:pb-24" aria-label="Code To Launch pricing">
                <article id="purchase" className="mx-auto max-w-[960px] rounded-2xl bg-cream p-6 sm:p-10 md:p-12">
                    <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
                        <div>
                            <h2 className="text-2xl font-medium tracking-[-0.025em] text-jet-ink">Code To Launch</h2>
                            <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                <s className="text-2xl text-pewter">$149</s>
                                <span className="text-6xl font-normal leading-none tracking-[-0.025em] text-jet-ink">$99</span>
                            </p>
                            <p className="mt-4 text-sm leading-6 text-fog">One-time payment, lifetime access, no subscription</p>
                            <LinkButton
                                href={checkoutUrl ?? "#purchase"}
                                className="mt-8 min-h-12 px-5 py-3"
                            >
                                Get Code To Launch — $99
                                <ArrowUpRight aria-hidden="true" className="size-4" />
                            </LinkButton>
                            <p className="mt-4 text-sm text-fog">One-time payment. No subscription. No upsells.</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-jet-ink">What you get:</h3>
                            <ul className="mt-5 space-y-3">
                                {included.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm leading-5 text-jet-ink">
                                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </article>
            </section>

            <section className="border-t border-dove/70 py-20 sm:py-24" aria-labelledby="faq-title">
                <div className="mx-auto max-w-[760px]">
                    <h2 id="faq-title" className="text-3xl font-normal leading-tight tracking-[-0.025em] text-jet-ink sm:text-4xl">FAQ</h2>
                    <div className="mt-6 divide-y divide-dove/70 border-y border-dove/70">
                        {questions.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary className="cursor-pointer text-base font-medium text-jet-ink marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jet-ink">
                                    {question}
                                </summary>
                                <p className="mt-3 max-w-[680px] text-sm leading-6 text-steel">{answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}