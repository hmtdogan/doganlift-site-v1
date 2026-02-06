import { Map } from "@/components/ui/map";
import { HeroSection } from "@/components/ui/hero-odyssey";

export function MapDemo() {
    return (
        <div className="h-[400px] w-full">
            <Map center={[-74.006, 40.7128]} zoom={12} />
        </div>
    );
}

export function HeroDemo() {
    return (
        <div className="flex w-full h-screen justify-center items-center">
            <HeroSection />
        </div>
    );
}
