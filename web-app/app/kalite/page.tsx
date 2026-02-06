import Image from "next/image";

export default function KalitePage() {
    return (
        <main className="min-h-screen pt-32 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                        Kalite Politikamız
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        GÖKDOĞAN Asansör olarak, tüm süreçlerimizde uluslararası kalite standartlarını uyguluyor, güvenliğinizi belgeliyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            name: "CE Sertifikası",
                            desc: "Avrupa Birliği standartlarına tam uygunluk ve güvenlik onayı.",
                            icon: "🇪🇺"
                        },
                        {
                            name: "ISO 9001:2015",
                            desc: "Uluslararası Kalite Yönetim Sistemi standardı.",
                            icon: "📜"
                        },
                        {
                            name: "TSE HYB",
                            desc: "Türk Standartları Enstitüsü Hizmet Yeri Yeterlilik Belgesi.",
                            icon: "🇹🇷"
                        },
                        {
                            name: "EN 81-20/50",
                            desc: "Asansörler için yapım ve montaj güvenlik kuralları.",
                            icon: "🏗️"
                        },
                        {
                            name: "Modül H",
                            desc: "Tam kalite güvence sistemi ile üretim ve montaj onayı.",
                            icon: "✅"
                        },
                        {
                            name: "İSG Politikası",
                            desc: "İş sağlığı ve güvenliği standartlarına tam uyum.",
                            icon: "👷"
                        }
                    ].map((cert, i) => (
                        <div key={i} className="group relative bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 shadow-inner">
                                    <span className="text-4xl filter drop-shadow-md">{cert.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{cert.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
