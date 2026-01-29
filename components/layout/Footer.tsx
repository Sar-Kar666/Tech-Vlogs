export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1a2e] border-t border-[var(--color-border)] mt-16">
            <div className="max-w-[1280px] mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 mb-8">
                    <div>
                        <span className="block text-xl font-bold text-[var(--color-text)] mb-3">TechBlog</span>
                        <p className="text-[var(--color-text-muted)] text-sm m-0 max-w-[300px] leading-relaxed">
                            Your source for the latest in technology, development, and innovation.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation" className="contents">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4">Quick Links</h3>
                            <ul className="list-none p-0 m-0 flex flex-col gap-2">
                                <li><a href="/" className="text-[var(--color-text-muted)] text-sm transition-colors hover:text-[var(--color-primary-light)]">Home</a></li>
                                <li><a href="#articles" className="text-[var(--color-text-muted)] text-sm transition-colors hover:text-[var(--color-primary-light)]">Articles</a></li>
                                <li><a href="#categories" className="text-[var(--color-text-muted)] text-sm transition-colors hover:text-[var(--color-primary-light)]">Categories</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4">Connect</h3>
                            <ul className="list-none p-0 m-0 flex flex-col gap-2">
                                <li><a href="https://twitter.com" className="text-[var(--color-text-muted)] text-sm transition-colors hover:text-[var(--color-primary-light)]" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://github.com" className="text-[var(--color-text-muted)] text-sm transition-colors hover:text-[var(--color-primary-light)]" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="https://linkedin.com" className="text-[var(--color-text-muted)] text-sm transition-colors hover:text-[var(--color-primary-light)]" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="pt-8 border-t border-[var(--color-border)] text-center">
                    <p className="text-[var(--color-text-muted)] text-sm m-0">
                        © {currentYear} TechBlog. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
