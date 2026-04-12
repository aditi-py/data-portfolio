/**
 * Data Portfolio - Five Section Layout
 * Section 1: About & Journey
 * Section 2: Skills & Projects
 * Section 3: Education
 * Section 4: Work Experience
 * Section 5: Contact
 */

import { useState, useEffect, useRef, type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Mail, ExternalLink, FileText, BarChart3, Workflow, Brain, Phone, Sliders, Settings2, CloudSun, Music, Bot, BarChart2, Network, Cpu, Activity, ChevronDown, Lock, Unlock, X } from "lucide-react";

export default function Home() {
  const skills = [
    { category: "Programming & Data", items: ["Python (pandas, NumPy, scikit-learn)", "SQL", "PySpark", "C++", "Selenium", "SAS"] },
    { category: "APIs & Backend Services", items: ["FastAPI", "RESTful API", "Docker"] },
    { category: "Data Engineering & Pipelines", items: ["ETL/ELT Workflows", "Data Modeling", "SFTP Ingestion", "Web Scraping"] },
    { category: "AI Automation & Orchestration", items: ["n8n", "Claude Code", "Model Context Protocol (MCP)", "Multi-Agent Systems"] },
    { category: "Machine Learning & Analytics", items: ["Time-Series Forecasting", "Statistical Analysis"] },
    { category: "Cloud Platforms & Data Warehousing", items: ["AWS (Kinesis, Glue, RDS, S3)", "Azure (Blob Storage, Logic Apps)", "Snowflake"] },
    { category: "DevOps & Version Control", items: ["Git", "GitHub", "GitHub Actions", "CI/CD Pipelines", "Automated Model Deployment"] },
    { category: "Project Management & Collaboration", items: ["Agile Methodologies", "JIRA", "Stakeholder Communication"] }
  ];

  const projectCategories: Record<string, {title: string; description: string; type: string; icon: ComponentType<{className?: string}>; tags: string[]; link: string; image: string; locked?: boolean;}[]> = {
    "ML and Analytics": [
      {
        title: "AI-Generated Text Detection",
        description: "Deep learning classifier using Keras/TensorFlow to detect AI-generated vs. human-written text.",
        type: "Machine Learning",
        icon: Brain,
        tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "NLP"],
        link: "https://github.com/aditi-py/AI-Generated-Text-Detection",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344236677/hVHHOxydSkVxgfiE.png"
      },
      {
        title: "Global Health Equity Analysis",
        description: "Comprehensive data analysis examining geographic and economic distribution of 83 international health organizations.",
        type: "Data Analysis",
        icon: BarChart3,
        tags: ["Python", "Pandas", "DuckDB", "Matplotlib", "Data Visualization"],
        link: "https://github.com/aditi-py/Global-Health-Equity-Analysis-Geographic-Economic-Distribution-Study",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344236677/qDOOdUErgGFhxEDT.png"
      },
      {
        title: "Insurance Policy Cancellation Prediction",
        description: "Multiclass predictive model analyzing 1M+ insurance policies from the Kangaroo dataset (2013-2017).",
        type: "Predictive Analytics",
        icon: Brain,
        tags: ["Python", "Scikit-learn", "Feature Engineering", "Classification", "Data Mining"],
        link: "https://github.com/aditi-py/Policy-Cancelations",
        image: "https://i.ibb.co/0ypV0nMJ/Gemini-Generated-Image-gm4opngm4opngm4o.png"
      },
    ],
    "AI": [
      {
        title: "Crisis Tracking Automation",
        description: "Automated detection of crisis signals on Reddit using n8n and OpenAI. Built because people fall through the cracks in online communities and data can catch them before it is too late.",
        type: "Workflow Automation",
        icon: Workflow,
        tags: ["n8n", "OpenAI", "Google Sheets", "Looker", "Docker", "Automation"],
        link: "https://github.com/aditi-py/Crisis-Tracker",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344236677/npBomabZZKIlnIxi.png"
      },
      {
        title: "Trainr",
        description: "A no-code modeling platform where users connect their own data, select ML algorithms, and tune parameters through a guided interface: no scripting required. Exposes model configuration options typically hidden behind code.",
        type: "Machine Learning",
        icon: Workflow,
        tags: ["No-Code", "ML", "Claude Code", "UI/UX"],
        link: "https://github.com/aditi-py/Trainr",
        image: "https://i.ibb.co/SwytBndr/trainr.png"
      },
      {
        title: "Mood × Weather Research",
        description: "Original research on correlations between weather patterns and mood, matching individual streaming data with meteorological data and audio valence metrics. Findings synthesized against peer-reviewed literature from Google Scholar and arXiv.",
        type: "Research",
        icon: CloudSun,
        tags: ["Research", "Claude Code", "Spotify API", "Meteorological Data", "Statistical Analysis"],
        link: "Coming Soon",
        image: "https://i.ibb.co/PsLnRxg6/Gemini-Generated-Image-f5elyrf5elyrf5el.png"
      },
      {
        title: "Data Analytics with Claude",
        description: "An AI-powered data analysis platform featuring a 6-agent orchestration system with custom slash commands and automated workflows. Supports Python, R, SQL, and JavaScript for automated EDA, statistical analysis, and report generation.",
        type: "Data Analysis",
        icon: Bot,
        tags: ["Python", "R", "SQL", "JavaScript", "Multi-Agent", "Claude Code"],
        link: "https://github.com/aditi-py/Claude-Data-Analytics",
        image: "https://i.ibb.co/Z17dSSd9/Gemini-Generated-Image-bae9fvbae9fvbae9-1.png"
      },
      {
        title: "International Cold Emailing Agent",
        description: "An AI-powered sales outreach agent custom built for friends. Automates international cold emailing with personalized messaging, saving significant time, money, and effort. Fully customized to individual requirements and business contexts.",
        type: "AI Agent",
        icon: Mail,
        tags: ["Python", "Claude Code", "AI Agent", "Email Automation", "Sales"],
        link: "https://github.com/aditi-py/InternationalColdEmailing",
        image: "",
        locked: true
      },
      {
        title: "LinkedIn Outreach Agent",
        description: "An AI-driven LinkedIn outreach agent built for friends. Automates personalized connection requests and messaging sequences with a built-in dashboard to track engagement, responses, and pipeline. Saves hours of manual outreach while keeping it personal.",
        type: "AI Agent",
        icon: Network,
        tags: ["Python", "Claude Code", "AI Agent", "LinkedIn API", "Dashboard"],
        link: "https://github.com/aditi-py/International",
        image: "",
        locked: true
      },
    ],
    "Visualizations": [
      {
        title: "Tableau Public Dashboards",
        description: "Collection of interactive Tableau dashboards showcasing data visualization expertise.",
        type: "Data Visualization",
        icon: BarChart3,
        tags: ["Tableau", "Data Visualization", "Analytics", "Business Intelligence"],
        link: "https://public.tableau.com/app/profile/aditi.neema/vizzes",
        image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/0gtKpc3tfstzfgVLX4c8xv-img-2_1770760204000_na1fn_dGFibGVhdS1kYXNoYm9hcmRzLXNob3djYXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94LzBndEtwYzN0ZnN0emZnVkxYNGM4eHYtaW1nLTJfMTc3MDc2MDIwNDAwMF9uYTFmbl9kR0ZpYkdWaGRTMWtZWE5vWW05aGNtUnpMWE5vYjNkallYTmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QWQ9DcDLcGEoTVpYH1DnkPsU0HP071HWfpZJ6PUo43UCAC69ZlhKUETqyyvUvml3Rb37AJoYkUFJEWRd~uFvq0xIScXff4D5nW9vuOYqJTEtK-2w0bgvZzjLG~D-lIwAxJyf~uLKKs0TowaLT-9r5JLN6UHaAP8SSlHQS9kksVIxwR6RLBhsyi12PL7rje4WdGkHK6hZjYLQcQzI5Tqzxj3tkczg1L6P9rlxsB5WRbAcaJTvFndpRBTumOJjKrJkngviOVLM2k-xH~GdB9T7JIRjlLDuEsjrYrXg4w3DmCVR6A3t30dH5vU0jg4Y2wmNy9yUtrtn9nUd-udmEnFk5w__"
      },
      {
        title: "UFC Looker Dashboard",
        description: "Designed and deployed Snowflake ETL pipeline processing 15K+ UFC records using Python and SQL with dimensional modeling.",
        type: "Dashboard & Analytics",
        icon: BarChart3,
        tags: ["Looker", "Snowflake", "Python", "SQL", "Data Warehouse"],
        link: "https://lookerstudio.google.com/reporting/d7df433e-bdbe-4bf6-97cc-f053e90c562e",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344236677/NFtmPUGtInpKpyRu.png"
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<string>("ML and Analytics");

  // Locked projects state
  const [unlockedProjects, setUnlockedProjects] = useState<Set<string>>(new Set());
  const [passwordModal, setPasswordModal] = useState<{open: boolean; projectTitle: string; projectLink: string}>({open: false, projectTitle: '', projectLink: ''});
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleLockedClick = (title: string, link: string) => {
    if (unlockedProjects.has(title)) {
      window.open(link, '_blank');
      return;
    }
    setPasswordModal({open: true, projectTitle: title, projectLink: link});
    setPasswordInput('');
    setPasswordError(false);
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === 'Hiunlockme99') {
      setUnlockedProjects(prev => new Set(prev).add(passwordModal.projectTitle));
      setPasswordModal({open: false, projectTitle: '', projectLink: ''});
      setPasswordInput('');
      setPasswordError(false);
      window.open(passwordModal.projectLink, '_blank');
    } else {
      setPasswordError(true);
    }
  };

  // Flipping heading words
  const flipWords = ["Data & AI Engineer", "SEL Advocate", "Systems Thinker", "Builder"];
  const [wordIdx, setWordIdx] = useState(0);
  const [flipState, setFlipState] = useState<'visible' | 'out' | 'in'>('visible');
  const flipRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipState('out');
      flipRef.current = setTimeout(() => {
        setWordIdx(prev => (prev + 1) % flipWords.length);
        setFlipState('in');
        requestAnimationFrame(() => requestAnimationFrame(() => setFlipState('visible')));
      }, 280);
    }, 2800);
    return () => {
      clearInterval(interval);
      if (flipRef.current) clearTimeout(flipRef.current);
    };
  }, []);

  const flipStyle: React.CSSProperties =
    flipState === 'out'
      ? { transform: 'rotateX(90deg)', opacity: 0, transition: 'transform 0.28s ease-in, opacity 0.2s ease-in' }
      : flipState === 'in'
      ? { transform: 'rotateX(-60deg)', opacity: 0, transition: 'none' }
      : { transform: 'rotateX(0deg)', opacity: 1, transition: 'transform 0.28s ease-out, opacity 0.2s ease-out' };

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="font-display text-xl font-semibold tracking-tight bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent">
              Aditi Neema
            </div>
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Menu
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuItem asChild>
                    <a href="#about" className="cursor-pointer w-full">About Me</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#skills-projects" className="cursor-pointer w-full">Skills</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#projects" className="cursor-pointer w-full">Projects</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#education" className="cursor-pointer w-full">Education</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#experience" className="cursor-pointer w-full">Experience</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#certifications" className="cursor-pointer w-full">Certifications</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#why-i-build" className="cursor-pointer w-full">Why I Build</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button onClick={handleResumeClick} variant="outline" size="sm" className="gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
              <a href="#contact">
                <Button variant="default" size="sm">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1: ABOUT & JOURNEY */}
      <section id="about" className="relative pt-10 pb-12 md:pt-12 md:pb-16 border-b border-border/50 scroll-mt-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <Card className="overflow-hidden bg-card/50 border-border/50 sticky top-24">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/aditi.png"
                    alt="Aditi Neema"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-display text-xl font-bold mb-1">Aditi Neema</h2>
                  <p className="text-xs text-accent font-semibold mb-2">Data Analyst & Engineer</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Turning chaos into clarity. Equally invested in where data tools are not being used: the gaps in childhood development and mental health infrastructure.
                  </p>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-snug">
                Hello there, I am Aditi
                <br />
                <span className="text-muted-foreground font-medium text-3xl md:text-4xl">I am a </span>
                <span style={{ display: 'inline-block', perspective: '600px' }}>
                  <span
                    className="text-accent"
                    style={{ display: 'inline-block', transformOrigin: 'center bottom', ...flipStyle }}
                  >
                    {flipWords[wordIdx]}
                  </span>
                </span>
                <span className="text-muted-foreground font-medium text-3xl md:text-4xl">.</span>
              </h1>
              <div className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4">
                <p>Making Data Make Sense: I analyze and build data pipelines, ML models, and AI systems that turn chaos into clarity. Whether it is modernizing legacy SAS codebases into cloud infrastructure, engineering streaming ETL pipelines, or orchestrating multi-agent AI platforms, I focus on making insights actionable when they still matter.</p>
              </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-12">
              {/* Engineering Stats */}
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[2px] text-primary font-medium mb-3">Engineering</p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100M+</div>
                    <div className="text-xs text-muted-foreground">Records Processed</div>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-border/50"></div>
              <div className="block sm:hidden h-px w-24 bg-border/50"></div>
              {/* Advocacy Stats */}
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[2px] text-secondary font-medium mb-3">Advocacy</p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-2xl font-bold text-secondary">250+</div>
                    <div className="text-xs text-muted-foreground">People Reached</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">SEL</div>
                    <div className="text-xs text-muted-foreground">Certified</div>
                  </div>
                </div>
              </div>
            </div>

              <div className="flex gap-4 justify-center">
                <a href="https://github.com/aditi-py" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg" className="gap-2">
                    <Github className="w-5 h-5" />
                    View GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/aditi-neema/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY I BUILD */}
      {/* SECTION 2: SKILLS & PROJECTS */}
      <section id="skills-projects" className="relative pt-6 pb-24 md:pt-8 md:pb-32 border-b border-border/50 scroll-mt-16">
        <div className="container">
          {/* Skills */}
          <div className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sidx) => (
                      <Badge key={sidx} variant="secondary" className="bg-accent/20 text-accent hover:bg-accent/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div id="projects" className="scroll-mt-16" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">Featured Projects</h2>

            {/* Category Nav - scrolls to section */}
            <div className="flex flex-wrap gap-2 mb-12 sticky top-16 z-40 bg-background/80 backdrop-blur py-3 -mx-4 px-4 border-b border-border/30">
              {Object.keys(projectCategories).map((category) => {
                const slug = category.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById(`cat-${slug}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="transition-all"
                  >
                    {category}
                  </Button>
                );
              })}
            </div>

            {/* All categories shown */}
            <div className="space-y-16">
              {Object.entries(projectCategories).map(([category, projects]) => {
                const slug = category.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={category}>
                    <div id={`cat-${slug}`} className="scroll-mt-32" />
                    <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {projects.map((project, idx) => {
                        const IconComponent = project.icon;
                        const isLocked = project.locked && !unlockedProjects.has(project.title);
                        return (
                          <Card key={idx} className={`overflow-hidden transition-colors group bg-card/50 border-border/50 ${isLocked ? 'border-secondary/30 hover:border-secondary/50' : 'hover:border-accent/50'}`}>
                            {/* Image area */}
                            <div className="relative h-48 overflow-hidden bg-muted">
                              {project.locked && !project.image ? (
                                <div className="w-full h-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(155,123,212,0.15) 0%, rgba(232,126,154,0.15) 50%, rgba(155,123,212,0.1) 100%)'}}>
                                  <div className="flex flex-col items-center gap-3">
                                    {isLocked ? (
                                      <Lock className="w-10 h-10 text-secondary/60" />
                                    ) : (
                                      <Unlock className="w-10 h-10 text-accent/60" />
                                    )}
                                    <span className="text-xs uppercase tracking-[2px] text-muted-foreground/60 font-medium">
                                      {isLocked ? 'Password Protected' : 'Unlocked'}
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              )}
                            </div>
                            <div className="p-6">
                              {/* Title always visible */}
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                                    {project.title}
                                    {project.locked && isLocked && <Lock className="w-3.5 h-3.5 text-secondary/70" />}
                                  </h3>
                                  <p className="text-xs text-accent font-medium">{project.type}</p>
                                </div>
                                <IconComponent className="w-5 h-5 text-accent flex-shrink-0" />
                              </div>
                              {/* Blurred content for locked projects */}
                              <div className={isLocked ? 'select-none' : ''}>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                  {project.description}
                                </p>
                                <div className={`flex flex-wrap gap-2 mb-4 ${isLocked ? 'blur-[5px]' : ''}`}>
                                  {project.tags.map((tag, tidx) => (
                                    <Badge key={tidx} variant="outline" className="text-xs">{tag}</Badge>
                                  ))}
                                </div>
                              </div>
                              {/* Button */}
                              {project.locked ? (
                                <Button
                                  variant={isLocked ? "outline" : "default"}
                                  size="sm"
                                  className={`w-full gap-2 ${isLocked ? 'border-secondary/40 text-secondary hover:bg-secondary/10' : ''}`}
                                  onClick={() => handleLockedClick(project.title, project.link)}
                                >
                                  {isLocked ? (
                                    <>
                                      <Lock className="w-4 h-4" />
                                      Enter Password
                                    </>
                                  ) : (
                                    <>
                                      View Project
                                      <ExternalLink className="w-4 h-4" />
                                    </>
                                  )}
                                </Button>
                              ) : (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                  <Button variant="default" size="sm" className="w-full gap-2">
                                    View Project
                                    <ExternalLink className="w-4 h-4" />
                                  </Button>
                                </a>
                              )}
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EDUCATION */}
      <section id="education" className="relative py-24 md:py-32 border-b border-border/50 scroll-mt-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12">Education</h2>
          <div className="space-y-6 max-w-4xl">
            {/* Master's Degree */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Master of Science</h3>
                  <p className="text-accent font-medium mb-1">Business Analytics and Project Management</p>
                  <p className="text-sm text-muted-foreground">University of Connecticut</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Aug 2022 - May 2024</p>
                  <p className="text-sm text-muted-foreground">Connecticut, USA</p>
                </div>
              </div>
            </Card>

            {/* Bachelor's Degree */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Bachelor of Technology</h3>
                  <p className="text-accent font-medium mb-1">Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground">Rajiv Gandhi Technical University</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Aug 2018 - May 2022</p>
                  <p className="text-sm text-muted-foreground">MP, India</p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* SECTION 4: WORK EXPERIENCE */}
      <section id="experience" className="relative pt-8 pb-24 md:pt-10 md:pb-32 border-b border-border/50 scroll-mt-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12">Work Experience</h2>
          <div className="space-y-8 max-w-4xl">
            {/* Freelancing */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Consultant Data Engineer</h3>
                  <p className="text-accent font-medium mb-1">Freelancing</p>
                  <p className="text-sm text-muted-foreground">Remote, USA</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Dec 2025 - Present</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Created a Reddit Crisis Detection tracker using n8n, OpenAI API, and Looker to classify and visualize mental health risk signals in real-time across subreddits.</p>

                <p>Built a LinkedIn Outreach Bot that automates targeted connection requests and follow-up messaging to professionals filtered by company and country, using Python, Playwright, and SQLite.</p>

                <p>Built Trainr, a no-code ML modeling platform where users connect data, select algorithms, and tune parameters through a guided interface, no scripting required.</p>

                <p>Developed a 6-agent AI data analysis platform in Claude Code with custom slash commands, automated EDA, and multi-language pipeline support (Python, R, SQL, JS).</p>
              </div>
            </Card>

            {/* A2R Software Solutions */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Data Engineer</h3>
                  <p className="text-accent font-medium mb-1">A2R Software Solutions</p>
                  <p className="text-sm text-muted-foreground">Remote, USA</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Jul 2025 - Nov 2025</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Led the full migration of a 25,000+ line SAS codebase into a modern Python-based data infrastructure, designing Azure-Snowflake ETL pipelines for product performance and pricing analytics.</p>

                <p>Containerized the entire data platform using Docker for reproducible, production-ready deployments, and exposed pipeline orchestration via RESTful APIs for downstream service consumption.</p>

                <p>Built automated data ingestion workflows eliminating 20+ hours of manual work weekly, and authored comprehensive technical documentation covering architecture, deployment runbooks, and API contracts.</p>
              </div>
            </Card>

            {/* Zavvis Technologies */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Data Science Analyst</h3>
                  <p className="text-accent font-medium mb-1">Zavvis Technologies</p>
                  <p className="text-sm text-muted-foreground">Remote, USA</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Aug 2024 - Jun 2025</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Engineered scalable streaming and batch ETL pipelines processing 50k+ daily financial transactions in real-time to power near-instant analytics.</p>

                <p>Built and deployed FastAPI microservices to serve ARIMA and LSTM forecasting models as REST endpoints, enabling real-time revenue and expense predictions consumed by dashboards and internal tools.</p>

                <p>Established Git workflows and CI/CD automation for containerized model deployments, reducing errors and accelerating release cycles across the team.</p>
              </div>
            </Card>

            {/* University of Connecticut - Data Engineering Intern */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Data Engineering Intern</h3>
                  <p className="text-accent font-medium mb-1">University of Connecticut: Budget, Planning & Institutional Research</p>
                  <p className="text-sm text-muted-foreground">Connecticut, USA</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Aug 2023 - Dec 2023</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Processed 2M+ rows of student-related institutional data across nine datasets, conducting full-scale Exploratory Data Analysis using SQL and Python (pandas, NumPy), establishing standardized cleaning procedures.</p>

                <p>Contributed to predictive model development that drove a 20% increase in graduation rates, while acting as liaison between the analyst team and university leadership to translate findings into actionable decisions.</p>
              </div>
            </Card>

            {/* University of Connecticut - Tutoring Assistant */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Tutoring Assistant: Mathematics & Statistics</h3>
                  <p className="text-accent font-medium mb-1">University of Connecticut</p>
                  <p className="text-sm text-muted-foreground">Connecticut, USA</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Mar 2023 - May 2024</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Tutored undergraduate students in calculus, linear algebra, probability, and statistics through individual and group sessions adapted to diverse learning styles.</p>
              </div>
            </Card>

            {/* Infoserve Consultants */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Data Analyst</h3>
                  <p className="text-accent font-medium mb-1">Infoserve Consultants</p>
                  <p className="text-sm text-muted-foreground">MP, India</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Jun 2020 - Jun 2022</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Conducted in-depth EDA using SQL to uncover key drivers of loan defaults, supporting risk teams in building and validating predictive models aligned with regulatory requirements.</p>

                <p>Collaborated cross-functionally with risk teams to ensure model outputs met compliance standards, an early exposure to production-grade, high-stakes data work.</p>

                <p>Managed milestones and deliverables across analytical workstreams, ensuring on-time completion.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION: CERTIFICATIONS */}
      <section id="certifications" className="relative py-24 md:py-32 border-b border-border/50 scroll-mt-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12">Certifications</h2>
          <div className="space-y-3 max-w-4xl">
            <Card className="p-6 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium">SnowPro Associate - Platform</p>
                  <p className="text-sm text-muted-foreground">Snowflake</p>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">Completed</Badge>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium">From Zero to Agents: Building End-To-End Data Pipelines for an AI Agent</p>
                  <p className="text-sm text-muted-foreground">Snowflake</p>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">Completed</Badge>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium">Social-Emotional Learning Fundamentals</p>
                  <p className="text-sm text-muted-foreground">CASEL (Collaborative for Academic, Social, and Emotional Learning)</p>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">Completed</Badge>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium">Introduction to Model Context Protocol</p>
                  <p className="text-sm text-muted-foreground">Anthropic</p>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">Completed</Badge>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium">Introduction to Generative AI</p>
                  <p className="text-sm text-muted-foreground">Google</p>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">Completed</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* WHY I BUILD */}
      <section id="why-i-build" className="relative py-24 md:py-32 border-b border-border/50 scroll-mt-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[3px] text-secondary font-medium text-center mb-8">Why I Build</p>

            <blockquote className="text-xl md:text-2xl font-display font-medium text-center leading-relaxed mb-8 text-foreground/90">
              "If children were taught emotional and life skills the way they are taught to read, crime, suffering, and inequality would be significantly lower."
            </blockquote>

            <p className="text-base text-muted-foreground text-center leading-relaxed mb-16">
              What breaks in childhood echoes through generations. The evidence is clear. The gap is not in the research. It is in the implementation. Parents getting mental health support ripples directly into how children develop. The whole family system is the unit of change.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="p-5 bg-card/50 border-border/50">
                <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-2">Peer Mental Health</p>
                <p className="text-sm text-muted-foreground">Founded a peer mental health initiative during COVID-19 in India, reaching 250+ people.</p>
                <p className="text-sm text-muted-foreground mt-2">Tutored undergrad students in mathematics and statistics at UConn for over a year.</p>
              </Card>
              <Card className="p-5 bg-card/50 border-border/50">
                <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-2">Emotional Support</p>
                <p className="text-sm text-muted-foreground">Volunteer with Koko, the MIT peer-based emotional support initiative.</p>
              </Card>
              <Card className="p-5 bg-card/50 border-border/50">
                <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-2">Education</p>
                <p className="text-sm text-muted-foreground">Completed CASEL Social-Emotional Learning certification.</p>
              </Card>
              <Card className="p-5 bg-card/50 border-border/50">
                <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-2">Data for Good</p>
                <p className="text-sm text-muted-foreground">Built a Reddit-based crisis detection system because people fall through the cracks and data can catch them.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Interested in collaborating or discussing data projects? Reach out via email or connect on LinkedIn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="mailto:aneema099@gmail.com">
                <Button size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  aneema099@gmail.com
                </Button>
              </a>
              <a href="tel:+14084625759">
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  +1 (408) 462-5759
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/aditi-neema/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </Button>
              </a>
            </div>

            <Card className="p-8 bg-card/50 border-border/50 text-center">
              <p className="text-muted-foreground mb-4">
                Ready to explore data solutions? Let's work together to transform your data into actionable insights.
              </p>
              <Button onClick={handleResumeClick} variant="default" className="gap-2">
                <FileText className="w-4 h-4" />
                Download My Resume
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Password Modal */}
      {passwordModal.open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setPasswordModal({open: false, projectTitle: '', projectLink: ''})}>
          <div className="bg-card border border-border rounded-xl p-8 max-w-sm w-full mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Protected Project</h3>
                  <p className="text-xs text-muted-foreground">{passwordModal.projectTitle}</p>
                </div>
              </div>
              <button onClick={() => setPasswordModal({open: false, projectTitle: '', projectLink: ''})} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Enter the password to view this project.</p>
            <input
              type="password"
              value={passwordInput}
              onChange={e => { setPasswordInput(e.target.value); setPasswordError(false); }}
              onKeyDown={e => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="Password"
              autoFocus
              className={`w-full px-4 py-3 rounded-lg bg-background border text-sm outline-none transition-colors mb-2 ${passwordError ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-secondary'}`}
            />
            {passwordError && (
              <p className="text-xs text-red-500 mb-2">Incorrect password. Try again.</p>
            )}
            <Button
              onClick={handlePasswordSubmit}
              className="w-full mt-3 gap-2"
              size="sm"
            >
              <Unlock className="w-4 h-4" />
              Unlock Project
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
