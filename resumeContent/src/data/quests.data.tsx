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
    "Greenfield rebuild of a fertility and family-building benefits platform covering roughly 6.5M lives.",
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
        "Built and led the team of 5 that owns the platform's foundational capabilities: authentication and authorization, content, Salesforce integrations, and enrollment and eligibility configuration. Program scope changed repeatedly and the team stayed fully utilized through it.",
      role: 'Engineering Manager',
      learnings: [
        "When the scope changed I could move people onto different work without anyone having to learn a new part of the system first. That is what owning capabilities rather than features bought us, and it is why the team stayed fully utilized.",
      ],
    },
    {
      description:
        "Acted as primary planning partner for the rebuild, turning ambiguous program goals into epics, dependency maps and phased delivery plans across 7 teams. Teams that depended on the rebuild got committed milestones two quarters out.",
      role: 'Engineering Manager',
      learnings: [
        "The other teams kept asking for dates. What they needed was a commitment solid enough to build their own plans on, and I could only make one two quarters out because the dependency map showed me what it rested on.",
      ],
    },
    {
      description:
        "Owned vendor evaluation under HIPAA and the integration strategy behind it, drawing the BAA boundaries, the PHI routing rules, and the adapter contracts. The contracts kept each vendor swappable and left room to add channels.",
      role: 'Engineering Manager',
      learnings: [
        "I drew the adapter boundary before I looked at any vendors. If I had done it the other way around, the shortlist would have set the boundary, and we would have been living with whichever shape the winning vendor happened to have.",
      ],
    },
    {
      description:
        "Set the API and data contracts every other team integrates against: eligibility, benefits, member profiles, claims, and patient-reported outcomes. Each one settled data ownership, identifiers, persistence, authentication and failure behavior before anyone started building.",
      role: 'Engineering Manager',
      learnings: [
        "Teams will settle the payload and stop there. Two systems can agree on every field and still break in production because they never agreed on what a timeout means, so I made failure behavior part of every contract.",
      ],
    },
    {
      description:
        "Designed and published the delivery and operations model for the program. Each team had been running the SDLC stages as its own process, and the model replaced them with one documented path from delivery into operations.",
      role: 'Engineering Manager',
      learnings: [
        "I went in expecting to write documentation and found that every seam between stages was there because two groups had never settled who owned it. Writing the path down only worked after that got decided.",
      ],
    },
    {
      description:
        "Consolidated production and non-production onto a single operator view, with dashboards bringing service health, traffic, error rates and latency together. Before that, each signal had its own console.",
      role: 'Engineering Manager',
      learnings: [
        "The test I used for every signal was whether it would change what the on-call engineer did next. Plenty of things we could have graphed did not pass, and leaving them off is what kept the dashboard worth opening during an incident.",
      ],
    },
    {
      description:
        "Set how AI enters the delivery workflow and built the tooling for it. A governed repository carries work from requirement through analysis, scope and verification. A VS Code extension and CLI keep every generated change traceable and review-gated.",
      role: 'Engineering Manager',
      learnings: [
        "Reviewing generated code is hard when you have to work out what it was supposed to do first. Keeping the requirement, the analysis and the scope attached to the work meant a reviewer could check the change against them instead of reconstructing the intent from the diff.",
        "Reading a diff next to the specification that produced it takes far less time than reading the diff on its own. That gap is what makes it possible to keep up with this much generated work.",
      ],
    },
    {
      description:
        "Stayed in the code by choice, writing authentication test automation and service APIs, and reviewing pull requests and deployment changes.",
      role: 'Engineering Manager',
      learnings: [
        "Pull request review kept missing things that showed up the moment I started reading deployment changes too. What a service does and how it is configured to run are two different questions, and the second one held most of the surprises.",
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
  description: 'Five product delivery teams under one UI architecture, with full stack architecture on one of them.',
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
        "I learned more about which standards were wrong by noticing how teams solved problems when no one was looking than I ever did reading pull requests. If people were quietly working around a pattern, the pattern was the problem.",
        "The same concern does not look the same in a UI as it does in a backend service. We got further agreeing on the principle and letting each side implement it their own way than we did trying to standardize the implementation.",
      ],
    },
    {
      description:
        "Built the shared UI component library with the design teams and landed it late in the project. Adopting it meant reworking what had already been built, and the consistency it bought back was worth that.",
      role: 'Software Architect',
      learnings: [
        "We built the shared component library late in the project. It cost us rework on screens that had already shipped, and that bill was still smaller than the drift we would have kept accumulating.",
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
        "Teams that understood where the work was going put it in order themselves. Teams that had only tickets escalated every decision about what came next, and that waiting, not any missing process, was where the time went.",
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
    'Legacy healthcare modernization for consulting clients, with each old system kept running while its replacement was built.',
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
        "The business had to keep running, so I designed for that from the start instead of treating it as something in the way. We cut over without ever freezing the legacy system.",
        "Once the compliance requirements lived in the reusable patterns, each new project inherited them instead of working them out again from scratch.",
      ],
    },
    {
      description:
        "Converted monolithic client systems to a multi-tenant SaaS model, with their EHR integrations live the whole time. Where tenants differed, the difference went into configuration. No client got a fork of its own.",
      role: 'Software Architect',
      learnings: [
        "What kept tenant differences in configuration was that we could not fork. The EHR integrations had to stay live for every client, and I doubt the model would have held without that constraint pushing on it.",
      ],
    },
    {
      description:
        "Carried project scope, budget and client expectations alongside the technical implementation. The person who defended the estimate and the person who defended the architecture were the same person.",
      role: 'Senior Consultant',
      learnings: [
        "Arguments I framed in the numbers the client already tracked got decided. The ones I framed in our numbers got put off until later.",
      ],
    },
    {
      description:
        "Delivered across .NET C#, Java Spring Boot, React, Angular, Flutter and UWP. Some of those stacks were new to me when I took architecture responsibility for them.",
      role: 'Software Architect',
      learnings: [
        "Taking architecture responsibility for a stack I had not worked in was mostly a hunt for its idioms. The structural decisions carried over from what I already knew. The conventions did not, and a team stops listening to you quickly once you get those wrong.",
      ],
    },
    {
      description:
        "Earned FreedomPay certification and integrated secure payment processing into client systems. The identity provider integrations underneath it were built from the ground up.",
      role: 'Software Architect',
      learnings: [
        "Building the identity provider integration from the ground up showed me how much an SDK usually decides on your behalf. The token lifecycle was ours to work out, and that turned out to be the part that mattered.",
      ],
    },
    {
      description:
        "Built standardized project scaffolding for new engagements to start from. Before it existed, a new project began as a copy of whatever the team had built last.",
      role: 'Software Architect',
      learnings: [
        "Publishing the templates did nothing. They spread later, once teams had worked with me long enough to trust that someone would keep them current.",
      ],
    },
    {
      description:
        "Diagnosed kiosk hardware faults from logs and device telemetry, without sending anyone to the site.",
      role: 'Senior Consultant',
      learnings: [
        "What I could diagnose from my desk was decided months earlier by whoever chose what the kiosks would log. I could find exactly the faults someone had thought to record, and no others.",
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
    "A 350,000-line lending platform refactored onto service boundaries while the executive team was changing over.",
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
        "Migrated the applications from .NET to .NET Core on day one. Performance improved right away. The platform question was closed before it could become a standing debate.",
      role: 'Team Lead',
      learnings: [
        "A new lead gets to make exactly one decision without having to win it first. I spent mine on moving to .NET Core, and after that every argument we had was about how to design the application rather than about what it ran on.",
      ],
    },
    {
      description:
        "Refactored a 350,000-line business application onto service and repository boundaries. Sprint velocity had gone negative before that work and recovered after it.",
      role: 'Team Lead',
      learnings: [
        "The team was not slow. Velocity had gone negative because a single change had to be made in four places at once, and no amount of extra effort was going to fix that.",
        "A refactor that size only became manageable once people could read code for what it was trying to do, not just for whether it was correct. Pair programming was where that got taught.",
      ],
    },
    {
      description:
        "Worked between engineering and the executive team through the leadership changes, translating in both directions. Neither side stalled waiting on the other.",
      role: 'Interim Director of Engineering',
      learnings: [
        "Executives asked what the state of the system was, but what they needed was what would be true by a given date. Reporting it that way is what kept a technical concern from sounding like an excuse.",
      ],
    },
    {
      description:
        "Ran engineering as interim director and hit the target KPIs for the period. Handed the incoming CTO a function that was still delivering.",
      role: 'Interim Director of Engineering',
      learnings: [
        "I handed the incoming CTO the KPIs in an afternoon. Explaining why a year of decisions had gone the way they had took the rest of his onboarding, and that was the part that mattered.",
      ],
    },
    {
      description:
        "Established a structured UAT process that put business stakeholders in front of features before release. Whether a feature was right got argued while it could still be changed.",
      role: 'Team Lead',
      learnings: [
        "Nothing changed what we built as much as sitting with the actual users did. What the business told us they needed and what the users told us were not the same list.",
      ],
    },
    {
      description:
        "Built regulatory requirements into the development process. Compliance had been audited after the fact until then, and retrofitting it onto finished work was producing its own defects.",
      role: 'Team Lead',
      learnings: [
        "Building the regulatory requirements in as we went cost a fraction of what it cost to add them to finished work. In a regulated business you do not really get to find out late.",
      ],
    },
    {
      description:
        "Represented engineering to investors and the CEO through the executive transition, and defended the technical plan to both.",
      role: 'Interim Director of Engineering',
      learnings: [
        "Investors believed the plan because I named the uncertain parts as uncertain rather than promising them.",
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
    'Legacy WinForms systems for consulting clients, delivered solo with estimates inside a 10 percent margin.',
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
        "Modernized WinForms desktop applications with Kendo UI. WinForms was never built for the interfaces people expected by then, and most of the work was fitting one onto the other.",
      role: 'Senior Consultant',
      learnings: [
        "WinForms set the real limits on that work, not the designs. I got in the habit of finding the impossible requests early and saying so, which kept the design conversation grounded in what could actually be built.",
      ],
    },
    {
      description:
        'Held project estimates within a 10 percent margin across the engagement.',
      role: 'Senior Consultant',
      learnings: [
        "My estimates were accurate in proportion to how well I understood the requirement, and not because of any technique. The ones that missed were the ones where I had not yet found the thing nobody thought to mention.",
      ],
    },
    {
      description:
        "Built and refined the automation scripts the delivery schedule ran on. Tracked progress closely and raised problems while they were still cheap to fix.",
      role: 'Senior Consultant',
      learnings: [
        "Raising a problem early costs you credibility you have not built up yet. Raising it late costs the schedule. I would rather pay the first one.",
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
    'Core features and test coverage on a car loan application, built under senior mentorship.',
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
        "The cost of setting up test data had been quietly deciding which cases got written, and AutoFixture removing that did more for coverage than adding tests would have.",
      ],
    },
    {
      description:
        "Grew under close mentorship from senior developers. Most of the teaching happened in code review.",
      role: 'Developer',
      learnings: [
        "Code review taught me things no documentation ever did, because the lesson came attached to a decision I had already made and gotten wrong. I never got that from studying on my own.",
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
    "A selective IT rotation program, then C# development on systems running critical financial operations.",
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
        "Every business unit I rotated through had a different relationship with the same enterprise systems. One team could not have shown me that.",
      ],
    },
    {
      description:
        "Built and deployed C# MVC applications that automated critical financial operations, and met the validation and audit requirements those systems carried.",
      role: 'Developer',
      learnings: [
        "At that scale the expensive part of software is not writing it. Stability and auditability were what the financial systems actually demanded, and the feature itself was usually the cheap part.",
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
    'A co-op Unity 6 shooter on an engine-free simulation layer, and the Quartz 4 monorepo that builds and serves this resume.',
  summary:
    "Gatekeeper Bastion is a co-op Unity 6 shooter. Zo Garden eCafe is the Quartz 4 monorepo this page is served from, and it carries the two-part systems analysis of AI governance I wrote and illustrated. Both are single-author codebases, which means every rule in them is one I chose to write down and then had to build something to enforce.",
  type: 'hobby',
  startDate: new Date('2026-05-04'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Game Developer', 'Web Developer', 'Technical Writer'],
  tags: ['Unity 6', 'C#', 'Game Development', 'React', 'TypeScript', 'Quartz 4', 'Cloudflare Pages', 'Systems Thinking', 'Personal Project'],
  externalLink: 'https://github.com/DeveloperZo/Zo-Garden-eCafe',
  accomplishments: [
    {
      description:
        "Built Gatekeeper Bastion, a co-op Unity 6 shooter, on an engine-free simulation layer of 70 C# files and 9,200 lines that runs headless. Holding that boundary meant writing a JSON reader by hand, because JsonUtility could not cross it.",
      role: 'Game Developer',
      learnings: [
        "Vector3 and Mathf are allowed in that layer. I wrote down what banning them outright would have cost, mostly so I would not talk myself into re-arguing the question six weeks later.",
      ],
    },
    {
      description:
        "Audited the front end, found it non-functional, and replaced it. Deleted three editor tools that rewrote scenes at import time, 1,422 lines in all, and moved stations, rigs and controllers to authored prefabs.",
      role: 'Game Developer',
      learnings: [
        "I could read the diff on a prefab I had authored. The diff on a scene that a tool had rewritten at import time was mostly noise wrapped around the one line that had actually changed, so I deleted the tools.",
      ],
    },
    {
      description:
        "Ran the project against a written milestone contract: 85 closed, 6 cancelled, 2 deferred, with 943 test cases across 131 test files behind them. A cap of 10 queued and 3 active kept planning from running ahead of the build.",
      role: 'Game Developer',
      learnings: [
        "Six of the milestones got cancelled, and I count that as the contract working. One of them ended a planned history rewrite once I found that its premises already held, which is a much cheaper way to learn that than building the thing.",
      ],
    },
    {
      description:
        "Split a single save document into per-character and per-world records, making co-op ownership explicit. Retired the version-migration ladder built for the old format.",
      role: 'Game Developer',
      learnings: [
        'Key-addressed reads instead of positional ones let a new field ship without a version bump, as long as its absent value is also its correct default.',
      ],
    },
    {
      description:
        "Built the Quartz 4 monorepo this resume is served from. An emitter runs the React build during the static site build and mounts the result at /resume, so a single Cloudflare Pages deploy publishes both.",
      role: 'Web Developer',
      learnings: [
        "The static site generator runs the React build, so there is one deploy and one build order. Two pipelines would have left two different answers to the question of what is currently live.",
      ],
    },
    {
      description:
        "Wrote and illustrated a two-part systems analysis of AI governance: 8 sections, a 12 leverage-point action guide across 4 tiers, and 15 hand-authored SVG diagrams. Went back over the claims afterward and dated them.",
      role: 'Technical Writer',
      learnings: [
        "A claim about AI governance with no date on it goes on reading as current long after it stops being true. Putting dates on mine is what makes the piece something I can keep up rather than something I throw away.",
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
  description: "Diagnostic review of a hedge fund company's software suite, with each finding tied to the KPI it was holding down.",
  summary: "The CEO of Lendr hired me directly to look at another of his companies, where technical problems were showing up in the KPIs. I had four months and no prior context, so the whole engagement came down to what could be learned from a sample rather than a full read.",
  type: "independent",
  startDate: new Date("2022-03-01"),
  endDate: new Date("2022-06-30"),
  roles: ["Technical Consultant"],
  tags: ["Code Analysis", "Technical Strategy", "Executive Advisory", "Performance Optimization"],
  accomplishments: [
    {
      description: "Reviewed the software suite against SOLID principles by sampling across the codebase. The structural problems that turned up were the ones surfacing as KPI misses.",
      role: "Technical Consultant",
      learnings: [
        "I sampled the codebase rather than reading all of it, because the same patterns kept turning up. A slice told me what a full read would have, and the engagement had a fixed end date."
      ]
    },
    {
      description: "Produced a recommendations deck that tied each structural finding to the business KPI it was holding down.",
      role: "Technical Consultant",
      learnings: [
        "Call something technical debt and an executive team will nod at it. Show them the same problem as a ceiling on a number they already report, and they will fund the fix."
      ]
    },
    {
      description: "Presented the findings to the executive leadership team. The remediation steps were written so they could act without a technical translator in the room.",
      role: "Technical Consultant",
      learnings: [
        "The referral is what got me trusted before the first meeting, and that did more for how the hard findings landed than the analysis behind them did."
      ]
    },
    {
      description: "Sequenced the remediation into phases. The changes that would move the KPIs came first, and the longer architectural work followed them.",
      role: "Technical Consultant",
      learnings: [
        "I put the changes that would move the KPIs in the first phase on purpose. The longer architectural work was going to take a while, and the early results are what bought it the room to happen."
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
  description: "Sequence search over US patent disclosures for biotech IP work, with subscription billing and tiered access around it.",
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
        "We grouped results by family rather than listing them patent by patent, and that changed what the tool was good for. The same result set reads as noise one way and as an answer the other."
      ]
    },
    {
      description: "Built the React single-page application and the C# Azure Functions API behind it, both deployed through Azure Static Web Apps and Pipelines. A Python pipeline ingests the corpus the search runs against.",
      role: "Full Stack Developer",
      learnings: [
        "A CI job that inherits the deployment variable group will pass its tests against production configuration and tell you nothing. Isolating the test environment from the deploy variables was the fix."
      ]
    },
    {
      description: "Designed the entitlement and quota layer to resolve the subscription plan on the server and never from a client header. Soft quotas shipped on purpose: exact counting was designed, recorded, and deferred until there were paying customers.",
      role: "Technical Consultant",
      learnings: [
        "We shipped soft quotas and wrote the exact counting design down in the same document anyway. Writing down the thing you are choosing not to build yet is what keeps it a decision instead of something you simply left out."
      ]
    },
    {
      description: "Reversed an in-flight migration to a managed identity provider when its cost outran the benefit, and restored the previous authentication stack from source control. Documented the intermediate state as a deliberate one.",
      role: "Technical Consultant",
      learnings: [
        "We backed out of the migration and ended up somewhere in between, so I wrote down why we were there and what it would take to move on. Left undocumented, that same in-between state would have been debt nobody had agreed to carry."
      ]
    },
    {
      description: "Consolidated two separate repositories and a scattered document set into one monorepo carrying 182 milestone records. Until then the decision history and the code it described lived in different places.",
      role: "Technical Consultant",
      learnings: [
        "The records drifted until we moved them next to the code, which made updating them cheap enough that people bothered."
      ]
    }
  ]
}
];

export default quests;
