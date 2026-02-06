"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Kurumsal", href: "/kurumsal" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "İletişim", href: "/iletisim" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-[1000] border-b border-white/10 bg-black">
            <div className="container mx-auto px-4 flex justify-between items-center h-24 relative">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative flex items-center">
                        <Image
                            src="/logo.jpeg"
                            alt="GÖKDOĞAN Logo"
                            width={350}
                            height={100}
                            className="w-auto h-20 invert grayscale brightness-200 contrast-200 mix-blend-screen transition-all duration-300"
                        />
                    </div>
                </Link>
                <div className="hidden md:flex gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                    isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 rounded-full border border-blue-500/30 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        )
                    })}
                </div>
                <a
                    href="https://wa.me/905386182097?text=Merhaba,%20asansör%20teklifi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-all hover:bg-blue-50 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95"
                >
                    Teklif Alın
                </a>
            </div>
        </nav>
    );
}
