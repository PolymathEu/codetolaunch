
import Link from "next/link";
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

export default function Pricing() {
    return (
        <section id="pricing" className="scroll-mt-24 border-t border-dove/70 py-20 sm:py-24">
            <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
                <div className="mx-auto max-w-[840px]">
                    <div className="mb-8 text-center">
                        <h2 className="text-balance text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-jet-ink sm:text-4xl md:text-5xl">
                            One price. Everything included.
                        </h2>
                    </div>
                    <article className="rounded-2xl bg-cream p-6 sm:p-10">
                        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                            <div>
                                <p className="text-sm font-medium text-fog">Code To Launch</p>
                                <p className="mt-5 flex items-baseline gap-3">
                                    <s className="text-2xl text-pewter">$149</s>
                                    <span className="text-6xl font-normal leading-none tracking-[-0.025em] text-jet-ink">$99</span>
                                </p>
                                <p className="mt-4 text-sm leading-6 text-fog">One-time payment. No subscription. No upsells.</p>
                            </div>
                            <ul className="space-y-3">
                                {included.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm leading-5 text-jet-ink">
                                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 border-t border-dove/70 pt-6 text-center">
                            <LinkButton
                                href={checkoutUrl ?? "/pricing#purchase"}
                                scroll={false}
                                className="min-h-12 px-5 py-3"
                            >
                                Get Code To Launch — $99
                                <ArrowUpRight aria-hidden="true" className="size-4" />
                            </LinkButton>
                        </div>
                    </article>
                    <p className="mt-4 text-center text-sm text-fog">One-time payment. Lifetime access. No subscription.</p>
                    <div className="mt-6 text-center">
                        <Link href="/pricing" scroll={false} className="text-sm font-medium text-jet-ink underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jet-ink">
                            View pricing
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
