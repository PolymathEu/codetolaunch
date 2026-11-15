export default function TermsPage() {
    return (
        <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <h1 className="mb-3 text-4xl font-normal leading-tight tracking-[-0.025em]">Terms of Service</h1>
            <p className="mb-10 text-sm text-muted-foreground">Last updated: November 5, 2026</p>

            <section className="mb-8">
                <h2 className="mb-3 text-lg font-medium tracking-[-0.015em]">License</h2>
                <p className="text-base leading-7 text-muted-foreground">
                    One purchase gives you a lifetime license to use Code To Launch in unlimited personal
                    and commercial projects. You may not resell or redistribute the source code itself
                    as a standalone product.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-3 text-lg font-medium tracking-[-0.015em]">Refunds</h2>
                <p className="text-base leading-7 text-muted-foreground">
                    All sales are final due to the digital nature of the product. If you run into
                    a problem, email us at{" "}
                    <a href="mailto:z3eiyn@gmail.com" className="underline">
                        z3eiyn@gmail.com
                    </a>{" "}
                    and we will help you sort it out.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-3 text-lg font-medium tracking-[-0.015em]">Updates</h2>
                <p className="text-base leading-7 text-muted-foreground">
                    Your purchase includes all future updates to Code To Launch at no extra cost.
                    Updates are delivered through the same repository you received at purchase.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-3 text-lg font-medium tracking-[-0.015em]">Contact</h2>
                <p className="text-base leading-7 text-muted-foreground">
                    Questions? Email{" "}
                    <a href="mailto:z3eiyn@gmail.com" className="underline">
                        z3eiyn@gmail.com
                    </a>
                </p>
            </section>
        </main>
    )
}