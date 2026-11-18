"use client";

import { useRef, useState } from "react";
import Icon from "@/components/Icon";

type Testimonial = {
  stars?: number;
  badge: string;
  badgeClass: string;
  quote: string;
  initials: string;
  avatarClass: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    badge: "3d → 45s Rec.",
    badgeClass: "text-text-muted font-medium",
    quote:
      "Po'o Technologies cut our stock reconciliation from 3 days to under 45 seconds across all 14 regional distribution depots.",
    initials: "DH",
    avatarClass:
      "bg-gradient-to-b from-primary to-secondary-container text-on-primary",
    name: "Dawit Haile",
    role: "Supply Chain Director, Regional Dist.",
  },
  {
    badge: "Zero Drift",
    badgeClass: "text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full",
    quote:
      "The RFID gate integration eliminated barcode scan bottlenecks entirely. Real-time fleet visibility is now seamless.",
    initials: "MT",
    avatarClass: "bg-primary/10 text-primary",
    name: "Meron Tadesse",
    role: "VP of Operations, East Africa Logistics",
  },
  {
    badge: "99.9% Uptime",
    badgeClass: "text-text-muted font-medium",
    quote:
      "FEFO lot traceability ensured perishable crop exports cleared customs without a single demurrage penalty.",
    initials: "BW",
    avatarClass:
      "bg-surface-subtle text-text-primary border border-border-subtle",
    name: "Bekele Worku",
    role: "Head of Logistics, Awash Agro-Exports",
  },
  {
    badge: "3-Way Match",
    badgeClass: "text-primary font-medium bg-blue-50 px-2 py-0.5 rounded-full",
    quote:
      "Automated PO generation and ERP sync eliminated our reconciliation discrepancies across 8 multi-hub warehouses.",
    initials: "SA",
    avatarClass: "bg-primary/10 text-primary",
    name: "Sara Alemu",
    role: "Procurement Lead, Nile FMCG Group",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 16 : container.clientWidth;
    container.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const firstCard = container?.firstElementChild as HTMLElement | null;
    if (!container || !firstCard) return;
    const step = firstCard.offsetWidth + 16;
    const index = Math.min(
      testimonials.length - 1,
      Math.max(0, Math.round(container.scrollLeft / step)),
    );
    setActiveIndex(index);
  };

  return (
    <div
      className="bg-surface-pure rounded-3xl p-space-lg shadow-sm border border-border-subtle flex flex-col gap-space-lg relative overflow-hidden"
      id="testimonial-carousel-container"
    >
      {/* Carousel Header */}
      <div className="flex items-center justify-between gap-space-md pb-space-sm border-b border-border-subtle/80">
        <div className="flex items-center gap-space-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <h3 className="font-headline-sm text-body-md font-bold text-text-primary tracking-tight">
            Enterprise Testimonials
          </h3>
          <span className="px-2 py-0.5 rounded-full bg-surface-subtle text-text-muted font-label-code text-[11px]">
            4 Case Studies
          </span>
        </div>
        <div className="flex items-center gap-space-sm">
          <div className="hidden sm:flex items-center gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => {
                  const container = scrollRef.current;
                  const firstCard = container?.firstElementChild as HTMLElement | null;
                  if (!container || !firstCard) return;
                  container.scrollTo({
                    left: index * (firstCard.offsetWidth + 16),
                    behavior: "smooth",
                  });
                }}
                className={`h-1.5 rounded-full block transition-all ${
                  index === activeIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border-subtle"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5 ml-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="w-8 h-8 rounded-full border border-border-subtle bg-surface-pure hover:bg-surface-canvas text-text-secondary flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <Icon name="chevron_left" className="text-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="w-8 h-8 rounded-full border border-border-subtle bg-surface-pure hover:bg-surface-canvas text-text-secondary flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <Icon name="chevron_right" className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-space-md overflow-x-auto pb-2 pt-1 -mx-1 px-1"
        style={{ scrollbarWidth: "thin" }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex-shrink-0 w-[320px] md:w-[350px] bg-surface-canvas/50 rounded-2xl p-space-lg border border-border-subtle hover:border-primary/20 hover:shadow-md transition-all flex flex-col justify-between gap-space-md group"
          >
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="text-[18px]" />
                  ))}
                </div>
                <span
                  className={`font-label-code text-[11px] ${testimonial.badgeClass}`}
                >
                  {testimonial.badge}
                </span>
              </div>
              <blockquote className="font-headline-sm text-body-md text-text-primary font-semibold leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
            </div>
            <div className="flex items-center gap-space-sm pt-space-sm border-t border-border-subtle">
              <div
                className={`w-10 h-10 rounded-full ${testimonial.avatarClass} flex items-center justify-center font-bold text-[14px] flex-shrink-0`}
              >
                {testimonial.initials}
              </div>
              <div>
                <h4 className="font-headline-sm text-[14px] font-bold text-text-primary leading-snug">
                  {testimonial.name}
                </h4>
                <p className="font-body-sm text-[12px] text-text-muted leading-tight">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
