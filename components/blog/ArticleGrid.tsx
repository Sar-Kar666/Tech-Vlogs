'use client';

import { BlogPost } from '@/types/blog';
import ArticleCard from './ArticleCard';

interface ArticleGridProps {
    posts: BlogPost[];
    onArticleClick: (post: BlogPost) => void;
}

export default function ArticleGrid({ posts, onArticleClick }: ArticleGridProps) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-16 px-8 text-[var(--color-text-muted)]" role="status" aria-live="polite">
                <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M8 8l6 6M14 8l-6 6" />
                </svg>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">No articles found</h3>
                <p className="m-0">
                    Try adjusting your search terms or clearing the filters.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Blog articles">
            {posts.map((post) => (
                <ArticleCard
                    key={post.id}
                    post={post}
                    onClick={() => onArticleClick(post)}
                />
            ))}
        </div>
    );
}
