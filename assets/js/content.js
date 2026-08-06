/* ============================================================
   CONTENT.JS — all site copy lives here.
   script.js reads these objects and renders them into the page.
   Edit the text below any time — you never need to touch script.js
   or index.html to update what's on the site.
   ============================================================ */

/* ---------- HERO ---------- */
const HERO = {
  stats: [
    { number: "2028", label: "Expected Graduation" }
  ],
  status: [
    { key: "Location", val: "Wellesley, MA" },
    { key: "Status", val: "Research Assistant, CRED Lab" },
    { key: "Focus", val: "ML · Data Systems · Social Computing" },
    { key: "Open to", val: "Internships, Research Opportunities" }
  ]
};

/* ---------- ABOUT ---------- */
const ABOUT = {
  paragraphs: [
    "I'm a Computer Science student at Wellesley College, drawn to the places where people, data and systems intersect.",
    "Across my research roles I've built scraping pipelines that pulled in over 200,000 social media posts, engineered ETL workflows that cut processing time by 40%, and shipped interactive dashboards that make dense datasets legible."
  ]
};

/* ---------- PROJECTS ---------- */
const PROJECTS = {
  wikipedia: {
    tag: "Data Engineering",
    title: "Wikipedia Engagement Analytics Pipeline",
    summary: "An end-to-end pipeline processing millions of Wikipedia pageview records to analyze engagement with African-focused articles.",
    tech: ["Python", "Pandas", "DuckDB", "Streamlit", "Plotly", "REST API"],
    problem: "Wikipedia's raw pageview data (the DPDP dataset) is enormous and unstructured; which made it hard to see how  African-focused articles were actually being read and engaged with over time.\n\n",
    built: "- I engineered an end-to-end data pipeline to process the pageview records, using Pandas and DuckDB for scalable ETL workflows. Optimizing the filtering, aggregation, and query execution cut processing time by 40%.\n\n\n- I integrated external datasets (population, regional, and language metadata) to enable multi-dimensional joins across 4+ data sources and increased the richness of the combined dataset by 45%.\n\n\n- On top of that, I built an interactive Streamlit dashboard with dynamic filters and Plotly visualizations, including choropleths, heatmaps, and time-series charts, which cut the time to reach key insights by 30%.",
    insight: "Getting the ETL layer right up front is what made the analysis fast, exploratory analysis possible later.",
    github: "https://github.com/hadassahmwazemba/editor-tool-wikiproject"
  },
  climate: {
    tag: "Research",
    title: "Climate Discourse & Misinformation Analysis",
    summary: "Automated scraping pipelines collecting 200,000+ tweets from politicians across 30 African countries to study climate misinformation.",
    tech: ["Python", "SeleniumBase", "BeautifulSoup", "Pandas"],
    problem: "Studying climate misinformation and public discourse at scale requires large amounts of social media data from public figures. This data isn't readily available in structured form and is easy to lose to rate limits, layout changes, or inconsistent formatting.",
    built: "- As a Research Assistant on Wellesley's Sophomore Early Research Program, I developed and deployed automated scraping pipelines with SeleniumBase to collect over 200,000 tweets from politicians across 30 African countries, enabling large-scale analysis of climate change misinformation and public discourse.\n\n- I designed end-to-end data processing workflows using Python, BeautifulSoup, and Pandas to extract, clean, and structure the social media metadata for downstream analysis.\n\n- I also optimized scraper reliability with human-like sleep logic, retry-with-backoff algorithms, and automated error handling, which increased the data-capture success rate by 35%.",
    insight: "Reliable large-scale scraping is as much about resilience engineering and I learnt more about backoff logic, error handling, pacing, as well as digital scraping logic itself."
  },
  politician: {
    tag: "Research",
    title: "Political Influencer Communication Analysis",
    summary: "Analyzing 513,000+ posts from 91 political influencers on X and Instagram to study cross-platform political communication.",
    tech: ["Python", "Web Scraping", "Pandas", "LLM Classification", "Data Analysis"],
    problem: "Comparing how political influencers communicate across ideology and platform requires large volumes of post data and a way to classify content at a scale no human coder could keep up with alone.",
    built: "- As a Research Assistant with the Science Center Summer Research program, I built automated Python web-scraping pipelines to collect and analyze more than 513,000 posts from 91 political influencers across X and Instagram.\n\n- I conducted quantitative analyses of engagement, posting behavior, and audience interactions, comparing right- and left-wing influencers across platforms through Python-based data analysis and visualization.\n\n- I also integrated LLM-assisted content classification with qualitative coding to categorize political content and identify thematic and linguistic differences across political ideologies.",
    insight: "Pairing LLM-assisted classification with qualitative coding made the ideology comparison possible. It let us tag content consistently at a scale manual coding alone couldn't reach.",
    poster: "assets/politician-research-poster.png"
  }
};

/* ---------- WORK EXPERIENCE ---------- */
const WORK_EXPERIENCE = [
    {
    num: "01",
    date: "May 2026 - Present",
    org: "Break Through Tech AI",
    role: "AI & ML Fellow",
    desc: "Selected from 3,000+ applicants for a year-long AI/ML fellowship; applying Python and machine learning libraries to develop, evaluate, and improve predictive and classification models through hands-on technical projects."
  },
  {
    num: "02",
    date: "Feb 2026 – May 2026",
    org: "Dept. of Religious Studies, Wellesley College",
    role: "Research Fellow",
    desc: "Conducted archival research and prepared annotated bibliographies from Wellesley's Archives & Special Collections to support faculty research on the college's religious history."
  },
  {
    num: "03",
    date: "Jan 2025 – Present",
    org: "CRED Lab, Wellesley College",
    role: "Research Assistant",
    desc: "Built a Matplotlib data-visualization program analyzing email behavior from 100+ students for Love Data Week, and studied credibility patterns across Instagram and TikTok."
  },
  {
    num: "04",
    date: "Jun 2025 – Aug 2025",
    org: "Digital Heritage Mapping (Diarna)",
    role: "Summer Intern",
    desc: "Mapped and verified 4 Jewish heritage sites in Uganda through geospatial and archival analysis, and ran QA across ~500 links, improving accuracy and reliability by 15–18%."
  },
  {
    num: "05",
    date: "Jan 2025 – May 2025",
    org: "LING 244, Wellesley College",
    role: "Language Consultant",
    desc: "Supplied native-level Swahili and Taita linguistic data for a 14-student syntax and semantics seminar, contributing to 6 student research projects."
  },
  {
    num: "06",
    date: "Dec 2024 – Present",
    org: "Wellesley College Digital Repository",
    role: "Digital Data Collections Aide",
    desc: "Digitized archival materials with high-resolution imaging and applied metadata tagging that improved collection discoverability by 12%."
  },
  {
    num: "07",
    date: "Jan 2024 – Jun 2024",
    org: "Mutui Cyber Cafe, Nairobi, Kenya",
    role: "Cafe Assistant",
    desc: "Provided daily tech support to ~45 customers, troubleshooting software and assisting with printing and internet services."
  },
  {
    num: "08",
    date: "Sep 2023 – Dec 2023",
    org: "Waridi Wholesale, Voi, Kenya",
    role: "Wholesale Intern",
    desc: "Processed customer transactions via M-PESA and digitized stock records into Microsoft Access for streamlined inventory management."
  },
  {
    num: "09",
    date: "Feb 2023 – Aug 2023",
    org: "Kamiti Secondary School, Nairobi, Kenya",
    role: "Volunteer Teacher",
    desc: "Taught Computer Studies and Kiswahili to 45 students and led a revision program that improved exam performance by 15%."
  },
  {
    num: "10",
    date: "Dec 2022",
    org: "Hadithi Weavers Organization, Nairobi, Kenya",
    role: "Events Chair",
    desc: "Organized weaving sessions connecting local artisans with tourists and led a fundraiser that raised $750 for weaving tools."
  }
];

/* Skills */
const SKILLS = [
  {
    label: "Languages",
    pills: ["Python", "Java", "SQL", "HTML/CSS", "C++", "SQL"]
  },
  {
    label: "Frameworks & Tools",
    pills: ["Streamlit", "SeleniumBase", "BeautifulSoup", "Git/GitHub", "Jupyter Notebooks", "DuckDB", "Flask", "REST APIs"]
  },
  {
    label: "Libraries & Data Tools",
    pills: ["Pandas", "NumPy", "Matplotlib", "Plotly", "JSON", "Web Scraping"]
  },
  {
    label: "Languages Spoken",
    pills: ["English", "Swahili", "Taita"]
  }
];

/* Contact */
const CONTACT = {
  heading: "Let's Connect",
  sub: "Open to internship opportunities, research collaborations, and interesting data problems.",
  press: {
    text: "Currently:",
    url: "https://www.wellesley.edu/",
    label: "Research Assistant @ Wellesley CRED Lab"
  },
  links: [
    { href: "mailto:hm109@wellesley.edu", label: "hm109@wellesley.edu", style: "primary" },
    { href: "https://www.linkedin.com/in/hadassah-mwazemba", label: "LinkedIn ↗", style: "outline", target: "_blank" },
    { href: "https://github.com/hadassahmwazemba", label: "GitHub ↗", style: "outline", target: "_blank" }
  ]
};


/* Updates*/
const UPDATES = [
  { date: "Dec 2025", text: "Wrapped the Wikipedia Engagement Analytics Pipeline project.", tag: "Project" },
  { date: "Sep 2025", text: "Started as a Research Assistant with Wellesley's Sophomore Early Research Program.", tag: "Research" },
  { date: "Jan 2025", text: "Joined the CRED Lab as a Research Assistant.", tag: "Research" },
  { date: "Aug 2025", text: "Wrapped a summer internship in Digital Heritage Mapping with Diarna.", tag: "Internship" }
];

