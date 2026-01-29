export default function Hero() {
    return (
        <section
            className="relative flex items-center min-h-[60vh] py-24 px-6 overflow-hidden sm:overflow-visible"
            aria-labelledby="hero-title"
        >
            <div className="max-w-[1280px] mx-auto relative z-10 w-full">
                <div className="max-w-[700px]">
                    <h1 id="hero-title" className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] mb-6 tracking-tight">
                        Discover the Future of
                        <span className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"> Technology</span>
                    </h1>
                    <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-[600px] leading-relaxed">
                        Explore cutting-edge articles on development, AI, cloud computing,
                        and the latest tech trends. Stay informed with insights from industry experts.
                    </p>
                    <a href="#articles" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold py-4 px-8 rounded-full transition-all duration-250 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] group">
                        Browse Articles
                        <svg
                            className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
