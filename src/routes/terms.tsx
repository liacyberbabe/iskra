import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Iskra Exchange" },
      {
        name: "description",
        content:
          "Read the Terms & Conditions for using Iskra Exchange's website, products, and services.",
      },
      {
        property: "og:title",
        content: "Terms & Conditions — Iskra Exchange",
      },
      {
        property: "og:description",
        content:
          "Read the Terms & Conditions for using Iskra Exchange's website, products, and services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function TermsPage() {
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
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-10 text-muted-foreground">
          <section>
            <h2 className="font-heading text-2xl text-foreground">1. Acceptance of terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using the Iskra Exchange website, products, or services
              (collectively, the “Services”), you agree to be bound by these Terms &
              Conditions. If you do not agree, please do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">2. Changes to terms</h2>
            <p className="mt-3 leading-relaxed">
              We may update these terms from time to time. The latest version will always
              be posted on this page with a revised “Last updated” date. Continued use of
              the Services after changes means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">3. Use of services</h2>
            <p className="mt-3 leading-relaxed">
              You agree to use the Services only for lawful purposes and in a way that does
              not infringe the rights of, restrict, or inhibit anyone else’s use and
              enjoyment. Prohibited behavior includes harassment, transmitting offensive
              content, or disrupting the Services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">4. Accounts and security</h2>
            <p className="mt-3 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activity that occurs under your account. Please notify
              us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">5. Payment and subscriptions</h2>
            <p className="mt-3 leading-relaxed">
              Some Services require payment. Fees are described at checkout and in your
              account settings. Subscription fees are billed in advance and are
              non-refundable except where required by law. You may cancel your subscription
              at any time from your account dashboard.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">6. Termination</h2>
            <p className="mt-3 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Services at
              any time, with or without notice, for conduct that we believe violates these
              terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">7. Limitation of liability</h2>
            <p className="mt-3 leading-relaxed">
              To the fullest extent permitted by law, Iskra Exchange shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising
              out of or relating to your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">8. Governing law</h2>
            <p className="mt-3 leading-relaxed">
              These terms are governed by the laws of the jurisdiction in which Iskra
              Exchange operates, without regard to its conflict-of-law principles.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">9. Contact us</h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about these Terms & Conditions, please reach out
              through the contact form on our website.
            </p>
          </section>

          <p className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed">
            This page is maintained by Iskra Exchange to answer common legal questions
            about our Services. It is not legal advice and does not create an attorney-client
            relationship. Your use of the Services is also subject to our{" "}
            <Link to="/privacy" className="text-primary underline underline-offset-4 hover:text-foreground">
              Privacy Policy
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
            <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
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
