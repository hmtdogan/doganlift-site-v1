"use client";

import { HeroSection } from "@/components/ui/hero-odyssey";
import { Map, MapMarker, MarkerTooltip } from "@/components/ui/map";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">


      {/* Hero Section */}
      <HeroSection />

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-zinc-950 relative">
        <div className="container mx-auto px-4">
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
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Adres</h3>
                    <p className="text-gray-400 text-sm">Şahinler Traktör yanı, Shell karşısı<br />Yeni, Gültekin Topçam Blv. NO:4/A<br />60100 Tokat Merkez/Tokat</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Telefon</h3>
                    <p className="text-gray-400 text-sm flex flex-col gap-1">
                      <a href="tel:+905386182097" className="hover:text-blue-400 transition-colors">+90 538 618 20 97</a>
                      <a href="tel:03565021071" className="hover:text-blue-400 transition-colors">(0356) 502 10 71</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
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
                center={[36.558144, 40.328858]}
                zoom={15}
                styles={{
                  dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
                  light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                }}
              >
                <MapMarker longitude={36.558144} latitude={40.328858}>
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-4 w-4 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                    <div className="relative h-4 w-4 rounded-full border-2 border-white bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
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
