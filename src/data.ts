import { Testimonial, ClientLogo, Job } from "./types";

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Vercel", symbol: "▲" },
  { name: "Stripe", symbol: "💳" },
  { name: "Figma", symbol: "❖" },
  { name: "Linear", symbol: "⧉" },
  { name: "Cosmos", symbol: "⚛" },
  { name: "Airbnb", symbol: "🖿" },
  { name: "Goldman Sachs", symbol: "🏛" },
  { name: "BlackRock", symbol: "📈" },
];

export const STATISTICS = [
  { value: "15+ Years", label: "NYC Community Service", desc: "Trusted job placement partner since 2005" },
  { value: "98.4%", label: "Placement Retention Rate", desc: "Proven long-term hiring stability" },
  { value: "48 Hours", label: "Initial Candidate Shortlist", desc: "Rapid pre-vetted talent matching" },
  { value: "15,000+", label: "Successful NYC Placements", desc: "Across Elmhurst, Manhattan & Tri-State area" },
];

export const SPECIALIZATIONS = [
  {
    id: "tech-ai",
    icon: "Cpu",
    title: "Technology & AI Engineering",
    description: "Machine Learning Architects, Principal Full-Stack Engineers, DevOps & Cloud Systems Leaders.",
    avgSalary: "$160k - $320k",
    vettedTalentCount: "4,200+ Vetted Candidates",
    popularRoles: ["Senior ML Engineer", "Principal React Architect", "VP of Infrastructure", "Staff Backend Engineer"]
  },
  {
    id: "finance-quant",
    icon: "TrendingUp",
    title: "Finance & Quantitative Trading",
    description: "FinTech Developers, Quantitative Analysts, Corporate Finance Directors & Controller Leaders.",
    avgSalary: "$175k - $380k",
    vettedTalentCount: "2,800+ Vetted Candidates",
    popularRoles: ["Quant Researcher", "FinTech Product Lead", "Director of FP&A", "Risk Analytics Lead"]
  },
  {
    id: "executive-csuite",
    icon: "Crown",
    title: "Executive & C-Suite Search",
    description: "Confidential search for CEOs, CTOs, VPs of Engineering, Product, and Chief Operating Officers.",
    avgSalary: "$250k - $550k+",
    vettedTalentCount: "1,100+ Executive Network",
    popularRoles: ["Chief Technology Officer", "VP of Engineering", "Head of Product", "Chief Revenue Officer"]
  },
  {
    id: "creative-brand",
    icon: "Palette",
    title: "Creative & Brand Leadership",
    description: "Executive Creative Directors, Spatial/Product Designers, Brand Strategists, and Content Directors.",
    avgSalary: "$140k - $240k",
    vettedTalentCount: "3,100+ Vetted Designers",
    popularRoles: ["Lead Spatial UX Designer", "Creative Director", "Head of Design", "Principal Brand Architect"]
  }
];

export const PROCESS_STEPS_EMPLOYER = [
  {
    step: "01",
    title: "Share Requirements",
    desc: "Submit your hiring needs or consult with a Rupa Agency partner at our Elmhurst NYC office."
  },
  {
    step: "02",
    title: "Vetting & Matching (48 Hours)",
    desc: "Our placement protocol matches your requirements against 15,000+ pre-screened NYC & global candidates."
  },
  {
    step: "03",
    title: "Curated Top Shortlist",
    desc: "Receive hyper-aligned, interview-ready candidate profiles complete with competency rubrics."
  },
  {
    step: "04",
    title: "Guaranteed Placement",
    desc: "Finalize hires with confidence backed by Rupa Agency's 15-year trusted NYC reputation and 90-day retention warranty."
  }
];

export const PROCESS_STEPS_CANDIDATE = [
  {
    step: "01",
    title: "Submit Profile or Resume",
    desc: "Upload your CV. Your job search is backed by Rupa Employment Agency's 15 years of confidential NYC placement."
  },
  {
    step: "02",
    title: "Instant Competency Assessment",
    desc: "Our matching engine evaluates your skills against active executive, technical, and operational placements."
  },
  {
    step: "03",
    title: "Direct Placement Advisor",
    desc: "Pair with an experienced Rupa Agency recruiter who guides your placement in top NYC firms."
  },
  {
    step: "04",
    title: "Interview & Placement Launch",
    desc: "Receive custom interview prep tips, salary negotiation support, and seamless onboarding guidance."
  }
];

export const GUARANTEES = [
  {
    badge: "15 Years Experience",
    title: "Trusted NYC Legacy",
    desc: "Serving NYC residents and businesses with reliable job placements for over 15 years since 2005."
  },
  {
    badge: "Risk-Free Search",
    title: "90-Day Placement Warranty",
    desc: "If a hired candidate leaves within 90 days, Rupa Agency replaces them at zero additional cost — guaranteed."
  },
  {
    badge: "Speed Promise",
    title: "48-Hour Candidate Shortlist",
    desc: "Receive pre-screened, interview-ready candidates within 48 hours of submitting your spec."
  },
  {
    badge: "Strict Privacy",
    title: "100% Confidentiality Protocol",
    desc: "We protect employer stealth hiring and candidate anonymity with strict privacy standards."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Elena Rostova",
    role: "VP of Product",
    company: "Linear",
    quote: "Rupa Agency has been our most reliable hiring partner in NYC. They didn't flood our inbox with random resumes—they presented three exceptionally matched design leaders, one of whom we hired in days.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "test-2",
    name: "Marcus Thorne",
    role: "Lead Machine Learning Architect",
    company: "Stripe",
    quote: "Finding a new job can easily drain your motivation, but working with Rupa Employment Agency was seamless. Their advisors truly understood my technical background and placed me in an incredible role.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "test-3",
    name: "Sienna Brooks",
    role: "Co-Founder",
    company: "Cosmos.so",
    quote: "Rupa Agency stands out as the best reliable partner in NYC. They curated a spec-matched candidate pipeline within 48 hours. Absolute game-changers for scaling our team.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export const INITIAL_JOBS: Job[] = [
  {
    id: "job-1",
    title: "Lead Product Designer",
    department: "Creative & Design",
    location: "New York, NY / Hybrid",
    salary: "$185,000 - $220,000",
    type: "Full-Time",
    description: "Lead spatial computing UX/UI and our premium cross-platform design systems for a revolutionary developer-tooling scaleup.",
    requirements: ["5+ years experience in product design", "Proven experience with highly interactive design systems", "Proficient in Figma, prototyping, and WebGL or Spatial UX/UI"]
  },
  {
    id: "job-2",
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Hybrid",
    salary: "$210,000 - $250,000",
    type: "Full-Time",
    description: "Scale large language models (LLMs) and advanced vector search pipelines. Lead model evaluation and customized alignment techniques.",
    requirements: ["Deep understanding of LLMs, PyTorch, and Transformer architectures", "Experience with vector search (Qdrant, Pinecone) and RAG system optimization", "Strong background in Python and distributed system scalability"]
  },
  {
    id: "job-3",
    title: "Creative Director",
    department: "Executive & Creative",
    location: "London, UK / Hybrid",
    salary: "£120,000 - £150,000",
    type: "Contract-to-Hire",
    description: "Oversee global brand identity, artistic direction for photoshoots, and editorial campaign production for high-fashion clients.",
    requirements: ["Creative direction experience in editorial, fashion, or lifestyle sectors", "Deep visual storytelling, typography pairing, and concept curation expertise", "Strong leadership with active agency-side experience"]
  },
  {
    id: "job-4",
    title: "Principal Frontend Engineer",
    department: "Engineering",
    location: "NYC / Remote",
    salary: "$190,000 - $230,000",
    type: "Full-Time",
    description: "Craft highly performant, custom-engineered user interfaces with sophisticated layout loops, custom canvas rendering, and layout animations.",
    requirements: ["Expert-level React, TypeScript, and modern styling compilers (Tailwind, CSS-in-JS)", "Experience with canvas architectures (Konva, Fabric.js, WebGL) and motion layouts", "Strong eye for typography pairing, spacing grids, and negative space rhythm"]
  },
  {
    id: "job-5",
    title: "VP of Engineering",
    department: "Executive & Engineering",
    location: "New York, NY / Hybrid",
    salary: "$250,000 - $300,000",
    type: "Full-Time",
    description: "Own our technical roadmap, lead scale-to-zero container deployments, and scale an elite team of full-stack and platform engineers.",
    requirements: ["8+ years engineering experience with 3+ years in VP or Director roles", "Proven architecture scaling on GCP/AWS with container architectures", "Empathy-first leadership with a strong history of high team retention and talent development"]
  },
  {
    id: "job-6",
    title: "Lead Full-Stack Developer",
    department: "Engineering",
    location: "Remote (Global)",
    salary: "$160,000 - $195,000",
    type: "Full-Time",
    description: "Own the build pipeline, client-to-server state sync, and implement scalable API route proxy layers.",
    requirements: ["Extensive full-stack TypeScript expertise (Node.js, Express, React, Vite)", "Hands-on experience with modern ORMs and serverless deployments", "Familiarity with lazy SDK integrations, environment configuration, and robust linter setups"]
  },
  {
    id: "job-7",
    title: "Director of Brand Marketing",
    department: "Marketing",
    location: "Los Angeles, CA / Hybrid",
    salary: "$150,000 - $185,000",
    type: "Full-Time",
    description: "Own the brand strategy, editorial identity, social distribution metrics, and curated creator campaigns across cultural hubs.",
    requirements: ["Deep understanding of social-first brand marketing and modern storytelling", "Experience managing multi-channel campaign budgets and editorial output", "Highly analytical with a focus on community density and placement retention"]
  }
];
