import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/api';

export const revalidate = 3600;

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/blog/Hero';
import BlogClient from '@/components/blog/BlogClient';

export const metadata: Metadata = {
  title: 'TechBlog - Latest Technology Articles & Insights',
  description: 'Discover cutting-edge articles on development, AI, cloud computing, and the latest tech trends. Stay informed with insights from industry experts.',
  keywords: ['technology', 'blog', 'development', 'AI', 'programming', 'tech news'],
  authors: [{ name: 'TechBlog Team' }],
  openGraph: {
    title: 'TechBlog - Latest Technology Articles & Insights',
    description: 'Discover cutting-edge articles on development, AI, cloud computing, and the latest tech trends.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TechBlog',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechBlog - Technology Articles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBlog - Latest Technology Articles & Insights',
    description: 'Discover cutting-edge articles on development, AI, cloud computing, and the latest tech trends.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TechBlog',
    description: 'Your source for the latest in technology, development, and innovation.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tech-blog.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tech-blog.vercel.app'}?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

function generateArticleSchemas(posts: { id: number; title: string; description: string; photo_url: string; created_at: string; updated_at: string }[]) {
  return posts.map((post) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.photo_url,
    datePublished: post.created_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Organization',
      name: 'TechBlog',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TechBlog',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tech-blog.vercel.app'}/logo.png`,
      },
    },
  }));
}

export default async function Home() {
  let posts: import('@/types/blog').BlogPost[] = [];
  let error = null;

  try {
    posts = await getBlogPosts();
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load articles';
    posts = [];
  }

  const webSiteSchema = generateWebSiteSchema();
  const articleSchemas = generateArticleSchemas(posts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemas) }}
      />

      <Header />

      <main>
        <Hero />

        {error ? (
          <section className="py-16 px-6" role="alert">
            <div className="max-w-[500px] mx-auto text-center p-12 bg-[#1a1a2e] border border-[var(--color-border)] rounded-2xl">
              <svg
                className="w-16 h-16 text-[var(--color-error)] mx-auto mb-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <h2 className="text-2xl font-semibold mb-2">Unable to Load Articles</h2>
              <p className="text-[var(--color-text-secondary)] mb-2">{error}</p>
              <p className="text-[var(--color-text-muted)] text-sm m-0">Please try refreshing the page.</p>
            </div>
          </section>
        ) : (
          <BlogClient posts={posts} />
        )}
      </main>

      <Footer />
    </>
  );
}
