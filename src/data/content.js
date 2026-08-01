// Edit this file to update the site's content.
export const profile = {
  name: "Darshil Maru",
  role: "Data & Backend Engineer — Agentic AI Systems",
  location: "India",
  email: "darshilmaru4@gmail.com",
  phone: "+91-8487979979",
  linkedin: "https://linkedin.com/in/darshil-maru-01", // ⚠️ placeholder — replace with your real URL
  resumeFile: "/Darshil_Maru_Resume.pdf",
  summary:
    "Data Engineer with 3 years of experience building production-grade data and Agentic AI systems at Deloitte. Background spans Python backend development, document-driven data pipelines, and AI-ready workflows — RAG, embeddings, and validation layers — taking systems from ambiguous requirements to reliable production deployments. Currently focused on multi-agent orchestration and agentic workflow design.",
};

export const pipeline = ["Ingest", "Clean", "Analyze", "Model", "Deploy"];

export const skills = [
  {
    label: "AI / LLM",
    items: ["OpenAI APIs", "RAG pipelines", "Embeddings", "Prompt engineering", "Multi-agent orchestration"],
  },
  {
    label: "Backend",
    items: ["Python", "REST APIs", "FastAPI", "Django", "Flask"],
  },
  {
    label: "Data Processing",
    items: ["PDF parsing", "Data validation", "Structured & unstructured extraction"],
  },
  {
    label: "Distributed Systems",
    items: ["Apache Spark", "PySpark", "ETL pipelines"],
  },
  {
    label: "Cloud",
    items: ["Google Cloud (GCP / GKE)", "Vertex AI", "Azure (data services)"],
  },
  {
    label: "Other",
    items: ["SQL", "Scala", "Power BI", "CI/CD"],
  },
];

export const experience = [
  {
    role: "Data & Backend Engineer",
    org: "Deloitte India",
    period: "Jul 2023 — Present",
    bullets: [
      "Developed an AI-powered document intelligence solution to extract structured financial data from multi-page PDFs, handling model input constraints through page-level batching and consolidating LLM outputs into audit-ready tables.",
      "Built Python-based backend services and pipelines powering AI-driven audit and analytics platforms for enterprise clients.",
      "Engineered and fine-tuned Apache Spark ETL pipelines, cutting batch processing time significantly for high-volume datasets.",
      "Authored reusable SQL, Python, and Scala modules using CTEs and automation logic to expand business rule coverage, reducing errors and preprocessing time.",
      "Built RAG-compatible feature layers enabling AI-assisted querying, summarization, and explanations.",
      "Owned systems end-to-end from requirements to production deployment, balancing speed with reliability.",
    ],
  },
  {
    role: "Big Data Intern",
    org: "Deloitte India",
    period: "Jan 2023 — Jun 2023",
    bullets: [
      "Automated backend validation and reconciliation workflows using Python, reducing manual effort.",
      "Built reusable data-quality checks improving reliability of downstream analytics and AI outputs.",
      "Eliminated a large share of manual ETL tasks via Pandas automation, saving analyst hours weekly.",
      "Integrated SQL validation rules into existing Spark pipelines, increasing data reliability and reducing post-load fixes.",
    ],
  },
];

export const projects = [
  {
    name: "Agentic AI Audit Automation Platform",
    tag: "LLM-driven audit reconciliation pipeline",
    description:
      "End-to-end reconciliation system comparing balances across PDF documents and CSV datasets. Multi-stage AI workflow extracts structured financial data from unstructured PDFs, with state-driven LLM orchestration that explicitly injects extracted data into comparison agents for deterministic reconciliation outputs. Custom parsing and normalization logic handles inconsistent naming, formats, and missing values, with automated balance-difference calculations output as structured JSON for downstream reporting and UI rendering.",
    stack: ["Python", "LLM orchestration", "PDF parsing", "JSON pipelines"],
  },
  {
    name: "AI-Powered Audit Memo Generator",
    tag: "Flask + Vertex AI audit memo automation",
    description:
      "An internal AI tool that generates audit memos by combining a Flask backend with Vertex AI Gemini models, deployed on Google Kubernetes Engine (GKE). Currently owns the system end-to-end — infrastructure, deployment pipeline, and production hardening — across UAT and production environments.",
    stack: ["GCP", "GKE", "Flask", "Vertex AI (Gemini)"],
  },
];

export const certifications = [
  {
    title: "AI Agents Intensive Course (2025)",
    org: "Google (Kaggle)",
    url: "https://www.kaggle.com/certification/badges/darshilmaru4/105",
  },
  {
    title: "10 Days Agentic AI Bootcamp",
    org: "Great Learning",
    url: "https://www.mygreatlearning.com/certificate/WKSUKSWE",
  },
  {
    title: "Innovating with Google Cloud Artificial Intelligence",
    org: "Google Skills",
    url: "https://partner.skills.google/public_profiles/f85baf2e-00ca-4462-a436-fd43cdb2a236/badges/11621933?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Building Gen AI App 12+ Hands-on Projects",
    org: "Krish Naik (Udemy)",
    url: "https://www.udemy.com/certificate/UC-dde25cc0-ed56-459e-9397-d2eb1010f804/",
  },
];

export const awards = [
  { title: "President's Award FY23", org: "Deloitte — Top 1% firmwide performers" },
  { title: "Winner", org: "Deloitte National AI/ML Hackathon (2024)" },
  { title: "2nd Runner-up", org: "Deloitte — Mind & Machine Hackathon (2026)" },
];

export const education = [{
  degree: "B.Tech, Computer Science & Engineering",
  school: "Institute of Technology, Nirma University",
  period: "2020 — 2023",
},
{
  degree: "Diploma, Computer Engineering",
  school: "Gujarat Technological University",
  period: "2017 — 2020",
},];