'use client';

export default function StreetBackground() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-neutral-950 overflow-hidden">
            {/* 1. Generated Mumbai Skyline Background */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `url("/mumbai_skyline_v2.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* 2. Base Concrete/Grunge Texture Overlay */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* 3. Neon Spotlights (Animated) - Mumbai Colors (Pink & Amber/Yellow) */}
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-fuchsia-600/20 blur-[150px] rounded-full animate-pulse-slow mix-blend-screen" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-amber-500/10 blur-[150px] rounded-full animate-pulse-slow delay-1000 mix-blend-screen" />

            {/* 4. Moving Searchlights */}
            <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-[25deg] blur-sm animate-searchlight" />
            <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-[-25deg] blur-sm animate-searchlight delay-2000" />

            {/* 5. Graffiti / Grunge Overlay */}
            <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,10 Q50,50 90,10 T180,50' stroke='white' fill='none' stroke-width='2'/%3E%3Cpath d='M20,180 Q60,140 100,180 T190,140' stroke='white' fill='none' stroke-width='2'/%3E%3Ccircle cx='50' cy='100' r='20' stroke='white' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '300px 300px'
                }}
            />

            {/* 6. Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

            {/* 7. Scanlines */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, transparent 50%, black 50%)',
                    backgroundSize: '100% 4px',
                }}
            />
        </div>
    );
}
