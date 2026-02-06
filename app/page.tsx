"use client";

import { HeroSection } from "@/components/ui/hero-odyssey";
import { Map, MapMarker, MarkerTooltip } from "@/components/ui/map";
import Link from "next/link";
import Image from "next/image";

import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">


      {/* Hero Section */}
      <HeroSection />

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Sparkles Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <SparklesCore
            id="tsparticlescontacthome"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={0.5}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Bize Ulaşın
                </h2>
                <p className="text-gray-400 text-lg">
                  Projeleriniz için ücretsiz keşif ve danışmanlık hizmetimizden yararlanın.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 hover:bg-white/5 transition-colors z-20 relative">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Adres</h3>
                    <p className="text-gray-400 text-sm">Şahinler Traktör yanı, Shell karşısı<br />Yeni, Gültekin Topçam Blv. NO:4/A<br />60100 Tokat Merkez/Tokat</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 hover:bg-white/5 transition-colors z-20 relative">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Telefon</h3>
                    <p className="text-gray-400 text-sm flex flex-col gap-1">
                      <a href="tel:+905386182097" className="hover:text-blue-400 transition-colors">+90 538 618 20 97</a>
                      <a href="tel:03565021071" className="hover:text-blue-400 transition-colors">(0356) 502 10 71</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 hover:bg-white/5 transition-colors z-20 relative">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">E-posta</h3>
                    <p className="text-gray-400 text-sm">
                      <a href="mailto:dgnliftasansor@gmail.com" className="hover:text-blue-400 transition-colors">dgnliftasansor@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Component Integration */}
            <div className="h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl shadow-black/50">
              <Map
                center={[36.559700, 40.328300]}
                zoom={17}
                styles={{
                  dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
                  light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                }}
              >
                <MapMarker longitude={36.559700} latitude={40.328300}>
                  <div className="relative flex flex-col items-center -translate-y-full hover:scale-110 transition-transform duration-300 z-50">
                    {/* Pin Body */}
                    <div className="relative z-10 filter drop-shadow-[0_10px_15px_rgba(220,38,38,0.5)]">
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C7.58172 0 4 3.58172 4 8C4 13.5 12 24 12 24C12 24 20 13.5 20 8C20 3.58172 16.4183 0 12 0Z" fill="url(#pinGradient)" />
                        <circle cx="12" cy="8" r="3.5" fill="white" className="shadow-inner" />
                        <defs>
                          <linearGradient id="pinGradient" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF4d4d" />
                            <stop offset="1" stopColor="#990000" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Pulse Animation at the tip */}
                    <div className="absolute bottom-1 translate-y-1/2 w-4 h-4 bg-red-600 rounded-full animate-ping opacity-50"></div>

                    {/* Ground Shadow */}
                    <div className="absolute bottom-1 translate-y-1/2 w-6 h-2 bg-black/60 blur-[3px] rounded-[50%]"></div>

                    {/* Premium Label */}
                    <div className="absolute bottom-full mb-2 px-4 py-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl flex items-center gap-2 whitespace-nowrap transform -translate-y-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="font-bold text-white text-sm tracking-wide">GÖKDOĞAN Merkez</span>
                    </div>
                  </div>
                </MapMarker>
              </Map>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-xs text-gray-400 max-w-[200px]">
                Mouse ile haritayı kontrol edebilir, yakınlaştırıp uzaklaştırabilirsiniz.
              </div>
            </div>
          </div>
        </div>
      </section>


    </main >
  );
}
