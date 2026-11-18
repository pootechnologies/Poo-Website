"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

type FaqItem = {
  icon: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    icon: "help_outline",
    question: "What is Po'o Technologies?",
    answer:
      "Po'o Technologies is a specialized software engineering firm delivering custom business applications, inventory engines, cafe management systems, fleet dispatching platforms, and enterprise cloud architecture that modernizes organizational workflows.",
  },
  {
    icon: "code",
    question: "What technologies does Po'o Technologies specialize in?",
    answer:
      "Our primary engineering stack features React, Next.js, Node.js, Python, PostgreSQL, Redis, and Tailwind CSS. For transit and telematics hardware, we integrate MQTT broker protocols, GPS devices, and robust POS peripheral hardware.",
  },
  {
    icon: "schedule",
    question: "How long does a typical software project take?",
    answer:
      "Turnkey solutions or targeted modular systems (such as Cafe POS or specific Inventory modules) can go live within 3 to 6 weeks. Broad multi-departmental enterprise ERPs or customized transit fleets typically span 8 to 14 weeks from scoping to complete rollout.",
  },
  {
    icon: "support_agent",
    question:
      "Does Po'o Technologies offer ongoing maintenance and support?",
    answer:
      "Yes. Every production software deployment includes dedicated SLA maintenance options, uptime monitoring, security patching, cloud backups, and live operator assistance for mission-critical reliability.",
  },
  {
    icon: "group_add",
    question:
      "Can Po'o Technologies collaborate with our existing in-house team?",
    answer:
      "Absolutely. We frequently operate as an embedded senior engineering strike squad, assisting your internal developers with architectural design, code review standards, and CI/CD automated deployment pipelines.",
  },
  {
    icon: "alt_route",
    question: "What does the development process look like?",
    answer:
      "Our agile workflow is segmented into four distinct stages: 1) Requirements discovery and architectural wireframing, 2) Iterative bi-weekly sprint demos, 3) Stress-testing & hardware validation, and 4) Final zero-downtime deployment accompanied by comprehensive team training.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="w-full py-20 bg-surface-canvas border-t border-border-subtle"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
            Transparent Guidance
          </span>
          <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mt-2 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-text-muted">
            Can&apos;t find what you&apos;re looking for? Reach out directly to
            the{" "}
            <a className="text-primary hover:underline font-medium" href="#contact">
              Po&apos;o Technologies team
            </a>
            .
          </p>
        </div>
        {/* Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-surface-pure rounded-xl border border-border-subtle overflow-hidden transition-all shadow-sm"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  onClick={() => toggle(index)}
                  type="button"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <Icon name={faq.icon} className="text-primary text-[20px] shrink-0" />
                    <span className="font-label-lg text-label-lg text-text-primary">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`text-text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <Icon name="expand_more" className="text-[20px]" />
                  </span>
                </button>
                <div
                  className={`px-6 pb-5 pt-0 font-body-md text-body-md text-text-muted border-t border-border-subtle/50 ${
                    isOpen ? "" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
