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
    sleek: 'Manager, Experience Platform at Progyny',
  },
  company: 'Progyny',
  workTitle: 'Manager, Experience Platform',
  description:
    "Built a team of 5 to deliver a rebuild of a platform that covers 6.5M lives",
  summary:
    "I managed a team of 5 through a greenfield healthcare rebuild covering 6.5M lives. The rest of the product needed the function as a real dependency, not as a workstream that finished last.",
  type: 'career',
  startDate: new Date('2025-05-01'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Manager, Experience Platform'],
  tags: ['Engineering Management', 'Healthcare', 'Platform Architecture', 'API Contracts', 'Developer Tooling', 'AI-Assisted Development', 'FHIR'],
  accomplishments: [
    {
      description:
        "Managed a team of 5 on a healthcare initiative covering 6.5M lives and set the API and data contracts 7 other teams implemented against, including data ownership and failure behavior.",
      role: 'Manager, Experience Platform',
      learnings: [
        "Learned that teams settle the payload and skip the failure behavior, which is where the integration defects come from",
      ],
    },
    {
      description:
        "Established processes for how the platform services team delivered and operated, from accepted work through production support, across major and minor releases.",
      role: 'Manager, Experience Platform',
      learnings: [
        "Learned that disconnected SDLC stages are an ownership problem before they are a documentation problem",
      ],
    },
    {
      description:
        "Created a shared delivery workbench the team used to plan and execute over 80% of the work across 3 quarters, keeping analysis and implementation evidence in one place.",
      role: 'Manager, Experience Platform',
      learnings: [],
    },
    {
      description:
        "Created a VS Code extension and CLI that kept AI-generated changes behind a specification and a human approval, used by 10 developers.",
      role: 'Manager, Experience Platform',
      learnings: [
        "Learned that generated code is only reviewable when the requirement and scope stay attached to it",
        "Learned that reviewing a diff against its specification is far faster than reviewing the diff alone",
      ],
    },
    {
      description:
        "Mentored and trained developers on leveraging AI-assisted work to enhance the SDLC.",
      role: 'Manager, Experience Platform',
      learnings: [],
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
  description: "Set UI architecture for five delivery teams and full stack architecture for one",
  summary:
    "I set UI architecture across the delivery program and carried full stack work on one team. The architecture had to survive a delivery load I was on the hook for myself.",
  type: 'career',
  startDate: new Date('2024-05-01'),
  endDate: new Date('2025-05-17'),
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Architecture', 'Leadership', 'UI Design', 'Cross-Team Collaboration'],
  accomplishments: [
    {
      description:
        "Developed UI architecture for 5 delivery teams while carrying full stack architecture responsibility.",
      role: 'Software Architect',
      learnings: [
        "Learned that friction against a pattern shows up in how teams solve problems when nobody is watching",
      ],
    },
    {
      description:
        "Built a shared UI component library of 20+ components with the design teams and landed it late in the project.",
      role: 'Software Architect',
      learnings: [],
    },
    {
      description:
        "Turned Figma designs into multiple technical directives and user stories the teams built from directly.",
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        "Mentored 10+ senior developers on the architecture and on how the teams delivered against it.",
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        "Maintained clear communication across Program Leadership over 6 months to reduce gaps and delays in delivery.",
      role: 'Senior Consultant',
      learnings: [],
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
    "Modernized legacy healthcare systems for clients while keeping each one running",
  summary:
    "Four years of modernization work for healthcare clients. The old system had to keep running while its replacement was built, and that shaped most of the decisions. I carried scope and budget with the client alongside the architecture.",
  type: 'career',
  startDate: new Date('2020-02-01'),
  endDate: new Date('2024-05-31'),
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Legacy Modernization', 'Cloud', 'SaaS', 'Healthcare', 'Payment Processing'],
  accomplishments: [
    {
      description:
        "Led full stack modernization of a claims application under HIPAA, cutting over from the legacy system without interrupting the business running on it, covering [Placeholder] lives.",
      role: 'Software Architect',
      learnings: [
        "Learned to make decisions WITH constraints instead of against constraints",
        "Learned that compliance requirements should be considered in reusable patterns",
      ],
    },
    {
      description:
        "Converted over a dozen monolithic client systems to various modern configurations.",
      role: 'Software Architect',
      learnings: [],
    },
    {
      description:
        "Reviewed and approved project scope and budget while managing client expectations alongside the technical implementation.",
      role: 'Senior Consultant',
      learnings: [
        "Learned to ground stories in facts and data that the client cares about",
      ],
    },
    {
      description:
        "Took architecture responsibility across multiple stacks, including ones I had not shipped in before.",
      role: 'Software Architect',
      learnings: [
        "Learned to be proficient in architecting for a language I was not well-versed in",
      ],
    },
    {
      description:
        "Earned a payment-processor certification and integrated secure payments into client systems, building the identity-provider integrations underneath from scratch.",
      role: 'Software Architect',
      learnings: [
        "Learned how to build IdP integrations from the ground up",
      ],
    },
    {
      description:
        "Built standardized project scaffolding so new engagements started from a shared baseline.",
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
    "Refactored entire lending platform prior to leading engineering through executive transition",
  summary:
    "Joined as team lead and covered the gap while the executive team changed over. The technical half was a runtime migration and a large refactor. The other half was representing engineering to investors and the CEO, then handing the function to the incoming CTO.",
  type: 'career',
  startDate: new Date('2018-10-01'),
  endDate: new Date('2020-02-01'),
  roles: ['Team Lead', 'Interim Director of Engineering'],
  tags: ['Leadership', 'Engineering Transition', 'Performance Optimization', 'Technical Strategy'],
  accomplishments: [
    {
      description:
        "Refactored a 350k line business application onto service and repository boundaries reversing a negative sprint velocity.",
      role: 'Team Lead',
      learnings: [
        "Learned that negative velocity is a structure problem, not an effort problem",
        "Learned how to read code for intent and clarity very effectively",
      ],
    },
    {
      description:
        "Ran engineering as interim director, interviewed and transitioned the incoming CTO.",
      role: 'Interim Director of Engineering',
      learnings: [
        "Learned that handing over the KPIs takes an afternoon and handing over the reasoning takes the rest of the onboarding",
      ],
    },
    {
      description:
        "Migrated applications from .NET to .NET Core on day one and executed multiple production deployments in month one",
      role: 'Team Lead',
      learnings: [
        "Learned that a new lead gets one decision without having to win it first, and spent mine on the runtime",
      ],
    },
    {
      description:
        "Established a structured UAT process that put business stakeholders in front of features before release.",
      role: 'Team Lead',
      learnings: [
        "Learned the importance of talking directly to end users",
      ],
    },
    {
      description:
        "Built regulatory requirements into the development process instead of auditing for them afterward.",
      role: 'Team Lead',
      learnings: [
        "Learned that building regulatory requirements in costs a fraction of retrofitting them onto finished work",
      ],
    },
    {
      description:
        "Represented engineering to investors and the CEO through the executive transition.",
      role: 'Interim Director of Engineering',
      learnings: [
        "Learned that credibility with investors rests on what you decline to promise",
      ],
    },
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
    "Delivered legacy WinForms modernization solo, holding estimates inside 10 percent",
  summary:
    "A year of solo delivery on legacy desktop systems. It was the first engagement where I owned the estimate as well as the build.",
  type: 'career',
  startDate: new Date('2017-10-01'),
  endDate: new Date('2018-10-01'),
  roles: ['Senior Consultant'],
  tags: ['Desktop Applications', 'UI Enhancement', 'Project Estimation'],
  accomplishments: [
    {
      description:
        "Held project estimates within a 10 percent margin across the engagement.",
      role: 'Senior Consultant',
      learnings: [
        "Learned that estimate accuracy tracks how well I understood the requirement, not the technique",
      ],
    },
{
      description:
        "Modernized WinForms desktop applications with Kendo UI, fitting current interfaces onto a framework not built for them.",
      role: 'Senior Consultant',
      learnings: [
        "I learned how to balance modern UI expectations with legacy application constraints",
      ],
    },
{
      description:
        "Built and refined automation scripts the delivery schedule ran on and raised problems early.",
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
    "Built features and test coverage for car loan application under senior mentorship",
  summary:
    "A year of feature work on a car loan application, early on. Senior developers read what I wrote closely, and most of the teaching happened in code review.",
  type: 'career',
  startDate: new Date('2016-08-01'),
  endDate: new Date('2017-09-01'),
  roles: ['Developer'],
  tags: ['Development', 'Mentorship', 'Testing', 'Financial Applications'],
  accomplishments: [
    {
      description:
        "Built core feature components for a car loan application under senior mentorship.",
      role: 'Developer',
      learnings: [],
    },
    {
      description:
        "Raised test coverage with AutoFixture and Moq.",
      role: 'Developer',
      learnings: [
        "Learned that well-designed test fixtures do more for coverage than more tests do",
      ],
    },
    {
      description:
        "Worked under senior-developer mentorship delivered in code review.",
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
    "Rotated through IT functions on selective program, then built C# applications for financial operations",
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
        "Rotated through multiple IT functions on the selective IT Career Foundation Program, then built C# applications for financial operations.",
      role: 'ITCFP Participant',
      learnings: [
        "Learned how technology choices affect different business units in distinct ways",
      ],
    },
    {
      description:
        "Built and deployed C# MVC applications that automated financial operations and met the validation and audit requirements those systems carried.",
      role: 'Developer',
      learnings: [
        "Learned that enterprise scale moves the cost from writing software to maintaining it",
      ],
    },
    {
      description:
        "Improved SDLC practices on each team the rotation passed through.",
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
    "Directed AI through two functional Unity games",
  summary:
    "Solo direction of two Unity games.",
  type: 'hobby',
  startDate: new Date('2025-04-29'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Game Developer'],
  tags: ['Unity', 'C#', 'Game Development', 'Software Architecture', 'AI-Assisted Development', 'Personal Project'],
  accomplishments: [
    {
      description:
        "Checked in nearly 500 commits across two Unity games: a playable tactical puzzle I stopped after a market analysis, and a wave-defense FPS still in progress.",
      role: 'Game Developer',
      learnings: [
        "Learned that writing the market analysis was the decision, not a document that preceded one",
      ],
    },
    {
      description:
        "Specified the architecture and put the constraints in the build, so AI-written code failed automatically when it crossed a boundary.",
      role: 'Game Developer',
      learnings: [
        "Learned that a rule a person has to remember to run documents violations rather than preventing them",
      ],
    },
    {
      description:
        "Used AI to write the implementation of over 600 C# files I reviewed and gated through play test or audit findings.",
      role: 'Game Developer',
      learnings: [
        "Learned to write the failure back into the next session's rules",
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
    sleek: "Principal Technologist for a Hedge Fund Company"
  },
  company: "Independent Consulting, Enterprise Architect",
  workTitle: "Principal Technologist",
  description: "Assessed a hedge fund software suite over a four-month engagement",
  summary: "The CEO of Lendr hired me directly to look at another of his companies, where technical problems were showing up in the KPIs. I had four months and no prior context, so the whole engagement came down to what could be learned from a sample rather than a full read.",
  type: "independent",
  startDate: new Date("2022-03-01"),
  endDate: new Date("2022-06-30"),
  roles: ["Principal Technologist"],
  tags: ["Code Analysis", "Technical Strategy", "Executive Advisory", "Performance Optimization"],
  accomplishments: [
    {
      description: "Sampled the hedge fund software suite against SOLID and tied each structural finding to a KPI miss.",
      role: "Principal Technologist",
      learnings: [
        "Learned that sampling code can effectively reveal patterns that apply to the broader codebase"
      ]
    },
    {
      description: "Delivered a recommendations deck to the executive team with phased remediation, KPI-moving changes first.",
      role: "Principal Technologist",
      learnings: [
        "Learned that a finding framed as a KPI ceiling gets funded where the same finding framed as technical debt only gets acknowledged"
      ]
    }
  ]
},
{
  id: 12,
  titles: {
    retro: "The Patent Sequence Expedition",
    sleek: "Principal Technologist for a Biotech Patent Intelligence Startup"
  },
  company: "Independent Consulting, Principal Technologist",
  workTitle: "Principal Technologist",
  description: "Built the product full stack and advised founders on technical direction",
  summary: "The founders brought me in for direction. I stayed and built the application.",
  type: "independent",
  startDate: new Date("2024-03-01"),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ["Principal Technologist"],
  tags: ["Patent Intelligence", "Biotech", "Azure Functions", "React", "TypeScript", "C#", "Technical Leadership"],
  accomplishments: [
    {
      description: "Advised the founders on technical direction, including stopping an identity-provider migration and restoring the prior stack from source control.",
      role: "Principal Technologist",
      learnings: [
        "Learned that an undocumented intermediate state is debt nobody agreed to carry"
      ]
    },
    {
      description: "Built sequence search, patent-family navigation, and document retrieval across the API and the UI.",
      role: "Principal Technologist",
      learnings: [
        "Learned that grouping results by patent family changed what the tool was good for"
      ]
    },
    {
      description: "Built sign-in and enforced plan limits on the server.",
      role: "Principal Technologist",
      learnings: [
        "Learned that a CI job inheriting the deploy variable group tests against production configuration and proves nothing"
      ]
    },
    {
      description: "Built saved searches and the trial and paid-plan screens used to demo the product.",
      role: "Principal Technologist",
      learnings: []
    }
  ]
}
];

export default quests;
