import { Check } from "lucide-react";

const features = [
    "Auth",
    "Payments",
    "Database",
    "Email",
    "File uploads",
    "Background jobs",
    "Rate limiting",
] as const;

const trustPoints = [
    "Clean, strict TypeScript codebase",
    "Conventional commits, no messy history",
    "Human-written documentation",
    "Built by a founder, for founders",
    "No AI slop",
] as const;

const stack = [
    "Next.js 16",
    "TypeScript strict",
    "Tailwind v4",
    "shadcn/ui",
    "Better Auth",
    "Drizzle ORM",
    "Supabase",
    "Polar.sh",
    "Resend",
    "Trigger.dev",
    "Upstash Redis",
    "Uploadthing",
    "PostHog",
    "Sentry",
] as const;

export default function Sections() {
    return (
        <>
            <section className="border-t border-dove/70 py-20 sm:py-24">
                <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-16 sm:px-8">
                    <h2 className="max-w-[760px] text-balance text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-jet-ink sm:text-4xl md:text-5xl">
                        Most founders spend their first two weeks on auth, payments, and database config, not on their actual product.
                    </h2>
                    <div className="flex flex-col justify-end gap-5 text-base leading-7 text-steel sm:text-lg sm:leading-8">
                        <p>By the time the boilerplate is ready, momentum is gone.</p>
                        <p className="font-medium text-steel">Code To Launch eliminates that entirely.</p>
                    </div>
                </div>
            </section>

            <section id="products" className="scroll-mt-24 border-t border-dove/70 py-20 sm:py-24">
                <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 md:grid-cols-2 md:items-start md:gap-16 sm:px-8">
                    <div>
                        <h2 className="max-w-[760px] text-balance text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-jet-ink sm:text-4xl md:text-5xl">
                            Everything wired up. Nothing to configure.
                        </h2>
                        <p className="mt-6 max-w-[560px] text-base leading-7 text-steel">
                            Auth, payments, database, email, file uploads, background jobs, rate limiting. All set up with the latest stack, strict TypeScript, clean commits, and full documentation. Clone, fill your <code>.env</code>, ship.
                        </p>
                        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm text-jet-ink">
                                    <Check aria-hidden="true" className="size-4 shrink-0 text-fog" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-dove/70 pt-6">
                            {trustPoints.map((point) => (
                                <li key={point} className="text-sm text-fog">{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-cream p-5 sm:p-8">
                        <div className="rounded-xl bg-charcoal p-5 text-paper sm:p-7">
                            <div aria-hidden="true" className="mb-6 flex gap-2">
                                <span className="size-2 rounded-full bg-[#ff5f57]" />
                                <span className="size-2 rounded-full bg-[#ffbd2e]" />
                                <span className="size-2 rounded-full bg-[#28c840]" />
                            </div>
                            <p className="font-mono text-xs leading-6 text-fog">CODE TO LAUNCH / READY TO SHIP</p>
                            <ul className="mt-5 space-y-3 font-mono text-sm leading-6">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <Check aria-hidden="true" className="size-4 text-white/70" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-dove/70 py-20 sm:py-24">
                <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 sm:px-8">
                    <div className="order-2 rounded-2xl bg-cream p-6 sm:p-10 md:order-1">
                        <p className="font-mono text-xs leading-5 text-fog">MarketPilot</p>
                        <ul className="mt-6 divide-y divide-dove/70">
                            {["Positioning", "Pricing", "Go-to-Market", "Conversion", "Retention"].map((item) => (
                                <li key={item} className="py-4 text-lg text-jet-ink first:pt-0 last:pb-0">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="max-w-[760px] text-balance text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-jet-ink sm:text-4xl md:text-5xl">
                            Your AI marketing strategist, included.
                        </h2>
                        <p className="mt-6 text-base leading-7 text-steel">
                            Most founders build a great product and have no idea how to market it. MarketPilot is a Claude skill that helps you define your positioning, set your pricing, plan your Go-to-Market, and improve conversion and retention, based on your actual business, not generic templates.
                        </p>
                    </div>
                </div>
            </section>

            <section id="stack" className="scroll-mt-24 border-t border-dove/70 py-20 sm:py-24">
                <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
                    <h2 className="max-w-[760px] text-balance text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-jet-ink sm:text-4xl md:text-5xl">
                        Built with the right tools.
                    </h2>
                    <p className="mt-4 max-w-[520px] text-base leading-7 text-steel">
                        No outdated packages. No bloat. Every library chosen for a reason.
                    </p>
                    <ul className="mt-8 flex flex-wrap gap-3">
                        {stack.map((item) => (
                            <li key={item} className="rounded-full border border-dove px-4 py-2 font-mono text-xs leading-5 text-steel sm:text-sm">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}