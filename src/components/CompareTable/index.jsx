import DoubleCircle from '../../inline-svg/double-circle.svg'
import Circle from '../../inline-svg/circle.svg'
import Triangle from '../../inline-svg/triangle.svg'

const CompareTable = () => {
  return (
    <table>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <td />
          <th>Gatsby</th>
          <th>WordPress</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>表示スピード</td>
          <td>
            <DoubleCircle />
            非常に速い
          </td>
          <td>
            <Triangle />
            遅くなりやすい
          </td>
        </tr>
        <tr>
          <td>セキュリティ</td>
          <td>
            <Circle />
            セキュリティリスクが低い
          </td>
          <td>
            <Triangle />
            セキュリティリスクあり
          </td>
        </tr>
        <tr>
          <td>管理コスト</td>
          <td>
            <Circle />
            ソフトウェアのアップデートをチェックする頻度を減らせる
          </td>
          <td>
            <Triangle />
            管理が煩雑でソフトウェアのアップデートを常にチェックし続ける必要あり
          </td>
        </tr>
        <tr>
          <td>サーバーコスト</td>
          <td>
            <DoubleCircle />
            大抵の場合、無料
          </td>
          <td>
            <Triangle />
            月額1000円程度が相場
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CompareTable
