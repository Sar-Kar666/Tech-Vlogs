'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/types/blog';
import { filterPosts, getUniqueCategories } from '@/lib/utils';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ArticleGrid from './ArticleGrid';
import ArticleModal from './ArticleModal';

interface BlogClientProps {
    posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const categories = useMemo(() => getUniqueCategories(posts), [posts]);

    const filteredPosts = useMemo(() =>
        filterPosts(posts, searchQuery, activeCategory),
        [posts, searchQuery, activeCategory]
    );

    const handleArticleClick = (post: BlogPost) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (
        <>
            <section className="py-16 px-6 max-w-[1280px] mx-auto" id="articles" aria-labelledby="articles-heading">
                <div className="text-center mb-12">
                    <h2 id="articles-heading" className="text-3xl font-bold mb-2">Latest Articles</h2>
                    <p className="text-[var(--color-text-muted)] m-0">
                        Stay up to date with the latest insights and tutorials
                    </p>
                </div>

                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    resultsCount={filteredPosts.length}
                    totalCount={posts.length}
                />

                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                <ArticleGrid
                    posts={filteredPosts}
                    onArticleClick={handleArticleClick}
                />
            </section>

            <ArticleModal
                post={selectedPost}
                onClose={handleCloseModal}
            />
        </>
    );
}
