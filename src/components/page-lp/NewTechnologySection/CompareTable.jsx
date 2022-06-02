import { css } from '@emotion/react'
import { colors, mq } from '../../../styles/utils'
import DoubleCircle from '../../../inline-svg/double-circle.svg'
import Circle from '../../../inline-svg/circle.svg'
import Triangle from '../../../inline-svg/triangle.svg'

const CompareTable = () => {
  return (
    <div css={styles.wrapper}>
      <table css={styles.table}>
        <colgroup>
          <col />
          <col css={styles.gatsbyCol} />
          <col />
        </colgroup>
        <thead>
          <tr>
            <td css={styles.emptyHead} />
            <th css={styles.gatsbyHead}>Gatsby</th>
            <th css={styles.wpHead}>WordPress</th>
          </tr>
        </thead>
        <tbody>
          <tr css={styles.bodyRow}>
            <td css={styles.itemHead}>
              表示スピード
            </td>
            <td css={styles.desc}>
              <div><DoubleCircle /></div>
              非常に速い
            </td>
            <td css={styles.desc}>
              <div><Triangle /></div>
              遅くなりやすい
            </td>
          </tr>
          <tr css={styles.bodyRow}>
            <td css={styles.itemHead}>
              セキュリティ
            </td>
            <td css={styles.desc}>
              <div><Circle /></div>
              セキュリティリスクが低い
            </td>
            <td css={styles.desc}>
              <div><Triangle /></div>
              セキュリティリスクあり
            </td>
          </tr>
          <tr css={styles.bodyRow}>
            <td css={styles.itemHead}>
              管理コスト
            </td>
            <td css={styles.desc}>
              <div><Circle /></div>
              ソフトウェアのアップデートをチェックする頻度を減らせる
            </td>
            <td css={styles.desc}>
              <div><Triangle /></div>
              管理が煩雑で、ソフトウェアのアップデートを常にチェックし続ける必要あり
            </td>
          </tr>
          <tr css={styles.bodyRow}>
            <td css={styles.itemHead}>
              サーバーコスト
            </td>
            <td css={styles.desc}>
              <div><DoubleCircle /></div>
              大抵の場合、無料
            </td>
            <td css={styles.desc}>
              <div><Triangle /></div>
              月額1000円程度が相場
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompareTable

const headStyle = css`
  width: 300px;
  padding: 10px 0;
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: bold;
  ${mq.lgDown} {
    width: 250px;
  }
  ${mq.sm} {
    width: 200px;
  }
`

const styles = {
  wrapper: css`
    overflow-x: auto;
  `,

  table: css`
    min-width: 520px;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
  `,

  gatsbyCol: css`
    border: 4px solid ${colors.purple};
  `,

  bodyRow: css`
    &:nth-child(odd) {
      background-color: ${colors.white};
    }
    &:nth-child(even) {
      background-color: ${colors.purple3};
    }
    &:last-child {
      border-bottom: 2px solid ${colors.gray};
    }
  `,

  emptyHead: css`
    width: 280px;
    border-bottom: 2px solid ${colors.gray};
  `,

  gatsbyHead: css`
    ${headStyle};
    background-color: ${colors.purple};
    color: ${colors.white};
  `,

  wpHead: css`
    ${headStyle};
    background-color: ${colors.gray};
    border-right: 2px solid ${colors.gray};
  `,

  itemHead: css`
    padding: 15px 10px;
    border-left: 2px solid ${colors.gray};
    font-size: 22px;
    ${mq.lgDown} {
      font-size: 18px;
    }
    ${mq.sm} {
      font-size: 16px;
    }
  `,

  desc: css`
    padding: 15px 20px;
    font-size: 18px;
    ${mq.lgDown} {
      font-size: 16px;
    }
    ${mq.sm} {
      padding: 15px 10px;
      font-size: 14px;
    }
    &:last-child {
      border-right: 2px solid ${colors.gray};
    }
  `
}
