import Icon from "@/components/Icon";

const techStack = [
  { icon: "terminal", label: "Python" },
  { icon: "code", label: "TypeScript" },
  { icon: "react", label: "React & Next.js" },
  { icon: "database", label: "PostgreSQL" },
  { icon: "palette", label: "Tailwind CSS" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-surface-pure pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Soft background decorative mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Top Pill Badge */}
        <a
          className="inline-flex items-center gap-space-sm px-4 py-1.5 rounded-full bg-surface-container-low text-primary border border-primary-fixed hover:bg-surface-container transition-colors mb-space-lg shadow-sm"
          href="#services"
        >
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="font-label-lg text-label-lg">
            Po&apos;o Technologies — Modern Software Engineering
          </span>
          <Icon name="arrow_forward" className="text-[16px]" />
        </a>
        {/* Main Headline */}
        <h1 className="font-display-hero text-headline-xl md:text-display-hero text-text-primary tracking-tight max-w-4xl mb-space-md">
          Practical Software Solutions{" "}
          <br className="hidden sm:inline" /> By{" "}
          <span className="text-primary-container">Po&apos;o Technologies</span>
        </h1>
        {/* Subtitle */}
        <p className="font-body-lg text-body-lg text-text-muted max-w-2xl mb-space-xl">
          Po&apos;o Technologies empowers modern enterprises and growing
          businesses with state-of-the-art digital infrastructure and custom
          software engineered for scale, high velocity, and unwavering
          reliability.
        </p>
        {/* Trust Bar & Tech Stack */}
        <div className="w-full max-w-4xl pt-8 border-t border-border-subtle/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-label-md text-label-md uppercase tracking-wider text-text-muted">
            Powering high-velocity engineering with
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-on-surface-variant font-label-lg text-label-lg">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <Icon
                  name={tech.icon}
                  className="text-[20px] text-primary shrink-0"
                />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
