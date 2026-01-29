'use client';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    resultsCount: number;
    totalCount: number;
}

export default function SearchBar({ value, onChange, resultsCount, totalCount }: SearchBarProps) {
    return (
        <div className="mb-8">
            <div className="relative max-w-[600px] mx-auto mb-4">
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)] pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                    type="search"
                    className="w-full py-4 px-12 bg-[#1a1a2e] border border-[var(--color-border)] rounded-full text-[var(--color-text)] text-base transition-all focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)] placeholder:text-[var(--color-text-muted)]"
                    placeholder="Search articles by title, description, or content..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    aria-label="Search articles"
                />
                {value && (
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-none border-none p-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                        onClick={() => onChange('')}
                        aria-label="Clear search"
                    >
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
            <p className="text-center text-[var(--color-text-muted)] text-sm m-0" role="status" aria-live="polite">
                Showing <strong className="text-[var(--color-text)]">{resultsCount}</strong> of <strong className="text-[var(--color-text)]">{totalCount}</strong> articles
            </p>
        </div>
    );
}
