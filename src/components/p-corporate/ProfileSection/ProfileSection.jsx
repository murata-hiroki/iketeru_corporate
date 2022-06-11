const ProfileSection = () => {
  return (
    <div>
      <h2 className="monotein">
        <span className="monotein">monotein</span>について
      </h2>
      <div>
        <p>
          ウェブエンジニアの三好アキです。<span className="monotein">monotein</span>
          の屋号で活動しています。<span className="monotein">monotein</span>
          では「ウェブサイトはツール」という考えの下、ビジネスで達成すべきゴールへ最短ルートで導きます。日本語の情報が少ない最新のウェブテクノロジー、ウェブマーケティングの情報を収集・活用して、ウェブ分野の課題解決を行なっています。
        </p>
        <p>
          詳しくは
          <a href="/business/?r=index">こちら</a>
        </p>
        <p>
          <span className="monotein">monotein</span>について無料の案内資料は
          <a
            href="/download/monotein-introduction-form/?r=index"
            rel="noopener noreferrer"
            target="_blank"
          >
            こちら
          </a>
        </p>
      </div>
    </div>
  )
}

export default ProfileSection
