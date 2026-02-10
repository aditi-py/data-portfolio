/*
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
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/NJA5yEZyGdlBas5LQJBe2a-img-1_1770757499000_na1fn_YWktdGV4dC1kZXRlY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L05KQTV5RVp5R2RsQmFzNUxRSkJlMmEtaW1nLTFfMTc3MDc1NzQ5OTAwMF9uYTFmbl9ZV2t0ZEdWNGRDMWtaWFJsWTNScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=clRUPytQ5DdVT2qOefb-OinukAzMryBYonu21jKZ3jqBLHCS~dWYh9GvISpJlRR7b6o1-nQU~2r~6EvLMioZY~BUMkp5eDEffH9pkX0uhDPW~~gDxQGtGBKxLCaM8IUaOuM8Etcoh-9GCQmnTw2Wgv8ZYYGPHgaS7pl9HKmK0skDH-zNANuUl4mWT0E-8JR0L4u3j1YVLhI9hCU5ScyVlRDzUkjdtZSlTH~HAaLktE~7bChH7t9nr2zSn9tGqevOq5khgHYp2NCOK9J-BQPDvU7x38TNg-0J7WDZLJ4jcSjDQ9gRnzJg8Py1inWlhUwTiyVL9VxAeY8V2tEZ4KqMEQ__"
    },
    {
      title: "Global Health Equity Analysis",
      description: "Comprehensive data analysis examining geographic and economic distribution of 83 international health organizations. Revealed that 70% are headquartered in high-income countries while representing only 4% of global population. Built visualizations and population-adjusted metrics.",
      type: "Data Analysis",
      icon: BarChart3,
      tags: ["Python", "Pandas", "DuckDB", "Matplotlib", "Data Visualization"],
      link: "https://github.com/aditi-py/Global-Health-Equity-Analysis-Geographic-Economic-Distribution-Study",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/NJA5yEZyGdlBas5LQJBe2a-img-2_1770757499000_na1fn_Z2xvYmFsLWhlYWx0aC1lcXVpdHk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L05KQTV5RVp5R2RsQmFzNUxRSkJlMmEtaW1nLTJfMTc3MDc1NzQ5OTAwMF9uYTFmbl9aMnh2WW1Gc0xXaGxZV3gwYUMxbGNYVnBkSGsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WoBPqY8MgXG2cNAHJRi8MIG1eyw~qHNUPRibydqr55MPjUY4LSdsGHtlruTdurbOHYgrG~Qo2KGCbkUrcKDA3jIOIhANVQwQrBZywQxB8gOxEwSzqDVgtMWB1dYVgcrTRd6lMLyHwj3wGu2Lc0Eo0pbkfxETfbETpi6OFktbgVB~x3~KYPsWutfuGT3c9do5tMs-ITm0GB52EC72a-LjmW2djSa6zjBKEIWU-9MDXeeKBAxX~XPPuGo43oTOOKKNEtW9ESYN7C4SBPOFxj-jXkynO9h9N4e1JwcGmXirVahQNpEQHqgNAVnRba0jnf0QRTUHJ3I2FIXIC6iRwLHn6Q__"
    },
    {
      title: "Clustering for Customer Segmentation",
      description: "Data analysis project computing correlation matrices and heatmap visualizations to identify relationships between variables. Supports data-driven customer segmentation and decision-making through statistical analysis.",
      type: "Data Analysis",
      icon: BarChart3,
      tags: ["Python", "Pandas", "Seaborn", "Matplotlib", "Statistics"],
      link: "https://github.com/aditi-py/Clustering-for-Customer-Segmentation",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/NJA5yEZyGdlBas5LQJBe2a-img-3_1770757498000_na1fn_Y3VzdG9tZXItY2x1c3RlcmluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L05KQTV5RVp5R2RsQmFzNUxRSkJlMmEtaW1nLTNfMTc3MDc1NzQ5ODAwMF9uYTFmbl9ZM1Z6ZEc5dFpYSXRZMngxYzNSbGNtbHVady5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IQojXN-WIHtS4Tl~BD1DbYEoVTMpPak39VAczXE3v-6LEu~RvVYLxuaRgDHKzM2W~gc-9WgJvnTR9M~d0m9SbxwtedLuXu8vaX2zWcNY2v4918ae9MFQ5dRQD6NTPao1~C6zmE40Z94NFG48e-8sCmOB9rpyeL4j6ydp0aW5QAglpzX3Ww0aV7w~TaqEsItRG~QbpF37jeyj4Y8l4wAYsnxAi0tZvE1JxanyYDpauuNFqvBTVlylGBMbWfLHss7-cv1Zd2lIjHyWSh5cdWtRIbPesDdAbUp1VxQeT8h6AzgMv10aLq9uY6CRzDwHum-v8I4mffjm9ndPWc127iFEwQ__"
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
      description: "Designed and deployed Snowflake ETL pipeline processing 15K+ UFC records using Python and SQL with dimensional modeling. Implemented data quality framework and performance optimization including weight class standardization.",
      type: "Dashboard & Analytics",
      icon: BarChart3,
      tags: ["Looker", "Snowflake", "Python", "SQL", "Data Warehouse"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/NJA5yEZyGdlBas5LQJBe2a-img-4_1770757502000_na1fn_dWZjLWRhc2hib2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L05KQTV5RVp5R2RsQmFzNUxRSkJlMmEtaW1nLTRfMTc3MDc1NzUwMjAwMF9uYTFmbl9kV1pqTFdSaGMyaGliMkZ5WkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EDXapXqW~23FhnsZZinX4aCt6nRmGlriBBGNl3JqsOU0R7xy4lE0AVFiiaXQv-BTsxZH3lIt202oHddrF6DiRFrA4jxa5H50qcUmeHhZcuX6TGqP633affhctUCJHpycY4ZVouqABT47uMnCIBEfCBEzRvyzQIt7vQEaCmtalptidrkYX6LRsNo4YbLGAw~PEEze4TegQkuvzAdxM8th6RcucVyVXqSVQsjTQPRI~Kvj~7xwMoRe3kVH3HXver3nUXxrwwIYAhN0xFZzNvE1Uwy64XpNTSAqHvpu8i0MFP8wXmD0OK5fcS1eBUFCjqLecUREVqczvTIDKm4-zlXlPA__"
    },
    {
      title: "Crisis Tracking Automation (Coming Soon)",
      description: "End-to-end automation workflow using n8n, OpenAI API, Google Sheets, and Looker for real-time crisis tracking and analysis of Reddit posts. Intelligent data pipeline with AI-powered insights.",
      type: "Workflow Automation",
      icon: Workflow,
      tags: ["n8n", "OpenAI", "Google Sheets", "Looker", "Automation"],
      link: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/NJA5yEZyGdlBas5LQJBe2a-img-5_1770757505000_na1fn_Y3Jpc2lzLXRyYWNraW5nLWF1dG9tYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L05KQTV5RVp5R2RsQmFzNUxRSkJlMmEtaW1nLTVfMTc3MDc1NzUwNTAwMF9uYTFmbl9ZM0pwYzJsekxYUnlZV05yYVc1bkxXRjFkRzl0WVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eBS8QYr4d1-RZ~iU10LhET7OkG30CKO56zf2hxrBB6WfriwrID5pjwNJdUD1ZSFvfDXHCll9vrmilbN5jAyJNh9X2NQkRGxMVeDbY2oiT7O2LXHNy0zUKA4LDlqQZeyNHlKSJy2qOt7Ej27uPvhnk~CVKKByWNHmNjljDjKtXx4lOiJ6tEDvD5MmZTsK95hZ5u3qgJUVSWkkf4ZhhZWm8xtB0HgnlYMHwHAUusrsdcgNTcpTXVY4mD~SPz~mNl12VDS8JCv0mXQMbHtphxFi9aquaMcKmkRdEknFKDA3VupagICaOsAJRBTH4qMCXiiKrkEO68oNskESdJbfpowqrA__"
    },
    {
      title: "Tableau Public Dashboards",
      description: "Collection of interactive Tableau dashboards showcasing data visualization expertise. Projects include USA airports heatmap analysis, stock market trends, sales performance metrics, streaming platform comparison, and global happiness index analysis.",
      type: "Data Visualization",
      icon: BarChart3,
      tags: ["Tableau", "Data Visualization", "Analytics", "Business Intelligence"],
      link: "https://public.tableau.com/app/profile/aditi.neema/vizzes",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/bq9NZ7676caXeNMaKmjyWE/sandbox/SlxILljGuahBXZrdO2lVYd-img-1_1770757554000_na1fn_dGFibGVhdS1kYXNoYm9hcmRz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnE5Tlo3Njc2Y2FYZU5NYUttanlXRS9zYW5kYm94L1NseElMbGpHdWFoQlhacmRPMmxWWWQtaW1nLTFfMTc3MDc1NzU0MDAwMF9uYTFmbl9kR0ZpYkdWaGRTMWtZWE5vWW05aGNtUnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VEI1hC3t~xgO4aXa~qvnMmcmWnN11f0oXWetBCbvoRar6trr72261~vY0cKWTkkMKT9IotWfv~7lVqGHqrCujfvyEREQy4mHUyYXnuyH0ryTDYDl2bZ66~qTbRAYb79YacZqs7wuQE~SPosQgvKl~thzjstuh~71Um3YWk~BARgNlgAGstJIhKv60r5m6kHWUHEvh4pZztd3d4kZcUa0WmTVdqukihhqDnpICcnxyHXLpKTHW~RF0lgBGbl5eFRsealVwhYOAqjNdsXgdXZjkcBblnSN1~wl5KYSBLJy6NfznW9JPdO1a2tLgHxrVEzERUIXXOPpVOyZJBXwXshjaQ__"
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
              <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <Button onClick={handleResumeClick} variant="default" size="sm" className="gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-[#ec4899] via-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent">
                Data Engineer & Analyst
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                4+ years transforming legacy systems into modern, automated data solutions. Specializing in scalable pipelines, predictive models, and data-driven insights.
              </p>
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
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#ec4899] to-[#a469d5] bg-clip-text text-transparent">4+</div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </Card>
              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#a469d5] to-[#06b6d4] bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-muted-foreground mt-2">Projects Built</div>
              </Card>
              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#06b6d4] to-[#ec4899] bg-clip-text text-transparent">100M+</div>
                <div className="text-sm text-muted-foreground mt-2">Records Processed</div>
              </Card>
              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#ec4899] to-[#06b6d4] bg-clip-text text-transparent">25+</div>
                <div className="text-sm text-muted-foreground mt-2">Tools Mastered</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-b border-border">
        <div className="container">
          <h2 className="font-display text-4xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#ec4899]" />
                Data Science & ML
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "TensorFlow", "Keras", "Scikit-learn", "Deep Learning", "NLP"].map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#a469d5]" />
                Analytics & BI
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Tableau", "Looker", "Power BI", "SQL", "DuckDB", "Analytics"].map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#06b6d4]" />
                Data Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Snowflake", "Airflow", "ETL/ELT", "AWS", "Azure", "CI/CD"].map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-b border-border">
        <div className="container">
          <h2 className="font-display text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden border-border hover:border-accent transition-colors group">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.type}</p>
                    </div>
                    <project.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="w-full gap-2">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating or discussing data projects? Reach out via email or connect on LinkedIn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:aditi.neema@email.com">
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Aditi Neema. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
