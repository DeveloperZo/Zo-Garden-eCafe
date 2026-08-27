// src/data/quests.data.tsx

export interface Quest {
  id: number;
  titles: {
    retro: string;
    sleek: string;
  };
  company?: string;
  workTitle: string; // Shared field
  description: string;
  summary?:string;
  accomplishments: Accomplishment[];
  type: 'career' | 'hobby' | 'education' | 'independent';
  startDate: Date;
  endDate: Date;
  roles: string[];
  tags?: string[];       // New property to help with filtering and categorization
  externalLink?: string; // Optional external reference (e.g., project or company website)
}

export interface Accomplishment {
  description: string;
  role: string;       // Role in which it was achieved
  learnings: string[]; // What was learned or the 'reward' achieved
}

const quests: Quest[] = [
{
  id: 1,
  titles: {
    retro: 'The Platform Manager',
    sleek: 'Engineering Manager at Progyny',
  },
  company: 'Progyny',
  workTitle: 'Engineering Manager',
  description:
    "Led the platform services team through a ground-up rebuild of a fertility and family-building benefits platform serving roughly 6.5M members.",
  summary:
    "I led the platform-services function through a greenfield rebuild: the team, the contracts other systems build against, the standards the delivery teams work to, and the evidence behind a go or no-go. An operating model is easy to write badly from a distance, so I kept writing code and reviewing deployments the whole way through.",
  type: 'career',
  startDate: new Date('2025-05-01'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Engineering Manager'],
  tags: ['Engineering Management', 'Healthcare', 'HIPAA', 'Platform Architecture', 'API Contracts', 'Developer Tooling', 'Observability', 'AI-Assisted Development'],
  accomplishments: [
    {
      description:
        "Built and led a team of 5 across the platform's foundational capabilities: authentication and authorization, content, Salesforce integrations, and enrollment and eligibility configuration. Program scope changed repeatedly and the team stayed fully utilized through it.",
      role: 'Engineering Manager',
      learnings: [
        "Learned that a team owning capabilities instead of features can absorb a scope change without re-onboarding anybody",
      ],
    },
    {
      description:
        "Acted as primary planning partner for the rebuild, turning ambiguous program goals into epics, dependency maps and phased delivery plans across 7 teams. Teams that depended on the rebuild got committed milestones two quarters out.",
      role: 'Engineering Manager',
      learnings: [
        "Learned that dependent teams need a commitment they can plan against more than they need a date",
      ],
    },
    {
      description:
        "Owned vendor evaluation under HIPAA and the integration strategy behind it, drawing the BAA boundaries, the PHI routing rules, and the adapter contracts. The contracts kept each vendor swappable and left room to add channels.",
      role: 'Engineering Manager',
      learnings: [
        "Learned to draw the adapter boundary before looking at vendors, or the shortlist draws it for you",
      ],
    },
    {
      description:
        "Set cross-system API and data contracts for eligibility, benefits, member profiles, claims, and patient-reported outcomes. Each one settled data ownership, identifiers, persistence, authentication and failure behavior before anyone started building.",
      role: 'Engineering Manager',
      learnings: [
        "Learned that teams settle the payload and skip the failure behavior, which is where the integration defects come from",
      ],
    },
    {
      description:
        "Designed and published an end-to-end delivery and operations model for the program. Each team had been running the SDLC stages as its own process, and one documented path replaced them.",
      role: 'Engineering Manager',
      learnings: [
        "Learned that disconnected SDLC stages are an ownership problem before they are a documentation problem",
      ],
    },
    {
      description:
        "Consolidated production and non-production onto a single operator view, bringing service health, traffic, error rates and latency together instead of one console per signal.",
      role: 'Engineering Manager',
      learnings: [
        "Learned to keep a signal off the dashboard unless it changes what the on-call engineer does next",
      ],
    },
    {
      description:
        "Set how AI enters the delivery workflow and built the tooling for it. A governed repository carries work from requirement through analysis, scope and verification. A VS Code extension and CLI keep every generated change traceable and review-gated.",
      role: 'Engineering Manager',
      learnings: [
        "Learned that generated code is only reviewable when the requirement and scope stay attached to it",
        "Learned that reviewing a diff against its specification is far faster than reviewing the diff alone",
      ],
    },
    {
      description:
        "Stayed in the code by choice, writing authentication test automation and service APIs, and reviewing pull requests and deployment changes.",
      role: 'Engineering Manager',
      learnings: [
        "Learned that deployment changes hide the surprises pull request review misses",
      ],
    },
  ],
},
{
  id: 2,
  titles: {
    retro: 'Rise of the Architect',
    sleek: 'Senior Consultant & Software Architect at Inspire11',
  },
  company: 'Inspire11',
  workTitle: 'Senior Software Architect',
  description: "Set UI architecture across five product delivery teams and carried full stack architecture on one of them.",
  summary:
    "Set the UI architecture for five delivery teams and did full stack architecture on one of them, so the patterns had to hold up under a delivery load I was carrying myself. Most of the job was making the architecture something the people implementing it could actually follow. A pattern nobody can apply without asking me is not a pattern yet.",
  type: 'career',
  startDate: new Date('2024-05-01'),
  endDate: new Date('2025-05-17'),
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Architecture', 'Leadership', 'UI Design', 'Cross-Team Collaboration'],
  accomplishments: [
    {
      description:
        "Set UI architecture across 5 teams while working as the full stack architect on one of them. That team built against the same patterns I was writing for the other four.",
      role: 'Software Architect',
      learnings: [
        "Learned that friction against a pattern shows up in how teams solve problems when nobody is watching",
        "Learned that consistent design principles matter more than standardizing on specific implementations",
      ],
    },
    {
      description:
        "Built a shared UI component library with the design teams and landed it late in the project. Adopting it meant reworking what had already shipped, and the consistency it bought back was worth that.",
      role: 'Software Architect',
      learnings: [
        "Learned that component libraries still deliver value even when implemented late in project",
      ],
    },
    {
      description:
        "Turned Figma design files into technical directives and user stories the teams could build from directly.",
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        "Mentored senior developers through pair programming and standing coaching sessions. They were the ones who would carry the architecture once I was no longer in the room.",
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        "Reworked communication across teams and inside them until every team knew the strategic direction behind its work, not only its next ticket. Velocity improved once that was true.",
      role: 'Senior Consultant',
      learnings: [
        "Learned that maximizing team velocity requires teams to appropriately understand the strategic direction and implementation goal",
      ],
    },
  ],
},
{
  id: 3,
  titles: {
    retro: "The Modernizer's Quest",
    sleek: 'Senior Consultant & Software Architect at Productive Edge',
  },
  company: 'Productive Edge',
  workTitle: 'Software Architect',
  description:
    "Modernized legacy healthcare systems for consulting clients, keeping each one running while its replacement was built.",
  summary:
    "Four years of modernization work for healthcare clients. The old system had to keep running while its replacement was built, and that shaped most of the decisions. I carried scope and budget with the client alongside the architecture, which is a different job from either one on its own.",
  type: 'career',
  startDate: new Date('2020-02-01'),
  endDate: new Date('2024-05-31'),
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Legacy Modernization', 'Cloud', 'SaaS', 'Healthcare', 'Payment Processing'],
  accomplishments: [
    {
      description:
        'Led full stack modernization of a claims application under HIPAA, cutting over from the legacy system without interrupting the business running on it.',
      role: 'Software Architect',
      learnings: [
        "Learned to make decisions WITH constraints instead of against constraints",
        "Learned that compliance requirements should be considered in reusable patterns",
      ],
    },
    {
      description:
        "Converted monolithic client systems to a multi-tenant SaaS model with EHR integrations live throughout, holding tenant differences in configuration so no client got a fork.",
      role: 'Software Architect',
      learnings: [
        "Learned that tenant differences stay in configuration only while forking is impossible",
      ],
    },
    {
      description:
        "Carried project scope, budget and client expectations alongside the technical implementation. The person who defended the estimate and the person who defended the architecture were the same person.",
      role: 'Senior Consultant',
      learnings: [
        "Learned to ground stories in facts and data that the client cares about",
      ],
    },
    {
      description:
        "Delivered across .NET C#, Java Spring Boot, React, Angular, Flutter and UWP. Some of those stacks were new to me when I took architecture responsibility for them.",
      role: 'Software Architect',
      learnings: [
        "Learned to be proficient in architecting for a language I was not well-versed in",
      ],
    },
    {
      description:
        "Earned FreedomPay certification and integrated secure payment processing into client systems. The identity provider integrations underneath it were built from the ground up.",
      role: 'Software Architect',
      learnings: [
        "Learned how to build IdP integrations from the ground up",
      ],
    },
    {
      description:
        "Built standardized project scaffolding so new engagements stopped starting as a copy of whatever the team built last.",
      role: 'Software Architect',
      learnings: [
        "Learned that project templates work easier when teams build working relationships",
      ],
    },
    {
      description:
        "Diagnosed kiosk hardware faults from logs and device telemetry, without sending anyone to the site.",
      role: 'Senior Consultant',
      learnings: [
        "Learned that remote diagnosis only reaches the faults someone thought to log months earlier",
      ],
    },
  ],
},
{
  id: 4,
  titles: {
    retro: 'Leadership and Code',
    sleek: 'Team Lead / Interim Director of Engineering at Lendr',
  },
  company: 'Lendr',
  workTitle: 'Team Lead / Interim Director of Engineering',
  description:
    "Refactored a 350,000-line lending platform onto service boundaries, then ran engineering through the executive transition that followed.",
  summary:
    "Joined as team lead and left as interim director, covering the gap while the executive team changed over. The technical half was a runtime migration and a large refactor. The other half was explaining engineering to investors and a CEO who had every reason to be skeptical, then handing over a function that was still delivering.",
  type: 'career',
  startDate: new Date('2018-10-01'),
  endDate: new Date('2020-02-01'),
  roles: ['Team Lead', 'Interim Director of Engineering'],
  tags: ['Leadership', 'Engineering Transition', 'Performance Optimization', 'Technical Strategy'],
  accomplishments: [
    {
      description:
        "Migrated applications from .NET to .NET Core on day one, improving performance immediately and settling the platform question before it became a standing debate.",
      role: 'Team Lead',
      learnings: [
        "Learned that a new lead gets one decision without having to win it first, and spent mine on the runtime",
      ],
    },
    {
      description:
        "Refactored a 350,000-line business application onto service and repository boundaries. Sprint velocity had gone negative before that work and recovered after it.",
      role: 'Team Lead',
      learnings: [
        "Learned that negative velocity is a structure problem, not an effort problem",
        "Learned how to read code for intent and clarity very effectively",
      ],
    },
    {
      description:
        "Worked between engineering and the executive team through the leadership changes, translating in both directions. Neither side stalled waiting on the other.",
      role: 'Interim Director of Engineering',
      learnings: [
        "Learned how to communicate to leaders what outcomes to expect from the technical department",
      ],
    },
    {
      description:
        "Ran engineering as interim director and hit the target KPIs for the period. Handed the incoming CTO a function that was still delivering.",
      role: 'Interim Director of Engineering',
      learnings: [
        "Learned that handing over the KPIs takes an afternoon and handing over the reasoning takes the rest of the onboarding",
      ],
    },
    {
      description:
        "Established a structured UAT process that put business stakeholders in front of features before release, while they could still be changed.",
      role: 'Team Lead',
      learnings: [
        "Learned the importance of talking directly to end users",
      ],
    },
    {
      description:
        "Built regulatory requirements into the development process instead of auditing for them afterward, cutting the defects that came from retrofitting compliance onto finished work.",
      role: 'Team Lead',
      learnings: [
        "Learned that building regulatory requirements in costs a fraction of retrofitting them onto finished work",
      ],
    },
    {
      description:
        "Represented engineering to investors and the CEO through the executive transition, and defended the technical plan to both.",
      role: 'Interim Director of Engineering',
      learnings: [
        "Learned that credibility with investors rests on what you decline to promise",
      ],
    }
  ],
},
{
  id: 5,
  titles: {
    retro: "The Solo Developer's Journey",
    sleek: 'Senior Consultant at SWC Technology Partners',
  },
  company: 'SWC Technology Partners',
  workTitle: 'Senior Consultant',
  description:
    "Delivered legacy WinForms modernization solo for consulting clients, holding estimates inside a 10 percent margin.",
  summary:
    "A year of solo delivery on legacy desktop systems. It was the first engagement where I owned the estimate as well as the build, and the two turned out to be the same skill.",
  type: 'career',
  startDate: new Date('2017-10-01'),
  endDate: new Date('2018-10-01'),
  roles: ['Senior Consultant'],
  tags: ['Desktop Applications', 'UI Enhancement', 'Project Estimation'],
  accomplishments: [
    {
      description:
        "Modernized WinForms desktop applications with Kendo UI, fitting current interface expectations onto a framework never built for them.",
      role: 'Senior Consultant',
      learnings: [
        "I learned how to balance modern UI expectations with legacy application constraints",
      ],
    },
    {
      description:
        'Held project estimates within a 10 percent margin across the engagement.',
      role: 'Senior Consultant',
      learnings: [
        "Learned that estimate accuracy tracks how well I understood the requirement, not the technique",
      ],
    },
    {
      description:
        "Built and refined automation scripts the delivery schedule ran on. Tracked progress closely and raised problems while they were still cheap to fix.",
      role: 'Senior Consultant',
      learnings: [
        "Learned that raising a problem early costs credibility and raising it late costs the schedule",
      ],
    },
  ],
},
{
  id: 6,
  titles: {
    retro: "The Developer's Forge",
    sleek: 'Developer at Manor Resources',
  },
  company: 'Manor Resources',
  workTitle: 'Developer',
  description:
    "Built features and test coverage for a car loan application under close mentorship from senior developers.",
  summary:
    "A year of feature work on a car loan application, early on. The mentorship was the point of it. Senior developers read what I wrote closely, and I have not had a year since where I learned that fast.",
  type: 'career',
  startDate: new Date('2016-08-01'),
  endDate: new Date('2017-09-01'),
  roles: ['Developer'],
  tags: ['Development', 'Mentorship', 'Testing', 'Financial Applications'],
  accomplishments: [
    {
      description:
        'Built core feature components for a car loan application.',
      role: 'Developer',
      learnings: [],
    },
    {
      description:
        "Raised test coverage with AutoFixture and Moq. The release cadence became predictable enough to commit to.",
      role: 'Developer',
      learnings: [
        "Learned that well-designed test fixtures do more for coverage than more tests do",
      ],
    },
    {
      description:
        "Grew under close mentorship from senior developers. Most of the teaching happened in code review.",
      role: 'Developer',
      learnings: [
        "Learned that code review teaches what self-directed study cannot, because it arrives attached to a mistake I already made",
      ],
    },
  ],
},
{
  id: 7,
  titles: {
    retro: 'Aerospace Foundations',
    sleek: 'ITCFP Participant / Developer at The Boeing Company',
  },
  company: 'The Boeing Company',
  workTitle: 'ITCFP Participant / Developer',
  description:
    "Rotated through IT functions on a selective development program, then built C# applications automating critical financial operations.",
  summary:
    "Four years on the IT Career Foundation Program, a selective rotation through several IT functions before I settled into development work on financial operations systems.",
  type: 'career',
  startDate: new Date('2012-06-01'),
  endDate: new Date('2016-08-01'),
  roles: ['ITCFP Participant', 'Developer'],
  tags: ['IT Fundamentals', 'Development', 'Automation', 'Financial Operations'],
  accomplishments: [
    {
      description:
        "Rotated through multiple IT functions on the selective IT Career Foundation Program, and saw the same enterprise systems from inside each business unit that depended on them.",
      role: 'ITCFP Participant',
      learnings: [
        "Learned how technology choices affect different business units in distinct ways",
      ],
    },
    {
      description:
        "Built and deployed C# MVC applications that automated critical financial operations, and met the validation and audit requirements those systems carried.",
      role: 'Developer',
      learnings: [
        "Learned that enterprise scale moves the cost from writing software to maintaining it",
      ],
    },
    {
      description:
        "Improved SDLC practices on each team the rotation passed through, raising code quality and tightening how projects were run.",
      role: 'Developer',
      learnings: [],
    },
  ],
},
{
  id: 8,
  titles: {
    retro: 'The Solo Forge',
    sleek: 'Independent Projects',
  },
  company: 'Personal Project',
  workTitle: 'Independent Projects',
  description:
    "Built game and web projects independently, run as single-author codebases with written milestones and automated verification.",
  summary:
    "In my personal projects I run the same discipline I use professionally. Milestones get written with kill criteria before anything is built, verification is automated, and decisions get logged. What I have gotten out of it is mostly what the process catches early rather than what eventually ships.",
  type: 'hobby',
  startDate: new Date('2026-05-04'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Game Developer', 'Web Developer', 'Technical Writer'],
  tags: ['Unity', 'C#', 'Game Development', 'React', 'TypeScript', 'Static Site Generation', 'Technical Writing', 'Personal Project'],
  externalLink: 'https://github.com/DeveloperZo/Zo-Garden-eCafe',
  accomplishments: [
    {
      description:
        "Planned self-directed work in written milestones, and cancelled the ones that stopped being worth building.",
      role: 'Game Developer',
      learnings: [
        "Learned that cancelling a milestone is cheaper evidence than finishing one",
      ],
    },
    {
      description:
        "Kept simulation logic in an engine-independent layer so it could be tested without the engine running, and wrote serialization by hand to hold that boundary.",
      role: 'Game Developer',
      learnings: [
        "Learned that a boundary only holds when something automated enforces it",
      ],
    },
    {
      description:
        "Audited a generated front end as non-functional and rebuilt it by hand, after finding generated output impossible to review in a diff.",
      role: 'Game Developer',
      learnings: [
        "Learned that a diff on generated output is mostly noise wrapped around the one line that changed",
      ],
    },
    {
      description:
        "Built the publishing pipeline this resume is served from, wiring an application build into a static site build so a single deploy publishes both.",
      role: 'Web Developer',
      learnings: [
        "Learned to let one pipeline own the build order rather than run two and reconcile them",
      ],
    },
    {
      description:
        "Wrote and illustrated a long-form systems analysis of AI governance, then went back and dated its claims.",
      role: 'Technical Writer',
      learnings: [
        "Learned that undated claims about a fast-moving field read as current long after they stop being true",
      ],
    },
  ],
},
{
  id: 10,
  titles: {
    retro: "The Scholar's Path",
    sleek: "Education"
  },
  company: "California State University Fullerton",
  workTitle: "Bachelor of Science in Computer Science",
  description: "Concentration: Software Architecture",
  summary: "Completed undergraduate studies in Computer Science with focus on software architecture principles and practices.",
  accomplishments: [
    {
      description: "B.S. Computer Science, Concentration: Software Architecture",
      role: "Student",
      learnings: ["Software Architecture", "Computer Science"]
    }
  ],
  type: "education",
  startDate: new Date("2006-08-01"),
  endDate: new Date("2012-05-31"),
  roles: ["Student"],
  tags: ["Education", "Degree"]
},
{
  id: 11,
  titles: {
    retro: "The Portfolio Advisor's Quest",
    sleek: "Technical Consultant for a Hedge Fund Company"
  },
  company: "Independent Consulting, Enterprise Architect",
  workTitle: "Technical Consultant",
  description: "Reviewed a hedge fund company's software suite against SOLID principles and tied each finding to the KPI it was holding down.",
  summary: "The CEO of Lendr hired me directly to look at another of his companies, where technical problems were showing up in the KPIs. I had four months and no prior context, so the whole engagement came down to what could be learned from a sample rather than a full read.",
  type: "independent",
  startDate: new Date("2022-03-01"),
  endDate: new Date("2022-06-30"),
  roles: ["Technical Consultant"],
  tags: ["Code Analysis", "Technical Strategy", "Executive Advisory", "Performance Optimization"],
  accomplishments: [
    {
      description: "Reviewed the client's software suite against SOLID principles by sampling across the codebase. The structural problems that turned up were the ones surfacing as KPI misses.",
      role: "Technical Consultant",
      learnings: [
        "Learned that sampling code can effectively reveal patterns that apply to the broader codebase"
      ]
    },
    {
      description: "Produced a recommendations deck that tied each structural finding to the business KPI it was holding down.",
      role: "Technical Consultant",
      learnings: [
        "Learned that a finding framed as a KPI ceiling gets funded where the same finding framed as technical debt only gets acknowledged"
      ]
    },
    {
      description: "Presented the findings to the executive leadership team. The remediation steps were written so they could act without a technical translator in the room.",
      role: "Technical Consultant",
      learnings: [
        "Discovered my reputation for technical excellence created trust that facilitated difficult conversations"
      ]
    },
    {
      description: "Sequenced the remediation into phases. The changes that would move the KPIs came first, and the longer architectural work followed them.",
      role: "Technical Consultant",
      learnings: [
        "Learned to front-load the changes that move KPIs so the longer architectural work has room to run"
      ]
    }
  ]
},
{
  id: 12,
  titles: {
    retro: "The Patent Sequence Expedition",
    sleek: "Technical Consultant for a Biotech Patent Intelligence Startup"
  },
  company: "Independent Consulting, Director",
  workTitle: "Technical Consultant",
  description: "Set technical direction and built a patent intelligence product for biotech IP work, covering sequence search, subscription billing and tiered access.",
  summary: "The founders brought me in to set technical direction, and I stayed to build it. The product answers one question that biotech IP professionals ask over and over: given this sequence, who has filed on it, where, and when. Everything else in the product exists to make that answer trustworthy enough to pay for.",
  type: "independent",
  startDate: new Date("2024-03-01"),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ["Technical Consultant", "Full Stack Developer"],
  tags: ["Patent Intelligence", "Biotech", "Azure Functions", "React", "TypeScript", "C#", "PostgreSQL", "Python", "Technical Leadership", "DevOps"],
  accomplishments: [
    {
      description: "Established technical direction and built the search workflow the product sells. It takes a DNA or protein sequence and returns the US patents that disclose it, grouped by family, with the disclosure documents attached.",
      role: "Technical Consultant",
      learnings: [
        "Learned that grouping results by patent family changed what the tool was good for"
      ]
    },
    {
      description: "Built a React single-page application and the C# Azure Functions API behind it, both deployed through Azure Static Web Apps and Pipelines. A Python pipeline ingests the corpus the search runs against.",
      role: "Full Stack Developer",
      learnings: [
        "Learned that a CI job inheriting the deploy variable group tests against production configuration and proves nothing"
      ]
    },
    {
      description: "Designed an entitlement and quota layer that resolves the subscription plan on the server and never from a client header. Soft quotas shipped on purpose: exact counting was designed, recorded, and deferred until there were paying customers.",
      role: "Technical Consultant",
      learnings: [
        "Learned that writing down the design you are not building is what keeps deferring it a decision"
      ]
    },
    {
      description: "Reversed an in-flight migration to a managed identity provider when its cost outran the benefit, and restored the previous authentication stack from source control. Documented the intermediate state as a deliberate one.",
      role: "Technical Consultant",
      learnings: [
        "Learned that an undocumented intermediate state is debt nobody agreed to carry"
      ]
    },
    {
      description: "Consolidated two separate repositories and a scattered document set into one monorepo carrying 182 milestone records. Until then the decision history and the code it described lived in different places.",
      role: "Technical Consultant",
      learnings: [
        "Learned that decision records only stay accurate while they are cheap to update"
      ]
    }
  ]
}
];

export default quests;
