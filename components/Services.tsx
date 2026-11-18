import Link from "next/link";
import Icon from "@/components/Icon";

type Service = {
  icon: string;
  title: string;
  href: string;
  cta: string;
  ctaIcon: string;
  description: string;
  features: string[];
  tags: string[];
};

const services: Service[] = [
  {
    icon: "inventory_2",
    title: "Inventory Management",
    href: "/inventory",
    cta: "Deploy",
    ctaIcon: "arrow_forward",
    description:
      "Real-time multi-warehouse control designed to prevent stockouts, audit supply levels, and automate precision purchasing cycles.",
    features: [
      "Multi-warehouse live ledger and batch lot tracking",
      "Hardware barcode, RFID, & handheld QR scanner sync",
      "Predictive restocking alerts & vendor PO automation",
      "Custom tax valuation metrics (FIFO / LIFO / Weighted)",
    ],
    tags: ["PostgreSQL", "Redis", "Python"],
  },
  {
    icon: "local_cafe",
    title: "Caffee Management",
    href: "/#contact",
    cta: "Deploy",
    ctaIcon: "arrow_forward",
    description:
      "End-to-end POS, digital tableside orders, and seamless kitchen display coordination built for speed during peak rush hours.",
    features: [
      "Ultra-fast touchscreen Cloud POS with offline resilience",
      "Real-time Kitchen Display System (KDS) synchronicity",
      "Ingredient-level inventory deduction per cup & meal",
      "Dynamic QR table orders, staff shifts & end-of-day revenue",
    ],
    tags: ["React", "WebSockets", "Chapa / Telebirr"],
  },
  {
    icon: "directions_bus",
    title: "Bus Management",
    href: "/#contact",
    cta: "Deploy",
    ctaIcon: "arrow_forward",
    description:
      "Intelligent transit dispatching, digital commuter ticketing, and comprehensive telematics for urban and cross-country bus fleets.",
    features: [
      "Sub-second GPS vehicle telemetry & live route tracking",
      "Commuter QR ticketing, NFC cards, and mobile payments",
      "Driver duty roster, shift logs & speeding safety alerts",
      "Fuel consumption analysis & predictive maintenance schedules",
    ],
    tags: ["GIS / Maps", "MQTT", "Next.js"],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col bg-surface-pure rounded-2xl border border-border-subtle p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-1">
      <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-primary-container to-secondary rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300 shadow-sm">
        <Icon name={service.icon} className="text-[28px]" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-headline-md text-headline-md text-text-primary">
          {service.title}
        </h3>
      </div>
      <p className="font-body-md text-body-md text-text-muted mb-6">
        {service.description}
      </p>
      <ul className="space-y-3 font-body-sm text-body-sm text-text-secondary mb-8 mt-auto">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Icon
              name="check_circle"
              className="text-primary text-[18px] mt-0.5 shrink-0"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-surface-subtle text-xs font-medium text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          className="inline-flex items-center text-primary font-label-md text-label-md hover:translate-x-0.5 transition-transform"
          href={service.href}
        >
          {service.cta}{" "}
          <Icon name={service.ctaIcon} className="text-[16px] ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      className="w-full py-20 bg-surface-canvas border-y border-border-subtle"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md mb-3">
              <Icon name="tune" className="text-[14px]" />{" "}
              Core Specializations
            </div>
            <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight">
              Our Services
            </h2>
            <p className="font-body-md text-body-md text-text-muted max-w-xl mt-2">
              Tailored enterprise software engineering delivering tangible
              operational impact, absolute inventory control, and seamless
              logistics.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-pure border border-border-subtle font-label-md text-label-md text-text-secondary shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />{" "}
              Active Production Deployments
            </div>
          </div>
        </div>
        {/* 3 Core Highlighted Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
