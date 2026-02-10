/**
 * Swiss Modernist Design - Data Portfolio
 * Mathematical precision in spacing and alignment
 * Information hierarchy through scale and weight
 * Asymmetric two-column layout with generous whitespace
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, FileText, BarChart3, Workflow } from "lucide-react";

export default function Home() {
  const skills = [
    "Python", "SQL", "R", "Tableau", "Looker", "Power BI",
    "Pandas", "NumPy", "Scikit-learn", "TensorFlow",
    "PostgreSQL", "MongoDB", "Airflow", "dbt",
    "n8n", "AWS", "Docker", "Git"
  ];

  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Tableau dashboard analyzing sales performance across multiple regions with real-time KPI tracking and predictive forecasting models.",
      type: "Dashboard",
      icon: BarChart3,
      tags: ["Tableau", "SQL", "Python"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-2_1770689497000_na1fn_ZGFzaGJvYXJkLXZpc3VhbGl6YXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTJfMTc3MDY4OTQ5NzAwMF9uYTFmbl9aR0Z6YUdKdllYSmtMWFpwYzNWaGJHbDZZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JuXhMdhbv0JTn7oWxG8HUHqdVnNNwpr0OqnYO8WQRsSC-46WygNVnfry-PhYeei4rlrfTx10k8jpggiL~qjoPZWq2vbdNfLkKKveOWE5~gejEeqjnVt7sEiSCmCcZmWLWsF9tJeMInnX~wz91s691e4og3AuTzy44sDLyscfLH0Dzo7xLiRL3-BAqeRvoEcs90beFK6K3yq95kvfdEdKvLSfdCL6oxxSTSelNP3~lGL8fXEpP-SD90yz8binwZtHUNrSWjNzfI5GSktv7aLoAHOHel-TrPg8UA4y7lduCPn2-UK4z-JVHXtvKF5-w-QKj968pC0vm4crx-~RVmo9-g__"
    },
    {
      title: "Automated Data Pipeline",
      description: "End-to-end ETL workflow using n8n and Python, processing 100K+ records daily from multiple APIs with error handling and monitoring.",
      type: "Workflow",
      icon: Workflow,
      tags: ["n8n", "Python", "PostgreSQL", "APIs"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-3_1770689497000_na1fn_d29ya2Zsb3ctYXV0b21hdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTNfMTc3MDY4OTQ5NzAwMF9uYTFmbl9kMjl5YTJac2IzY3RZWFYwYjIxaGRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kUfr39SNfSvZn8rp7LyyQPjcjiW3CzrPsgCdDFBROWTNmQJa~THopGoOA7oiv8oV8IbDHUc5tEWQcQ0TV9H4OLwh8wsxiiLXKI5eJOSGJY9CQ-loG9gmwQHn5rYScD10AMovpK55bcCTgE2GOGa0niEy5qh8usX1qsbnYlP5YLr6-3NbaCkIRsiCw-6djm39qGsW5Jb0cyNFqy7swXsatNS3NqO~xSYM0mc0FHvEdX3kst6T~ja6piPKQbLXs6sfSECoJ0qogxPzWAxjZKs0h18DztikkvymKPBWGgm9Yxf8El7YhRtw3zrhHdKDpKJOUwMnV1Jjfff8eBrbJxhyxQ__"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Machine learning clustering analysis using Python and scikit-learn to identify customer segments, deployed on GitHub with full documentation.",
      type: "GitHub Project",
      icon: Github,
      tags: ["Python", "ML", "Pandas", "Jupyter"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-4_1770689503000_na1fn_Y29kZS1hbmFseXRpY3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTRfMTc3MDY4OTUwMzAwMF9uYTFmbl9ZMjlrWlMxaGJtRnNlWFJwWTNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fxl2kyej1L4tG0Ot42Ah1TMDf-owP7VRdtOpxiZk2dVU-aLoT2gpoDAFrDjuXabl6iDEgV1a0zMsPbttVGpL5M~15zszSvdrPR~CLzsdfVaF9P0tpIANITKh2CjDncmzG72um9j9CfMa2drww45r1DWaPQseP0T5pxVaQCtrK~HB1xBwduSYemOb0EUXQ6NNydOH1g31Rch1pJIlU1UFXNECP~HTMnA3sbbVE2HGBXyrjTJOYkyy8QLiR5iWDyJXFWXkMEce5acUZLyRGprusOfxAd-FrWmG1R8DfuGPQH3Yb4gaRJHcniQnopWDF9KLGC65yi43ipDmVGs~hhsGuA__"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="font-display text-xl font-semibold tracking-tight">
              Data Portfolio
            </div>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Button variant="outline" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetric layout with data visualization */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-1_1770689497000_na1fn_aGVyby1kYXRhLWFic3RyYWN0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTFfMTc3MDY4OTQ5NzAwMF9uYTFmbl9hR1Z5Ynkxa1lYUmhMV0ZpYzNSeVlXTjAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tApclPbW0-3okcvcatw-PNt8OZUXRI4hHVePYQgEVWVsYYfHFUIewmv4Bj--LE~1adXfcEU8GYsrlJ6caeWydoczCBXJtmej4uVt49zUS6Kb0SUhGvJ3q~DOIMQqOSfZ-Lj9pELtQm~3xFGwJpSHQNoaZ1S7mg46GWeQECbaR7n8bADBNGHcwfUnzPuw-wwbL6lRMkciYnAAeJjxoTd7dPsgca9Mt0lxN-DVooQPYTBq7tk622AZGTzi8R86ntXnzMWc1aR~kiGAUHAf1y-wD3xNuD7hJwp~iuML-mAELSXnXGJEpn~Fjr8DQs186PfI6HycJbitcaLFwICfqEyMXw__"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-12 py-24 lg:py-32">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                  Data Analyst & Engineer
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Transforming complex data into actionable insights through analytics, visualization, and automation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View GitHub
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <Card className="p-6 border-2">
                  <div className="text-5xl font-display font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="p-6 border-2">
                  <div className="text-5xl font-display font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 border-2">
                  <div className="text-5xl font-display font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Tools Mastered</div>
                </Card>
                <Card className="p-6 border-2">
                  <div className="text-5xl font-display font-bold text-primary mb-2">100K+</div>
                  <div className="text-sm text-muted-foreground">Records Processed</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-b border-border">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl font-bold mb-4">About Me</h2>
              <div className="hairline mb-6"></div>
              <p className="text-muted-foreground leading-relaxed">
                Specializing in data analysis, engineering, and visualization with a focus on delivering measurable business impact.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-4">Technical Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="hairline"></div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-4">What I Do</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="font-semibold">Data Analysis & Visualization</div>
                      <p className="text-sm text-muted-foreground">
                        Creating interactive dashboards and reports using Tableau, Looker, and Power BI to drive data-informed decisions.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold">Data Engineering</div>
                      <p className="text-sm text-muted-foreground">
                        Building robust ETL pipelines and data infrastructure using Python, SQL, and modern orchestration tools.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold">Workflow Automation</div>
                      <p className="text-sm text-muted-foreground">
                        Designing and implementing automated workflows with n8n to streamline data processes and reduce manual work.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold">Machine Learning</div>
                      <p className="text-sm text-muted-foreground">
                        Applying statistical modeling and ML techniques to uncover patterns and generate predictive insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-b border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="hairline mb-6"></div>
            <p className="text-muted-foreground max-w-2xl">
              A selection of data analysis projects, dashboards, and automation workflows showcasing my technical capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Icon className="h-4 w-4" />
                          {project.type}
                        </div>
                        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h2 className="font-display text-4xl font-bold mb-4">Let's Connect</h2>
              <div className="hairline mx-auto max-w-xs mb-6"></div>
              <p className="text-muted-foreground text-lg">
                Interested in collaboration or have a data challenge? I'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Email Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-display font-semibold">Data Portfolio</div>
            <div className="text-sm text-muted-foreground">
              © 2026 All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
