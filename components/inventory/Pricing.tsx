import Icon from "@/components/Icon";

type PlanFeature = {
  text: string;
  highlight?: boolean;
};

type Plan = {
  badge: string;
  badgeClass: string;
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  priceNoteClass?: string;
  featuresHeading: string;
  featuresHeadingClass?: string;
  features: PlanFeature[];
  cta: string;
  ctaIcon: string;
  ctaClass: string;
  featured?: boolean;
};

const basicFeatures: PlanFeature[] = [
  "Sales Management System",
  "Real-time Inventory Tracking & Dashboard",
  "Product Catalog (Manual + Excel Export)",
  "Stock Movement & Transfers",
  "Low-stock Alerts",
  "Customer Management (profiles & order history)",
  "Credit Management",
  "Role-Based Access Control",
  "Reports & Analytics (sales, inventory changes, trends)",
  "Mobile-friendly, Cloud Hosting & Regular Backups",
  "Hosting + Regular Support + Continuous System updates",
].map((text) => ({ text }));

const plans: Plan[] = [
  {
    badge: "Single-Site & Regional",
    badgeClass: "bg-surface-subtle text-text-secondary",
    title: "Basic Plan",
    subtitle: "For Small-sized businesses",
    price: "$7000",
    priceNote: "$1,800/yr billed annually",
    priceNoteClass: "text-emerald-600",
    featuresHeading: "Core Capabilities",
    features: basicFeatures,
    cta: "Get Started with Basic",
    ctaIcon: "arrow_forward",
    ctaClass:
      "bg-surface-subtle hover:bg-surface-canvas text-text-primary border border-border-subtle",
  },
  {
    badge: "Scale & Multi-Hub",
    badgeClass: "bg-primary/10 text-primary",
    title: "Pro Plan",
    subtitle:
      "For Medium-sized businesses and multi-branch organizations",
    price: "$9500",
    priceNote: "$4,900/yr billed annually",
    priceNoteClass: "text-emerald-600",
    featuresHeading: "Everything in Basic, plus:",
    featuresHeadingClass: "text-primary",
    features: [
      { text: "All features from the Basic Plan", highlight: true },
      { text: "Multi-branch Management" },
      { text: "Multi-warehouse Management" },
    ],
    cta: "Deploy Pro Architecture",
    ctaIcon: "bolt",
    ctaClass:
      "bg-primary text-on-primary hover:bg-secondary-container shadow-md hover:-translate-y-0.5",
    featured: true,
  },
  {
    badge: "Unlimited & Sovereign",
    badgeClass: "bg-text-primary text-on-primary",
    title: "Premium Plan",
    subtitle:
      "Large enterprises, multi-branch organizations and distributors",
    price: "$12000",
    priceNote: "Billed annually or custom enterprise terms",
    featuresHeading: "Enterprise Sovereign Stack",
    features: [
      { text: "All features from the Pro Plan", highlight: true },
      { text: "Batch / Serial Number & Expiry Date Tracking" },
      { text: "Supplier & Purchase Order Management" },
      { text: "Performa Management" },
      { text: "Automated Reorder Rules & Advanced Alerting" },
      { text: "Custom Analytics Dashboards & KPI Reports" },
      { text: "Integration with POS" },
      { text: "Dedicated Account Manager" },
    ],
    cta: "Request Enterprise Deployment",
    ctaIcon: "verified",
    ctaClass:
      "bg-text-primary hover:bg-secondary-container text-on-primary shadow-md",
  },
];

function FeatureList({ features }: { features: PlanFeature[] }) {
  return (
    <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-text-secondary">
      {features.map((feature) => (
        <li key={feature.text} className="flex items-start gap-2">
          <Icon name="check_circle" className="text-primary text-[18px] mt-0.5 shrink-0" />
          <span
            className={
              feature.highlight ? "font-medium text-text-primary" : ""
            }
          >
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Pricing() {
  return (
    <section
      className="w-full py-space-xl bg-surface-canvas border-t border-border-subtle"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-space-xl flex flex-col items-center gap-space-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-code text-label-code uppercase tracking-wider font-bold">
            <Icon name="payments" className="text-[16px]" />
            Transparent Tiered Architecture
          </span>
          <h2 className="font-headline-xl text-headline-xl text-text-primary font-bold mt-1 tracking-tight">
            Predictable, Scalable Investment for Every Stage of Growth
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-1 leading-relaxed">
            Choose the inventory management deployment tier tailored to your
            operational scale — from single-depot logistics to multi-country
            enterprise fulfillment.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-space-md inline-flex items-center p-1 rounded-xl bg-surface-pure border border-border-subtle shadow-sm">
            <button
              className="px-4 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-text-primary transition-colors"
              type="button"
            >
              Monthly Billing
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm flex items-center gap-1.5"
              type="button"
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded-full bg-surface-pure/20 text-on-primary font-label-code text-[11px] font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={
                plan.featured
                  ? "bg-surface-pure rounded-3xl p-space-lg shadow-xl border-2 border-primary flex flex-col justify-between hover:shadow-2xl transition-all relative"
                  : "bg-surface-pure rounded-3xl p-space-lg shadow-sm border border-border-subtle flex flex-col justify-between hover:shadow-md transition-all relative"
              }
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-primary text-on-primary font-label-code text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Icon name="star" className="text-[14px]" />
                    Most Popular • High Throughput
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-space-sm pt-2">
                  <span
                    className={`px-3 py-1 rounded-full font-label-code text-[11px] font-bold uppercase tracking-wider ${plan.badgeClass}`}
                  >
                    {plan.badge}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary font-bold">
                  {plan.title}
                </h3>
                <p className="font-body-sm text-body-sm text-text-muted mt-1 mb-space-md">
                  {plan.subtitle}
                </p>

                <div className="pb-space-md mb-space-md border-b border-border-subtle">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`font-display-hero text-headline-xl font-extrabold ${
                        plan.featured ? "text-primary" : "text-text-primary"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="font-body-md text-body-md text-text-muted">
                      / Year
                    </span>
                  </div>
                  <span
                    className={`font-label-code text-[11px] block mt-0.5 ${plan.priceNoteClass ?? "text-text-muted"}`}
                  >
                    {plan.priceNote}
                  </span>
                </div>

                <div className="space-y-space-sm">
                  <span
                    className={`font-label-code text-[11px] block uppercase tracking-wider font-bold mb-1 ${plan.featuresHeadingClass ?? "text-text-muted"}`}
                  >
                    {plan.featuresHeading}
                  </span>
                  <FeatureList features={plan.features} />
                </div>
              </div>

              <div className="pt-space-lg mt-space-md border-t border-border-subtle">
                <a
                  className={`w-full inline-flex items-center justify-center gap-2 font-label-lg text-label-lg rounded-xl py-3 px-space-md transition-all ${plan.ctaClass}`}
                  href="#consultation"
                >
                  <span>{plan.cta}</span>
                  <Icon name={plan.ctaIcon} className="text-[18px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
