import Image from "next/image";
import Icon from "@/components/Icon";

type Project = {
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdHt4JRul0fg5x4-LmOYg-Vxi8VWNdtWw-8QhSpA6j87kbQzVVLX-RqnLMHXomk82BpvL-eHK7JKuNbHjh-M7ZSZY_4LIBKdOBai84sDTJZgdwlXSIDyq0hv3jmzyyHJv1pRDbnJdjWcpBnahXyJ6uSIHcTRBGra5DyYiNsFI2byyYHo7iYqYdWVexPhGapW90KiYc0-HozqOEsnKwA8hZpVoaUAANuDUFV2ZphSGK",
    alt: "Modern collaborative tech workspace where software engineers discuss a fintech payment dashboard displaying live transaction feeds on dual monitors in bright natural lighting",
    title: "Garage Management System",
    description:
      "Secure payment gateway and digital wallet engine featuring sub-second settlement notifications, merchant checkout SDKs, and local rails integrations.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Chapa API"],
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSf5XNQKmBc7zbDg1S9zaEehkYNpllD1HpPexcI6cFhRi2MfunBXwD-njhN8X_dPHEmDcDhw_BJRX-BUkeQ1KTEtb8Uulzt2rL8RKlE_pWVLhICH5tVFmj1MoXYM3p_Cddf-WVG41R3cXMZdfTzfylsHkMjtP5aUlYlor3-ymz6fu59ui43dfvGACMLeavbLQIuKDGG-72tuhynjmiwJPFa4pXBR3z9VHCKgUw4gCr",
    alt: "High-resolution clinical doctor workstation showing patient records interface and telemedicine call software on ultra-wide curved screen with pristine clean white laboratory background",
    title: "Healthcare Management Portal",
    description:
      "Unified hospital records management, online appointment scheduling, doctor video consults, and encrypted prescription dispatching.",
    tags: ["React", "Django", "FHIR", "WebRTC"],
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC84VGW-Zzo3fpyPmXilzTkqS96Aiz9LH2SsM11w7ahaTj35Ka5ewT48t-Ixan6sEjWRDlDHf_JyedMLF0JJ4QiLVCLUm5pP1WoGajq79MeQP30cHkyCIGamGMgafGiJcq_NQcukgWrN4Yhj_y2ZP4Q2OO1YyS813pyssSlgsB2WQHaXa6RFM2IFVdLbDzgCjD2j99G0Bc2qXmYsqcjnxfr6W2PAcusdLpVoyBe_Hay",
    alt: "Agronomist reviewing real-time crop growth charts and satellite field data on a rugged tablet computer standing in an organic agricultural farm field with sunny sky",
    title: "AgriTech Farm Dashboard",
    description:
      "Precision farm analytics with soil moisture telemetry, satellite NDVI imagery layer integration, and crop commodity market price forecasting.",
    tags: ["React Native", "Python", "MongoDB", "GeoSpatial"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-surface-pure rounded-2xl border border-border-subtle overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative h-56 bg-surface-subtle overflow-hidden">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <a
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-pure/90 backdrop-blur-md flex items-center justify-center text-text-primary hover:bg-primary-container hover:text-on-primary transition-colors shadow"
          href="#contact"
        >
          <Icon name="arrow_outward" className="text-[18px]" />
        </a>
      </div>
      <div className="p-6">
        <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2">
          {project.title}
        </h3>
        <p className="font-body-sm text-body-sm text-text-muted mb-5 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 font-label-md text-label-md text-text-muted">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded bg-surface-canvas border border-border-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="w-full py-20 bg-surface-canvas border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
            Engineering Portfolio
          </span>
          <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mt-2 mb-3">
            Our Recent Projects
          </h2>
          <p className="font-body-md text-body-md text-text-muted">
            Explore production-grade software engineered and deployed by
            Po&apos;o Technologies — built to withstand rigorous high-throughput
            demand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
