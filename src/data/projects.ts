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
  brandSummary?: string;
  brandFacts?: string[];
};

export const PROJECTS: Project[] = [
  // ── Premium anchors first (primacy effect — most recognizable brands) ──
  {
    slug: "mount-sinai",
    name: "Mount Sinai",
    industry: "Healthcare / Non-Profit",
    clouds: ["SFMC", "CloudPages", "Content Builder"],
    category: "SFMC",
    brandSummary: "Mount Sinai Health System is one of the largest and most respected academic medical centres in the United States, headquartered in New York City. With a legacy spanning over 170 years, it operates eight hospitals and a vast network of ambulatory care sites, research institutes, and specialty practices. Mount Sinai is globally recognised for its clinical excellence, groundbreaking medical research, and commitment to patient-centred care — making compliance, accessibility, and communication held to the highest possible standard.",
    brandFacts: ["170+ year legacy", "8 hospitals in the network", "Top-ranked in the US News Best Hospitals list"],
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
    brandSummary: "Ferns N Petals (FnP) is India's largest gifting and floral retail network, with a presence spanning 400+ stores across India and operations in 70+ countries. Founded in 1994, FnP has grown from a single flower shop in Delhi into a gifting powerhouse that processes millions of orders annually across flowers, cakes, plants, and personalised gifts. The brand serves both B2C consumers and large enterprise clients, running high-volume campaigns across every major messaging channel.",
    brandFacts: ["400+ retail stores across India", "Operating in 70+ countries", "Millions of orders processed annually"],
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
    category: "MCP",
    brandSummary: "D'Decor is India's most premium home textiles brand, renowned for its luxury fabrics, wallcoverings, and furnishings that grace the interiors of five-star hotels, luxury residences, and high-end retail spaces across 75+ countries. Backed by decades of craftsmanship and a world-class manufacturing infrastructure, D'Decor supplies to some of the most iconic hospitality and design projects globally. The brand's digital ambitions are as ambitious as its product portfolio.",
    brandFacts: ["Present in 75+ countries", "Supplies to 5-star hotels worldwide", "India's #1 premium home textiles brand"],
    impact: [
      "Deployed MCP for real-time personalisation across showroom and e-commerce touchpoints",
      "Unified retail and online customer data for behaviour-driven campaign delivery",
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
    clouds: ["MCP", "SFMC", "WhatsApp"],
    category: "MCP",
    brandSummary: "Asian Footwear is a rapidly growing Indian footwear brand known for its wide range of sports and casual footwear at accessible price points. With an expanding distribution network spanning multiple states and thousands of retail touchpoints, the brand has become a strong challenger in India's competitive footwear market. Its aggressive retail expansion across zones demanded an equally robust operational and communication infrastructure to match.",
    brandFacts: ["Pan-India distribution network", "Thousands of retail touchpoints", "One of India's fastest-growing footwear brands"],
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
    slug: "biba",
    name: "BIBA",
    industry: "Women's Fashion",
    clouds: ["SFMC", "Data Cloud", "Journey Builder", "WhatsApp"],
    category: "SFMC",
    brandSummary: "BIBA is India's largest and most beloved women's ethnic wear brand, trusted by millions of women for its vibrant kurtas, salwar suits, and fusion wear. With over 200 exclusive stores across India and a thriving e-commerce presence, BIBA has become synonymous with modern Indian fashion — blending traditional craftsmanship with contemporary design. The brand serves a highly engaged, fashion-conscious customer base that shops both online and in-store, making unified data and personalised journeys critical to its growth.",
    brandFacts: ["200+ exclusive stores across India", "India's #1 women's ethnic wear brand", "Millions of active customers across retail and e-commerce"],
    impact: [
      "Unified online and retail customer profiles in Data Cloud for personalised marketing",
      "Built segmented SFMC journeys for ethnic wear collections and seasonal drops",
      "Deployed WhatsApp and email campaigns tied to real-time purchase signals",
    ],
    challenge:
      "Customer data from retail stores, the BIBA app, and the website existed in separate silos, making it impossible to deliver consistent personalised experiences across touchpoints.",
    approach: [
      "Ingested retail POS, app events, and web behaviour into Data Cloud",
      "Built identity resolution to create a single customer view across channels",
      "Designed collection-launch and replenishment journeys in SFMC",
      "Deployed AI-driven segmentation for high-value and lapsing customers",
    ],
    outcomes: [
      { metric: "Unified", label: "Customer 360 View" },
      { metric: "+35%", label: "Campaign Engagement" },
      { metric: "↓ 45%", label: "Lapsing Customer Rate" },
    ],
  },
  {
    slug: "income",
    name: "Income",
    industry: "Insurance / Financial Services",
    clouds: ["MCP", "SFMC", "Journey Builder"],
    category: "MCP",
    brandSummary: "Income Insurance (formerly NTUC Income) is one of Singapore's most trusted and iconic insurance institutions, serving over 2 million policyholders across life, health, and general insurance. Founded in 1970 as a cooperative, Income has a deep-rooted mission to make insurance accessible to every Singaporean. Its scale, regulatory environment, and the high-stakes nature of insurance communications demand exceptional precision in how it connects with customers — from policy renewals to cross-sell and life-stage transitions.",
    brandFacts: ["2 million+ policyholders", "Founded 1970, over 50 years of trust", "One of Singapore's largest composite insurers"],
    impact: [
      "Deployed Marketing Cloud Personalisation for real-time web and portal experiences",
      "Personalised policy renewal nudges and cross-sell recommendations per customer segment",
      "Reduced generic bulk sends in favour of behaviour-triggered journeys",
    ],
    challenge:
      "Undifferentiated email blasts were driving low renewal engagement, and the customer portal showed the same content to every visitor regardless of life stage or policy type.",
    approach: [
      "Implemented MCP to capture real-time behavioural signals on the web portal",
      "Built segment rules mapping life stage, policy type, and renewal proximity",
      "Created personalised landing experiences and triggered SFMC journeys from MCP events",
      "A/B tested personalised vs. generic journeys across renewal and cross-sell flows",
    ],
    outcomes: [
      { metric: "+28%", label: "Renewal Conversion Rate" },
      { metric: "Real-time", label: "Portal Personalisation" },
      { metric: "↓ 40%", label: "Generic Bulk Sends" },
    ],
  },
  {
    slug: "imda",
    name: "IMDA",
    industry: "Government / Public Sector",
    clouds: ["MCP", "SFMC", "CloudPages"],
    category: "MCP",
    brandSummary: "The Infocomm Media Development Authority (IMDA) is Singapore's lead government agency for developing a vibrant, world-class infocomm and media ecosystem. Operating under the Singapore Ministry of Communications and Information, IMDA drives Singapore's Smart Nation vision — shaping digital infrastructure policy, regulating key sectors, and running programmes that accelerate digital adoption across industries and communities. Working with IMDA meant meeting the highest standards of government data governance while reaching diverse stakeholder segments at national scale.",
    brandFacts: ["Singapore government statutory board", "Drives Singapore's Smart Nation initiative", "Oversees infocomm policy across all industries"],
    impact: [
      "Implemented MCP-driven personalisation for citizen-facing digital campaigns",
      "Tailored content delivery by industry segment, role, and engagement history",
      "Improved campaign relevance and digital programme adoption across target sectors",
    ],
    challenge:
      "Digital communications were reaching diverse industry segments with uniform messaging, leading to low relevance scores and limited programme uptake among key stakeholder groups.",
    approach: [
      "Configured MCP to track segment-level engagement across web and email",
      "Built behavioural rules to surface relevant digital programmes per stakeholder profile",
      "Integrated MCP signals into SFMC journeys for follow-up communications",
      "Developed CloudPages-based programme registration flows tied to MCP segments",
    ],
    outcomes: [
      { metric: "+52%", label: "Programme Adoption Rate" },
      { metric: "Segmented", label: "Stakeholder Journeys" },
      { metric: "Compliant", label: "Government Data Governance" },
    ],
  },
  {
    slug: "fabel",
    name: "Fabel",
    industry: "E-commerce",
    clouds: ["SFMC", "Journey Builder", "IP Warmup"],
    brandSummary: "Fabel is a growing e-commerce brand operating in a competitive digital retail landscape where email deliverability directly determines revenue. Like many scaling online retailers, Fabel faced the critical challenge of establishing sending reputation with major mailbox providers — a problem that silently costs brands millions in lost reach before they realise it.",
    brandFacts: ["E-commerce brand scaling email operations", "High-volume digital marketing programme", "Multi-region mailbox provider coverage"],
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
    brandSummary: "Cobb Italy is an international retail brand operating across multiple markets, running high-frequency SMS and WhatsApp campaigns alongside traditional email. With marketing leadership accountable to cross-channel ROI targets, the brand needed the kind of multi-channel attribution and executive reporting infrastructure that most agencies struggle to deliver cleanly.",
    brandFacts: ["Multi-market international retail brand", "High-frequency SMS + WhatsApp campaigns", "Cross-channel attribution reporting for leadership"],
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
    brandSummary: "Ramraj Cotton is one of India's most trusted and widely recognised ethnic menswear brands, known for its premium dhotis, veshtis, and cotton apparel with a particularly strong following across South India. With a loyal customer base running into millions and a high-volume communication programme spanning SMS and WhatsApp, reliable message delivery is not just a nice-to-have — it is core to the brand's customer experience.",
    brandFacts: ["One of India's most recognised ethnic menswear brands", "Dominant presence across South India", "Millions of loyal customers nationwide"],
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
    name: "Meridian",
    industry: "Internal Operations",
    clouds: ["SFMC", "CloudPages", "Data Extensions"],
    brandSummary: "Meridian is an internal operations intelligence platform built for a growing organisation where manual end-of-day reporting had become a bottleneck for leadership visibility. As teams scaled, the need for a real-time, auditable task tracking system became critical — prompting a fully custom solution built on Salesforce's CloudPages and Data Extensions infrastructure.",
    brandFacts: ["Custom internal operations platform", "Built on Salesforce CloudPages", "Real-time audit trail for leadership"],
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
    name: "Kalamandir",
    industry: "Ethnic Wear & Fashion",
    clouds: ["SFMC", "APIs", "Webhooks", "ENS"],
    brandSummary: "Kalamandir is one of South India's most iconic ethnic wear destinations, celebrated for its saree collections and multi-brand fashion retail footprint across Andhra Pradesh, Telangana, and Karnataka. With a loyal customer base built on trust and tradition, seamless communication and campaign visibility are central to preserving the premium shopping experience Kalamandir is known for.",
    brandFacts: ["Iconic South Indian ethnic wear brand", "Part of Sai Silks Kalamandir Ltd (listed company)", "Multi-brand retail across AP, Telangana & Karnataka"],
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
    brandSummary: "Goel Power is a manufacturing company in the power and electrical sector embarking on a full Salesforce implementation from a greenfield state. For businesses in capital-intensive manufacturing, getting the data model, approval workflows, and access governance right from day one is business-critical — mistakes at this stage compound into costly re-implementations.",
    brandFacts: ["Power & electrical manufacturing sector", "Greenfield Salesforce implementation", "Multi-stakeholder approval and governance requirements"],
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
    brandSummary: "Monte Carlo is one of India's most iconic winter wear and fashion brands, with over 350 exclusive stores across the country and a strong wholesale distribution network. Known for its premium woolens, knitwear, and casual wear, Monte Carlo has built a loyal following over four decades. Managing sales pipeline and case routing at this scale demanded real-time visibility that the existing system simply could not provide.",
    brandFacts: ["350+ exclusive stores across India", "40+ years of brand heritage", "Premium woolens and fashion leader"],
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
    brandSummary: "Axtria is a global analytics and technology company specialising in data-driven solutions for the life sciences industry, with clients spanning leading pharmaceutical, biotech, and medical device companies worldwide. Operating across multiple geographies with complex sales structures, Axtria required enterprise-grade Salesforce architecture that could handle multi-region access governance and deliver a unified customer view across its global operations.",
    brandFacts: ["Global analytics company in life sciences", "Clients include leading pharma and biotech firms", "Multi-region sales operations across geographies"],
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
    brandSummary: "A growing education institution managing student onboarding across multiple programmes and cohorts, where communication quality directly influences enrolment experience and brand perception. In the education sector, where students and parents form lasting impressions from day one, personalised, timely, and compliant communication is not optional — it is foundational.",
    brandFacts: ["Multi-programme education institution", "High-volume student onboarding journeys", "Compliance-first communication requirements"],
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
