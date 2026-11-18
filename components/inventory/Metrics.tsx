import Testimonials from "./Testimonials";
import Icon from "@/components/Icon";

const stats = [
  {
    icon: "apartment",
    value: "25+",
    title: "Active Enterprise Clients",
    badge: null,
  },
  {
    icon: "security",
    value: "99.99%",
    title: "Verified System Uptime",
    badge: { label: "RELIABILITY", className: "bg-emerald-50 text-emerald-700" },
  },
  {
    icon: "speed",
    value: "<350ms",
    title: "Barcode & RFID Query Sync",
    badge: { label: "LATENCY", className: "bg-amber-50 text-amber-700" },
  },
];

export default function InventoryMetrics() {
  return (
    <section
      className="w-full py-space-xl bg-surface-canvas"
      id="architecture"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-space-xl flex flex-col items-center gap-space-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-code text-label-code uppercase tracking-wider font-bold">
            <Icon name="verified" className="text-[16px]" />
            VERIFIED PLATFORM METRICS
          </span>
          <h2 className="font-headline-xl text-headline-xl text-text-primary font-bold mt-1 tracking-tight">
            Powering High-Volume Supply Chains Worldwide
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-1 leading-relaxed">
            Over 250+ enterprise supply chains, logistics hubs, and national
            distribution networks rely on Po&apos;o Technologies for sub-second
            inventory orchestration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-space-xl">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-surface-pure p-space-lg rounded-2xl shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-space-sm">
                <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name={stat.icon} className="text-[24px]" />
                </span>
                {stat.badge && (
                  <span
                    className={`font-label-code text-[11px] font-bold px-2 py-0.5 rounded-full ${stat.badge.className}`}
                  >
                    {stat.badge.label}
                  </span>
                )}
              </div>
              <div>
                <div className="font-display-hero text-headline-xl text-text-primary font-extrabold tracking-tight mb-1">
                  {stat.value}
                </div>
                <h3 className="font-headline-sm text-body-md font-bold text-text-primary mb-1">
                  {stat.title}
                </h3>
              </div>
            </div>
          ))}
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
