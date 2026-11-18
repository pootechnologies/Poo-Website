"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Icon from "@/components/Icon";

const serviceOptions = [
  { value: "inventory", label: "Inventory Management Platform" },
  { value: "caffee", label: "Caffee / Restaurant POS & KDS System" },
  { value: "bus", label: "Bus & Transit Fleet Management" },
  { value: "custom", label: "Custom Enterprise ERP Architecture" },
  { value: "other", label: "Other Software Development" },
];

const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-canvas text-text-primary text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="w-full py-20 bg-surface-pure border-t border-border-subtle"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* High-Impact Light Heroic Card Container */}
        <div className="relative bg-gradient-to-br from-surface-pure via-surface-container-low/60 to-surface-canvas rounded-3xl border border-border-subtle p-8 md:p-14 shadow-lg overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-md text-label-md mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary-container" />{" "}
                24-Hour Proposal Commitment
              </span>
              <h2 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-4">
                Contact Po&apos;o Technologies Today
              </h2>
              <p className="font-body-md text-body-md text-text-muted mb-8 leading-relaxed">
                Tell us about your operational challenges, system requirements,
                or upcoming software initiative. Our engineering directors will
                evaluate your requirements and provide an architectural proposal
                within 24 hours.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-10 h-10 rounded-lg bg-surface-pure border border-border-subtle flex items-center justify-center text-primary shadow-sm">
                    <Icon name="mail" className="text-[20px]" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">
                      Direct Inquiry
                    </span>
                    <a
                      className="font-label-lg text-label-lg font-semibold hover:text-primary transition-colors"
                      href="mailto:hello@pootech.com"
                    >
                      pootechnologies@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-10 h-10 rounded-lg bg-surface-pure border border-border-subtle flex items-center justify-center text-primary shadow-sm">
                    <Icon name="call" className="text-[20px]" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">
                      Direct Engineering Line
                    </span>
                    <a
                      className="font-label-lg text-label-lg font-semibold hover:text-primary transition-colors"
                      href="tel:+251935187474"
                    >
                      +251961217294
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  Available for new project sprints & system migrations
                </span>
              </div>
            </div>
            {/* Quick Contact Form */}
            <div className="lg:col-span-6 bg-surface-pure rounded-2xl border border-border-subtle p-6 md:p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <span className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Icon name="check_circle" className="text-[28px]" />
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">
                    Request Received
                  </h3>
                  <p className="font-body-md text-body-md text-text-muted">
                    Thank you! Your message has been received by Po&apos;o
                    Technologies. We will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block font-label-md text-label-md text-text-secondary mb-1.5 font-medium">
                        Your Name
                      </label>
                      <input
                        className={inputClass}
                        id="contact-name"
                        name="name"
                        placeholder="e.g. Samuel Bekele"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block font-label-md text-label-md text-text-secondary mb-1.5 font-medium">
                        Business Email
                      </label>
                      <input
                        className={inputClass}
                        id="contact-email"
                        name="email"
                        placeholder="name@company.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block font-label-md text-label-md text-text-secondary mb-1.5 font-medium">
                      Service of Interest
                    </label>
                    <select className={inputClass} id="contact-service" name="service">
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-scope" className="block font-label-md text-label-md text-text-secondary mb-1.5 font-medium">
                      Project Scope & Goals
                    </label>
                    <textarea
                      className={inputClass}
                      id="contact-scope"
                      name="scope"
                      placeholder="Outline your key requirements, estimated timeline, or current system pain points..."
                      required
                      rows={3}
                    />
                  </div>
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg py-3.5 px-6 rounded-xl shadow-md transition-all"
                    type="submit"
                  >
                    <span>Submit Project Request</span>
                    <Icon name="send" className="text-[18px]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
