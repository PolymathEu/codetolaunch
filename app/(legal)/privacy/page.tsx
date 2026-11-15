export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <h1 className="mb-3 text-4xl font-normal leading-tight tracking-[-0.025em]">Privacy Policy</h1>
            <p className="mb-10 text-sm text-muted-foreground">Last updated: November 5, 2026</p>

            <section className="mb-8">
                <h2 className="mb-3 text-lg font-medium tracking-[-0.015em]">What We Collect</h2>
                <p className="text-base leading-7 text-muted-foreground">
                    We collect your email address to deliver your purchase and send product updates.
                    Payment is processed by Polar.sh and we never store your payment details.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-3 text-lg font-medium tracking-[-0.015em]">How We Use It</h2>
                <p className="text-base leading-7 text-muted-foreground">
                    Your email is used only to deliver repository access, send product updates,
                    and respond to support requests. We do not sell or share your data with anyone.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-3 text-lg font-medium tracking-[-0.015em]">Analytics</h2>
                <p className="text-base leading-7 text-muted-foreground">
                    We use PostHog for anonymous usage analytics to understand how the site is used.
                    No personal data is collected through analytics.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-3 text-lg font-medium tracking-[-0.015em]">Contact</h2>
                <p className="text-base leading-7 text-muted-foreground">
                    To request deletion of your data or ask any privacy question, email{" "}
                    <a href="mailto:z3eiyn@gmail.com" className="underline">
                        z3eiyn@gmail.com
                    </a>
                </p>
            </section>
        </main>
    )
}