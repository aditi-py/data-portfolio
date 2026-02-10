/**
 * Data Portfolio - Three Section Layout
 * Section 1: About & Journey
 * Section 2: Skills & Projects
 * Section 3: Contact
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, FileText, BarChart3, Workflow, Brain } from "lucide-react";

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
      description: "Deep learning classifier using Keras/TensorFlow to detect AI-generated vs. human-written text. Engineered end-to-end ML pipeline with document embeddings, feature correlation analysis, and ROC-AUC evaluation on imbalanced datasets.",
      type: "Machine Learning",
      icon: Brain,
      tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "NLP"],
      link: "https://github.com/aditi-py/AI-Generated-Text-Detection",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/0gtKpc3tfstzfgVLX4c8xv-img-3_1770760199000_na1fn_YWktdGV4dC1kZXRlY3Rpb24tZW5oYW5jZWQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94LzBndEtwYzN0ZnN0emZnVkxYNGM4eHYtaW1nLTNfMTc3MDc2MDE5OTAwMF9uYTFmbl9ZV2t0ZEdWNGRDMWtaWFJsWTNScGIyNHRaVzVvWVc1alpXUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IUkV4sCoB6gt-Ma-YQmejBlY36heBfj9dZIAIEyzSuhHXyBnkLLQJ1ZvEjj3NV-1mMcHMNvBMixnctYwXDXrwJIf3QSjhq4fn5o1JsaHay~z3~PC4JKh8eYPDvRp1-zxz1Jn9SMBauWv0jXhGBSc-MAQSl-3pn26qH-jL7EC99fs21wYw0cCaYrU1y5hf-wLNDxw9fV6VMgtbTcn-zx9IpisSv0bkXRBmgyQRnJyNYjeHfYnZPd1ViyeswC-~KyDFeVyORzeLizO-ekXBH95hLCFINvyneqpfAnfdvNKt03Ld~lZIHrhh6l0lBfiqG9px4soRRMS~Yy0iCT4nOHoNw__"
    },
    {
      title: "Global Health Equity Analysis",
      description: "Comprehensive data analysis examining geographic and economic distribution of 83 international health organizations. Revealed that 70% are headquartered in high-income countries while representing only 4% of global population. Built visualizations and population-adjusted metrics.",
      type: "Data Analysis",
      icon: BarChart3,
      tags: ["Python", "Pandas", "DuckDB", "Matplotlib", "Data Visualization"],
      link: "https://github.com/aditi-py/Global-Health-Equity-Analysis-Geographic-Economic-Distribution-Study",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/0gtKpc3tfstzfgVLX4c8xv-img-4_1770760204000_na1fn_Z2xvYmFsLWhlYWx0aC1lcXVpdHktZW5oYW5jZWQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94LzBndEtwYzN0ZnN0emZnVkxYNGM4eHYtaW1nLTRfMTc3MDc2MDIwNDAwMF9uYTFmbl9aMnh2WW1Gc0xXaGxZV3gwYUMxbGNYVnBkSGt0Wlc1b1lXNWpaV1EucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GlSrnIWXLaICWWGzQqMW5JoNbZBiFkIwbSqO3i2vMeymbw3dGYPIf4UrMia13sxf62H3wJN1LcyCgDOL1vCy~E7UZkbvF~cXz2h4UuQmrDhT0t1vEy-AwgO2OFUxFTRrwQd3DXZJl1BJ8-A0XMYI4AF0uQ3sXqvcgVaqVL5~gNqI0M0nEBPEVfzJGZi4DHW5rbeSJHdFfr6XJhbE2XtX3Ewjs6mKp8FvuKCFLnu6k-OauKJF5Z29LInloIVPooxV~4EFlyf7F8aOpzNif27NMPozu8xNoQJmzCPBeBc~Gm33qxtE2z2CB8624oiyhA0gX5dPI5Ap-GyVIqb7neQ__"
    },
    {
      title: "Insurance Policy Cancellation Prediction",
      description: "Multiclass predictive model analyzing 1M+ insurance policies from the Kangaroo dataset (2013-2017). Built feature engineering pipeline to predict cancellation likelihood, identifying that coverage type C had highest dissatisfaction with 35K+ cancellations.",
      type: "Predictive Analytics",
      icon: Brain,
      tags: ["Python", "Scikit-learn", "Feature Engineering", "Classification", "Data Mining"],
      link: "https://github.com/aditi-py/Policy-Cancelations",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/SlxILljGuahBXZrdO2lVYd-img-2_1770757547000_na1fn_cG9saWN5LWNhbmNlbGxhdGlvbnM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1NseElMbGpHdWFoQlhacmRPMmxWWWQtaW1nLTJfMTc3MDc1NzU0NzAwMF9uYTFmbl9jRzlzYVdONUxXTmhibU5sYkd4aGRHbHZibk0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=seNGA3A5qHPiBd9YHBWmRePfy4LDR0ZRjSvO~wlsXzp1oxkF9prVQDwK8Rkn-ylKoZNZ9PH64N7dDuJaDnsVe9znO4ubg6fMDGqCjZoup2kyNtFHuIA5uTjIW9t9KfHPSElHxeXI2fplp78KZGk03zmdAYwbgOm5m3hVjWSbiupKe8A6woP8ToZe5b7BG6hS7JB-yAD-Vh~8RrQnr2XzEUVcM1Tk1qlDNU6VRHVjNMrRKiYfs1H1OIk1HQ5-Dy-jBYgVOtkPGU2KsnWgRdLhZXU7pVHrRvHiJdIdLobH-~CWZKyXs7ZfbCiWwVAF7glhjH2RKkqzT9W5YGF4EEQ5lg__"
    },
    {
      title: "UFC Looker Dashboard",
      description: "Designed and deployed Snowflake ETL pipeline processing 15K+ UFC records using Python and SQL with dimensional modeling. Implemented data quality framework and performance optimization including weight class standardization. Interactive Looker dashboard with fighter statistics, match outcomes, and regional performance analysis.",
      type: "Dashboard & Analytics",
      icon: BarChart3,
      tags: ["Looker", "Snowflake", "Python", "SQL", "Data Warehouse"],
      link: "https://lookerstudio.google.com/reporting/d7df433e-bdbe-4bf6-97cc-f053e90c562e",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/bdw5gxveaR7pFi0VRLQEEc-img-1_1770761106000_na1fn_dWZjLWxvb2tlci1kYXNoYm9hcmQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L2JkdzVneHZlYVI3cEZpMFZSTFFFRWMtaW1nLTFfMTc3MDc2MTEwNjAwMF9uYTFmbl9kV1pqTFd4dmIydGxjaTFrWVhOb1ltOWhjbVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HVJJA0s~Hs2KWNKs81NQhDICWe498fjMd~OJWrK0E~Q9VPL-7p5X6yHOSOMKk2s3J213COk6ie~hCW9qeINAwrZ3CKZyrT9HV614oGIrKxKJqShU5rkY4XRveq2XO01cXt7wMQM-ygyXe5bpdRHTm38Q8YfqXwhsF4WbYZRzzU~DfvvCSByvJRWdGIP6y2vYIepto4Hnj7qYLZbb~SIzYZMMuB~qbHnWMbLKIlUWtk3E7u45udUJxUwhObDvDc6VvcfS5z6Xl7Gmhd01mG3VsMxOR2bfmQdfXNEI~CFT7Ex7N6cS-UyJhXlcBcZeDLuJwOk~ZUOzcEbbO6IOqDqebQ__"
    },
    {
      title: "Crisis Tracking Automation (Coming Soon)",
      description: "End-to-end automation workflow using n8n, OpenAI API, Google Sheets, and Looker for real-time crisis tracking and analysis of Reddit posts. Intelligent data pipeline with AI-powered insights. Will be containerized with Docker for scalable deployment.",
      type: "Workflow Automation",
      icon: Workflow,
      tags: ["n8n", "OpenAI", "Google Sheets", "Looker", "Docker", "Automation"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/bdw5gxveaR7pFi0VRLQEEc-img-2_1770761095000_na1fn_Y3Jpc2lzLXRyYWNraW5nLWxvY2tlZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L2JkdzVneHZlYVI3cEZpMFZSTFFFRWMtaW1nLTJfMTc3MDc2MTA5NTAwMF9uYTFmbl9ZM0pwYzJsekxYUnlZV05yYVc1bkxXeHZZMnRsWkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ncql5xmWJpi0U-rCXKf3NvmV66CrXyv9ZxlDRShWQilf-sK-zVAN74PobGTtBuQNZo6HU8XYFP9VQE~-SYIXJeA9NbwnQeu62hl2eU4oHmegXZZ5Dl9KpzWqlnpuM3LvoVOnyLky48-HBS1HrSKtOJtHT~TL-HbWHX~j~K0bKLsmV6AEwDbKJggO09ORj4ky7d3mm1CnHODPcu0FBC~u3JO0gaQN~VQtRLjz1aTUJkd8Q2K4qqbXbzuOIOOJ3dqhZC9zd7VineR81rRDbFfqj3yRoVxtJjKtXZf2giP6cCLrb-vlgF4V~mxV6CF6j69NcQHdQGWC~bbjB7djyH9PZg__"
    },
    {
      title: "Tableau Public Dashboards",
      description: "Collection of interactive Tableau dashboards showcasing data visualization expertise. Projects include USA airports heatmap analysis, stock market trends, sales performance metrics, streaming platform comparison, and global happiness index analysis.",
      type: "Data Visualization",
      icon: BarChart3,
      tags: ["Tableau", "Data Visualization", "Analytics", "Business Intelligence"],
      link: "https://public.tableau.com/app/profile/aditi.neema/vizzes",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/0gtKpc3tfstzfgVLX4c8xv-img-2_1770760204000_na1fn_dGFibGVhdS1kYXNoYm9hcmRzLXNob3djYXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94LzBndEtwYzN0ZnN0emZnVkxYNGM4eHYtaW1nLTJfMTc3MDc2MDIwNDAwMF9uYTFmbl9kR0ZpYkdWaGRTMWtZWE5vWW05aGNtUnpMWE5vYjNkallYTmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QWQ9DcDLcGEoTVpYH1DnkPsU0HP071HWfpZJ6PUo43UCAC69ZlhKUETqyyvUvml3Rb37AJoYkUFJEWRd~uFvq0xIScXff4D5nW9vuOYqJTEtK-2w0bgvZzjLG~D-lIwAxJyf~uLKKs0TowaLT-9r5JLN6UHaAP8SSlHQS9kksVIxwR6RLBhsyi12PL7rje4WdGkHK6hZjYLQcQzI5Tqzxj3tkczg1L6P9rlxsB5WRbAcaJTvFndpRBTumOJjKrJkngviOVLM2k-xH~GdB9T7JIRjlLDuEsjrYrXg4w3DmCVR6A3t30dH5vU0jg4Y2wmNy9yUtrtn9nUd-udmEnFk5w__"
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
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Data Engineer & Analyst
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              4+ years transforming legacy systems into modern, automated data solutions. Specializing in scalable pipelines, predictive models, and data-driven insights that drive business impact.
            </p>
            
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

      {/* SECTION 3: CONTACT */}
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
              <a href="tel:+13326990337">
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  +1 (332) 699-0337
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

// Import Phone icon
import { Phone } from "lucide-react";
