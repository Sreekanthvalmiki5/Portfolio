import projectAgents from "@/assets/project-agents.jpg";
import projectRag from "@/assets/project-rag.jpg";
import projectLlm from "@/assets/project-llm.jpg";
import projectErp from "@/assets/project-erp.jpg";

export const profile = {
  name: "Sreekanth Valmiki",
  title: "Generative AI Engineer · Python Full-Stack Developer",
  tagline:
    "Building scalable AI systems, multi-agent workflows, RAG pipelines, and production-grade backends.",
  location: "Hyderabad, India",
  email: "valmikisrikanth89@gmail.com",
  phone: "+91 6309805296",
  linkedin: "https://www.linkedin.com/in/sreekanth-valmiki-74752325a/",
  github: "https://github.com/",
  summary:
    "AI Engineer and Python Full Stack Developer with experience in building scalable backend systems, API integrations, ERP solutions, and Generative AI applications. Skilled in FastAPI, RAG pipelines, LLM fine-tuning, multi-agent AI systems, and intelligent automation workflows.",
};

export type Skill = { name: string; category: string };
export const skills: Skill[] = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "FastAPI", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Generative AI", category: "AI" },
  { name: "RAG", category: "AI" },
  { name: "Agentic AI Systems", category: "AI" },
  { name: "LLM Fine-Tuning", category: "AI" },
  { name: "NLP", category: "AI" },
  { name: "AI/ML", category: "AI" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS Cloud", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "Git & GitHub", category: "DevOps" },
  { name: "System Design", category: "Engineering" },
  { name: "DSA", category: "Engineering" },
  { name: "Odoo ERP", category: "Engineering" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};
export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Earbor",
    period: "Jul 2025 — Present",
    bullets: [
      "Designed and delivered Python backend modules and FastAPI integrations for enterprise business applications.",
      "Developed scalable API integrations enhancing warehouse operations, receipt flows, and order synchronization.",
      "Led ERP solution implementation for restaurant, retail, and e-commerce clients.",
      "Worked on inventory optimization, reporting automation, and business process customization.",
      "Implemented LLM concepts and integrated intelligent automation workflows.",
      "Built automated invoice-to-Excel processing workflows, reducing manual effort.",
    ],
  },
  {
    role: "Software Trainee",
    company: "Edvenswa Tech",
    period: "Sep 2024 — Jun 2025",
    bullets: [
      "Built enterprise-grade applications improving UX and streamlining functionality.",
      "Developed Enterprise Employee Nervous System using Python, SQL, React, and Next.js.",
      "Built an enterprise application testing agent automating test case execution.",
      "Collaborated on business integrations and customized products for enterprise needs.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};
export const projects: Project[] = [
  {
    title: "Multi-Agent AI Systems",
    description:
      "Autonomous multi-agent systems with serverless architecture. Built scalable workflows for orchestration and intelligent task execution, integrating GPT, Gemini, and Claude.",
    image: projectAgents,
    tags: ["Agentic AI", "GPT", "Gemini", "Claude", "Serverless"],
  },
  {
    title: "RAG & Multimodal AI",
    description:
      "End-to-end RAG pipelines using LangChain and ChromaDB for semantic search. Built multimodal chatbots for insurance use cases and AI-powered website-to-text conversion.",
    image: projectRag,
    tags: ["LangChain", "ChromaDB", "RAG", "Multimodal"],
  },
  {
    title: "LLM Fine-Tuning & Price Prediction",
    description:
      "Fine-tuned Ollama, GPT-OSS-20B and Gemma using QLoRA, LoRA, SFT and quantization. Built ecommerce price prediction models from product descriptions using NLP feature extraction.",
    image: projectLlm,
    tags: ["QLoRA", "LoRA", "Quantization", "NLP"],
  },
  {
    title: "ERP & Automation Suite",
    description:
      "Inventory optimization, warehouse syncing and reporting automation for retail, restaurant and e-commerce clients on Odoo with custom Python modules.",
    image: projectErp,
    tags: ["Odoo", "FastAPI", "Automation", "Python"],
  },
];

export const certifications = [
  "Udemy — LLM Engineer: Build & Deploy 8 LLM Apps (GenAI, RAG, LoRA, AI Agents)",
  "Udemy — AI Engineer Agentic Track: Complete Agent & MCP Course",
  "Google Cloud — Natural Language Processing Badge",
  "n8n — Course Level 1 & 2",
  "SQL & PL/SQL Certification — Naresh IT",
  "Advanced Java Certification — Naresh IT",
];

export const education = [
  {
    school: "Sree Vidyanikethan Engineering College, Tirupati",
    degree: "B.Tech",
    period: "Mar 2024",
    score: "GPA 8.0/10",
  },
  {
    school: "E.S.C Govt Polytechnic College, Nandyal",
    degree: "Diploma",
    period: "Jan 2021",
    score: "GPA 8",
  },
];
