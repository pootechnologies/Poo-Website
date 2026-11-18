import Icon from "@/components/Icon";

type WarehouseNode = {
  name: string;
  iconClass: string;
  badge: string;
  badgeClass: string;
  progress: number;
  barClass: string;
  capacity: string;
  queue: string;
  queueClass?: string;
};

const nodes: WarehouseNode[] = [
  {
    name: "Addis Ababa Central Hub",
    iconClass: "text-primary",
    badge: "OPTIMAL",
    badgeClass: "bg-emerald-50 text-emerald-700",
    progress: 78,
    barClass: "bg-primary",
    capacity: "Capacity: 78% (34,120 / 43,500 m³)",
    queue: "18 Dispatches in Queue",
  },
  {
    name: "Hawassa Logistics Hub",
    iconClass: "text-secondary-container",
    badge: "HIGH TURNOVER",
    badgeClass: "bg-blue-50 text-primary",
    progress: 62,
    barClass: "bg-secondary-container",
    capacity: "Capacity: 62% (15,400 / 25,000 m³)",
    queue: "6 Inbound Racks Receiving",
  },
  {
    name: "Dire Dawa Port Transit",
    iconClass: "text-amber-500",
    badge: "CUSTOMS CLEARING",
    badgeClass: "bg-amber-50 text-amber-700",
    progress: 89,
    barClass: "bg-amber-500",
    capacity: "Capacity: 89% (High Load)",
    queue: "2 Reorder Triggers Fired",
    queueClass: "text-amber-700",
  },
];

export default function InventoryHero() {
  return (
    <section className="w-full relative py-space-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-pure via-surface-canvas to-surface-canvas -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 flex flex-col gap-space-md">
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-text-primary tracking-tight leading-tight">
              Smarter Inventory Control & Purchasing Across Every Warehouse
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted max-w-2xl leading-relaxed">
              Minimize stockouts, track lot batches in real time with barcode
              and RFID scanning, and automate purchase orders across all your
              warehouses.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl px-space-lg py-3 shadow-md hover:bg-secondary-container hover:-translate-y-0.5 transition-all"
                href="https://inventory.pootechnologies.tech/login"
              >
                <span>Try it Now&nbsp;</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </div>
          {/* Right Interactive Hub Telemetry Preview Card */}
          <div className="w-full lg:w-5/12">
            <div className="bg-surface-pure rounded-2xl shadow-xl overflow-hidden flex flex-col">
              {/* Terminal Header Bar */}
              <div className="bg-text-primary px-space-md py-3 flex items-center justify-between text-on-primary">
                <div className="flex items-center gap-2">
                  <Icon name="hub" className="text-primary text-[20px]" />
                  <span className="font-headline-sm text-label-lg font-semibold tracking-tight">
                    Active Node Telemetry
                  </span>
                </div>
                <div className="flex items-center gap-2 font-label-code text-[11px] text-outline-variant">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
              {/* Warehouse Node List */}
              <div className="p-space-md flex flex-col gap-space-md bg-surface-canvas/50">
                {nodes.map((node) => (
                  <div
                    key={node.name}
                    className="bg-surface-pure p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon name="location_on" className={`${node.iconClass} text-[18px]`} />
                        <span className="font-headline-sm text-body-md font-semibold text-text-primary">
                          {node.name}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full font-label-code text-[11px] ${node.badgeClass}`}
                      >
                        {node.badge}
                      </span>
                    </div>
                    <div className="w-full bg-surface-subtle h-2 rounded-full overflow-hidden mb-2">
                      <div
                        className={`${node.barClass} h-full rounded-full`}
                        style={{ width: `${node.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between font-label-code text-body-sm text-text-muted">
                      <span>{node.capacity}</span>
                      <span
                        className={`text-text-primary font-medium ${node.queueClass ?? ""}`}
                      >
                        {node.queue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
