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
          <td>非常に速い</td>
          <td>遅くなりやすい</td>
        </tr>
        <tr>
          <td>セキュリティ</td>
          <td>セキュリティリスクが低い</td>
          <td>セキュリティリスクあり</td>
        </tr>
        <tr>
          <td>管理コスト</td>
          <td>ソフトウェアのアップデートをチェックする頻度を減らせる</td>
          <td>管理が煩雑でソフトウェアのアップデートを常にチェックし続ける必要あり</td>
        </tr>
        <tr>
          <td>サーバーコスト</td>
          <td>大抵の場合、無料</td>
          <td>月額1000円程度が相場</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CompareTable
