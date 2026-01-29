'use client';

import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
    post: BlogPost;
    onClick: () => void;
}

export default function ArticleCard({ post, onClick }: ArticleCardProps) {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <article
            className="bg-[#1a1a2e] border border-[var(--color-border)] rounded-xl overflow-hidden cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5),0_0_20px_rgba(99,102,241,0.3)] focus-visible:outline-none focus-visible:border-[var(--color-primary)] focus-visible:shadow-[0_0_0_3px_rgba(99,102,241,0.3)] group"
            onClick={onClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`Read article: ${post.title}`}
        >
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                    src={post.photo_url}
                    alt={`Featured image for article: ${post.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-350 group-hover:scale-105"
                    loading="lazy"
                    unoptimized
                />
                <span className="absolute top-4 left-4 bg-[#0f0f1a]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-primary-light)] uppercase tracking-wider">{post.category}</span>
            </div>
            <div className="p-6">
                <time
                    className="block text-xs text-[var(--color-text-muted)] mb-2"
                    dateTime={post.created_at}
                >
                    {formatDate(post.created_at)}
                </time>
                <h3 className="text-lg font-semibold mb-3 leading-[1.4] line-clamp-2">{post.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 leading-relaxed line-clamp-2">{post.description}</p>
                <span className="inline-flex items-center gap-1 text-[var(--color-primary-light)] text-sm font-medium transition-colors group-hover:text-[var(--color-primary)]">
                    Read more
                    <svg
                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </article>
    );
}
