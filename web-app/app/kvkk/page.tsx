export default function KVKKPage() {
    return (
        <main className="min-h-screen pt-32 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            KVKK Aydınlatma Metni
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Kişisel verilerinizin güvenliği bizim için önemlidir.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        {/* Section 1 */}
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/20 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">1</span>
                                Veri Sorumlusu
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                GÖKDOĞAN Asansör Sistemleri olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla; kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun bir şekilde işleyebilecek, kaydedebilecek, saklayabilecek, sınıflandırabilecek, güncelleyebilecek ve mevzuatın izin verdiği hallerde üçüncü kişilere açıklayabilecek/devredebileceğiz.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/20 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">2</span>
                                Kişisel Verilerin İşlenme Amacı
                            </h2>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                                <li>Asansör montaj, bakım ve onarım hizmetlerinin yürütülmesi,</li>
                                <li>Müşteri taleplerinin ve şikayetlerinin yönetilmesi,</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi,</li>
                                <li>Hizmet kalitesinin artırılması ve müşteri memnuniyeti çalışmaları.</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/20 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">3</span>
                                Haklarınız
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                KVKK'nın 11. maddesi gereği;
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                                <li>Yanlış veya eksik işlenen verilerin düzeltilmesini isteme haklarına sahipsiniz.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-sm">
                            Son Güncelleme: 06.02.2026
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
