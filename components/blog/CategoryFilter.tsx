'use client';

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string | null;
    onCategoryChange: (category: string | null) => void;
}

export default function CategoryFilter({
    categories,
    activeCategory,
    onCategoryChange
}: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="categories" aria-label="Filter by category">
            <button
                className={`py-2 px-5 bg-[#1a1a2e] border border-[var(--color-border)] rounded-full text-[var(--color-text-secondary)] text-sm font-medium transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-text)] ${activeCategory === null ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)]' : ''}`}
                onClick={() => onCategoryChange(null)}
                aria-pressed={activeCategory === null}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    className={`py-2 px-5 bg-[#1a1a2e] border border-[var(--color-border)] rounded-full text-[var(--color-text-secondary)] text-sm font-medium transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-text)] ${activeCategory === category ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)]' : ''}`}
                    onClick={() => onCategoryChange(category)}
                    aria-pressed={activeCategory === category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
