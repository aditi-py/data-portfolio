/**
 * Vibrant Constellation Design - Data Portfolio
 * Poppy colors with cosmic dark background
 * Star/constellation visual elements
 * Modern, eye-catching aesthetic
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, FileText, BarChart3, Workflow, Zap, Brain } from "lucide-react";

export default function Home() {
  const skills = [
    "Python", "SQL", "PySpark", "R", "Tableau", "Looker", "Power BI",
    "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras",
    "PostgreSQL", "MySQL", "Snowflake", "Redshift", "Azure", "AWS",
    "Airflow", "ETL/ELT", "Git", "GitHub Actions", "CI/CD"
  ];

  const projects = [
    {
      title: "AI-Generated Text Detection",
      description: "Deep learning classifier using Keras/TensorFlow to detect AI-generated vs. human-written text. Engineered end-to-end ML pipeline with document embeddings, feature correlation analysis, and ROC-AUC evaluation on imbalanced datasets.",
      type: "Machine Learning",
      icon: Brain,
      tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "NLP"],
      link: "https://github.com/aditi-py/AI-Generated-Text-Detection",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-4_1770689503000_na1fn_Y29kZS1hbmFseXRpY3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTRfMTc3MDY4OTUwMzAwMF9uYTFmbl9ZMjlrWlMxaGJtRnNlWFJwWTNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fxl2kyej1L4tG0Ot42Ah1TMDf-owP7VRdtOpxiZk2dVU-aLoT2gpoDAFrDjuXabl6iDEgV1a0zMsPbttVGpL5M~15zszSvdrPR~CLzsdfVaF9P0tpIANITKh2CjDncmzG72um9j9CfMa2drww45r1DWaPQseP0T5pxVaQCtrK~HB1xBwduSYemOb0EUXQ6NNydOH1g31Rch1pJIlU1UFXNECP~HTMnA3sbbVE2HGBXyrjTJOYkyy8QLiR5iWDyJXFWXkMEce5acUZLyRGprusOfxAd-FrWmG1R8DfuGPQH3Yb4gaRJHcniQnopWDF9KLGC65yi43ipDmVGs~hhsGuA__"
    },
    {
      title: "Global Health Equity Analysis",
      description: "Comprehensive data analysis examining geographic and economic distribution of 83 international health organizations. Revealed that 70% are headquartered in high-income countries while representing only 4% of global population. Built visualizations and population-adjusted metrics.",
      type: "Data Analysis",
      icon: BarChart3,
      tags: ["Python", "Pandas", "DuckDB", "Matplotlib", "Data Visualization"],
      link: "https://github.com/aditi-py/Global-Health-Equity-Analysis-Geographic-Economic-Distribution-Study",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-2_1770689497000_na1fn_ZGFzaGJvYXJkLXZpc3VhbGl6YXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTJfMTc3MDY4OTQ5NzAwMF9uYTFmbl9aR0Z6YUdKdllYSmtMWFpwYzNWaGJHbDZZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JuXhMdhbv0JTn7oWxG8HUHqdVnNNwpr0OqnYO8WQRsSC-46WygNVnfry-PhYeei4rlrfTx10k8jpggiL~qjoPZWq2vbdNfLkKKveOWE5~gejEeqjnVt7sEiSCmCcZmWLWsF9tJeMInnX~wz91s691e4og3AuTzy44sDLyscfLH0Dzo7xLiRL3-BAqeRvoEcs90beFK6K3yq95kvfdEdKvLSfdCL6oxxSTSelNP3~lGL8fXEpP-SD90yz8binwZtHUNrSWjNzfI5GSktv7aLoAHOHel-TrPg8UA4y7lduCPn2-UK4z-JVHXtvKF5-w-QKj968pC0vm4crx-~RVmo9-g__"
    },
    {
      title: "Clustering for Customer Segmentation",
      description: "Data analysis project computing correlation matrices and heatmap visualizations to identify relationships between variables. Supports data-driven customer segmentation and decision-making through statistical analysis.",
      type: "Data Analysis",
      icon: BarChart3,
      tags: ["Python", "Pandas", "Seaborn", "Matplotlib", "Statistics"],
      link: "https://github.com/aditi-py/Clustering-for-Customer-Segmentation",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-3_1770689497000_na1fn_d29ya2Zsb3ctYXV0b21hdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTNfMTc3MDY4OTQ5NzAwMF9uYTFmbl9kMjl5YTJac2IzY3RZWFYwYjIxaGRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kUfr39SNfSvZn8rp7LyyQPjcjiW3CzrPsgCdDFBROWTNmQJa~THopGoOA7oiv8oV8IbDHUc5tEWQcQ0TV9H4OLwh8wsxiiLXKI5eJOSGJY9CQ-loG9gmwQHn5rYScD10AMovpK55bcCTgE2GOGa0niEy5qh8usX1qsbnYlP5YLr6-3NbaCkIRsiCw-6djm39qGsW5Jb0cyNFqy7swXsatNS3NqO~xSYM0mc0FHvEdX3kst6T~ja6piPKQbLXs6sfSECoJ0qogxPzWAxjZKs0h18DztikkvymKPBWGgm9Yxf8El7YhRtw3zrhHdKDpKJOUwMnV1Jjfff8eBrbJxhyxQ__"
    },
    {
      title: "UFC Looker Dashboard",
      description: "Designed and deployed Snowflake ETL pipeline processing 15K+ UFC records using Python and SQL with dimensional modeling. Implemented data quality framework and performance optimization including weight class standardization.",
      type: "Dashboard & Analytics",
      icon: BarChart3,
      tags: ["Looker", "Snowflake", "Python", "SQL", "Data Warehouse"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-2_1770689497000_na1fn_ZGFzaGJvYXJkLXZpc3VhbGl6YXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTJfMTc3MDY4OTQ5NzAwMF9uYTFmbl9aR0Z6YUdKdllYSmtMWFpwYzNWaGJHbDZZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JuXhMdhbv0JTn7oWxG8HUHqdVnNNwpr0OqnYO8WQRsSC-46WygNVnfry-PhYeei4rlrfTx10k8jpggiL~qjoPZWq2vbdNfLkKKveOWE5~gejEeqjnVt7sEiSCmCcZmWLWsF9tJeMInnX~wz91s691e4og3AuTzy44sDLyscfLH0Dzo7xLiRL3-BAqeRvoEcs90beFK6K3yq95kvfdEdKvLSfdCL6oxxSTSelNP3~lGL8fXEpP-SD90yz8binwZtHUNrSWjNzfI5GSktv7aLoAHOHel-TrPg8UA4y7lduCPn2-UK4z-JVHXtvKF5-w-QKj968pC0vm4crx-~RVmo9-g__"
    },
    {
      title: "Crisis Tracking Automation (Coming Soon)",
      description: "End-to-end automation workflow using n8n, OpenAI API, Google Sheets, and Looker for real-time crisis tracking and analysis of Reddit posts. Intelligent data pipeline with AI-powered insights.",
      type: "Workflow Automation",
      icon: Workflow,
      tags: ["n8n", "OpenAI", "Google Sheets", "Looker", "Automation"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/Qcws8bFLnTa00WZ762B0pg-img-3_1770689497000_na1fn_d29ya2Zsb3ctYXV0b21hdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1Fjd3M4YkZMblRhMDBXWjc2MkIwcGctaW1nLTNfMTc3MDY4OTQ5NzAwMF9uYTFmbl9kMjl5YTJac2IzY3RZWFYwYjIxaGRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kUfr39SNfSvZn8rp7LyyQPjcjiW3CzrPsgCdDFBROWTNmQJa~THopGoOA7oiv8oV8IbDHUc5tEWQcQ0TV9H4OLwh8wsxiiLXKI5eJOSGJY9CQ-loG9gmwQHn5rYScD10AMovpK55bcCTgE2GOGa0niEy5qh8usX1qsbnYlP5YLr6-3NbaCkIRsiCw-6djm39qGsW5Jb0cyNFqy7swXsatNS3NqO~xSYM0mc0FHvEdX3kst6T~ja6piPKQbLXs6sfSECoJ0qogxPzWAxjZKs0h18DztikkvymKPBWGgm9Yxf8El7YhRtw3zrhHdKDpKJOUwMnV1Jjfff8eBrbJxhyxQ__"
    }
  ];

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
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
              <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <Button 
                onClick={handleResumeClick}
                className="gap-2 bg-gradient-to-r from-[#ec4899] to-[#a469d5] hover:from-[#f472b6] hover:to-[#c084fc] text-white border-0"
              >
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cosmic constellation theme */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            {/* Constellation pattern */}
            <circle cx="100" cy="100" r="2" fill="#ec4899" opacity="0.6" />
            <circle cx="300" cy="150" r="2" fill="#a469d5" opacity="0.6" />
            <circle cx="500" cy="80" r="2" fill="#06b6d4" opacity="0.6" />
            <circle cx="700" cy="200" r="2" fill="#f97316" opacity="0.6" />
            <circle cx="900" cy="120" r="2" fill="#ec4899" opacity="0.6" />
            <circle cx="1100" cy="250" r="2" fill="#a469d5" opacity="0.6" />
            <circle cx="200" cy="400" r="2" fill="#06b6d4" opacity="0.6" />
            <circle cx="600" cy="450" r="2" fill="#f97316" opacity="0.6" />
            <circle cx="1000" cy="400" r="2" fill="#ec4899" opacity="0.6" />
            {/* Connecting lines */}
            <line x1="100" y1="100" x2="300" y2="150" stroke="#a469d5" strokeWidth="0.5" opacity="0.3" />
            <line x1="300" y1="150" x2="500" y2="80" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
            <line x1="500" y1="80" x2="700" y2="200" stroke="#f97316" strokeWidth="0.5" opacity="0.3" />
            <line x1="700" y1="200" x2="900" y2="120" stroke="#ec4899" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-12 py-24 lg:py-32">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent">
                  Data Engineer & Analyst
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  4+ years transforming legacy systems into modern, automated data solutions. Specializing in scalable pipelines, predictive models, and data-driven insights.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  className="gap-2 bg-gradient-to-r from-[#ec4899] to-[#a469d5] hover:from-[#f472b6] hover:to-[#c084fc] text-white border-0"
                >
                  <a href="https://github.com/aditi-py" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    View GitHub
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="gap-2 border-accent hover:bg-accent/10"
                >
                  <a href="https://www.linkedin.com/in/aditi-neema/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <Card className="p-6 border-accent/50 bg-card/50 backdrop-blur glow-secondary">
                  <div className="text-5xl font-display font-bold bg-gradient-to-r from-[#ec4899] to-[#f97316] bg-clip-text text-transparent mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 border-accent/50 bg-card/50 backdrop-blur glow-primary">
                  <div className="text-5xl font-display font-bold bg-gradient-to-r from-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </Card>
                <Card className="p-6 border-accent/50 bg-card/50 backdrop-blur glow-accent">
                  <div className="text-5xl font-display font-bold bg-gradient-to-r from-[#06b6d4] to-[#a469d5] bg-clip-text text-transparent mb-2">100M+</div>
                  <div className="text-sm text-muted-foreground">Records Processed</div>
                </Card>
                <Card className="p-6 border-accent/50 bg-card/50 backdrop-blur glow-secondary">
                  <div className="text-5xl font-display font-bold bg-gradient-to-r from-[#f97316] to-[#ec4899] bg-clip-text text-transparent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Tools Mastered</div>
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
              <h2 className="font-display text-4xl font-bold mb-4 bg-gradient-to-r from-[#ec4899] to-[#a469d5] bg-clip-text text-transparent">About Me</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] mb-6 rounded-full"></div>
              <p className="text-muted-foreground leading-relaxed">
                Data enthusiast with expertise in building scalable data pipelines, predictive models, and analytics solutions. Passionate about transforming complex data into actionable insights.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-4 text-accent">Technical Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-accent/20 text-accent hover:bg-accent/30 border-accent/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-4 text-accent">Core Competencies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 p-4 rounded-lg bg-card/50 border border-accent/20">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#f97316]" />
                        Data Engineering
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Building scalable ETL/ELT pipelines with Python, SQL, and cloud platforms (AWS, Azure, Snowflake).
                      </p>
                    </div>
                    <div className="space-y-2 p-4 rounded-lg bg-card/50 border border-accent/20">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-[#ec4899]" />
                        Analytics & Visualization
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Creating interactive dashboards with Tableau and Looker for data-driven decision making.
                      </p>
                    </div>
                    <div className="space-y-2 p-4 rounded-lg bg-card/50 border border-accent/20">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <Brain className="h-4 w-4 text-[#a469d5]" />
                        Machine Learning
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Developing predictive models and time-series forecasting using TensorFlow, scikit-learn, and XGBoost.
                      </p>
                    </div>
                    <div className="space-y-2 p-4 rounded-lg bg-card/50 border border-accent/20">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <Workflow className="h-4 w-4 text-[#06b6d4]" />
                        Automation & DevOps
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Designing automated workflows with n8n, Airflow, and CI/CD pipelines using GitHub Actions.
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
            <h2 className="font-display text-4xl font-bold mb-4 bg-gradient-to-r from-[#ec4899] to-[#a469d5] bg-clip-text text-transparent">Featured Projects</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] mb-6 rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl">
              A selection of data engineering, analytics, and machine learning projects showcasing end-to-end solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const gradients = [
                'from-[#ec4899] to-[#f97316]',
                'from-[#a469d5] to-[#06b6d4]',
                'from-[#06b6d4] to-[#a469d5]',
                'from-[#f97316] to-[#ec4899]',
                'from-[#ec4899] to-[#a469d5]'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-accent/30 bg-card/50 backdrop-blur hover:border-accent/60">
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className={`flex items-center gap-2 text-sm mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-semibold`}>
                          <Icon className="h-4 w-4 text-accent" />
                          {project.type}
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground">{project.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30 hover:bg-accent/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      asChild={project.link !== '#'}
                      disabled={project.link === '#'}
                      className={`w-full gap-2 ${project.link !== '#' ? 'bg-gradient-to-r from-[#ec4899] to-[#a469d5] hover:from-[#f472b6] hover:to-[#c084fc] text-white border-0' : 'bg-muted text-muted-foreground cursor-not-allowed'} transition-all`}
                    >
                      {project.link !== '#' ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                          View Project
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <>
                          Coming Soon
                          <ExternalLink className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 p-8 rounded-lg bg-card/50 border border-accent/30 text-center">
            <p className="text-muted-foreground mb-4">
              Explore more projects on my Tableau Public profile
            </p>
            <Button 
              asChild
              variant="outline"
              className="gap-2 border-accent hover:bg-accent/10"
            >
              <a href="https://public.tableau.com/app/profile/aditi.neema" target="_blank" rel="noopener noreferrer">
                <BarChart3 className="h-4 w-4" />
                View Tableau Dashboards
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h2 className="font-display text-4xl font-bold mb-4 bg-gradient-to-r from-[#ec4899] to-[#a469d5] bg-clip-text text-transparent">Let's Connect</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground text-lg">
                Open to collaboration, consulting, or discussing data engineering and analytics challenges.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="gap-2 border-accent hover:bg-accent/10"
              >
                <a href="https://github.com/aditi-py" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="gap-2 border-accent hover:bg-accent/10"
              >
                <a href="https://www.linkedin.com/in/aditi-neema/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                asChild
                size="lg" 
                className="gap-2 bg-gradient-to-r from-[#ec4899] to-[#a469d5] hover:from-[#f472b6] hover:to-[#c084fc] text-white border-0"
              >
                <a href="mailto:aneema099@gmail.com">
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </Button>
            </div>
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                📱 +1 (332) 699-0337 | 📧 aneema099@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-display font-semibold bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent">
              Aditi Neema
            </div>
            <div className="text-sm text-muted-foreground">
              © 2026 All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
