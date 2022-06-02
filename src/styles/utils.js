// CSSで使用する定数や関数など

import { css } from '@emotion/react'

// 色
export const colors = {
  black: '#333',
  white: '#fff',
  gray: '#ccc',
  purple: '#639',
  purple2: '#d3a9fd',
  purple3: '#faf5ff',
  yellow: '#fbfda9',
  red: '#c00'
}

// 幅・ブレークポイント等
export const PC_WIDTH = 1000
export const PC_PADDING = 40
export const SP_PADDING = 20
export const BP_SM = 768
export const BP_LG = PC_WIDTH + PC_PADDING * 2

// メディアクエリ
export const mq = {
  sm: `@media (max-width: ${BP_SM - 1}px)`,
  smUp: `@media (min-width: ${BP_SM}px)`,
  md: `@media (min-width: ${BP_SM}px) and (max-width: ${BP_LG - 1}px)`,
  lgDown: `@media (max-width: ${BP_LG - 1}px)`,
  lg: `@media (min-width: ${BP_LG}px)`
}

// ホバー時アンダーライン
export const textHoverEffect = css`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

// Gatsbyの画像のフェードアニメーションを強制的に無効化する
// （スコアアップが期待できる）
export const noFade = css`
  img {
    opacity: 1 !important;
  }
`
