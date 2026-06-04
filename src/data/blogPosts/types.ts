export type BlogCategoryKey = 'technical' | 'ec' | 'cms' | 'animation' | 'operations'

export type BlogPostMeta = {
  date: string
  categoryKey: BlogCategoryKey
  excerpt: string
}

export type BlogPost = {
  id: string
  serviceNumber: string
  title: string
  date: string
  category: string
  categoryKey: BlogCategoryKey
  excerpt: string
  image: string
}

export const blogCategoryKeys: BlogCategoryKey[] = ['technical', 'ec', 'cms', 'animation', 'operations']

export const blogCategoryLabelsJa: Record<BlogCategoryKey, string> = {
  technical: '技術',
  ec: 'EC',
  cms: 'CMS',
  animation: 'アニメーション',
  operations: '運用',
}

export const blogCategoryLabelsEn: Record<BlogCategoryKey, string> = {
  technical: 'Technical',
  ec: 'E-Commerce',
  cms: 'CMS',
  animation: 'Animation',
  operations: 'Operations',
}
