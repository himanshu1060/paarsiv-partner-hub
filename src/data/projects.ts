export type Project = {
  slug: string;
  name: string;
  industry: string;
  clouds: string[];
  impact: string[];
  challenge: string;
  approach: string[];
  outcomes: { metric: string; label: string }[];
  category: "SFMC" | "Sales Cloud" | "Data Cloud" | "MCP" | "Integrations";
};

export const PROJECTS: Project[] = [
  // ── Premium anchors first (primacy effect — most recognizable brands) ──
  {
    slug: "mount-sinai",
    name: "Mount Sinai",
    industry: "Healthcare / Non-Profit",
    clouds: ["SFMC", "CloudPages", "Content Builder"],
    category: "SFMC",
    impact: [
      "Delivered HIPAA & CAN-SPAM compliant email templates",
      "Built branded preference centre with compliant unsubscribe routing",
      "Optimised responsive templates across all major email clients",
    ],
    challenge:
      "Outdated email templates were failing accessibility audits and lacked HIPAA-aligned preference management.",
    approach: [
      "Audited existing templates against HIPAA & CAN-SPAM checklists",
      "Built modular responsive email components in Content Builder",
      "Designed branded preference centre on CloudPages",
      "Implemented audit logging for subscription changes",
    ],
    outcomes: [
      { metric: "100%", label: "Compliance Pass Rate" },
      { metric: "All Major", label: "Email Clients Supported" },
      { metric: "<3s", label: "Preference Page Load" },
    ],
  },
  {
    slug: "fnp",
    name: "FnP",
    industry: "Retail & Gifting",
    clouds: ["SFMC", "AWS", "CleverTap", "WhatsApp Meta"],
    category: "Integrations",
    impact: [
      "Automated WhatsApp click tracking with CloudPage-based solution",
      "Integrated CleverTap ↔ SFMC via AWS middleware APIs",
      "Improved campaign analytics accuracy and reporting visibility",
    ],
    challenge:
      "Fragmented campaign data across CleverTap and SFMC made multi-channel attribution unreliable, and WhatsApp engagement couldn't be measured at the click level.",
    approach: [
      "Designed AWS middleware connecting CleverTap and SFMC in real time",
      "Built CloudPage-based click capture for WhatsApp campaigns",
      "Implemented ENS event listeners for delivery reconciliation",
      "Created a unified reporting layer for marketing leadership",
    ],
    outcomes: [
      { metric: "100%", label: "WhatsApp Click Visibility" },
      { metric: "3x", label: "Reporting Speed" },
      { metric: "0", label: "Manual Reconciliation Hours" },
    ],
  },
  {
    slug: "ddecor",
    name: "D'Decor",
    industry: "Home Textiles & Décor",
    clouds: ["SFMC", "Journey Builder", "SMS", "WhatsApp"],
    category: "SFMC",
    impact: [
      "Built end-to-end customer lifecycle journeys across email, SMS, and WhatsApp",
      "Unified retail and online customer data for personalised campaign delivery",
      "Automated post-purchase and re-engagement workflows at scale",
    ],
    challenge:
      "Customer interactions across retail showrooms and e-commerce were siloed, preventing consistent brand communication and lifecycle marketing.",
    approach: [
      "Mapped full customer lifecycle from first visit to loyalty programme",
      "Built unified Data Extensions syncing retail POS and online behaviour",
      "Orchestrated multi-channel journeys in Journey Builder",
      "Deployed personalised post-purchase sequences via SMS and WhatsApp",
    ],
    outcomes: [
      { metric: "+42%", label: "Repeat Purchase Rate" },
      { metric: "Unified", label: "Customer Profile" },
      { metric: "3x", label: "Journey Touchpoints" },
    ],
  },
  {
    slug: "asian-footwear",
    name: "Asian Footwear",
    industry: "Fashion & Footwear",
    clouds: ["Sales Cloud", "SFMC", "WhatsApp"],
    category: "Sales Cloud",
    impact: [
      "Implemented Sales Cloud with full distribution channel visibility",
      "Automated dealer onboarding and order management workflows",
      "Integrated SFMC for post-sale communication and reorder nudges",
    ],
    challenge:
      "Rapid retail expansion across zones had outpaced the existing manual tracking system, creating blind spots in dealer performance and inventory flow.",
    approach: [
      "Configured Sales Cloud with territory hierarchy matching distribution zones",
      "Built automated dealer onboarding flows with approval routing",
      "Connected SFMC for transactional WhatsApp updates on order status",
      "Delivered dashboards for regional sales managers and leadership",
    ],
    outcomes: [
      { metric: "100%", label: "Dealer Pipeline Visibility" },
      { metric: "↓ 60%", label: "Onboarding Cycle Time" },
      { metric: "Live", label: "Regional Dashboards" },
    ],
  },
  {
    slug: "fabel",
    name: "Fabel",
    industry: "E-commerce",
    clouds: ["SFMC", "Journey Builder", "IP Warmup"],
    category: "SFMC",
    impact: [
      "Executed structured IP warmup with domain-segmented datasets",
      "Improved email deliverability and inbox placement",
      "Stabilised campaign monitoring and reporting workflows",
    ],
    challenge:
      "A new sending IP was hitting spam folders and threatening domain reputation across major mailbox providers.",
    approach: [
      "Segmented audiences by domain and engagement recency",
      "Phased warmup schedule with daily volume ramps",
      "Real-time deliverability monitoring & SNDS feedback loops",
      "Cleaned suppression lists and applied stricter sunset policies",
    ],
    outcomes: [
      { metric: "60% → 95%+", label: "Inbox Placement" },
      { metric: "0", label: "Blacklist Incidents" },
      { metric: "2.4x", label: "Engagement Lift" },
    ],
  },
  {
    slug: "cobb-italy",
    name: "Cobb Italy",
    industry: "Retail (International)",
    clouds: ["SFMC", "SMS", "WhatsApp", "Tableau"],
    category: "SFMC",
    impact: [
      "Built multi-DE SQL architecture for multi-channel attribution",
      "Delivered accurate ROI reporting for SMS and WhatsApp campaigns",
      "Implemented revenue attribution and cost-per-channel logic",
    ],
    challenge:
      "Marketing leadership had no clear view of cost-per-channel or revenue attribution across SMS and WhatsApp.",
    approach: [
      "Architected normalized Data Extensions joined via SQL",
      "Built Tableau dashboards connected to SFMC data sources",
      "Defined channel-level cost and attribution rules with stakeholders",
      "Automated weekly executive reporting",
    ],
    outcomes: [
      { metric: "100%", label: "Channel Attribution Coverage" },
      { metric: "Weekly", label: "Automated Exec Reports" },
      { metric: "1", label: "Source of Truth" },
    ],
  },
  {
    slug: "ramraj",
    name: "Ramraj",
    industry: "Clothing & Fashion",
    clouds: ["SFMC", "ENS", "SMS", "WhatsApp"],
    category: "SFMC",
    impact: [
      "Built real-time WhatsApp → SMS fallback using ENS event triggers",
      "Reduced communication failures with automated delivery recovery",
      "Increased overall message delivery success rate",
    ],
    challenge:
      "WhatsApp delivery failures were silently dropping critical customer messages with no fallback path.",
    approach: [
      "Configured ENS events to capture WhatsApp delivery failures",
      "Built automation to trigger SMS fallback within seconds",
      "Created reporting layer for failure-recovery analytics",
      "Tuned templates for cross-channel consistency",
    ],
    outcomes: [
      { metric: "99%+", label: "Effective Delivery Rate" },
      { metric: "<5s", label: "Fallback Latency" },
      { metric: "0", label: "Silent Drops" },
    ],
  },
  {
    slug: "mom-system",
    name: "MOM System",
    industry: "Internal Operations",
    clouds: ["SFMC", "CloudPages", "Data Extensions"],
    category: "SFMC",
    impact: [
      "Replaced manual task tracking with form-based live dashboard system",
      "Enabled real-time EOD status updates with audit trail",
      "Improved operational visibility across teams",
    ],
    challenge:
      "Manual end-of-day reporting was slow, inconsistent, and lacked a clear audit trail.",
    approach: [
      "Built CloudPages-based task submission forms",
      "Stored submissions in normalised Data Extensions",
      "Created live dashboards for managers",
      "Added an immutable audit log for every update",
    ],
    outcomes: [
      { metric: "Real-time", label: "Status Visibility" },
      { metric: "100%", label: "Audit Coverage" },
      { metric: "↓ 70%", label: "Reporting Effort" },
    ],
  },
  {
    slug: "klm",
    name: "KLM",
    industry: "Jewellery & Fashion",
    clouds: ["SFMC", "APIs", "Webhooks", "ENS"],
    category: "Integrations",
    impact: [
      "Exposed SFMC templates via API for seamless CRM visibility",
      "Built JSON-based real-time WhatsApp reporting framework",
      "Integrated ENS for live delivery event tracking",
    ],
    challenge:
      "CRM users couldn't see which templates were active or how WhatsApp campaigns were performing in real time.",
    approach: [
      "Wrapped SFMC templates in a REST API layer",
      "Built JSON ingestion pipeline for WhatsApp delivery events",
      "Connected ENS to webhook reporting service",
      "Exposed dashboards inside CRM",
    ],
    outcomes: [
      { metric: "Real-time", label: "CRM Visibility" },
      { metric: "100%", label: "Event Capture" },
      { metric: "1", label: "Unified Reporting API" },
    ],
  },
  {
    slug: "goel-power",
    name: "Goel Power",
    industry: "Manufacturing",
    clouds: ["Sales Cloud", "Data Cloud"],
    category: "Sales Cloud",
    impact: [
      "Configured Salesforce Flows and role hierarchy from scratch",
      "Delivered custom quote templates and object architecture",
      "Improved operational automation and user access governance",
    ],
    challenge:
      "Greenfield Salesforce implementation required full data model, automation, and access governance setup.",
    approach: [
      "Designed custom object architecture aligned with manufacturing workflows",
      "Built Flows for quote approvals and case routing",
      "Implemented role hierarchy and permission sets",
      "Delivered branded quote templates",
    ],
    outcomes: [
      { metric: "100%", label: "Process Coverage" },
      { metric: "↓ 50%", label: "Quote Cycle Time" },
      { metric: "0", label: "Manual Approvals" },
    ],
  },
  {
    slug: "monte-carlo",
    name: "Monte Carlo",
    industry: "Fashion",
    clouds: ["Sales Cloud", "Tableau"],
    category: "Sales Cloud",
    impact: [
      "Built live Tableau dashboards for sales tracking",
      "Optimised Salesforce Flows for auto case assignment",
      "Added popup validation logic improving UI accuracy",
    ],
    challenge:
      "Sales leadership lacked live pipeline visibility, and case routing was creating bottlenecks for reps.",
    approach: [
      "Connected Tableau to Sales Cloud for live dashboards",
      "Rewrote case assignment Flows for auto-routing",
      "Added validation popups to prevent dirty data at entry",
      "Trained the team on dashboard interpretation",
    ],
    outcomes: [
      { metric: "Live", label: "Pipeline Visibility" },
      { metric: "↓ 80%", label: "Case Routing Time" },
      { metric: "99%", label: "Data Entry Accuracy" },
    ],
  },
  {
    slug: "axtria",
    name: "Axtria",
    industry: "IT Services / B2B",
    clouds: ["Sales Cloud", "Data Cloud"],
    category: "Data Cloud",
    impact: [
      "Implemented enterprise-grade role hierarchy and access governance",
      "Built custom approval flows for multi-region sales operations",
      "Delivered Data Cloud implementation for unified customer profiles",
    ],
    challenge:
      "Multi-region sales operations needed unified customer profiles and granular access controls across geographies.",
    approach: [
      "Configured Data Cloud ingestion from multiple source systems",
      "Implemented identity resolution rules across CRM and marketing",
      "Built region-aware approval flows in Sales Cloud",
      "Designed role hierarchy with compliance-aligned permissions",
    ],
    outcomes: [
      { metric: "Unified", label: "Customer 360 Profiles" },
      { metric: "Multi-region", label: "Approval Coverage" },
      { metric: "Compliant", label: "Access Governance" },
    ],
  },
  {
    slug: "education-client",
    name: "Education Client",
    industry: "Education",
    clouds: ["SFMC", "Journey Builder"],
    category: "SFMC",
    impact: [
      "Automated student onboarding journeys across email and WhatsApp",
      "Built preference centre with compliance-ready unsubscribe flows",
      "Improved open rates via personalisation and send-time optimisation",
    ],
    challenge:
      "Student onboarding communications were manual, inconsistent, and lacked preference management for compliance.",
    approach: [
      "Mapped onboarding lifecycle into Journey Builder",
      "Personalised messaging by program and cohort",
      "Built CloudPages preference centre with granular opt-outs",
      "Implemented send-time optimisation rules",
    ],
    outcomes: [
      { metric: "+38%", label: "Open Rate Lift" },
      { metric: "100%", label: "Onboarding Automated" },
      { metric: "Compliant", label: "Preference Centre" },
    ],
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "SFMC",
  "Sales Cloud",
  "Data Cloud",
  "MCP",
  "Integrations",
] as const;
