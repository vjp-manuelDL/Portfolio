"use client";

import { useState } from "react";
import { menuCategories } from "@/lib/menu-data";

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);

  const active = menuCategories.find((c) => c.id === activeTab);

  return (
    <section id="carta" className="bg-[#edf5fa] py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-14 bg-[#c8a96e]/60" />
            <span className="text-[#c8a96e] text-[10px] tracking-[0.35em] uppercase">
              Desayunos
            </span>
            <div className="h-px w-14 bg-[#c8a96e]/60" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-[#0a1f35] mb-3">
            Nuestra Carta
          </h2>
          <p className="text-[#6a8a9f] text-xs tracking-wider">
            Todos los precios incluyen IVA
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-12 scrollbar-hide">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-none px-5 py-2 text-[10px] tracking-[0.18em] uppercase whitespace-nowrap transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#c8a96e] text-black font-medium"
                  : "border border-[#0a1f35]/20 text-[#1a3a52]/70 hover:border-[#c8a96e]/50 hover:text-[#0a1f35]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {active && (
          <div>
            {/* Regular items */}
            {active.items && (
              <div className="grid md:grid-cols-2 gap-x-16">
                {active.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between py-4 border-b border-[#0a1f35]/10 group"
                  >
                    <div className="pr-4">
                      <p className="text-[#0a1f35] text-sm group-hover:text-[#c8a96e] transition-colors duration-200">
                        {item.name}
                      </p>
                      {item.description && (
                        <p className="text-[#6a8a9f] text-xs mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="text-[#c8a96e] font-mono text-sm shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Subcategories (Entrepanes) */}
            {active.subcategories && (
              <div className="space-y-12">
                {active.subcategories.map((sub, si) => (
                  <div key={si}>
                    <h3 className="text-[#c8a96e] text-[10px] tracking-[0.35em] uppercase mb-6 pb-2 border-b border-[#c8a96e]/25">
                      {sub.name}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-16">
                      {sub.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between py-4 border-b border-[#0a1f35]/10 group"
                        >
                          <div className="pr-4">
                            <p className="text-[#0a1f35] text-sm group-hover:text-[#c8a96e] transition-colors duration-200">
                              {item.name}
                            </p>
                            {item.description && (
                              <p className="text-[#6a8a9f] text-xs mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <span className="text-[#c8a96e] font-mono text-sm shrink-0">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Addon note */}
            {active.addon && (
              <p className="mt-10 text-center text-[#6a8a9f] text-xs tracking-wide italic">
                * {active.addon}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
