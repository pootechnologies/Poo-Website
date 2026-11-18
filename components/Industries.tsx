type Industry = {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  visual: "bars" | "donut" | "line";
};

const industries: Industry[] = [
  {
    badge: "Payment Analytics",
    title: "Fintech",
    description:
      "Integrated platforms for finance, automated payroll, inventory, and operations — unifying disparate departmental databases into one synchronized source of truth.",
    tags: ["General Ledger", "Tax Compliance", "Auditing"],
    visual: "bars",
  },
  {
    badge: "Patient Insights",
    title: "Healthcare & MedTech",
    description:
      "Patient health records (EHR), laboratory queues, and diagnostic portals developed with stringent security and privacy standards.",
    tags: ["HIPAA Design", "EHR Sync"],
    visual: "donut",
  },
  {
    badge: "Yield Analytics",
    title: "Agriculture & AgriTech",
    description:
      "Farm management, commodity trade exchanges, regional soil analytics, and grain transport routing built for emerging agricultural powerhouses.",
    tags: ["Farm Tracking", "Marketplaces", "Weather Feeds"],
    visual: "line",
  },
];

const barHeights = ["40%", "65%", "50%", "85%", "100%", "75%"];
const barOpacities = [
  "bg-primary-container/20",
  "bg-primary-container/40",
  "bg-primary-container/30",
  "bg-primary-container/70",
  "bg-primary-container",
  "bg-primary-container/80",
];

function IndustryVisual({ visual }: { visual: Industry["visual"] }) {
  if (visual === "bars") {
    return (
      <div className="flex items-end justify-between gap-2 h-20 pt-4 px-2">
        {barHeights.map((height, i) => (
          <div
            key={i}
            className={`w-full ${barOpacities[i]} rounded-t`}
            style={{ height }}
          />
        ))}
      </div>
    );
  }

  if (visual === "donut") {
    return (
      <div className="flex items-center justify-center my-auto gap-4">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg
            className="w-full h-full -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="text-surface-subtle"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="text-primary-container"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeDasharray="87.5, 100"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
          <span className="absolute font-headline-sm text-sm font-bold text-text-primary">
            12.5%
          </span>
        </div>
        <div className="text-xs text-text-muted">
          <p className="font-medium text-text-primary">Clinical Intake</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-16 w-full flex items-end">
      <svg
        className="w-full h-full text-primary-container"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 100 40"
      >
        <path
          d="M0 35 Q 25 30 50 15 T 100 5 L 100 40 L 0 40 Z"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path
          d="M0 35 Q 25 30 50 15 T 100 5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="bg-surface-pure rounded-2xl border border-border-subtle p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <div className="h-44 w-full bg-surface-canvas rounded-xl p-4 flex flex-col justify-between border border-border-subtle mb-6 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full bg-surface-pure text-xs font-semibold text-text-secondary border border-border-subtle">
            {industry.badge}
          </span>
        </div>
        <IndustryVisual visual={industry.visual} />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2">
        {industry.title}
      </h3>
      <p className="font-body-md text-body-md text-text-muted mb-4">
        {industry.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 text-xs font-medium text-text-muted">
        {industry.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded bg-surface-subtle"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section className="w-full py-20 bg-surface-pure" id="industries">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
            Broad Sector Expertise
          </span>
          <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mt-2 mb-3">
            Industries We Serve
          </h2>
          <p className="font-body-md text-body-md text-text-muted">
            Tailored software engineering for high-demand organizations locally
            and worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
