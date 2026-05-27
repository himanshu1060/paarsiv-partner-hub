import {
  ShoppingCart,
  Gift,
  Heart,
  Shirt,
  Gem,
  Factory,
  GraduationCap,
  Hotel,
  Building2,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  label: string;
  icon: LucideIcon;
  description: string;
};

export const INDUSTRIES: Industry[] = [
  {
    label: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Campaign automation and CRM at scale",
  },
  {
    label: "Gifting & D2C",
    icon: Gift,
    description: "WhatsApp and email journeys for seasonal peaks",
  },
  {
    label: "Healthcare / Non-Profit",
    icon: Heart,
    description: "HIPAA-compliant email and preference management",
  },
  {
    label: "Fashion & Clothing",
    icon: Shirt,
    description: "ENS-powered omnichannel messaging",
  },
  {
    label: "Jewellery",
    icon: Gem,
    description: "API-connected CRM templates and reporting",
  },
  {
    label: "Manufacturing",
    icon: Factory,
    description: "Sales Cloud and quote automation",
  },
  {
    label: "Education",
    icon: GraduationCap,
    description: "Student journey automation and compliance",
  },
  {
    label: "Hotels & Hospitality",
    icon: Hotel,
    description: "Guest communication and CRM integration",
  },
  {
    label: "IT Services / B2B",
    icon: Building2,
    description: "Enterprise Sales Cloud and Data Cloud",
  },
  {
    label: "Interior Décor",
    icon: Palette,
    description: "Marketing automation and campaign analytics",
  },
];
