import {
  Mail,
  Briefcase,
  Database,
  Sparkles,
  BarChart3,
  Plug,
  type LucideIcon,
} from "lucide-react";

export type Capability = {
  name: string;
  icon: LucideIcon;
  capabilities: string[];
  tag: string;
};

export const CAPABILITIES: Capability[] = [
  {
    name: "Salesforce Marketing Cloud",
    icon: Mail,
    capabilities: [
      "Automation Studio & Journey Builder",
      "CloudPages · SSJS Development",
      "Email / SMS / WhatsApp Campaigns",
      "IP Warmup & Deliverability Optimisation",
      "Content Builder & Template Design",
      "CleverTap & Meta WABA Integration",
      "ENS Event Tracking",
      "Campaign ROI Reporting",
    ],
    tag: "10+ Projects",
  },
  {
    name: "Sales Cloud & CRM",
    icon: Briefcase,
    capabilities: [
      "Custom Objects, Fields & Flows",
      "Role Hierarchy & Permission Sets",
      "Quote Templates & CPQ Logic",
      "Google Meet & Calendar Integration",
      "Multi-country QA & UAT Management",
      "Case Management & Assignment Rules",
      "Popup Validation & UI Enhancements",
    ],
    tag: "5+ Projects",
  },
  {
    name: "Data Cloud",
    icon: Database,
    capabilities: [
      "Data Ingestion & Unified Profiles",
      "Identity Resolution",
      "Calculated Insights & Segmentation",
      "Activation to Marketing Cloud",
      "Data Stream Configuration",
      "Real-Time Audience Updates",
    ],
    tag: "3+ Projects",
  },
  {
    name: "MCP & Personalisation (Einstein)",
    icon: Sparkles,
    capabilities: [
      "Sitemap & Web Templates",
      "Einstein Recipe Setup & Tuning",
      "ETL Catalog Sync",
      "Content Zones & Slot Configuration",
      "Campaign Setup & A/B Testing",
      "Frontend UI Development",
    ],
    tag: "5+ Projects",
  },
  {
    name: "Tableau & Analytics",
    icon: BarChart3,
    capabilities: [
      "Live Salesforce-connected Dashboards",
      "Sales Performance & Pipeline Reports",
      "Campaign Attribution Dashboards",
      "Revenue & Cost-per-Channel Analysis",
      "KPI Scorecards & Executive Views",
      "Embedded Analytics in Salesforce",
    ],
    tag: "4+ Projects",
  },
  {
    name: "Integrations & Middleware",
    icon: Plug,
    capabilities: [
      "AWS Middleware Architecture",
      "WhatsApp Meta WABA Integration",
      "CleverTap API Connector",
      "Webhook Reporting Pipelines",
      "ENS Events & CRM Template Sync",
      "JSON Data Transformation",
      "REST/SOAP API Development",
    ],
    tag: "Cross-project",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Discovery & Scoping",
    detail: "Stakeholder alignment, requirement documentation, effort estimation",
  },
  {
    title: "Architecture & Design",
    detail: "Solution design, data model, integration map",
  },
  {
    title: "Sprint-Based Build",
    detail: "2-week sprints, daily standups, AE visibility",
  },
  {
    title: "QA & UAT",
    detail: "Multi-environment testing, client sign-off",
  },
  {
    title: "Go-Live & Hypercare",
    detail: "Deployment, monitoring, post-launch support",
  },
];
