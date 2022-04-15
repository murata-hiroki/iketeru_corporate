import * as styles from './styles.module.scss'
import DoubleCircle from '../../inline-svg/double-circle.svg'
import Circle from '../../inline-svg/circle.svg'
import Triangle from '../../inline-svg/triangle.svg'

const CompareTable = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <colgroup>
          <col />
          <col className={styles.gatsbyCol} />
          <col />
        </colgroup>
        <thead>
          <tr>
            <td className={styles.emptyHead} />
            <th className={styles.gatsbyHead}>Gatsby</th>
            <th className={styles.wpHead}>WordPress</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.bodyRow}>
            <td className={styles.itemHead}>
              表示スピード
            </td>
            <td className={styles.desc}>
              <div><DoubleCircle /></div>
              非常に速い
            </td>
            <td className={styles.desc}>
              <div><Triangle /></div>
              遅くなりやすい
            </td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={styles.itemHead}>
              セキュリティ
            </td>
            <td className={styles.desc}>
              <div><Circle /></div>
              セキュリティリスクが低い
            </td>
            <td className={styles.desc}>
              <div><Triangle /></div>
              セキュリティリスクあり
            </td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={styles.itemHead}>
              管理コスト
            </td>
            <td className={styles.desc}>
              <div><Circle /></div>
              ソフトウェアのアップデートをチェックする頻度を減らせる
            </td>
            <td className={styles.desc}>
              <div><Triangle /></div>
              管理が煩雑で、ソフトウェアのアップデートを常にチェックし続ける必要あり
            </td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={styles.itemHead}>
              サーバーコスト
            </td>
            <td className={styles.desc}>
              <div><DoubleCircle /></div>
              大抵の場合、無料
            </td>
            <td className={styles.desc}>
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
