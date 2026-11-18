import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import InventoryHero from "@/components/inventory/Hero";
import InventoryMetrics from "@/components/inventory/Metrics";
import Pricing from "@/components/inventory/Pricing";

export const metadata: Metadata = {
  title: "Inventory Management — Po'o Technologies",
  description:
    "Smarter inventory control and purchasing across every warehouse. Minimize stockouts, track lot batches in real time with barcode and RFID scanning, and automate purchase orders.",
};

export default function InventoryPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-canvas min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          <InventoryHero />
          <InventoryMetrics />
          <Pricing />
          <div id="consultation">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
