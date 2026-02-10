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
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/SiQhB47F1tVYRUbu1AlTai-img-1_1770693895000_na1fn_YWktdGV4dC1kZXRlY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1NpUWhCNDdGMXRWWVJVYnUxQWxUYWktaW1nLTFfMTc3MDY5Mzg5NTAwMF9uYTFmbl9ZV2t0ZEdWNGRDMWtaWFJsWTNScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Xb29J-UJnCJ5GES179oLSzag7N8bIwKyyRPe1GvuTLiEOSjDR2C~bkCioo8uonl1UKdKEXCvGuklWGa2epCxLhC12UNguIWSBk-WcQS65h9oAfs7OQVlpKIC1V0GUUPzs8MHo4k05Gkz4WNQllFI8d7rxckR7LVyLKdeB1WrJo-mHVRPk3fO5-M8f163RbjpqohTGQFlI~K0NtMQouz7mAyZaet6j6-IuT6aWSjzuPcu3G0gYJBMUkT6l8j4KhdMDNmRN5KrLmBEYXsUxoYFqiaqXNCbP01ACP6-jI0Xs9XubksoP8olBbb5TQgODIQfGO6n5CdrAAlhyvCg-xOAWg__"
    },
    {
      title: "Global Health Equity Analysis",
      description: "Comprehensive data analysis examining geographic and economic distribution of 83 international health organizations. Revealed that 70% are headquartered in high-income countries while representing only 4% of global population. Built visualizations and population-adjusted metrics.",
      type: "Data Analysis",
      icon: BarChart3,
      tags: ["Python", "Pandas", "DuckDB", "Matplotlib", "Data Visualization"],
      link: "https://github.com/aditi-py/Global-Health-Equity-Analysis-Geographic-Economic-Distribution-Study",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/SiQhB47F1tVYRUbu1AlTai-img-2_1770693898000_na1fn_Z2xvYmFsLWhlYWx0aC1lcXVpdHk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1NpUWhCNDdGMXRWWVJVYnUxQWxUYWktaW1nLTJfMTc3MDY5Mzg5ODAwMF9uYTFmbl9aMnh2WW1Gc0xXaGxZV3gwYUMxbGNYVnBkSGsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l6ftr743jOVGM1WPs50SNF49NXD~OJUiEjk~TSbTdpG-8aX7iphFF54MN9L0iTcheU46yDRmRZFUvg9j4F6hHJEV4sUT8ggzFaTQc408~5lvpODCgekdEq9BRap-jhKYhBBp3dFWmD64QXU465DDmipWYR-1lVykM14nDLANgvRgYUEBuJJstn7JP2sXiIdiRvuPNDstgS8BpX5gtdHtM3JW8A-QVxDUojLKwE4IlEFt25S4X5rX2vVDp24efIDi8odOLqpo0AOnSgCiTUeLse2qFotlWKO7NP1UKoWT5A4yB6RWq3GMV1cODuDgQJbnlNan29Wy8EIddUFa5zypPA__"
    },
    {
      title: "Clustering for Customer Segmentation",
      description: "Data analysis project computing correlation matrices and heatmap visualizations to identify relationships between variables. Supports data-driven customer segmentation and decision-making through statistical analysis.",
      type: "Data Analysis",
      icon: BarChart3,
      tags: ["Python", "Pandas", "Seaborn", "Matplotlib", "Statistics"],
      link: "https://github.com/aditi-py/Clustering-for-Customer-Segmentation",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/SiQhB47F1tVYRUbu1AlTai-img-3_1770693902000_na1fn_Y3VzdG9tZXItY2x1c3RlcmluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1NpUWhCNDdGMXRWWVJVYnUxQWxUYWktaW1nLTNfMTc3MDY5MzkwMjAwMF9uYTFmbl9ZM1Z6ZEc5dFpYSXRZMngxYzNSbGNtbHVady5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hKOCkyaWYEFxMgfx3gCzjg2hsdbD5YPKeFXLX81DIBRXdlp1tS5dOXxQ763RaYFUD3IRub98eyJZInRyH4ZdFcQTE~SdOc0K2YtNlmZvvekMjr0vzpaIydauM~HbZZdITVdPo-2Epieoz~RJAQiUlRYLKqGcCHW-HE5VF28Ro1Hvanpjg9hAKDDnBVKrH8xfH7XXKuFECfa0qnwNevF5nqiZFai0BooKA2vdF9XQ3nVICTRhCBuZ5RJyYHnFHs7HbFAh6REGNfKP52~VMuecikvdgUqWXtFqmfipOoOitULPgEXPkIHr7rDxotJmws2j9U6Q0mHWT8lx1uMY-LnCZg__"
    },
    {
      title: "UFC Looker Dashboard",
      description: "Designed and deployed Snowflake ETL pipeline processing 15K+ UFC records using Python and SQL with dimensional modeling. Implemented data quality framework and performance optimization including weight class standardization.",
      type: "Dashboard & Analytics",
      icon: BarChart3,
      tags: ["Looker", "Snowflake", "Python", "SQL", "Data Warehouse"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/SiQhB47F1tVYRUbu1AlTai-img-4_1770693910000_na1fn_dWZjLWRhc2hib2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1NpUWhCNDdGMXRWWVJVYnUxQWxUYWktaW1nLTRfMTc3MDY5MzkxMDAwMF9uYTFmbl9kV1pqTFdSaGMyaGliMkZ5WkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WLrYyWeLOxY0V1eVpb6GApVc08eppJRZxsVdpti2ptyyTLnSmJz-hr8NN19JBWeZMGpLK2a1IK4W-2wqoeLvpJZcbdELIyRHcevcxWdFHt4Pc38qvpXqWVT7TsLDomR0yu27XDUQ6nHUKjVyIKkDCeRJOH5hYcS2wlTY5XZoNZ199zif9aaaatFg91fNEqhTjgzg~8NoAGX1XACno0dQPjJbXoGTxNMJ5gxZh1nlOdP7n~2BSKG9AClTt89nZz-vQeLQPFna-MgK2LCZ82ZqE8TTyYtckbnzK-2EKnIrA7YurtRqbchmmv8-vzOYdg85LEItGk0VT-uc--v1Lk-1dg__"
    },
    {
      title: "Crisis Tracking Automation (Coming Soon)",
      description: "End-to-end automation workflow using n8n, OpenAI API, Google Sheets, and Looker for real-time crisis tracking and analysis of Reddit posts. Intelligent data pipeline with AI-powered insights.",
      type: "Workflow Automation",
      icon: Workflow,
      tags: ["n8n", "OpenAI", "Google Sheets", "Looker", "Automation"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/SiQhB47F1tVYRUbu1AlTai-img-5_1770693896000_na1fn_Y3Jpc2lzLXRyYWNraW5nLWF1dG9tYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1NpUWhCNDdGMXRWWVJVYnUxQWxUYWktaW1nLTVfMTc3MDY5Mzg5NjAwMF9uYTFmbl9ZM0pwYzJsekxYUnlZV05yYVc1bkxXRjFkRzl0WVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R7Lc9Z6aH4FiV4cJkkLGUwFrZkTLF6LE6EzUCAmtuNqPXDNkVsWoavc7l7QmG32jaO1iCZACr-06ygzGj1FbRCO7rK~PogE8kcTTzsdtSFOjq6rrG6fWtPgjWhZePnqLuuIc9vPj5T9hKmyuHuapnnKLe99hxk63E6shoNQOpsT9KW8IswuyoRDe91E1cx1izbfSmke8wz72qTWY9NlQoQSaWPp6S3Xn7Yd8tDe8Y3SKj~SuGIeAVhEqhoICd556xVzEGHuyTYzOeUAaaJXS~NwWqgosjqn5OYRS3RsT5qtsrRHOEO9aBvwllzh81sBFunQQ0zhOC4eTsQvJWpqlzg__"
    },
    {
      title: "Tableau Public Dashboards",
      description: "Collection of interactive Tableau dashboards showcasing data visualization expertise. Projects include USA airports heatmap analysis, stock market trends, sales performance metrics, streaming platform comparison, and global happiness index analysis.",
      type: "Data Visualization",
      icon: BarChart3,
      tags: ["Tableau", "Data Visualization", "Analytics", "Business Intelligence"],
      link: "https://public.tableau.com/app/profile/aditi.neema/vizzes",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/5VTPbicP8C7wQkXmEkNh0H-img-1_1770693949000_na1fn_dGFibGVhdS1kYXNoYm9hcmRz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94LzVWVFBiaWNQOEM3d1FrWG1Fa05oMEgtaW1nLTFfMTc3MDY5Mzk0OTAwMF9uYTFmbl9kR0ZpYkdWaGRTMWtZWE5vWW05aGNtUnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=O5XpMKT9QyxlVYdt0z66RANgt2X47-cysrr8pfzIfpG5D-hR91csT0At2x9QE0t7dfkBTBMnJ8a1smKeQ4TUQ4UWe7JusXNAaC698m2i~wkhPHdrA3wkLgOWHscGz6lqlKjho9sYImXskOG8cCgp89L3~-GB7rsi8~Pb2XjJ6ZX2JbVyGEsln3u2X-CCxqVqVyOEhC8NaOCJ-19Dg39x5WpsIFOt2PGKigQUAKD8OOiofW-29acQhivu9w0-SlI0LJfeeqsKGsyuYHvs622nt1pouAft1NRf9fSJ6YIXRaiJzg4WgU9EWO9HaA8TucHGi3-qBpVADUwSQZKcwpa~DQ__"
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
