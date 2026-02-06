export default function CozumlerPage() {
    const services = [
        {
            title: "Asansör Montajı",
            desc: "Yüksek katlı binalar, konutlar ve ticari alanlar için standartlara uygun, güvenli anahtar teslim montaj hizmetleri.",
            icon: "🏗️"
        },
        {
            title: "Periyodik Bakım",
            desc: "Asansörlerinizin güvenliği ve uzun ömürlü olması için yasal zorunluluklara uygun aylık detaylı bakım servisleri.",
            icon: "🔧"
        },
        {
            title: "Revizyon & Modernizasyon",
            desc: "Eskiyen asansörlerinizi yeni güvenlik yönetmeliklerine ve modern estetik trendlere göre yeniliyoruz.",
            icon: "⚡"
        },
        {
            title: "Arıza & Onarım",
            desc: "7/24 acil müdahale ekibimizle, plansız duruşlarınızı en aza indiriyor ve hızlı çözümler üretiyoruz.",
            icon: "🚨"
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-12">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Hizmetlerimiz
                    </h1>
                    <p className="text-gray-400 text-lg">
                        İhtiyacınıza özel, mühendislik harikası dikey taşıma sistemleri.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <span className="text-4xl">{service.icon}</span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
