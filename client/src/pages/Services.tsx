import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle2, Calendar, Mail, ArrowLeft, Quote } from "lucide-react";
import { Link } from "wouter";

const CALENDLY_URL = "https://calendly.com/YOUR_LINK_HERE"; // swap this when you create your Calendly

const services = [
  {
    emoji: "⏱️",
    problem: "Repetitive work is eating hours your team doesn't have",
    solution: "I automate it",
    description:
      "If someone on your team is copying data between systems, cleaning the same files every week, sending manual emails, or pulling the same report over and over — that's not work, that's wasted time. I figure out exactly what's happening and build something that does it automatically. You describe the problem, I make it disappear.",
    examples: ["Data moving between tools automatically", "Reports that generate themselves", "Emails sent without anyone touching a keyboard"],
  },
  {
    emoji: "🤖",
    problem: "You want to use AI but have no idea where to start",
    solution: "I build the right thing for your actual workflow",
    description:
      "Most businesses don't need a generic chatbot — they need something built for the specific task that's slowing them down. I've built tools that auto-apply for jobs, run personalised outreach campaigns, detect early warning signs in data, and generate full analysis reports overnight. If you can describe what you wish existed, I can probably build it.",
    examples: ["Custom AI tools built for your exact process", "Automations that run while you sleep", "No off-the-shelf software that half-fits"],
  },
  {
    emoji: "📊",
    problem: "You have data but can't tell what it's saying",
    solution: "I turn it into answers",
    description:
      "Raw data sitting in a spreadsheet or database doesn't help anyone. I build models that predict what's likely to happen next — revenue, churn, demand, risk — and pair them with dashboards that are actually easy to read. Your team gets clear answers, not a pile of numbers to interpret.",
    examples: ["Forecasts for revenue, costs, or demand", "Dashboards your whole team can use", "Models deployed as live tools, not one-off reports"],
  },
  {
    emoji: "🏗️",
    problem: "You need a proper data system and don't know where to begin",
    solution: "I scope it, build it, and hand it over",
    description:
      "Starting from scratch or inherited a mess? I handle everything from understanding your problem to designing the system, building it, documenting it, and making sure your team can run it without me. No black boxes. No vendor lock-in. No six-month agency timelines.",
    examples: ["Full data infrastructure from the ground up", "Complete handoff — you own everything", "Documentation and team onboarding included"],
  },
];

const testimonials = [
  {
    quote:
      "I'll be honest, I was skeptical that anyone could automate the mess I was dealing with. Every day I'd lose 5 to 6 hours just pulling lead data and sending cold emails one by one. It was mind-numbing and it never ended. Aditi sat down with me, actually listened to how I worked, and then built me a web scraper, an automated cold-email system, and a Chrome extension that ties the whole thing together. The first time I watched it run on its own I kind of couldn't believe it. What used to swallow my entire morning now just happens in the background while I do real work. She built it fast, she didn't disappear after handing it over, and she made sure I understood how to use it. If you have repetitive data or outreach work draining your day, she's genuinely the person to call.",
    name: "— Friend's name here",
    title: "Add their title / what they do",
    saved: "5–6 hours saved daily",
  },
  {
    quote:
      "Anyone who's job hunted seriously knows how soul-crushing the applications get. I was spending hours every day copy-pasting the same information into application after application, and by the end of it I had no energy left for the parts that actually matter. I mentioned this to Aditi half-joking, like 'can you just make this stop,' and she actually built me something that did. All that repetitive busywork is just gone now. The real difference isn't even the time — it's where my time goes now. I can prep properly for interviews, research companies, and show up sharp instead of fried. She was easy to work with and quick about it, and it genuinely changed how I run my whole search. Can't recommend her enough.",
    name: "— Friend's name here",
    title: "Add their title / what they do",
    saved: "Hours freed up daily",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell me the problem",
    description: "Book a free 30-minute call or send me an email. Describe what's slowing you down — no technical knowledge needed.",
  },
  {
    number: "02",
    title: "Get a clear proposal",
    description: "I'll come back with exactly what I'd build, how long it takes, and what it costs. No surprises.",
  },
  {
    number: "03",
    title: "I build it, you own it",
    description: "Regular check-ins while I build. When it's done, you get everything — code, docs, and a walkthrough.",
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
              <a href={`mailto:aneema099@gmail.com`}>
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
            <p className="text-xs uppercase tracking-[3px] text-accent font-medium mb-6">Available for freelance & consulting</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              If it's eating your time,
              <br />
              <span className="bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent">
                I can probably automate it.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              I build custom data tools, AI automations, and pipelines for small teams and solo founders. No technical jargon required — just tell me what's slowing you down.
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

      {/* Testimonials */}
      <section className="relative py-24 md:py-32 border-b border-border/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">From people I've built for</h2>
            <p className="text-lg text-muted-foreground">Real tools, real time saved.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <Card key={idx} className="p-8 bg-card/50 border-border/50 flex flex-col">
                <Quote className="w-8 h-8 text-accent/40 mb-6 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent text-xs border-0 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {t.saved}
                  </Badge>
                </div>
              </Card>
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
              Book a free 30-minute call. Tell me what's going on. If I can't help, I'll tell you honestly — and point you toward someone who can.
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
