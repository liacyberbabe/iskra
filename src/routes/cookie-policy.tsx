import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy — Iskra Exchange" },
      {
        name: "description",
        content:
          "Learn how Iskra Exchange uses cookies and similar technologies on our website.",
      },
      {
        property: "og:title",
        content: "Cookie Policy — Iskra Exchange",
      },
      {
        property: "og:description",
        content:
          "Learn how Iskra Exchange uses cookies and similar technologies on our website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
});

function CookiePolicyPage() {
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
          Cookie Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-10 text-muted-foreground">
          <section>
            <h2 className="font-heading text-2xl text-foreground">1. Introduction</h2>
            <p className="mt-3 leading-relaxed">
              This Cookie Policy explains how Iskra Exchange (“we”, “us”, or “our”) uses
              cookies and similar technologies when you visit our website. It describes what
              these technologies are, why we use them, and your choices for controlling them.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">2. What are cookies?</h2>
            <p className="mt-3 leading-relaxed">
              Cookies are small text files placed on your device by websites you visit. They
              are widely used to make websites work more efficiently, as well as to provide
              information to the site owners. Similar technologies include local storage,
              pixels, and other tracking mechanisms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">3. How we use cookies</h2>
            <p className="mt-3 leading-relaxed">
              We use cookies to operate and improve our website, remember your preferences,
              understand how visitors interact with our pages, and deliver relevant
              experiences. Some cookies are essential for the website to function, while
              others help us analyze and enhance performance.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">4. Types of cookies we use</h2>
            <div className="mt-3 space-y-4 leading-relaxed">
              <p>
                <strong className="text-foreground">Necessary cookies.</strong> These cookies
                are required for the website to function and cannot be switched off in our
                systems. They are usually set in response to actions you take, such as setting
                your privacy preferences, logging in, or filling out forms.
              </p>
              <p>
                <strong className="text-foreground">Analytics and performance cookies.</strong>{" "}
                These cookies help us understand how visitors engage with our website by
                collecting and reporting information anonymously. They allow us to measure and
                improve site performance.
              </p>
              <p>
                <strong className="text-foreground">Functional cookies.</strong> These cookies
                enable enhanced functionality and personalization, such as remembering your
                language or region. They may be set by us or by third-party providers whose
                services we use.
              </p>
              <p>
                <strong className="text-foreground">Marketing cookies.</strong> These cookies
                may be used to deliver relevant advertisements and measure the effectiveness of
                marketing campaigns. They track visitors across websites and are set only with
                your consent where required.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">5. Third-party cookies</h2>
            <p className="mt-3 leading-relaxed">
              Some cookies are placed by third parties that provide services on our behalf,
              such as analytics or embedded content. These third parties may use their own
              cookies in accordance with their privacy policies. We recommend reviewing those
              policies for more information.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">6. Managing your preferences</h2>
            <p className="mt-3 leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can
              usually find these settings in the “Options” or “Preferences” menu of your
              browser. You can also delete existing cookies or configure your browser to refuse
              all cookies. Please note that disabling certain cookies may affect the
              functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">7. Changes to this policy</h2>
            <p className="mt-3 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our
              practices or for operational, legal, or regulatory reasons. The latest version
              will be posted on this page with a revised “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-foreground">8. Contact us</h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about this Cookie Policy or our use of cookies, please
              reach out through the contact form on our website.
            </p>
          </section>

          <p className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed">
            This page is maintained by Iskra Exchange to explain our use of cookies and similar
            technologies. Your use of the website is also subject to our{" "}
            <Link
              to="/privacy"
              className="text-primary underline underline-offset-4 hover:text-foreground"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/terms"
              className="text-primary underline underline-offset-4 hover:text-foreground"
            >
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
            <Link
              to="/cookie-policy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
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
