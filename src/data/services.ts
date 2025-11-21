export const servicesData: Record<
    string,
    {
        title: string;
        overview: string;
        description: string;
        features: string[];
        tools: string[];
        timeline: string;
        support: string;
        growth: string[];
        pricing: {
            title: string;
            price: string;
            description: string;
        }[];
    }
> = {
    "ai-website-building": {
        title: "AI-Based Website Building & Hosting",
        overview: "Responsive, SEO-optimized, AI-powered websites hosted on enterprise-grade servers.",
        description:
            "Our AI-Based Website Building & Hosting service uses AI-assisted design, automated SEO, and cloud hosting to deliver high-performance websites that convert and scale.",
        features: [
            "AI-powered UI/UX design",
            "Fully responsive layouts",
            "SEO automation",
            "SSL + CDN setup",
            "Enterprise hosting",
            "Automated backups",
            "Real-time analytics integration",
            "Performance optimization",
        ],
        tools: ["Next.js", "TailwindCSS", "Vercel / AWS", "SEO Tools", "AI Content Tools"],
        timeline: "2–4 weeks",
        support: "6 months free support + maintenance",
        growth: [
            "E-commerce store integration",
            "PWA support",
            "Custom dashboard",
            "Multi-language website",
            "CRM integration",
        ],
        pricing: [
            {
                title: "Starter",
                price: "$299",
                description: "Basic AI website, 3–4 pages, hosting included.",
            },
            {
                title: "Business",
                price: "$599",
                description: "Full website, SEO, analytics, automations.",
            },
            {
                title: "Premium",
                price: "$999",
                description: "E-commerce + advanced AI features.",
            },
        ],
    },

    "mobile-app-development": {
        title: "Mobile App Development",
        overview: "Cross-platform iOS & Android apps with fast performance and modern UI.",
        description:
            "We build high-performance mobile apps using React Native and AI-driven automation. Perfect for startups, SaaS products, and enterprise apps.",
        features: [
            "Cross-platform iOS + Android",
            "AI automations & chatbots",
            "Push notifications",
            "API Integration",
            "Custom dashboards",
            "App Store + Play Store deployment",
        ],
        tools: ["React Native", "Expo", "Firebase", "Node.js", "AI Modules"],
        timeline: "4–8 weeks",
        support: "3–6 months free updates",
        growth: ["AI chat integration", "Admin panel", "Analytics dashboards", "User segmentation"],
        pricing: [
            { title: "Starter", price: "$499", description: "Simple UI app up to 5 screens." },
            { title: "Business", price: "$999", description: "API-connected app with dashboards." },
            { title: "Premium", price: "$1999", description: "Full-scale production mobile app." },
        ],
    },

    "custom-software": {
        title: "Custom Software Development",
        overview: "Tailored software solutions designed for your exact business workflow.",
        description:
            "From internal tools to large SaaS platforms, we develop scalable custom software using modern architectures.",
        features: [
            "Custom dashboard development",
            "API automation",
            "Database design",
            "AI process optimization",
            "Multi-role user system",
        ],
        tools: ["React", "Node.js", "Next.js", "AWS", "PostgreSQL"],
        timeline: "3–10 weeks depending on complexity",
        support: "1-year maintenance available",
        growth: ["SaaS scaling", "AI automation", "Mobile app version", "Payment integrations"],
        pricing: [
            { title: "Basic", price: "$799", description: "Small custom tool or admin panel." },
            { title: "Business", price: "$1499", description: "Full internal system with automation." },
            { title: "Enterprise", price: "$2999", description: "Large SaaS-grade solution." },
        ],
    },

    "saas-platforms": {
        title: "SaaS Platform Development",
        overview: "End-to-end SaaS development with secure authentication, billing, automation, and scalability.",
        description:
            "We design and build complete SaaS products with multi-tenant architecture, subscription systems, admin dashboards, analytics, and scalable cloud infrastructure.",
        features: [
            "Subscription & billing integration",
            "Role-based user system",
            "Admin + customer dashboards",
            "Email automation",
            "Real-time analytics",
            "Secure multi-tenant setup"
        ],
        tools: ["Next.js", "Node.js", "Stripe", "AWS", "PostgreSQL"],
        timeline: "4–12 weeks",
        support: "1 year of updates & performance support",
        growth: [
            "Mobile app integration",
            "AI automation features",
            "Advanced analytics",
            "White-label version"
        ],
        pricing: [
            { title: "Starter", price: "$999", description: "Basic SaaS MVP with login + dashboard." },
            { title: "Growth", price: "$1999", description: "Subscriptions + workflows + automation." },
            { title: "Enterprise", price: "$3999", description: "Full SaaS system ready for scale." }
        ]
    },

    "performance-marketing": {
        title: "Performance Marketing",
        overview: "ROI-focused ad campaigns across Google, Meta, and modern ad platforms.",
        description:
            "We run high-conversion ad campaigns backed by data, analytics, and AI-driven optimization to maximize ROI and reduce acquisition cost.",
        features: [
            "Google + Meta Ads",
            "Conversion tracking setup",
            "A/B testing campaigns",
            "Ad creatives + copies",
            "Audience segmentation",
            "Weekly performance reports"
        ],
        tools: ["Google Ads", "Meta Ads", "Analytics", "AI Ad Tools"],
        timeline: "Ongoing monthly service",
        support: "Full funnel monitoring + weekly reporting",
        growth: [
            "Scaling ad spend",
            "Multi-channel expansion",
            "Automated retargeting",
            "Landing page optimization"
        ],
        pricing: [
            { title: "Starter", price: "$199/mo", description: "Basic ad setup + monthly optimization." },
            { title: "Growth", price: "$399/mo", description: "Multiple campaigns + retargeting." },
            { title: "Performance Max", price: "$799/mo", description: "Full strategy + automation setup." }
        ]
    },

    "email-marketing": {
        title: "AI Email Marketing",
        overview: "Automated email workflows powered by AI personalization and segmentation.",
        description:
            "We build complete email automation systems with dynamic flows, smart segmentation, AI-written content, and deep analytics for better conversions.",
        features: [
            "Automated email sequences",
            "Personalized AI content",
            "Segmentation & targeting",
            "A/B testing",
            "Template design",
            "Deliverability optimization"
        ],
        tools: ["Mailchimp", "SendGrid", "HubSpot", "AI Writing Tools"],
        timeline: "1–3 weeks setup",
        support: "Ongoing optimization available",
        growth: [
            "Advanced workflows",
            "Behavior-triggered emails",
            "CRM integration",
            "Lead scoring automation"
        ],
        pricing: [
            { title: "Starter", price: "$149", description: "Basic automation + 3 workflows." },
            { title: "Business", price: "$299", description: "Full email funnels + segmentation." },
            { title: "Premium", price: "$499", description: "Advanced workflows + analytics + AI." }
        ]
    },

    "social-media": {
        title: "Social Media AI Optimization",
        overview: "AI-driven content planning, posting, analytics, and growth strategy.",
        description:
            "We use AI tools to optimize your content schedule, improve engagement, track performance, and generate high-converting posts for all major platforms.",
        features: [
            "AI content planning",
            "Trending topic detection",
            "Engagement analytics",
            "Cross-platform scheduling",
            "AI-driven hashtag optimization",
            "Post performance predictions"
        ],
        tools: ["Buffer", "Notion AI", "ChatGPT", "Social Analytics Tools"],
        timeline: "Monthly subscription",
        support: "Daily monitoring + weekly analytics",
        growth: [
            "Reels + shorts automation",
            "Brand voice modeling",
            "Influencer collaboration flows",
            "Paid ads integration"
        ],
        pricing: [
            { title: "Starter", price: "$199/mo", description: "Content planning + weekly posting." },
            { title: "Growth", price: "$349/mo", description: "Daily posts + analytics." },
            { title: "Premium", price: "$649/mo", description: "Full AI automation + advanced strategy." }
        ]
    },

    "content-automation": {
        title: "AI Content Automation",
        overview: "Automated content creation for blogs, ads, social media, and SEO.",
        description:
            "We create AI-powered systems that generate optimized content at scale — saving time while improving consistency and quality.",
        features: [
            "AI blog generation",
            "SEO keyword automation",
            "Social media content creation",
            "Script generation",
            "Bulk content workflows",
            "Brand tone consistency"
        ],
        tools: ["ChatGPT", "Jasper", "SurferSEO", "Notion AI"],
        timeline: "1–2 weeks setup",
        support: "Monthly optimization available",
        growth: [
            "Automated SEO clusters",
            "Full publishing automation",
            "Multi-language content",
            "Topic research AI"
        ],
        pricing: [
            { title: "Starter", price: "$199", description: "Basic content automation setup." },
            { title: "Business", price: "$349", description: "SEO + blog + social automation." },
            { title: "Premium", price: "$599", description: "Full content engine + AI workflows." }
        ]
    },

    "crm-setup": {
        title: "CRM Setup & Integration",
        overview: "Complete CRM integration with automated pipelines, workflows, and lead tracking.",
        description:
            "We configure CRM platforms with custom pipelines, automation rules, email workflows, and analytics dashboards for sales teams.",
        features: [
            "Pipelines setup",
            "Lead management",
            "Task & workflow automation",
            "Email sequence integration",
            "Dashboard & reporting",
            "API-based CRM syncing"
        ],
        tools: ["HubSpot", "Zoho", "Pipedrive", "Zapier"],
        timeline: "1–3 weeks",
        support: "3 months automation support",
        growth: [
            "Lead scoring AI",
            "WhatsApp automation",
            "Multi-source lead capture",
            "Sales forecasting"
        ],
        pricing: [
            { title: "Starter", price: "$149", description: "Basic CRM setup + 1 pipeline." },
            { title: "Business", price: "$299", description: "Full CRM setup + automation." },
            { title: "Premium", price: "$499", description: "End-to-end CRM system + reporting." }
        ]
    },

    "workflow-automation": {
        title: "Workflow Automation",
        overview: "Automate repetitive business processes using AI and API-powered workflows.",
        description:
            "We automate manual tasks using custom workflows, triggers, bots, and API integrations to save time and increase efficiency.",
        features: [
            "Automated triggers",
            "Email + WhatsApp automation",
            "CRM + app integrations",
            "Lead routing",
            "Task scheduling",
            "AI-based workflow decisions"
        ],
        tools: ["Zapier", "Make.com", "Node.js", "Webhooks", "AI APIs"],
        timeline: "1–2 weeks",
        support: "90-day optimization",
        growth: [
            "Full business automation",
            "Chatbot integration",
            "AI decision engines",
            "Custom API workflows"
        ],
        pricing: [
            { title: "Starter", price: "$129", description: "Basic automation with 2–3 workflows." },
            { title: "Business", price: "$249", description: "Advanced automation + multiple apps." },
            { title: "Premium", price: "$499", description: "Complex workflows + analytics." }
        ]
    },

    "chatbots": {
        title: "Chatbots & Virtual Assistants",
        overview: "AI chatbots that automate customer support, lead generation, and onboarding.",
        description:
            "We build custom AI chatbots with natural language understanding, CRM integration, and automated workflows for support, sales, and onboarding.",
        features: [
            "24/7 AI assistant",
            "Human-like replies",
            "WhatsApp + Website integration",
            "Lead capture",
            "Knowledgebase connection",
            "Custom workflows"
        ],
        tools: ["OpenAI", "Botpress", "Dialogflow", "Custom APIs"],
        timeline: "1–3 weeks",
        support: "6 months free updates",
        growth: [
            "AI voice bot",
            "CRM deep integration",
            "Advanced analytics",
            "Custom training dataset"
        ],
        pricing: [
            { title: "Starter", price: "$199", description: "Basic website chatbot." },
            { title: "Business", price: "$399", description: "AI chatbot + CRM + workflows." },
            { title: "Premium", price: "$799", description: "Advanced multi-platform AI assistant." }
        ]
    },

    "lead-scoring": {
        title: "Lead Scoring AI",
        overview: "AI models that score and rank leads based on behavior, data, and conversion probability.",
        description:
            "We build smart systems that automatically qualify leads using behavior tracking, segmentation, and predictive scoring to improve sales efficiency.",
        features: [
            "Predictive scoring model",
            "User behavior tracking",
            "CRM integration",
            "Segmentation & intent analysis",
            "Real-time lead updates",
            "Sales automation triggers"
        ],
        tools: ["Python", "OpenAI", "Node.js", "HubSpot"],
        timeline: "2–4 weeks",
        support: "3 months optimization",
        growth: [
            "AI forecasting",
            "Full sales automation",
            "Cross-platform lead sync",
            "Performance analytics"
        ],
        pricing: [
            { title: "Starter", price: "$199", description: "Basic scoring model + CRM sync." },
            { title: "Business", price: "$399", description: "Advanced scoring + behavior tracking." },
            { title: "Premium", price: "$699", description: "Full AI prediction + automation suite." }
        ]
    },

    "monitoring": {
        title: "Monitoring & Performance Tracking",
        overview: "24/7 uptime, performance, and error monitoring for websites and apps.",
        description:
            "We monitor your systems for downtime, performance drops, security issues, and server errors — ensuring your app runs smoothly.",
        features: [
            "24/7 uptime monitoring",
            "API health checks",
            "Error tracking",
            "Performance reports",
            "Real-time alerts",
            "Security issue detection"
        ],
        tools: ["UptimeRobot", "Sentry", "AWS CloudWatch", "Custom scripts"],
        timeline: "Setup in 1–2 days",
        support: "24/7 monitoring + weekly reports",
        growth: [
            "Advanced DevOps alerts",
            "AI anomaly detection",
            "Auto-scaling",
            "Predictive monitoring"
        ],
        pricing: [
            { title: "Starter", price: "$49/mo", description: "Basic uptime monitoring." },
            { title: "Business", price: "$99/mo", description: "Errors + performance tracking." },
            { title: "Premium", price: "$199/mo", description: "Full monitoring + security checks." }
        ]
    },

    "cloud-hosting": {
        title: "Cloud Hosting & Deployment",
        overview: "Fast, secure, and scalable cloud hosting with global CDN and 99.9% uptime.",
        description:
            "We deploy and manage your apps on enterprise-grade cloud platforms with backups, monitoring, and performance optimization.",
        features: [
            "CDN + caching",
            "Automatic backups",
            "DDOS protection",
            "Server optimization",
            "SSL setup",
            "Zero-downtime deployment"
        ],
        tools: ["AWS", "Vercel", "DigitalOcean", "Cloudflare"],
        timeline: "1–3 days",
        support: "24/7 cloud support",
        growth: [
            "Auto-scaling servers",
            "Load balancing",
            "Multi-region deployment",
            "Disaster recovery"
        ],
        pricing: [
            { title: "Starter", price: "$99", description: "Basic hosting + setup." },
            { title: "Business", price: "$199", description: "Full deployment + monitoring." },
            { title: "Premium", price: "$399", description: "High-scale cloud architecture." }
        ]
    },

    "security-audits": {
        title: "Security Audits & Hardening",
        overview: "Comprehensive security scanning & patching for websites, apps, and cloud systems.",
        description:
            "We analyze your systems for vulnerabilities, misconfigurations, and threats, then apply fixes, patches, and security improvements.",
        features: [
            "Full vulnerability scanning",
            "API security testing",
            "Penetration testing",
            "Code security checks",
            "Server hardening",
            "Compliance checks"
        ],
        tools: ["OWASP Tools", "BurpSuite", "Snyk", "Cloud Security Tools"],
        timeline: "1–3 weeks",
        support: "3 months security monitoring",
        growth: [
            "Security automation",
            "Zero-trust architecture",
            "Continuous scanning",
            "Disaster recovery setup"
        ],
        pricing: [
            { title: "Starter", price: "$149", description: "Basic website vulnerability scan." },
            { title: "Business", price: "$349", description: "Full audit + patching." },
            { title: "Premium", price: "$699", description: "Enterprise-grade security setup." }
        ]
    },

    "tech-support": {
        title: "Technical Support & Maintenance",
        overview: "Reliable technical support for websites, apps, servers, and automations.",
        description:
            "We provide ongoing tech support, bug fixing, updates, and performance improvements for any system you run.",
        features: [
            "Bug fixing",
            "24/7 support available",
            "Performance improvements",
            "Regular maintenance",
            "API debugging",
            "Server monitoring"
        ],
        tools: ["Ticket System", "Monitoring Tools", "CI/CD Tools"],
        timeline: "Instant start",
        support: "Monthly or yearly support plans",
        growth: [
            "Dedicated support engineer",
            "Priority support",
            "Advanced DevOps support",
            "Automation monitoring"
        ],
        pricing: [
            { title: "Starter", price: "$49/mo", description: "Basic support & updates." },
            { title: "Business", price: "$99/mo", description: "Full maintenance + fixes." },
            { title: "Premium", price: "$199/mo", description: "24/7 support + monitoring." }
        ]
    },

    // Add more categories exactly like this for all services you need...
};
