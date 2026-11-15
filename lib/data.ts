import {
  BadgeCheck,
  Bolt,
  Building2,
  Clock3,
  Construction,
  Factory,
  HardHat,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Siren,
  TowerControl,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  location: string;
  type: string;
  image: string;
  scope: string;
  progress: number;
  meta: string[];
}

export interface TimelineItem {
  title: string;
  text: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const navItems = ["Home", "About", "Services", "Projects", "Gallery", "Contact"];

export const stats: Stat[] = [
  { value: 150, suffix: "+", label: "Projects" },
  { value: 5000, suffix: "+", label: "Electric Poles Installed" },
  { value: 350, suffix: "+", label: "KM Infrastructure" },
  { value: 10, suffix: "+", label: "Years Experience" }
];

export const services: Service[] = [
  {
    title: "Electrical Pole Installation",
    description: "Survey-led pole erection for urban roads, highways, and public infrastructure corridors.",
    icon: TowerControl
  },
  {
    title: "Street Lighting",
    description: "Reliable illumination systems designed for safer streets and efficient city operations.",
    icon: Lightbulb
  },
  {
    title: "Highway Lighting",
    description: "High-mast and linear lighting execution for expressways, toll roads, and bridges.",
    icon: Siren
  },
  {
    title: "Power Distribution",
    description: "Distribution network support with cabling, poles, fixtures, and commissioning readiness.",
    icon: Bolt
  },
  {
    title: "Infrastructure Construction",
    description: "Civil support, foundations, trenching, and site coordination for power-led projects.",
    icon: Construction
  },
  {
    title: "Maintenance Services",
    description: "Preventive and corrective maintenance to keep public power assets field-ready.",
    icon: Wrench
  }
];

export const projects: Project[] = [
  {
    title: "Ayodhya Highway",
    location: "Uttar Pradesh",
    type: "Highway Lighting",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    scope: "Highway illumination, pole alignment, feeder coordination, and night-safety handover.",
    progress: 96,
    meta: ["Highway corridor", "Safety lighting", "UP region"]
  },
  {
    title: "Jewar Airport Road",
    location: "Uttar Pradesh",
    type: "Power Infrastructure",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    scope: "Power-led corridor infrastructure supporting airport connectivity and public access routes.",
    progress: 91,
    meta: ["Airport access", "Distribution", "Roadway works"]
  }
];

export const timeline: TimelineItem[] = [
  {
    title: "Mission",
    text: "Deliver dependable, precisely executed infrastructure works that improve mobility, safety, and power access.",
    icon: BadgeCheck
  },
  {
    title: "Vision",
    text: "Become a trusted execution partner for modern public infrastructure across North India.",
    icon: Building2
  },
  {
    title: "Core Values",
    text: "Accountability, site safety, engineering discipline, transparent communication, and durable workmanship.",
    icon: HardHat
  }
];

export const whyChoose = [
  {
    title: "Experienced Team",
    description: "Field teams trained for electrical and civil coordination on active infrastructure sites.",
    icon: Factory
  },
  {
    title: "Quality Construction",
    description: "Material-aware execution, accurate alignment, and inspection-ready project delivery.",
    icon: BadgeCheck
  },
  {
    title: "Safety First",
    description: "Method statements, PPE discipline, and site controls built into every work package.",
    icon: ShieldCheck
  },
  {
    title: "Timely Delivery",
    description: "Milestone-driven planning with practical logistics for high-pressure project windows.",
    icon: Clock3
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80"
];

export const testimonials: Testimonial[] = [
  {
    quote: "The team brought strong site discipline and practical coordination to a complex roadway lighting scope.",
    author: "Project Consultant",
    role: "Public Infrastructure"
  },
  {
    quote: "Their installation quality and field responsiveness helped keep our power infrastructure milestones on track.",
    author: "Operations Lead",
    role: "Electrical Works"
  },
  {
    quote: "A dependable execution partner with a clear understanding of safety, logistics, and public-facing sites.",
    author: "Site Engineer",
    role: "Highway Development"
  }
];

export const contactItems = [
  { label: "Address", value: "Uttar Pradesh, India", icon: MapPin },
  { label: "Phone", value: "+91 98765 43210", icon: Phone },
  { label: "Email", value: "info@shahitraders.example", icon: Mail }
];
