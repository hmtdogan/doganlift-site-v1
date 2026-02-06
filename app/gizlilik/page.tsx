export default function GizlilikPage() {
    return (
        <main className="min-h-screen pt-32 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Gizlilik Politikası
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Veri gizliliğiniz ve güvenliğiniz en temel önceliğimizdir.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Box 1 */}
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Veri Güvenliği</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Toplanan bilgileriniz, endüstri standardı güvenlik önlemleriyle (SSL şifreleme, güvenlik duvarları) korunmaktadır. Yetkisiz erişimlere karşı sürekli sistem taramaları yapılmaktadır.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">🍪</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Çerez Politikası</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Web sitemizdeki deneyiminizi geliştirmek için zorunlu ve analitik çerezler kullanıyoruz. Tarayıcı ayarlarınızdan çerez tercihlerinizi dilediğiniz zaman yönetebilirsiniz.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">🔗</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Üçüncü Taraf Bağlantılar</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Sitemiz, iş ortaklarımıza veya referanslarımıza ait dış bağlantılar içerebilir. Bu sitelerin gizlilik politikalarından ve içeriklerinden kurumumuz sorumlu değildir.
                            </p>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">📧</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Gizlilik politikamızla ilgili her türlü soru ve öneriniz için <a href="mailto:dgnliftasansor@gmail.com" className="text-emerald-400 hover:underline">dgnliftasansor@gmail.com</a> adresinden veya iletişim sayfamızdan bize ulaşabilirsiniz.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center border-t border-white/5 pt-8">
                        <p className="text-gray-500 text-sm">
                            Bu politika en son 06.02.2026 tarihinde güncellenmiştir.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
