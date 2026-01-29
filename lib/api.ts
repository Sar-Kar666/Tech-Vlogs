import axios from 'axios';
import { ApiResponse, BlogPost } from '@/types/blog';

// Cache the response in memory for a short duration to prevent duplicate requests during build/dev
let cachedPosts: BlogPost[] | null = null;

export async function getBlogPosts(): Promise<BlogPost[]> {
    if (cachedPosts) {
        return cachedPosts;
    }

    try {
        const { data } = await axios.get<ApiResponse>(
            'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10'
        );

        if (!data.success) {
            throw new Error(data.message || 'Failed to fetch blog posts');
        }

        cachedPosts = data.blogs;
        return data.blogs;
    } catch (error) {
        console.error('Error fetching blog posts:', error);

        if (axios.isAxiosError(error)) {
            throw new Error(error.message || 'Failed to fetch blog posts');
        }

        throw new Error('Failed to fetch blog posts');
    }
}
