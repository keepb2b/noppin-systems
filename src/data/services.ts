export type Service = {
  number: string
  title: string
  description: string
  tags: string[]
}

export const services: Service[] = [
  {
    number: '01',
    title: 'MovableType',
    description: 'MTテンプレートのコーディング、プラグイン連携、大規模メディアサイトの構築を支援します。',
    tags: ['CMS', 'メディア'],
  },
  {
    number: '02',
    title: 'WordPress',
    description: 'テーマ開発、カスタム投稿タイプ、ACF連携、会員サイト・コーポレートサイトを構築します。',
    tags: ['CMS', 'コーポレート'],
  },
  {
    number: '03',
    title: 'Shopify',
    description: 'Liquidテーマ、カスタムアプリ、決済・配送連携などECストアの立ち上げから改修まで対応。',
    tags: ['EC', 'Shopify'],
  },
  {
    number: '04',
    title: 'EC-CUBE',
    description: 'カスタマイズ、プラグイン開発、決済・在庫連携など国内EC向けの実装を行います。',
    tags: ['EC', 'EC-CUBE'],
  },
  {
    number: '05',
    title: 'Makeshop',
    description: 'テンプレート改修、独自デザイン反映、外部サービス連携のコーディングを提供します。',
    tags: ['EC', 'Makeshop'],
  },
  {
    number: '06',
    title: 'ecforce',
    description: 'サブスクリプション型EC、LP連携、CRM連携を含むecforce向け開発を支援します。',
    tags: ['EC', 'ecforce'],
  },
  {
    number: '07',
    title: 'React / Next.js',
    description: 'ヘッドレスCMS連携、Jamstack、高速なSPA/SSRサイトの設計・実装を行います。',
    tags: ['フロントエンド', 'Jamstack'],
  },
  {
    number: '08',
    title: 'Webアニメーション',
    description: 'スクロール連動、ホバーエフェクト、Three.js背景など体験を高めるモーションを実装。',
    tags: ['アニメーション', 'GSAP'],
  },
  {
    number: '09',
    title: '要件定義・PM',
    description: '仕様策定、ワイヤーフレーム、進行管理まで。制作会社・事業者様の開発部門として機能します。',
    tags: ['PM', 'コンサル'],
  },
]

export const serviceCategories = [
  'MovableType',
  'WordPress',
  'Shopify',
  'EC-CUBE',
  'Makeshop',
  'ecforce',
  'Color Me Shop',
  'Stripe API',
  'headless CMS',
  'React/Next.js',
  'Webアニメーション',
  '多言語サイト',
  '翻訳',
  'Webデザイン',
  'PM',
  '会員サイト',
  'コーポレート',
  'LP',
] as const
