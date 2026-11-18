import Icon from "@/components/Icon";

const stats = [
  { value: "15+", label: "Projects Delivered", sub: "Across web, mobile, & cloud" },
  { value: "98%", label: "Client Satisfaction", sub: "Long-term enterprise retention" },
  { value: "99.9%", label: "Uptime SLA", sub: "Mission-critical resilience" },
  { value: "10+", label: "Industries Served", sub: "Retail, logistics, med, transit" },
];

const avatars = ["PT", "SE", "QA"];
const avatarColors = [
  "bg-primary-container text-on-primary",
  "bg-secondary-container text-on-primary",
  "bg-text-primary text-surface-pure",
];

export default function About() {
  return (
    <section className="w-full py-20 bg-surface-pure border-t border-border-subtle" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary font-label-md text-label-md mb-4">
              <Icon name="corporate_fare" className="text-[15px]" />{" "}
              Who We Are
            </div>
            <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-6">
              About Po&apos;o Technologies
            </h2>
            <div className="space-y-4 font-body-md text-body-md text-text-muted">
              <p>
                <strong className="text-text-primary font-semibold">
                  Po&apos;o Technologies
                </strong>{" "}
                is a premier software engineering and solutions firm that helps
                businesses replace sluggish legacy workflows with agile, modern
                digital platforms. We craft tailored software that accelerates
                operations, reduces overhead, and unlocks long-term scalability.
              </p>
              <p>
                Our senior engineers, UI architects, and systems strategists
                collaborate tightly with client leadership to comprehend
                operational pain points before writing a single line of code.
                From inventory engines to fleet dispatching hubs, our software
                guarantees resilience in high-demand environments.
              </p>
            </div>
            {/* Team Avatars & Culture */}
            <div className="mt-8 pt-6 border-t border-border-subtle flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                {avatars.map((initials, i) => (
                  <div
                    key={initials}
                    className={`w-10 h-10 rounded-full ${avatarColors[i]} flex items-center justify-center font-bold text-xs ring-2 ring-surface-pure`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <span className="block font-label-lg text-label-lg text-text-primary font-semibold">
                  The Team
                </span>
                <span className="block font-body-sm text-body-sm text-text-muted">
                  Agile, test-driven, and client-dedicated
                </span>
              </div>
            </div>
          </div>
          {/* 4 Stat Metric Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-canvas rounded-2xl border border-border-subtle p-6 flex flex-col justify-center items-center text-center"
              >
                <span className="font-display-hero text-headline-xl text-primary font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="font-label-lg text-label-lg text-text-secondary mt-1 font-semibold">
                  {stat.label}
                </span>
                <span className="font-body-sm text-body-sm text-text-muted mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
