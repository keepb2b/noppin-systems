export const animationFilters = [
  'すべて',
  '見出し',
  'ボタン',
  '背景',
  'スライダー',
  'パララックス',
  'マウスポインター',
  'アイコン',
  'スクロール',
  'その他',
] as const

export type AnimationSample = {
  id: string
  title: string
  category: string
  description: string
}

export const animationSamples: AnimationSample[] = [
  { id: '1', title: 'ボタンアニメーションまとめ', category: 'ボタン', description: 'スイープ・パルス・リップルなど複数パターン' },
  { id: '2', title: 'テキストのぼかしトランジション', category: '見出し', description: 'blur + fade-up の見出し演出' },
  { id: '3', title: 'ディスクナビゲーション', category: 'スライダー', description: '円形メニューの回転インタラクション' },
  { id: '4', title: 'スタートボタン', category: 'ボタン', description: 'ホバーで拡大するCTA' },
  { id: '5', title: 'スタンプアニメーション', category: 'アイコン', description: '押印風のポップ演出' },
  { id: '6', title: '拡大背景ボタン', category: 'ボタン', description: '背景が広がるホバー' },
  { id: '7', title: '動く線背景アニメーション', category: '背景', description: '斜めラインのドリフト' },
  { id: '8', title: 'タイトルリビール', category: '見出し', description: 'マスクによるテキスト出現' },
  { id: '9', title: 'グローイングタイトル', category: '見出し', description: '光彩付き見出し' },
  { id: '10', title: 'Three.js ランダム線描画', category: '背景', description: '粒子と線のネットワーク' },
  { id: '11', title: '反転マウスポインター', category: 'マウスポインター', description: 'difference ブレンドカーソル' },
  { id: '12', title: 'CSS文書アニメーション', category: 'スクロール', description: '段落の段階的フェードアップ' },
]
