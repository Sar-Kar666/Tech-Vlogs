import { BlogPost } from '@/types/blog';


export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}


export function getUniqueCategories(posts: BlogPost[]): string[] {
    const categories = new Set(posts.map(post => post.category));
    return Array.from(categories).sort();
}


export function filterBySearch(posts: BlogPost[], query: string): BlogPost[] {
    if (!query.trim()) return posts;

    const lowerQuery = query.toLowerCase().trim();

    return posts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.content_text.toLowerCase().includes(lowerQuery)
    );
}


export function filterByCategory(posts: BlogPost[], category: string | null): BlogPost[] {
    if (!category) return posts;
    return posts.filter(post => post.category === category);
}


export function filterPosts(
    posts: BlogPost[],
    searchQuery: string,
    category: string | null
): BlogPost[] {
    let filtered = posts;
    filtered = filterBySearch(filtered, searchQuery);
    filtered = filterByCategory(filtered, category);
    return filtered;
}
