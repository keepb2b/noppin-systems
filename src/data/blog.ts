export type BlogPost = {
  id: string
  title: string
  date: string
  category: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js 15 と headless CMS で作る高速コーポレートサイト',
    date: '2026.05.20',
    category: '技術',
    excerpt: 'Jamstack構成でのパフォーマンス最適化のポイントを解説します。',
  },
  {
    id: '2',
    title: 'Shopify Liquid テーマ改修で押さえるべき5点',
    date: '2026.05.12',
    category: 'EC',
    excerpt: '既存ストアのデザイン刷新時に注意すべき実装事項。',
  },
  {
    id: '3',
    title: 'GSAP ScrollTrigger によるスクロール演出の設計',
    date: '2026.05.01',
    category: 'アニメーション',
    excerpt: '過剰なモーションを避けつつ、体験を高めるパターン集。',
  },
]

export const blogFilters = ['すべて', '技術', 'EC', 'CMS', 'アニメーション', '運用'] as const
