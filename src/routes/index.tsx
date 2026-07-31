import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  Layers,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImage from "../assets/iskra-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Iskra Exchange — B2B SaaS for Modern Teams" },
      {
        name: "description",
        content:
          "Iskra Exchange helps businesses streamline operations, unify data, and scale with confidence.",
      },
      { property: "og:title", content: "Iskra Exchange — B2B SaaS for Modern Teams" },
      {
        property: "og:description",
        content:
          "Iskra Exchange helps businesses streamline operations, unify data, and scale with confidence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const features = [
  {
    icon: Layers,
    title: "Unified Operations",
    description:
      "Connect every workflow into one coherent system. Reduce friction and keep teams aligned from day one.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description:
      "Make decisions with live data. Dashboards and alerts surface what matters before it becomes a problem.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Built-in compliance, access controls, and encryption so you can scale without sleepless nights.",
  },
];

const testimonials = [
  { name: "Aurora", role: "Operations Lead, Fable" },
  { name: "Mira", role: "CTO, Northwind" },
  { name: "Sage", role: "VP Product, Cove" },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started.",
    features: [
      "Up to 5 team members",
      "Core workflow automation",
      "Standard analytics dashboard",
      "Email support",
      "1GB storage",
    ],
    cta: "Start free trial",
    featured: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For growing teams that need more power.",
    features: [
      "Up to 25 team members",
      "Advanced workflow builder",
      "Real-time insights & alerts",
      "Priority chat support",
      "50GB storage",
      "Custom integrations",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited team members",
      "Dedicated success manager",
      "Advanced security & compliance",
      "SSO & SCIM provisioning",
      "Unlimited storage",
      "Custom contracts & SLA",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              Iskra Exchange
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              Log in
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-accent" />
              Now available for teams of all sizes
            </div>
            <h1 className="mt-6 font-heading text-5xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              The operating system for{" "}
              <span className="text-accent">modern B2B teams</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Iskra Exchange unifies your data, workflows, and customer touchpoints
              into one elegant platform. Built for scale, designed for clarity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Start free trial
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-accent/10"
              >
                Watch demo
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required. 14-day free trial.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 to-primary/10 blur-2xl" />
            <img
              src={heroImage}
              alt="Abstract clay and sandstone shapes representing fluid B2B operations"
              width={1344}
              height={896}
              loading="eager"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Everything you need to move faster
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three core capabilities that transform how your business runs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-accent/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that fits your team. Scale up or down anytime.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                  plan.featured
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-card-foreground"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-semibold">
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.featured
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-2 ${
                    plan.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          plan.featured
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-primary-foreground/90"
                            : "text-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all ${
                    plan.featured
                      ? "bg-background text-foreground shadow-md hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-border bg-card px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by forward-thinking teams
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {["Fable", "Northwind", "Cove", "Lumen", "Sable"].map((name) => (
              <span
                key={name}
                className="font-heading text-2xl font-semibold text-muted-foreground/60"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="text-center">
                <p className="font-heading text-lg italic text-foreground">
                  &ldquo;Iskra changed how we think about operations.&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-primary px-8 py-16 text-center sm:px-16 sm:py-24">
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
            Ready to simplify your stack?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Join teams that use Iskra Exchange to run cleaner operations and
            deliver better outcomes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground shadow-md transition-all hover:bg-background/90"
            >
              Start free trial
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-heading text-xl font-semibold text-foreground">
              Iskra Exchange
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iskra Exchange. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
