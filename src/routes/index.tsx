import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Layers,
  Shield,
  Sparkle,
  Sparkles,
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
      { title: "Iskra Exchange — Software That Feels Effortless" },
      {
        name: "description",
        content:
          "Iskra Exchange unifies your data, workflows, and customer touchpoints into one beautifully calm platform built for modern B2B teams.",
      },
      {
        property: "og:title",
        content: "Iskra Exchange — Software That Feels Effortless",
      },
      {
        property: "og:description",
        content:
          "Iskra Exchange unifies your data, workflows, and customer touchpoints into one beautifully calm platform built for modern B2B teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const featuredIn = ["Creativeboom", "The Design Journal", "Muzli", "Squarespace", "She Designs"];

const stats = [
  { value: "45+", label: "Successful launches" },
  { value: "1.65M", label: "Happy end users" },
  { value: "12K", label: "Satisfied clients" },
];

const features = [
  {
    icon: Layers,
    title: "Unified Operations",
    description:
      "Connect every workflow into one coherent system, so nothing gets lost between teams.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description:
      "Live dashboards and gentle alerts surface what matters before it becomes a problem.",
  },
  {
    icon: Shield,
    title: "Quiet Security",
    description:
      "Compliance, access controls, and encryption handled in the background — always.",
  },
  {
    icon: Sparkle,
    title: "Designed With Care",
    description:
      "An interface your team actually enjoys opening, crafted down to the last detail.",
  },
];

const services = [
  "Consulting",
  "Support & Maintenance",
  "Development",
  "Implementation",
];

const process = [
  {
    step: "01",
    title: "Discover",
    description: "We learn your goals, your data, and the way your team really works.",
  },
  {
    step: "02",
    title: "Plan",
    description: "A tailored rollout strategy with clear milestones and no surprises.",
  },
  {
    step: "03",
    title: "Build",
    description: "We bring your workspace to life with intention and craftsmanship.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We go live together and celebrate your new operating system.",
  },
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

const faqs = [
  {
    question: "What is Iskra Exchange?",
    answer:
      "Iskra Exchange is a B2B SaaS platform that unifies your data, workflows, and customer touchpoints into one elegant system — built to help modern teams operate with clarity and scale with confidence.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Every plan starts with a 14-day free trial. No credit card is required to sign up, and you get full access to the features included in your chosen tier.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect on your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is built into every layer of Iskra Exchange. We use enterprise-grade encryption, role-based access controls, and regular compliance audits to keep your information safe.",
  },
  {
    question: "Do you offer custom integrations?",
    answer:
      "Yes. The Professional plan includes custom integrations, and Enterprise customers receive dedicated engineering support for building bespoke connectors.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Starter plans include email support, Professional adds priority chat, and Enterprise customers get a dedicated success manager plus SLA-backed response times.",
  },
  {
    question: "Can I invite team members?",
    answer:
      "Yes. Each plan includes a set number of seats, and you can add more anytime. Enterprise plans offer unlimited team members and SSO provisioning.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click any 'Start free trial' button, create your workspace, and follow the onboarding guide. Most teams are up and running within minutes.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:flex md:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <Sparkles className="h-5 w-5 shrink-0 text-primary" />
            <span className="truncate font-heading text-[0.7rem] uppercase tracking-[0.15em] text-foreground">
              Iskra Exchange
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            Let&apos;s work together
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-accent/25 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-1.5 backdrop-blur">
              <Sparkle className="h-3.5 w-3.5 text-primary" />
              <span className="eyebrow">Iskra Exchange</span>
            </div>
            <h1 className="mt-7 font-heading text-5xl font-light leading-[1.02] tracking-[-0.01em] text-foreground sm:text-6xl lg:text-7xl">
              Embrace your{" "}
              <em className="italic font-normal text-iridescent">vision</em>
              <br className="hidden sm:block" /> with software that feels{" "}
              <em className="italic font-normal text-primary">effortless.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Iskra Exchange unifies your data, workflows, and customer touchpoints
              into one beautifully calm platform — strategic, soulful, and built to scale.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                See how it works
                <span className="grid h-8 w-8 place-items-center rounded-full border border-border">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              No credit card required. 14-day free trial.
            </p>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden rounded-[2.5rem] sm:min-h-[32rem] lg:min-h-[28rem]">
            <img
              src={heroImage}
              alt="Soft iridescent pastel ribbons and glass spheres representing fluid operations"
              width={1344}
              height={1008}
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-background/50" />

            <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
              <div className="max-w-sm rounded-[1.75rem] border border-border/70 bg-background/45 p-7 shadow-2xl shadow-background/20 backdrop-blur-3xl">
                <p className="font-heading text-xl text-foreground drop-shadow-sm">
                  Explore our services
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-border/40 bg-secondary/90 px-3.5 py-1.5 text-sm text-secondary-foreground shadow-sm backdrop-blur-md"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured in */}
      <section className="border-y border-border bg-card/60 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Featured in
          </span>
          {featuredIn.map((name) => (
            <span
              key={name}
              className="font-heading text-lg text-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm"
            >
              <p className="font-heading text-5xl text-primary sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary">
              <Sparkle className="h-3.5 w-3.5" /> How we help
            </p>
            <h2 className="mt-4 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
              Everything you need,{" "}
              <em className="italic text-primary">nothing you don&apos;t</em>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="inline-flex rounded-2xl bg-secondary p-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 font-heading text-2xl text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-secondary/60 px-6 py-14 sm:px-12">
          <h2 className="text-center font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            The process
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-background font-heading text-lg text-primary">
                  {item.step}
                </span>
                <h3 className="mt-5 font-heading text-2xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
              Simple,{" "}
              <em className="italic text-primary">transparent</em> pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that fits your team. Scale up or down anytime.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[2rem] border p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl sm:p-8 ${
                  plan.featured
                    ? "border-primary/50 bg-primary/35 text-primary-foreground shadow-primary/15 backdrop-blur-3xl"
                    : "border-border/70 bg-background/60 text-card-foreground shadow-black/5 backdrop-blur-3xl"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/40 bg-accent/95 px-3 py-1 text-xs font-medium text-accent-foreground shadow-sm backdrop-blur-md">
                    Most popular
                  </span>
                )}
                <h3 className="font-heading text-xl text-foreground sm:text-2xl">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1 sm:mt-4">
                  <span className="font-heading text-4xl text-foreground sm:text-5xl">{plan.price}</span>
                  <span
                    className={`text-base sm:text-lg ${
                      plan.featured
                        ? "text-foreground/75"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    plan.featured
                      ? "text-foreground/85"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5 sm:mt-6 sm:gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.featured ? "text-foreground" : "text-primary"
                        }`}
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-foreground/95"
                            : "text-foreground/95"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium shadow-md transition-all sm:mt-8 sm:px-6 sm:py-3 sm:text-base ${
                    plan.featured
                      ? "border-primary-foreground/40 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "border-primary/40 bg-primary text-primary-foreground hover:bg-primary/90"
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

      {/* Kind words */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-primary px-8 py-14 sm:px-14">
          <p className="inline-flex items-center gap-2 font-heading text-2xl text-primary-foreground">
            <Sparkle className="h-4 w-4" /> Kind words
          </p>
          <blockquote
            className="mt-6 text-3xl leading-snug text-primary-foreground sm:text-4xl"
            style={{ fontFamily: "'Cormorant', serif", fontStyle: "italic" }}
          >
            &ldquo;Iskra completely transformed how we operate. The process was
            seamless, collaborative, and genuinely lovely.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-primary-foreground/80">
            Sarah Watson — Founder, Wildflower Wellness
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
              Frequently asked{" "}
              <em className="italic text-primary">questions</em>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-heading text-lg text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-border bg-card px-8 py-16 text-center shadow-lg sm:px-16">
          <h2 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            Let&apos;s create something{" "}
            <em className="italic text-primary">beautiful</em> together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Have a project in mind, or just want to say hello? We&apos;d love to
            hear from you.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-secondary"
            >
              View pricing
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-heading text-xl text-foreground">
              Iskra Exchange
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iskra Exchange. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <a
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
