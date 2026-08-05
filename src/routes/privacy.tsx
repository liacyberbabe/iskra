import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Iskra Exchange" },
      {
        name: "description",
        content:
          "Learn how Iskra Exchange collects, uses, and protects your personal information.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Iskra Exchange",
      },
      {
        property: "og:description",
        content:
          "Learn how Iskra Exchange collects, uses, and protects your personal information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-heading text-[0.7rem] uppercase tracking-[0.15em] text-foreground">
              Iskra Exchange
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-10 text-muted-foreground">
          <section>
            <h2 className="font-heading text-2xl text-foreground">1. Introduction</h2>
            <p className="mt-3 leading-relaxed">
              Iskra Exchange (“we”, “us”, or “our”) respects your privacy. This Privacy
              Policy explains how we collect, use, store, and protect personal information
              when you use our website and Services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">2. Information we collect</h2>
            <p className="mt-3 leading-relaxed">
              We collect information you provide directly, such as your name, email
              address, and billing details when you create an account or contact us. We
              also collect usage data and device information automatically to help us
              improve the Services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">3. How we use your information</h2>
            <p className="mt-3 leading-relaxed">
              We use your information to provide and maintain the Services, process
              transactions, communicate with you, improve our products, and ensure
              security and compliance.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">4. Sharing your information</h2>
            <p className="mt-3 leading-relaxed">
              We do not sell your personal information. We may share it with trusted
              service providers who help us operate the Services, or when required by
              law, to protect our rights, or in connection with a business transfer.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">5. Cookies and analytics</h2>
            <p className="mt-3 leading-relaxed">
              We use cookies and similar technologies to understand how visitors interact
              with our website, remember preferences, and deliver a better experience. You
              can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">6. Data security</h2>
            <p className="mt-3 leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to
              protect your information. However, no method of transmission over the
              internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">7. Your rights</h2>
            <p className="mt-3 leading-relaxed">
              Depending on your location, you may have the right to access, correct,
              delete, or restrict the processing of your personal information. To make a
              request, please contact us through the form on our website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">8. Data retention</h2>
            <p className="mt-3 leading-relaxed">
              We retain personal information for as long as necessary to provide the
              Services, fulfill the purposes described in this policy, comply with legal
              obligations, and resolve disputes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">9. Children’s privacy</h2>
            <p className="mt-3 leading-relaxed">
              Our Services are not directed to children under 16. We do not knowingly
              collect personal information from children under 16. If you believe we have
              collected such information, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">10. Contact us</h2>
            <p className="mt-3 leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our data
              practices, please reach out through the contact form on our website.
            </p>
          </section>

          <p className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed">
            This page is maintained by Iskra Exchange to answer common privacy questions
            about our Services. It describes our current practices and may be updated as
            those practices evolve. Your use of the Services is also subject to our{" "}
            <Link to="/terms" className="text-primary underline underline-offset-4 hover:text-foreground">
              Terms & Conditions
            </Link>
            .
          </p>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-heading text-xl text-foreground">Iskra Exchange</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iskra Exchange. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
