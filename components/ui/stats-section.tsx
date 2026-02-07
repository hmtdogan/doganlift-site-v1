"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SparklesCore } from "./sparkles";

const stats = [
    { label: "Yıllık Deneyim", value: 15, suffix: "+" },
    { label: "Mutlu Müşteri", value: 500, suffix: "+" },
    { label: "Başarılı Montaj", value: 1000, suffix: "+" },
    { label: "Teknik Destek", value: 7, suffix: "/24" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
}

export function StatsSection() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-black via-black to-zinc-950 overflow-hidden">
            {/* Gradient Fade Overlay at Top */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none z-20" />

            {/* Sparkles Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <SparklesCore
                    id="tsparticlesstats"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={40}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    speed={0.3}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Rakamlarla GÖKDOĞAN
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Yılların deneyimi ve binlerce başarılı projeyle güvenilir çözüm ortağınız
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                        <Counter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-sm md:text-base text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>

                                {/* Border glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 rounded-2xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
