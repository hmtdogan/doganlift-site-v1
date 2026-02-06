"use client";

import { Map, MapMarker } from "@/components/ui/map";
import { SparklesCore } from "@/components/ui/sparkles";

export default function IletisimPage() {
    return (
        <main className="min-h-screen pt-32 pb-12 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <SparklesCore
                    id="tsparticlesiletisim"
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

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">İletişime Geçin</h1>
                            <p className="text-gray-400 text-lg">
                                7/24 Teknik destek, arıza kaydı ve yeni proje teklifleri için bize ulaşabilirsiniz.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 bg-black/90 backdrop-blur-md border border-white/5 rounded-2xl relative z-20">
                                <h3 className="text-blue-400 font-bold mb-2">Merkez Ofis</h3>
                                <p className="text-gray-300">
                                    Şahinler Traktör yanı, Shell karşısı<br />
                                    Yeni, Gültekin Topçam Blv. NO:4/A<br />
                                    60100 Tokat Merkez/Tokat
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-black/90 backdrop-blur-md border border-white/5 rounded-2xl relative z-20">
                                    <h3 className="text-blue-400 font-bold mb-2">Telefon</h3>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+905386182097" className="text-white hover:text-blue-400 transition-colors">+90 538 618 20 97</a>
                                        <a href="tel:03565021071" className="text-white hover:text-blue-400 transition-colors">(0356) 502 10 71</a>
                                    </div>
                                </div>
                                <div className="p-6 bg-black/90 backdrop-blur-md border border-white/5 rounded-2xl relative z-20">
                                    <h3 className="text-blue-400 font-bold mb-2">E-Mail</h3>
                                    <a href="mailto:dgnliftasansor@gmail.com" className="text-white hover:text-blue-400 transition-colors break-all">
                                        dgnliftasansor@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[600px] w-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
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
                    </div>

                </div>

            </div>
        </main>
    );
}
