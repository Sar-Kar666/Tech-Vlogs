'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';

interface ArticleModalProps {
    post: BlogPost | null;
    onClose: () => void;
}

export default function ArticleModal({ post, onClose }: ArticleModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }


        if (e.key === 'Tab' && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
            }
        }
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        if (post) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown);
            closeButtonRef.current?.focus();
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [post, handleKeyDown]);

    if (!post) return null;

    return (
        <div
            className="fixed inset-0 z-200 bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 animate-fadeIn"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                ref={modalRef}
                className="relative max-w-[800px] max-h-[90vh] w-full bg-[#1a1a2e] rounded-2xl overflow-hidden animate-slideUp"
                role="document"
            >
                <button
                    ref={closeButtonRef}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-[#0f0f1a]/80 backdrop-blur-md border border-[var(--color-border)] rounded-full text-[var(--color-text)] transition-all hover:bg-[var(--color-bg-tertiary)] hover:border-[var(--color-primary)]"
                    onClick={onClose}
                    aria-label="Close article"
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

                <article className="max-h-[90vh] overflow-y-auto">
                    <div className="relative aspect-video">
                        <Image
                            src={post.photo_url}
                            alt={`Featured image for article: ${post.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    </div>

                    <div className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                            <time dateTime={post.created_at} className="text-sm text-[var(--color-text-muted)]">
                                {formatDate(post.created_at)}
                            </time>
                        </div>

                        <h2 id="modal-title" className="text-3xl font-bold mb-4 leading-tight">{post.title}</h2>
                        <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed italic">{post.description}</p>

                        <div
                            className="text-[var(--color-text-secondary)] leading-loose [&>p]:mb-4 [&>h1]:text-[var(--color-text)] [&>h1]:mt-6 [&>h1]:mb-3 [&>h2]:text-[var(--color-text)] [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-[var(--color-text)] [&>h3]:mt-6 [&>h3]:mb-3 [&>a]:text-[var(--color-primary-light)] [&>a]:underline hover:[&>a]:text-[var(--color-primary)]"
                            dangerouslySetInnerHTML={{ __html: post.content_html }}
                        />
                    </div>
                </article>
            </div>
        </div>
    );
}
