'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-100 bg-[#0f0f1a]/90 backdrop-blur-xl border-b border-[var(--color-border)]">
            <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 font-bold text-xl text-[var(--color-text)] transition-colors hover:text-[var(--color-primary-light)]" aria-label="Tech Blog Home">
                    <span>TechBlog</span>
                </Link>

                <nav aria-label="Main navigation" className="hidden sm:block">
                    <ul className="flex gap-8 m-0 p-0 list-none">
                        <li><Link href="/" className="text-[var(--color-text-secondary)] font-medium transition-colors relative hover:text-[var(--color-text)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-[width] after:duration-250 hover:after:w-full">Home</Link></li>
                        <li><Link href="#articles" className="text-[var(--color-text-secondary)] font-medium transition-colors relative hover:text-[var(--color-text)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-[width] after:duration-250 hover:after:w-full">Articles</Link></li>
                        <li><Link href="#categories" className="text-[var(--color-text-secondary)] font-medium transition-colors relative hover:text-[var(--color-text)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-[width] after:duration-250 hover:after:w-full">Categories</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
