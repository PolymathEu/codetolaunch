
import { ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

const HEADLINE = 'Skip the setup. Ship this week.';

const SUBHEAD =
    'Code To Launch gives you a production-ready Next.js SaaS boilerplate and a built-in AI marketing strategist. Stop configuring. Start building.';

export default function Hero() {
    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

    return (
        <section className="mx-auto w-full max-w-[1200px] px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28 md:pb-32 md:pt-36">
            <div className="mx-auto max-w-[900px] text-center">
                <h1 className="text-balance text-5xl font-normal leading-[1.02] tracking-[-0.025em] text-jet-ink sm:text-6xl md:text-7xl">
                    {HEADLINE}
                </h1>
                <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-steel sm:text-lg sm:leading-8">
                    {SUBHEAD}
                </p>
                <div className="mt-8 flex justify-center">
                    <LinkButton
                        href={checkoutUrl ?? "/pricing#purchase"}
                        scroll={false}
                        className="min-h-12 px-5 py-3"
                    >
                        Get Code To Launch
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                    </LinkButton>
                </div>
                <p className="mt-4 text-sm text-fog">
                    One-time payment. Lifetime access. No subscription.
                </p>
            </div>
        </section>
    );
}
