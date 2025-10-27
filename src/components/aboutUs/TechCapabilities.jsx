"use client";
import { useState } from "react";
import {
  ArrowRight,
  Cpu,
  Code2,
  Database,
  Smartphone,
  Cloud,
  Server,
} from "lucide-react";
import Image from "next/image";

const iconMap = {
  Cpu: <Cpu />,
  Code2: <Code2 />,
  Database: <Database />,
  Smartphone: <Smartphone />,
  Cloud: <Cloud />,
  Server: <Server />,
};

export default function TechCapabilities({ data }) {
  const { categories, companies } = data;
  const [activeCategory, setActiveCategory] = useState("Artificial Intelligence");

  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl text-left mb-6">
          Tech Capabilities Driving Digital <br />
          Transformation For Our Clients
        </h2>

        {/* Mobile Layout */}
        <div className="block md:hidden mb-6">
          {categories.map((cat) => (
            <div key={cat.id}>
              {/* Category Item */}
              <div
                className={`flex items-center text-sm justify-between px-4 py-3 rounded-lg cursor-pointer mb-2 ${activeCategory === cat.name
                  ? "bg-blue-500"
                  : "bg-blue-600 hover:bg-blue-500"
                  }`}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.name ? "" : cat.name
                  )
                }
              >
                <div className="flex items-center gap-3">
                  {iconMap[cat.icon]}
                  <span className="font-semibold">{cat.name}</span>
                </div>
                {activeCategory === cat.name && <ArrowRight />}
              </div>

              {/* Details */}
              {activeCategory === cat.name && (
                <div className="transition-all duration-500 overflow-hidden bg-white text-black p-4 rounded-xl mb-4">
                  {companies[cat.name] &&
                    Object.entries(companies[cat.name]).map(
                      ([subCat, compList], i) => (
                        <div key={i} className="mb-6">
                          <h4 className="text-sm font-semibold mb-2">
                            {subCat}
                          </h4>
                          <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4">
                            {compList.map((comp, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-5 text-sm font-bold bg-gray-100 px-3 py-4 rounded-xl"
                              >
                                <Image
                                  src="/assets/home/TechCapablities/meta-tech-icon.svg"
                                  alt={comp}
                                  width={24}
                                  height={24}
                                  className="ml-5"
                                />
                                <span className="text-sm font-semibold">
                                  {comp}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 h-[550px] rounded-2xl overflow-hidden">
          {/* Left Side */}
          <div className="bg-blue-600 p-6 overflow-y-auto custom-scrollbar">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`flex items-center text-sm justify-between px-4 py-3 rounded-lg cursor-pointer mb-3 ${activeCategory === cat.name
                  ? "bg-blue-500"
                  : "hover:bg-blue-500"
                  }`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <div className="flex items-center gap-3">
                  {iconMap[cat.icon]}
                  <span className="font-semibold">{cat.name}</span>
                </div>
                {activeCategory === cat.name && <ArrowRight />}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="bg-white text-black p-6 overflow-y-auto">
            {companies[activeCategory] &&
              Object.entries(companies[activeCategory]).map(
                ([subCat, compList], i) => (
                  <div key={i} className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">{subCat}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {compList.map((comp, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-5 text-sm font-bold bg-gray-100 px-3 py-4 rounded-xl"
                        >
                          <Image
                            src="/assets/home/TechCapablities/meta-tech-icon.svg"
                            alt={comp}
                            width={24}
                            height={24}
                            className="ml-5"
                          />
                          <span className="text-sm font-semibold">
                            {comp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
