import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const CALENDLY_URL = "https://calendly.com/YOUR_LINK_HERE"; // swap this when you create your Calendly

const services = [
  {
    emoji: "⏱️",
    problem: "Repetitive work is eating hours your team does not have",
    solution: "I automate it",
    description:
      "If someone on your team is copying data between systems, cleaning the same files every week, sending manual emails, or pulling the same report over and over: that is not work, that is wasted time. I figure out exactly what is happening and build something that does it automatically. You describe the problem, I make it disappear.",
    examples: ["Data moving between tools automatically", "Reports that generate themselves", "Emails sent without anyone touching a keyboard"],
  },
  {
    emoji: "🤖",
    problem: "You want to use AI but have no idea where to start",
    solution: "I build the right thing for your actual workflow",
    description:
      "Most businesses do not need a generic chatbot. They need something built for the specific task that is slowing them down. I have built tools that auto-apply for jobs, run personalised outreach campaigns, detect early warning signs in data, and generate full analysis reports overnight. If you can describe what you wish existed, I can probably build it.",
    examples: ["Custom AI tools built for your exact process", "Automations that run while you sleep", "No off-the-shelf software that half-fits"],
  },
  {
    emoji: "📊",
    problem: "You have data but cannot tell what it is saying",
    solution: "I turn it into answers",
    description:
      "Raw data sitting in a spreadsheet or database does not help anyone. I build models that predict what is likely to happen next: revenue, churn, demand, risk. I pair them with dashboards that are actually easy to read. Your team gets clear answers, not a pile of numbers to interpret.",
    examples: ["Forecasts for revenue, costs, or demand", "Dashboards your whole team can use", "Models deployed as live tools, not one-off reports"],
  },
  {
    emoji: "🏗️",
    problem: "You need a proper data system and do not know where to begin",
    solution: "I scope it, build it, and hand it over",
    description:
      "Starting from scratch or inherited a mess? I handle everything from understanding your problem to designing the system, building it, documenting it, and making sure your team can run it without me. No black boxes. No vendor lock-in. No six-month agency timelines.",
    examples: ["Full data infrastructure from the ground up", "Complete handoff. You own everything.", "Documentation and team onboarding included"],
  },
];

const steps = [
  {
    number: "01",
    title: "Tell me the problem",
    description: "Book a free 30-minute call or send me an email. Describe what is slowing you down. No technical knowledge needed.",
  },
  {
    number: "02",
    title: "Get a clear proposal",
    description: "I will come back with exactly what I would build, how long it takes, and what it costs. No surprises.",
  },
  {
    number: "03",
    title: "I build it, you own it",
    description: "Regular check-ins while I build. When it is done, you get everything: code, docs, and a walkthrough.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Nav */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <span className="font-display text-xl font-semibold tracking-tight bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent cursor-pointer">
                Aditi Neema
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Portfolio
                </Button>
              </Link>
              <a href="mailto:aneema099@gmail.com">
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Email Me
                </Button>
              </a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 border-b border-border/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[3px] text-accent font-medium mb-6">Available for freelance and consulting</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              If it is eating your time,
              <br />
              <span className="bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent">
                I can probably automate it.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              I build custom data tools, AI automations, and pipelines for small teams and solo founders. No technical jargon required. Just tell me what is slowing you down.
            </p>
            <p className="text-base text-muted-foreground mb-12">
              Based in Seattle · Working remotely worldwide · Billed in USD
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Book a free 30-min call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:aneema099@gmail.com">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <Mail className="w-5 h-5" />
                  Or just email me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24 md:py-32 border-b border-border/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">What I can fix for you</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Pick the one that sounds most like your situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors group">
                <div className="text-4xl mb-4">{service.emoji}</div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">{service.problem}</p>
                <h3 className="font-display text-xl font-bold mb-4 text-accent">{service.solution}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.examples.map((example, eidx) => (
                    <div key={eidx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{example}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24 md:py-32 border-b border-border/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">How it works</h2>
            <p className="text-lg text-muted-foreground">Simple process. No surprises.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-display font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Not sure if your problem is a fit?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Book a free 30-minute call. Tell me what is going on. If I cannot help, I will tell you honestly and point you toward someone who can.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Book a free call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:aneema099@gmail.com">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  <Mail className="w-5 h-5" />
                  aneema099@gmail.com
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
