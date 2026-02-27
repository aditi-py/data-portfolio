/**
 * Data Portfolio - Five Section Layout
 * Section 1: About & Journey
 * Section 2: Skills & Projects
 * Section 3: Education
 * Section 4: Work Experience
 * Section 5: Contact
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, FileText, BarChart3, Workflow, Brain, Phone } from "lucide-react";

export default function Home() {
  const skills = [
    { category: "Data Science & ML", items: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Deep Learning", "NLP"] },
    { category: "Analytics & BI", items: ["Tableau", "Looker", "Power BI", "SQL", "DuckDB", "Analytics"] },
    { category: "Data Engineering", items: ["Snowflake", "Airflow", "ETL/ELT", "AWS", "Azure", "CI/CD", "Docker"] },
    { category: "Workflow Automation & AI Integration", items: ["n8n", "OpenAI API", "LLM-based Text Classification", "Automated Risk Scoring Pipelines"] }
  ];

  const projects = [
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
    {
      title: "UFC Looker Dashboard",
      description: "Designed and deployed Snowflake ETL pipeline processing 15K+ UFC records using Python and SQL with dimensional modeling.",
      type: "Dashboard & Analytics",
      icon: BarChart3,
      tags: ["Looker", "Snowflake", "Python", "SQL", "Data Warehouse"],
      link: "https://lookerstudio.google.com/reporting/d7df433e-bdbe-4bf6-97cc-f053e90c562e",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344236677/NFtmPUGtInpKpyRu.png"
    },
    {
      title: "Crisis Tracking Automation",
      description: "End-to-end automation workflow using n8n, OpenAI API, Google Sheets, and Looker for real-time crisis tracking and analysis of Reddit posts. Intelligent data pipeline with AI-powered insights.",
      type: "Workflow Automation",
      icon: Workflow,
      tags: ["n8n", "OpenAI", "Google Sheets", "Looker", "Docker", "Automation"],
      link: "https://github.com/aditi-py/Crisis-Tracker",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344236677/npBomabZZKIlnIxi.png"
    },
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
      title: "No-Code Modeling Platform",
      description: "A no-code modeling platform where users connect their own data, select ML algorithms, and tune parameters through a guided interface — no scripting required. Exposes model configuration options typically hidden behind code.",
      type: "Machine Learning",
      icon: BarChart3,
      tags: ["No-Code", "ML", "Claude Code", "UI/UX"],
      link: "",
      image: ""
    },
    {
      title: "Mood × Weather Research",
      description: "Original research on correlations between weather patterns and mood, matching individual streaming data with meteorological data and audio valence metrics. Findings synthesized against peer-reviewed literature from Google Scholar and arXiv.",
      type: "Research",
      icon: BarChart3,
      tags: ["Research", "Claude Code", "Spotify API", "Meteorological Data", "Statistical Analysis"],
      link: "",
      image: ""
    },
    {
      title: "Data Analytics with Claude",
      description: "An AI-powered data analysis platform featuring a 6-agent orchestration system with custom slash commands and automated workflows. Supports Python, R, SQL, and JavaScript for automated EDA, statistical analysis, and report generation.",
      type: "Data Analysis",
      icon: BarChart3,
      tags: ["Python", "R", "SQL", "JavaScript", "Multi-Agent", "Claude Code"],
      link: "https://github.com/aditi-py/Claude-Data-Analytics",
      image: ""
    }
  ];

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
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#skills-projects" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Skills & Projects
              </a>
              <a href="#education" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Education
              </a>
              <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <Button onClick={handleResumeClick} variant="outline" size="sm" className="gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1: ABOUT & JOURNEY */}
      <section id="about" className="relative py-24 md:py-32 border-b border-border/50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <Card className="overflow-hidden bg-card/50 border-border/50 sticky top-24">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663344236677/NKdUtdZiqdsNopfb.jpg" 
                    alt="Aditi Neema" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl font-bold mb-2">Aditi Neema</h2>
                  <p className="text-sm text-accent font-semibold mb-3">Data Engineer & Analyst</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm all about finding the story in the data. I spend my days building systems that turn chaos into clarity, whether that's pipelines that just work, models that predict what's next, or automations that give people their time back.
                  </p>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Data Engineer & Analyst
              </h1>
              <div className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4">
                <p>During COVID, I was part of a student support initiative trying to help people who were isolated and struggling. We had volunteers, resources, and ideas, but everything ran on spreadsheets and manual workflows.</p>
                <p>We couldn't identify who needed help most. We couldn't track if our outreach was working. By the time we pulled together any kind of report, the moment to act had already passed.</p>
                <p>That's when it clicked: the bottleneck wasn't the people or the ideas. It was the complete lack of systems to support them at scale.</p>
                <p>Since then, I've spent the last 4 years building the infrastructure I wish we'd had. I've worked with product and fintech companies to modernize legacy systems, automate pipelines, and build models that surface insights when they're still actionable, not weeks later in a PowerPoint.</p>
                <p>I'm still driven by the same thing: closing the gap between knowing something matters and actually being able to do something about it.</p>
              </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <Card className="p-4 bg-card/50 border-border/50">
                <div className="text-2xl font-bold text-accent">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-4 bg-card/50 border-border/50">
                <div className="text-2xl font-bold text-accent">20+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </Card>
              <Card className="p-4 bg-card/50 border-border/50">
                <div className="text-2xl font-bold text-accent">100M+</div>
                <div className="text-sm text-muted-foreground">Records Processed</div>
              </Card>
              <Card className="p-4 bg-card/50 border-border/50">
                <div className="text-2xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Tools Mastered</div>
              </Card>
            </div>

              <div className="flex gap-4">
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

      {/* SECTION 2: SKILLS & PROJECTS */}
      <section id="skills-projects" className="relative py-24 md:py-32 border-b border-border/50">
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
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => {
                const IconComponent = project.icon;
                return (
                  <Card key={idx} className="overflow-hidden hover:border-accent/50 transition-colors group bg-card/50 border-border/50">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                          <p className="text-xs text-accent font-medium">{project.type}</p>
                        </div>
                        <IconComponent className="w-5 h-5 text-accent flex-shrink-0" />
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tidx) => (
                          <Badge key={tidx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="default" size="sm" className="w-full gap-2">
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EDUCATION */}
      <section id="education" className="relative py-24 md:py-32 border-b border-border/50">
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
      <section id="experience" className="relative py-24 md:py-32 border-b border-border/50">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12">Work Experience</h2>
          <div className="space-y-8 max-w-4xl">
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
                <p>• Transformed a 25,000+ line legacy SAS codebase into Python data infrastructure, building Azure-Snowflake pipelines to power product performance and pricing analytics.</p>
                
                <p>• Engineered 9,000+ features from 100+ event-level variables and reduced them to 15 key predictors to improve outcome and user behavior models.</p>
                
                <p>• Built automated ingestion with Selenium and SFTP into Azure Blob Storage and Logic Apps-Snowflake workflows, eliminating 20+ hours of manual work weekly.</p>
                
                <p>• Integrated AI model outputs into dashboards showing real-time probabilities, trends, and cohorts to guide product strategy and operations.</p>
                
                <p>• Created technical documentation for migration, feature engineering, and pipeline architecture to support team adoption and maintenance.</p>
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
                <p>• Engineered scalable streaming and batch data pipelines using AWS Glue and Amazon Kinesis to process 20k+ daily financial transactions in real-time, enabling near-instant analytics for revenue forecasting and risk assessment.</p>
                
                <p>• Designed interactive Tableau dashboards connected to RDS databases, providing C-suite executives with real-time visibility into 15+ key financial metrics.</p>
                
                <p>• Integrated AI-powered time-series forecasting models (ARIMA, LSTM) into production data pipelines, achieving 73% prediction accuracy and automating revenue/expense forecasts to enable proactive business decisions.</p>
                
                <p>• Established Git workflows and CI/CD automation through GitHub Actions for model deployment and dashboard updates, reducing deployment errors and accelerating release cycles.</p>
              </div>
            </Card>

            {/* University of Connecticut - Tutoring Assistant */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Tutoring Assistant: Mathematics and Statistics</h3>
                  <p className="text-accent font-medium mb-1">University of Connecticut</p>
                  <p className="text-sm text-muted-foreground">Connecticut, USA</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Mar 2023 - May 2024</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Tutored undergraduate students in mathematics and statistics courses, including calculus, linear algebra, probability, and statistics. Conducted individual and group sessions tailored to diverse learning styles.</p>
                
                <p>• Created study guides, practice problems, and visual aids to reinforce complex concepts. Fostered an inclusive environment that built student confidence in quantitative coursework.</p>
              </div>
            </Card>

            {/* University of Connecticut - Data Analyst Intern */}
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Data Analyst Intern</h3>
                  <p className="text-accent font-medium mb-1">University of Connecticut: Budget, Planning and Institutional Research</p>
                  <p className="text-sm text-muted-foreground">Connecticut, USA</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Aug 2023 - Dec 2023</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Analyzed student lifecycle data to improve graduation and retention outcomes, contributing to a predictive model that led to a 20% increase in graduation rates.</p>
                
                <p>• Processed 2M+ rows of student-related institutional data across nine datasets, conducting full-scale EDA using SQL.</p>
                
                <p>• Identified and resolved intricate data quality issues using Python (pandas, NumPy) and SQL, establishing standardized cleaning procedures that streamlined data processing.</p>
                
                <p>• Acted as liaison between analysts and university stakeholders, conducting recurring meetings to translate institutional goals into data strategies.</p>
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
                <p>• Conducted in-depth EDA to identify critical drivers of loan defaults, including credit score, income level, and debt-to-income ratio, enabling the development of targeted risk mitigation strategies.</p>
                
                <p>• Collaborated with risk management teams to validate predictive models, ensuring alignment with RBI guidelines and regulatory requirements, and enhancing the accuracy of credit risk assessments.</p>
                
                <p>• Utilized JIRA to track project milestones, deliverables, and timelines, ensuring on-time completion of analysis.</p>
              </div>
            </Card>
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
    </div>
  );
}
