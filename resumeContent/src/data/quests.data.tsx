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
    'Led the platform-services function through a greenfield rebuild: the team that builds those services, the contracts every other system integrates against, the delivery standards seven teams work to, and the release-readiness evidence a go/no-go decision rests on. Set the operating model the program ships against, then stayed close enough to the implementation to keep those standards enforceable rather than aspirational.',
  type: 'career',
  startDate: new Date('2025-05-01'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Engineering Manager'],
  tags: ['Engineering Management', 'Healthcare', 'HIPAA', 'Platform Architecture', 'API Contracts', 'Developer Tooling', 'Observability', 'AI-Assisted Development'],
  accomplishments: [
    {
      description:
        "Built and led the team of 5 owning the platform's foundational capabilities: authentication and authorization, content, Salesforce integrations, and enrollment and eligibility configuration. Held full utilization through repeated changes in program scope.",
      role: 'Engineering Manager',
      learnings: [
        'Utilization survives a scope change only when a team owns capabilities rather than features. Capability ownership let work be reassigned without re-onboarding anybody.',
      ],
    },
    {
      description:
        'Acted as primary planning partner for the rebuild, converting ambiguous program goals into epics, dependency maps and phased delivery plans across 7 teams. Dependent teams got committed milestones two quarters out.',
      role: 'Engineering Manager',
      learnings: [
        'Dependent teams do not need a date, they need a commitment they can plan against. The dependency map is what made a two-quarter commitment defensible rather than optimistic.',
      ],
    },
    {
      description:
        'Owned HIPAA-aware vendor evaluation and the integration strategy behind it: BAA boundaries, PHI routing rules, and adapter contracts that kept each vendor swappable and channel expansion open.',
      role: 'Engineering Manager',
      learnings: [
        'A vendor evaluation is an architecture decision wearing procurement clothes. Drawing the adapter boundary before the shortlist is what kept the shortlist from drawing it instead.',
      ],
    },
    {
      description:
        'Set the cross-system API and data contracts every other team integrates against: eligibility, benefits, member profiles, claims, and patient-reported outcomes. Each fixed data ownership, identifiers, persistence, authentication and failure behavior before build.',
      role: 'Engineering Manager',
      learnings: [
        'Failure behavior is the half of a contract teams skip. Two systems agreeing on a payload and disagreeing on what a timeout means is still an integration defect.',
      ],
    },
    {
      description:
        'Designed and published the end-to-end delivery and operations model for the program, replacing SDLC stages each team ran as its own process with one documented path from delivery into operations.',
      role: 'Engineering Manager',
      learnings: [
        'Disconnected stages are an ownership problem before they are a documentation problem. Each seam existed because two groups had never agreed on who held it.',
      ],
    },
    {
      description:
        'Consolidated production and non-production onto one operator view, designing the dashboards that bring service health, traffic, error rates and latency together instead of a console per signal.',
      role: 'Engineering Manager',
      learnings: [
        'A dashboard nobody opens mid-incident is documentation. The signals that earned a place were the ones that changed what the on-call engineer did next.',
      ],
    },
    {
      description:
        'Set how AI enters the delivery workflow and shipped the tooling for it: a governed repository carrying work from requirement through analysis, scope and verification, and a VS Code extension and CLI keeping every generated change traceable and review-gated.',
      role: 'Engineering Manager',
      learnings: [
        'A generated change is only as reviewable as its inputs. Keeping requirement, analysis and scope attached to the work turned review into a check rather than a re-derivation.',
        'Traceability is what makes supervision affordable. Reviewing a diff against the specification that produced it is a shorter task than reviewing the diff alone.',
      ],
    },
    {
      description:
        'Stayed in the code deliberately, implementing authentication test automation and service APIs and reviewing pull requests and deployment changes.',
      role: 'Engineering Manager',
      learnings: [
        'Reviewing deployment changes caught what pull request review did not. The gap between what a service does and how it is configured to run is where the surprises were.',
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
    'Set UI architecture for five delivery teams while carrying full stack architecture on one of them, which kept the standards accountable to a real delivery load rather than to review alone. Most of the work was making architecture legible to the people implementing it: a shared component library, Figma handoffs that produced buildable stories, and mentoring aimed at the engineers who would defend the patterns once the engagement ended.',
  type: 'career',
  startDate: new Date('2024-05-01'),
  endDate: new Date('2025-05-17'),
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Architecture', 'Leadership', 'UI Design', 'Cross-Team Collaboration'],
  accomplishments: [
    {
      description:
        'Set UI architecture across 5 teams while acting as full stack architect for one, so the patterns were written by someone carrying delivery load under them.',
      role: 'Software Architect',
      learnings: [
        'Friction against a pattern shows up in how teams solve problems when nobody is watching. Watching that, rather than reading pull requests, is what identified which standards were wrong.',
        'Cross-cutting concerns do not present the same way in UI and backend systems. Agreeing on the principle and letting each side pick its own implementation held better than standardizing the implementation.',
      ],
    },
    {
      description:
        'Built the shared UI component library with the design teams, landing it late in the project on the judgment that recovered consistency was worth the rework it cost.',
      role: 'Software Architect',
      learnings: [
        'A component library introduced late still pays. The cost is rework on what already shipped, and that was smaller than the drift it stopped.',
      ],
    },
    {
      description:
        'Translated Figma design files into technical directives and user stories, so what reached the teams was buildable work rather than a design file and an interpretation problem.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'Mentored senior developers through pair programming and standing coaching sessions, aimed at the people who would carry the architecture once I was no longer in the room.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'Reworked cross-team and intra-team communication so teams understood the strategic direction behind the work rather than only the next ticket. Velocity moved because sequencing decisions stopped escalating, not because process got tighter.',
      role: 'Senior Consultant',
      learnings: [
        'Velocity is a comprehension problem more often than a process one. Teams that understood the goal sequenced their own work; teams holding only tickets escalated every ordering decision.',
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
    'Four years of client modernization work in healthcare, where the standing constraint was that the legacy system had to keep running while its replacement was built. Carried scope, budget and client expectations alongside the architecture, across .NET C#, Java Spring Boot, React, Angular, Flutter and UWP, and converted monolithic client systems to a multi-tenant SaaS model without dropping their EHR integrations.',
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
        'Constraints are the design input, not the obstacle. Deciding with them rather than against them is what kept the cutover from needing a freeze.',
        'Compliance requirements belong in the reusable patterns, not in each implementation. Written once, they stopped being rediscovered per project.',
      ],
    },
    {
      description:
        'Converted monolithic client systems to a multi-tenant SaaS model while keeping their EHR integrations live, handling tenant variation through configuration rather than per-client forks.',
      role: 'Software Architect',
      learnings: [
        'Tenant variation is a configuration problem right until someone ships a fork. The live EHR integrations were the constraint that made forking impossible, which is what kept the model honest.',
      ],
    },
    {
      description:
        'Carried project scope, budget and client expectations alongside the technical implementation, which meant the estimate and the architecture were argued by the same person.',
      role: 'Senior Consultant',
      learnings: [
        'Ground the argument in the numbers the client already tracks. Framed in their metrics it gets decided; framed in ours it gets deferred.',
      ],
    },
    {
      description:
        'Delivered across .NET C#, Java Spring Boot, React, Angular, Flutter and UWP, taking architecture responsibility on stacks I had not previously worked in.',
      role: 'Software Architect',
      learnings: [
        "Architecting in an unfamiliar language is mostly about finding its idioms fast. The structural decisions transfer, the conventions do not, and getting those wrong is what costs a team's trust.",
      ],
    },
    {
      description:
        'Earned FreedomPay certification and integrated secure payment processing into client systems, building the identity provider integrations underneath from the ground up.',
      role: 'Software Architect',
      learnings: [
        'Building an identity provider integration from scratch shows what the SDK was hiding. The token lifecycle decisions were ours to make, and they were the ones that mattered.',
      ],
    },
    {
      description:
        'Built standardized project scaffolding so a new engagement started from a known shape rather than from whichever project the team last copied.',
      role: 'Software Architect',
      learnings: [
        'Scaffolding gets adopted on trust before merit. The templates spread once teams had a working relationship with the person maintaining them, not when they were first published.',
      ],
    },
    {
      description:
        'Diagnosed kiosk hardware faults remotely, working from logs and device telemetry instead of dispatching someone to the site.',
      role: 'Senior Consultant',
      learnings: [
        'Remote hardware diagnosis is a logging decision made months earlier. What could be diagnosed was exactly what someone had thought to record.',
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
    'A 350,000-line lending platform, refactored onto service boundaries and carried through an executive transition.',
  summary:
    'Joined as team lead and left as interim director, covering the gap through an executive transition. The technical work was a runtime migration on day one and a 350,000-line refactor onto service and repository boundaries that pulled sprint velocity back out of negative. The leadership work was keeping engineering legible to investors, a CEO and an incoming CTO while all three were changing.',
  type: 'career',
  startDate: new Date('2018-10-01'),
  endDate: new Date('2020-02-01'),
  roles: ['Team Lead', 'Interim Director of Engineering'],
  tags: ['Leadership', 'Engineering Transition', 'Performance Optimization', 'Technical Strategy'],
  accomplishments: [
    {
      description:
        'Migrated the applications from .NET to .NET Core on day one. Performance improved immediately, and the migration settled the platform question before it could become a standing debate.',
      role: 'Team Lead',
      learnings: [
        'Arriving with a decision already made is a one-time privilege. Spending it on the platform choice meant every later argument was about application design rather than about runtime.',
      ],
    },
    {
      description:
        'Refactored a 350,000-line business application onto service and repository boundaries, reversing a sprint velocity that had gone negative.',
      role: 'Team Lead',
      learnings: [
        'Negative velocity is a structure problem, not an effort problem. The team was not slow; every change was touching four places at once.',
        'Reading code for intent rather than for correctness is the skill that made a refactor that size tractable. Pair programming was where it got taught.',
      ],
    },
    {
      description:
        'Held the line between engineering and the executive team through leadership changes, translating in both directions so neither side stalled waiting on the other.',
      role: 'Interim Director of Engineering',
      learnings: [
        'Executives want to know what will be true by a date, not what the system currently is. Reporting in those terms is what kept technical concerns from reading as excuses.',
      ],
    },
    {
      description:
        'Ran engineering as interim director, hit the target KPIs for the period, and onboarded the incoming CTO into a function that was still delivering rather than one in recovery.',
      role: 'Interim Director of Engineering',
      learnings: [
        'Handing over a function is easier than handing over its context. The KPIs transferred in an afternoon; the reasoning behind a year of decisions took the rest of the onboarding.',
      ],
    },
    {
      description:
        'Established a structured UAT process that put business stakeholders in front of features before release, moving the argument about whether a feature was right to before it shipped.',
      role: 'Team Lead',
      learnings: [
        'Talking to end users directly changed what got built more than any process did. The business account of what users needed and the users own account were not the same document.',
      ],
    },
    {
      description:
        'Built regulatory requirements into the development process rather than auditing for them afterward, cutting the class of defect that came from retrofitting compliance onto finished work.',
      role: 'Team Lead',
      learnings: [
        'Compliance retrofitted is a refactor with a deadline attached. Designing for it costs a fraction of what discovering it later does, and a regulated domain does not let you discover it later.',
      ],
    },
    {
      description:
        'Represented engineering to investors and the CEO through the executive transition, defending the technical plan to an audience with no reason to take it on faith.',
      role: 'Interim Director of Engineering',
      learnings: [
        'Technical credibility in that room rests on what you decline to promise. The plan was believed because the uncertain parts were named as uncertain.',
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
    'A year of solo delivery on legacy desktop systems, where the work was fitting current interface expectations onto a framework never designed for them and keeping the estimates honest while doing it. Held project estimates within a 10 percent margin across the engagement, which is where the habit of hunting for the unmentioned requirement first came from.',
  type: 'career',
  startDate: new Date('2017-10-01'),
  endDate: new Date('2018-10-01'),
  roles: ['Senior Consultant'],
  tags: ['Desktop Applications', 'UI Enhancement', 'Project Estimation'],
  accomplishments: [
    {
      description:
        'Modernized WinForms desktop applications with Kendo UI, fitting current interface expectations onto a framework that was not built for them.',
      role: 'Senior Consultant',
      learnings: [
        'Legacy interface work is bounded by what the framework permits, not by what the design asks for. Identifying the impossible requests early is what kept the design conversation honest.',
      ],
    },
    {
      description:
        'Held project estimates within a 10 percent margin across the engagement.',
      role: 'Senior Consultant',
      learnings: [
        'Estimate accuracy tracked requirement comprehension, not estimation technique. The estimates that missed were the ones where I had not yet found the thing nobody thought to mention.',
      ],
    },
    {
      description:
        'Built and refined the automation scripts the delivery schedule depended on, and tracked progress closely enough to surface problems while they were still cheap to fix.',
      role: 'Senior Consultant',
      learnings: [
        'Raising a problem early spends credibility you have not yet earned; raising it late spends the schedule. Early is the cost worth paying.',
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
    'Built core features for a car loan application and raised its test coverage enough that releases stopped being a question of nerve. The mentorship was the point of the year: close review from senior developers on work that was already written, which is a different teacher than any amount of self-directed study.',
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
        'Raised test coverage using AutoFixture and Moq, which is what made the release cadence predictable enough to commit to.',
      role: 'Developer',
      learnings: [
        'Good fixtures do more for coverage than more tests do. AutoFixture removed the setup cost that had been quietly deciding which cases got written and which did not.',
      ],
    },
    {
      description:
        'Grew under close mentorship from senior developers, with code review as the main teaching surface.',
      role: 'Developer',
      learnings: [
        'Code review teaches what documentation cannot, because it arrives attached to a decision already made and gotten wrong. Self-directed study never produced that.',
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
    'A selective IT rotation program, then enterprise development on critical financial operations systems.',
  summary:
    'Four years on the selective IT Career Foundation Program, rotating through multiple technical domains before settling into development. Built C# MVC applications that automated critical financial operations, and saw the same enterprise systems from inside each of the business units that depended on them, which is a view a single team never offers.',
  type: 'career',
  startDate: new Date('2012-06-01'),
  endDate: new Date('2016-08-01'),
  roles: ['ITCFP Participant', 'Developer'],
  tags: ['IT Fundamentals', 'Development', 'Automation', 'Financial Operations'],
  accomplishments: [
    {
      description:
        'Rotated through multiple IT functions on the selective IT Career Foundation Program, seeing the same enterprise systems from the perspective of each business unit that depended on them.',
      role: 'ITCFP Participant',
      learnings: [
        'The same technology choice lands differently in every business unit that inherits it. Seeing that from inside several of them is not something one team can show you.',
      ],
    },
    {
      description:
        'Built and deployed C# MVC applications automating critical financial operations, under the validation and audit requirements those systems carry.',
      role: 'Developer',
      learnings: [
        'Enterprise scale moves the cost from writing software to maintaining it. Stability and auditability were the requirements; the feature was the cheap part.',
      ],
    },
    {
      description:
        'Improved SDLC practices across the teams the rotation passed through, raising code quality and tightening project management.',
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
    "Self-directed work where the constraints are chosen rather than inherited, which is most of the point of it. Gatekeeper Bastion is a co-op Unity 6 shooter run against a written milestone contract that cancels ideas as readily as it closes them. Zo Garden eCafe is the Quartz 4 monorepo this page is served from, along with the two-part systems analysis of AI governance published in it. Both are single-author codebases, so every architectural rule in them is one nobody else was going to enforce.",
  type: 'hobby',
  startDate: new Date('2026-05-04'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Game Developer', 'Web Developer', 'Technical Writer'],
  tags: ['Unity 6', 'C#', 'Game Development', 'React', 'TypeScript', 'Quartz 4', 'Cloudflare Pages', 'Systems Thinking', 'Personal Project'],
  externalLink: 'https://github.com/DeveloperZo/Zo-Garden-eCafe',
  accomplishments: [
    {
      description:
        "Built Gatekeeper Bastion, a co-op Unity 6 shooter, on an engine-free simulation layer of 70 C# files and 9,200 lines that runs headless. The boundary cost a hand-written JSON reader, since JsonUtility could not cross it.",
      role: 'Game Developer',
      learnings: [
        'A boundary held by convention decays quietly. That layer stayed clean for months on discipline alone, then drifted the first time a new enemy wanted a frame counter.',
      ],
    },
    {
      description:
        'Audited the front end as non-functional and replaced it: deleted three editor tools that rewrote scenes at import time, 1,422 lines, and moved stations, rigs and controllers to authored prefabs.',
      role: 'Game Developer',
      learnings: [
        'A generated scene is unreviewable. The diff on an authored prefab reads; the diff on a scene a tool rewrote is noise wrapped around the one line that changed.',
      ],
    },
    {
      description:
        'Ran the project against a written milestone contract: 85 closed, 6 cancelled, 2 deferred, backed by 943 test cases across 131 test files, with a cap of 10 queued and 3 active to stop planning outrunning the build.',
      role: 'Game Developer',
      learnings: [
        'Cancelling a milestone is cheaper evidence than finishing one. Of the six cancelled, one killed a full history rewrite after its premises turned out to already hold.',
      ],
    },
    {
      description:
        'Split a single save document into per-character and per-world records to make co-op ownership explicit, then retired the version-migration ladder built for the old format.',
      role: 'Game Developer',
      learnings: [
        'Key-addressed reads instead of positional ones let a new field ship without a version bump, as long as its absent value is also its correct default.',
      ],
    },
    {
      description:
        'Built the Quartz 4 monorepo this resume is served from, including the emitter that runs the React build during the static site build and mounts it at /resume, so one Cloudflare Pages deploy publishes both.',
      role: 'Web Developer',
      learnings: [
        'A static site generator and a single-page app can share one deploy if the generator owns the build order. Two pipelines would have meant two sources of truth about what is live.',
      ],
    },
    {
      description:
        'Wrote and illustrated a two-part systems analysis of AI governance: 8 sections, a 12 leverage-point action guide across 4 tiers, and 15 hand-authored SVG diagrams, then a dated currency pass over the claims.',
      role: 'Technical Writer',
      learnings: [
        'Undated claims about a fast-moving field read as current forever. Dating them is what makes the piece maintainable instead of disposable.',
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
  description: "Diagnostic review of a hedge fund company's software suite, tying structural findings to the KPIs they were suppressing.",
  summary: "Hired directly by the CEO of Lendr to diagnose why technical problems at another of his companies were showing up in their KPIs. Reviewed the codebase against SOLID principles by sampling rather than exhaustively, then delivered a phased remediation roadmap in which every finding was attached to the business metric it was holding down.",
  type: "independent",
  startDate: new Date("2022-03-01"),
  endDate: new Date("2022-06-30"),
  roles: ["Technical Consultant"],
  tags: ["Code Analysis", "Technical Strategy", "Executive Advisory", "Performance Optimization"],
  accomplishments: [
    {
      description: "Reviewed the software suite against SOLID principles, sampling across the codebase to find the structural issues that were surfacing as KPI misses.",
      role: "Technical Consultant",
      learnings: [
        "Sampling beats exhaustive review on a fixed engagement. The patterns repeat, so a slice tells you what a full read would have, at a fraction of the time."
      ]
    },
    {
      description: "Produced a recommendations deck that tied each structural finding to the business KPI it was suppressing, so the technical argument arrived already translated.",
      role: "Technical Consultant",
      learnings: [
        "A finding presented as technical debt gets acknowledged. The same finding presented as a ceiling on a metric the executive team already reports gets funded."
      ]
    },
    {
      description: "Presented the findings to the executive leadership team with remediation steps they could act on without a technical translator in the room.",
      role: "Technical Consultant",
      learnings: [
        "Being trusted before the first meeting is what made the hard findings hearable. The referral did more for their reception than the analysis did."
      ]
    },
    {
      description: "Sequenced the remediation into phases, front-loading the changes that would move the KPIs so the longer architectural work had visible results behind it.",
      role: "Technical Consultant",
      learnings: [
        "A phased plan is a credibility instrument. The early phases exist to buy permission for the later ones."
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
  description: "Biotech patent-intelligence product: sequence search across US patent disclosures, with subscription billing and tiered access around it.",
  summary: "Engaged by the founders to establish technical direction, then stayed to build it. The product answers one repeated question for biotech IP professionals: given this DNA or protein sequence, who has filed on it, where, and when, and can I get the disclosure documents. That meant a React single-page app, a C# Azure Functions API, a Python ingestion pipeline for the patent corpus, and an entitlement layer that decides what each subscription tier is allowed to run. The engagement has covered both the architecture decisions and the code that implements them.",
  type: "independent",
  startDate: new Date("2024-03-01"),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ["Technical Consultant", "Full Stack Developer"],
  tags: ["Patent Intelligence", "Biotech", "Azure Functions", "React", "TypeScript", "C#", "PostgreSQL", "Python", "Technical Leadership", "DevOps"],
  accomplishments: [
    {
      description: "Established technical direction and built the search workflow the product sells: a DNA or protein sequence returns the US patents that disclose it, grouped by family, with disclosure documents attached.",
      role: "Technical Consultant",
      learnings: [
        "Grouping results by patent family rather than by patent changed what the tool was for. The same result set read as noise ungrouped and as an answer grouped."
      ]
    },
    {
      description: "Built the React single-page application and the C# Azure Functions API behind it, deployed through Azure Static Web Apps and Pipelines, with a Python pipeline ingesting the corpus the search runs against.",
      role: "Full Stack Developer",
      learnings: [
        "A CI job that inherits the deployment variable group will pass its tests against production configuration and tell you nothing. Isolating the test environment from the deploy variables was the fix."
      ]
    },
    {
      description: "Designed the entitlement and quota layer to resolve the subscription plan server-side rather than trust a client header, and shipped soft quotas deliberately: exact counting was designed, recorded, and deferred until there were paying customers.",
      role: "Technical Consultant",
      learnings: [
        "Writing down the design you are not building is what makes deferring it a decision rather than an omission. The deferred version was recorded in the same document that specified the shipped one."
      ]
    },
    {
      description: "Reversed an in-flight migration to a managed identity provider and restored the previous authentication stack from source control when its cost outran the benefit, then documented the intermediate state as deliberate.",
      role: "Technical Consultant",
      learnings: [
        "An intermediate state that is written down is a plan. The same state undocumented is technical debt nobody agreed to take on."
      ]
    },
    {
      description: "Consolidated two separate repositories and a scattered document set into one monorepo carrying 182 milestone records, so the product's decision history and its code stopped living in different places.",
      role: "Technical Consultant",
      learnings: [
        "Decision records only stay accurate while they are cheap to update. Moving them next to the code was what stopped them drifting."
      ]
    }
  ]
}
];

export default quests;
