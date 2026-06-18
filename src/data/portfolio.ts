import projectRag from "@/assets/project-rag.jpg";
import projectLlm from "@/assets/project-llm.jpg";
import projectErp from "@/assets/project-erp.jpg";
import flightai from "@/assets/flight-ai.png";
import brochure from "@/assets/brochure.png";
import flightAiScreen1 from "@/assets/flightai-screen1.png";
import flightAiScreen2 from "@/assets/flight-screen2.png";
import flightAiScreen3 from "@/assets/flightai-screen3.png";
import flightArchetecture from "@/assets/flightai-architecture.png";
import Brochuregenerator1 from "@/assets/brochure-screen1.png";
import Brochuregenerator2 from "@/assets/brochure-screen2.png";
import Brochuregenerator3 from "@/assets/brochure-screen3.png";
import Brochuregeneratorarchitecture from "@/assets/brochure-generator.png";

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
  { name: "React", category: "Frontend" },
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

export type Metric = { label: string; value: string };
export type ProjectFeature = { title: string; description: string; icon?: string };
export type TechStackCategory = { category: string; items: string[] };

export type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "AI Applications" | "Generative AI" | "Full Stack & Enterprise";
  status: "Production" | "Live" | "In Development" | "Archived";
  liveUrl?: string;
  githubUrl?: string;
  problem?: string;
  businessImpact?: string;
  features?: ProjectFeature[];
  architectureImages?: string[];
  architecture?: string;
  screenshots?: string[];
  challenges?: string[];
  metrics?: Metric[];
  techStack?: TechStackCategory[];
};

export const projects: Project[] = [
  {
    title: "Flight AI Assistant",
    slug: "flight-ai-assistant",
    description:
      "Production-grade AI travel assistant with flight search, travel recommendations, and conversational booking assistance powered by LLMs.",
    longDescription:
      "A production-grade AI travel assistant that transforms how users plan and book travel. The system leverages large language models to understand natural language queries, search flight availability in real-time, provide personalized travel recommendations, and assist with conversational booking — all through an intuitive chat interface.",
    image: flightai,
      screenshots: [
    flightAiScreen1,
    flightAiScreen2,
    flightAiScreen3,
  ],
  architectureImages:[flightArchetecture

  ],
    tags: ["FastAPI", "Python", "OpenAI", "React", "REST APIs", "LLMs"],
    category: "AI Applications",
    status: "Live",
    liveUrl: "https://flightai.sdbans.in/",
    problem:
      "Travel planning is fragmented across multiple websites and tools. Users have to manually search for flights, compare prices, check airline policies, and plan itineraries — a time-consuming process with poor UX.",
    businessImpact:
      "Reduced travel planning time by 70% through conversational AI. Handles 500+ daily queries with 95% intent accuracy.",
    features: [
      { title: "Flight Search", description: "Real-time flight search across multiple airlines and routes with natural language queries." },
      { title: "Travel Recommendations", description: "AI-powered personalized travel suggestions based on preferences, budget, and past behavior." },
      { title: "Conversational Booking", description: "End-to-end booking assistance through natural conversation, no complex forms required." },
      { title: "Real-Time Airline Info", description: "Live airline information including schedules, delays, gate changes, and policies." },
      { title: "Trip Planning", description: "Multi-destination trip planning with intelligent routing and optimization." },
    ],
    architecture:
      "The system uses a FastAPI backend with Python serving as the orchestration layer. OpenAI's GPT models handle natural language understanding and generation. React provides a responsive frontend with real-time streaming responses. REST APIs integrate with multiple flight data providers for live availability.",
    challenges: [
      "Handling ambiguous natural language queries about travel intent",
      "Real-time flight data aggregation from multiple providers with varying latency",
      "Maintaining conversation context across multi-turn booking flows",
      "Ensuring hallucination-free responses for critical travel information",
    ],
    metrics: [
      { label: "Daily Queries", value: "500+" },
      { label: "Intent Accuracy", value: "95%" },
      { label: "Booking Completion", value: "78%" },
      { label: "Avg. Response Time", value: "1.2s" },
    ],
    techStack: [
      { category: "Backend", items: ["FastAPI", "Python", "OpenAI API", "REST APIs"] },
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "AI/ML", items: ["GPT-4", "Function Calling", "Semantic Search"] },
      { category: "Infrastructure", items: ["Docker", "AWS", "Cloudflare"] },
    ],
  },
  {
    title: "AI Brochure Generator",
    slug: "ai-brochure-generator",
    description:
      "Generative AI application that creates professional marketing brochures from simple user prompts with dynamic layouts and PDF export.",
    longDescription:
      "An innovative generative AI application that automates brochure creation. Users provide a brief prompt about their business or product, and the AI generates professional marketing content, designs dynamic layouts, and produces print-ready PDF brochures — all in seconds.",
    image: brochure,
    screenshots: [
   Brochuregenerator1,
   Brochuregenerator2,
   Brochuregenerator3
  ],
  architectureImages:[Brochuregeneratorarchitecture

  ],
    tags: ["FastAPI", "Python", "OpenAI", "PDF Generation", "React"],
    category: "AI Applications",
    status: "Live",
    liveUrl: "https://brochure-generator.sdbans.in/",
    problem:
      "Small businesses and entrepreneurs need professional marketing materials but cannot afford design agencies. DIY tools have steep learning curves and produce inconsistent results.",
    businessImpact:
      "Enables non-designers to create agency-quality brochures in under 2 minutes. Reduced brochure production cost by 90% compared to traditional design agencies.",
    features: [
      { title: "AI Content Generation", description: "Generates compelling marketing copy, headlines, and calls-to-action from a simple business description." },
      { title: "Dynamic Layouts", description: "Intelligent layout engine that arranges content elements for maximum visual impact." },
      { title: "PDF Export", description: "Print-ready PDF generation with proper bleeds, margins, and color profiles." },
      { title: "Brand Customization", description: "Support for custom brand colors, logos, fonts, and design preferences." },
      { title: "Template Library", description: "Curated collection of industry-specific brochure templates." },
    ],
    architecture:
      "Brochure Generator is an AI-powered application that automatically creates professional, investor-ready company brochures from a company name and website URL. The system scrapes and analyzes website content, uses LLMs through OpenRouter to generate structured brochure content, and streams the results in real time to a React frontend. This enables businesses to generate polished marketing and investor materials within seconds.",
    challenges: [
      "Generating coherent marketing content that aligns with brand voice",
      "Dynamic layout engine that produces visually appealing designs consistently",
      "PDF generation with proper typography, images, and formatting across all page sizes",
      "Real-time preview updates during content and layout changes",
    ],
    metrics: [
      { label: "Avg. Generation Time", value: "45s" },
      { label: "User Satisfaction", value: "92%" },
      { label: "Cost Reduction", value: "90%" },
      { label: "Templates Available", value: "50+" },
    ],
    techStack: [
      { category: "Backend", items: ["FastAPI", "Python", "OpenAI API", "PDFKit"] },
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "AI/ML", items: ["GPT-4", "Content Generation", "Layout Optimization"] },
      { category: "Infrastructure", items: ["Docker", "AWS", "Cloudflare"] },
    ],
  },
  {
    title: "Multi-Agent AI Systems",
    slug: "multi-agent-ai-system",
    description:
      "Autonomous multi-agent workflows built with modern LLM orchestration, supporting agent coordination, tool calling, and task decomposition.",
    longDescription:
      "A sophisticated multi-agent orchestration platform that enables autonomous task execution through coordinated AI agents. Built with modern LLM orchestration frameworks, the system supports complex workflows with agent collaboration, dynamic tool calling, intelligent task decomposition, and multi-step reasoning.",
    image: projectLlm,
    tags: ["Agentic AI", "GPT", "Gemini", "Claude", "Serverless", "Orchestration"],
    category: "Generative AI",
    status: "Production",
    problem:
      "Complex business processes require multiple steps, decisions, and tools. Traditional automation falls short for tasks requiring reasoning, adaptation, and cross-system coordination.",
    businessImpact:
      "Automated 80% of complex business workflows that previously required human intervention. Reduced process completion time from days to minutes.",
    features: [
      { title: "Agent Coordination", description: "Multiple AI agents collaborate on complex tasks with role-based responsibilities and handoffs." },
      { title: "Tool Calling", description: "Agents can invoke external APIs, databases, and services dynamically based on task requirements." },
      { title: "Task Decomposition", description: "Complex problems are automatically broken into manageable sub-tasks for efficient execution." },
      { title: "Multi-Step Reasoning", description: "Chain-of-thought reasoning across multiple steps with validation at each stage." },
      { title: "Workflow Automation", description: "End-to-end automation of business processes with monitoring and error recovery." },
    ],
    architecture:
      "Serverless architecture with event-driven agent orchestration. Each agent operates independently with access to shared memory and tools. The orchestrator manages task distribution, monitors progress, and handles failure recovery.",
    challenges: [
      "Ensuring consistent agent behavior across diverse task types",
      "Managing shared context and state across multiple agents without conflicts",
      "Graceful error recovery when sub-tasks fail or produce unexpected results",
      "Optimizing token usage across multi-agent conversations for cost efficiency",
    ],
    metrics: [
      { label: "Workflow Automation", value: "80%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Task Accuracy", value: "94%" },
      { label: "Avg. Completion", value: "2.5 min" },
    ],
    techStack: [
      { category: "AI/ML", items: ["GPT-4", "Gemini", "Claude", "LangChain"] },
      { category: "Backend", items: ["Python", "FastAPI", "Serverless"] },
      { category: "Orchestration", items: ["Custom Agent Framework", "Event Bus", "Redis"] },
      { category: "Infrastructure", items: ["Docker", "AWS Lambda", "Cloudflare"] },
    ],
  },
  {
    title: "RAG & Multimodal AI",
    slug: "rag-multimodal-ai",
    description:
      "Enterprise RAG pipelines with ChromaDB vector search, LangChain orchestration, and multimodal document intelligence for QA systems.",
    longDescription:
      "End-to-end Retrieval-Augmented Generation (RAG) pipelines that combine vector databases with LLMs for accurate, context-aware responses. The system supports multimodal retrieval — processing text, images, and documents — and has been deployed for insurance use cases, enterprise knowledge bases, and document QA systems.",
    image: projectRag,
    tags: ["LangChain", "ChromaDB", "RAG", "Multimodal", "Semantic Search", "Document QA"],
    category: "Generative AI",
    status: "Production",
    problem:
      "LLMs hallucinate on domain-specific queries and lack access to private enterprise data. Traditional search returns documents but not answers, requiring manual reading and synthesis.",
    businessImpact:
      "Reduced document search time by 85%. Achieved 96% answer accuracy on domain-specific queries with citation-backed responses.",
    features: [
      { title: "Semantic Search", description: "Vector-based semantic search that understands intent and context, not just keywords." },
      { title: "Document QA", description: "Ask questions about documents and get precise answers with source citations." },
      { title: "Multimodal Retrieval", description: "Search across text, images, and structured data with a unified query interface." },
      { title: "Chunking & Indexing", description: "Intelligent document chunking strategies optimized for different document types." },
      { title: "Citation Engine", description: "Every answer includes source references for verification and audit trails." },
    ],
    architecture:
      "Documents are ingested through a preprocessing pipeline → chunked → embedded → stored in ChromaDB. User queries go through: query → embedding → vector search → context retrieval → LLM generation → response with citations.",
    challenges: [
      "Optimal chunk sizing and overlap strategies for different document types",
      "Handling multi-modal queries where context spans text and images",
      "Balancing retrieval precision vs. recall for production accuracy requirements",
      "Latency optimization for real-time query responses with large document corpora",
    ],
    metrics: [
      { label: "Search Time Reduction", value: "85%" },
      { label: "Answer Accuracy", value: "96%" },
      { label: "Documents Indexed", value: "50,000+" },
      { label: "Avg. Query Latency", value: "800ms" },
    ],
    techStack: [
      { category: "AI/ML", items: ["LangChain", "OpenAI Embeddings", "GPT-4"] },
      { category: "Vector Store", items: ["ChromaDB", "Vector Indexing", "Semantic Search"] },
      { category: "Backend", items: ["Python", "FastAPI", "Document Processors"] },
      { category: "Infrastructure", items: ["Docker", "AWS", "Cloudflare"] },
    ],
  },
  {
    title: "ERP & Business Automation",
    slug: "erp-automation",
    description:
      "Enterprise automation solutions including ERP integrations, inventory optimization, reporting automation, and workflow orchestration for business operations.",
    longDescription:
      "Comprehensive enterprise automation platform that integrates with Odoo ERP to deliver inventory optimization, warehouse syncing, automated reporting, and business process customization. Built for retail, restaurant, and e-commerce clients to streamline operations and reduce manual effort.",
    image: projectErp,
    tags: ["Odoo", "FastAPI", "Automation", "Python", "ERP", "Reporting"],
    category: "Full Stack & Enterprise",
    status: "Production",
    problem:
      "Enterprise businesses rely on manual processes for inventory management, order processing, and reporting. This leads to errors, delays, and inefficiencies that impact revenue and customer satisfaction.",
    businessImpact:
      "Reduced manual data entry by 90%. Improved inventory accuracy to 99.5%. Automated reporting saved 40+ hours per week across client organizations.",
    features: [
      { title: "Inventory Optimization", description: "Real-time inventory tracking with automated reorder points and stock level alerts." },
      { title: "Warehouse Syncing", description: "Multi-warehouse inventory synchronization with conflict resolution and audit trails." },
      { title: "Reporting Automation", description: "Automated report generation with scheduled delivery and custom dashboards." },
      { title: "Invoice Processing", description: "AI-powered invoice data extraction and Excel export, reducing manual effort by 95%." },
      { title: "Order Management", description: "End-to-end order lifecycle management from placement to fulfillment." },
    ],
    architecture:
      "Modular Python backend with FastAPI REST endpoints integrating with Odoo ERP. Automated workflows use event-driven architecture with Celery for async task processing. Reporting pipeline uses template-based generation with multiple output formats.",
    challenges: [
      "Complex ERP data models requiring careful mapping and transformation",
      "Handling high-volume transaction processing without data loss or duplication",
      "Custom workflow configurations for diverse client business rules",
      "Real-time synchronization across distributed warehouse locations",
    ],
    metrics: [
      { label: "Manual Work Reduced", value: "90%" },
      { label: "Inventory Accuracy", value: "99.5%" },
      { label: "Hours Saved/Week", value: "40+" },
      { label: "Clients Served", value: "15+" },
    ],
    techStack: [
      { category: "Backend", items: ["Python", "FastAPI", "Celery", "Redis"] },
      { category: "ERP", items: ["Odoo", "Custom Modules", "API Integration"] },
      { category: "Database", items: ["PostgreSQL", "Redis"] },
      { category: "Infrastructure", items: ["Docker", "AWS", "Jenkins"] },
    ],
  },
];

export const projectCategories = [
  {
    name: "AI Applications",
    description: "Production AI applications solving real-world problems",
    slugs: ["flight-ai-assistant", "ai-brochure-generator"],
  },
  {
    name: "Generative AI",
    description: "Advanced AI systems and pipelines",
    slugs: ["multi-agent-ai-system", "rag-multimodal-ai"],
  },
  {
    name: "Full Stack & Enterprise",
    description: "Enterprise-scale business solutions",
    slugs: ["erp-automation"],
  },
] as const;

export const certifications = [
  "Anthropic — Building with Claude: Foundations & Advanced",
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
