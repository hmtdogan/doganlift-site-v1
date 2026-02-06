export default function KurumsalPage() {
    return (
        <main className="min-h-screen pt-32 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
                            Kurumsal Kimliğimiz
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Güven, Kalite ve Teknolojinin buluşma noktası GÖKDOĞAN.
                        </p>
                    </div>

                    {/* Content Box */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-6">Hakkımızda</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                GÖKDOĞAN, asansör ve yürüyen merdiven sistemleri alanında Tokat merkezli olarak faaliyet gösteren, sektörün öncü teknoloji firmalarından biridir.
                            </p>
                            <p>
                                Kurulduğumuz günden bu yana, "Önce Güvenlik" ilkesinden taviz vermeden, modern mühendislik çözümlerini estetik tasarımlarla birleştiriyoruz. Konutlardan iş merkezlerine, hastanelerden kamu binalarına kadar geniş bir yelpazede dikey taşıma çözümleri sunuyoruz.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Vizyonumuz", desc: "Sektörde global standartları belirleyen teknoloji lideri olmak." },
                            { title: "Misyonumuz", desc: "İnsan hayatını kolaylaştıran, güvenli ve konforlu taşıma sistemleri üretmek." },
                            { title: "Değerlerimiz", desc: "Şeffaflık, İnovasyon, Müşteri Odaklılık ve Sürekli Gelişim." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                <h3 className="text-xl font-bold text-blue-400 mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
}
