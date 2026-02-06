import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <Image src="/logo.jpeg" alt="GÖKDOĞAN" width={300} height={80} className="w-auto h-24 object-contain invert grayscale brightness-200 contrast-200 mix-blend-screen" />
                        </div>
                        <p className="text-gray-500 text-sm">
                            Tokat'ta ileri teknoloji ve güvenli asansör çözümleri sunuyoruz.
                        </p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-white font-semibold mb-4">Kurumsal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/kurumsal" className="hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/hizmetler" className="hover:text-blue-400 transition-colors">Hizmetlerimiz</Link></li>
                            <li><Link href="/kalite" className="hover:text-blue-400 transition-colors">Kalite Belgeleri</Link></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h4 className="text-white font-semibold mb-4">Yasal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/kvkk" className="hover:text-blue-400 transition-colors">KVKK</Link></li>
                            <li><Link href="/gizlilik" className="hover:text-blue-400 transition-colors">Gizlilik Politikası</Link></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h4 className="text-white font-semibold mb-4">İletişim</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="tel:+905386182097" className="hover:text-blue-400 transition-colors">+90 538 618 20 97</a></li>
                            <li><a href="mailto:dgnliftasansor@gmail.com" className="hover:text-blue-400 transition-colors">dgnliftasansor@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; 2026 GÖKDOĞAN - Bilal Doğan. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};
