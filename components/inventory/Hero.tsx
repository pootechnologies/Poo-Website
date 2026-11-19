import Image from "next/image";
import Icon from "@/components/Icon";

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
          {/* Right Hero Image */}
          <div className="w-full lg:w-5/12">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-surface-pure">
              <Image
                src="/assets/logo_hero.png"
                alt="Inventory Management"
                width={1140}
                height={427}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
