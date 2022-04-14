import * as styles from './styles.module.scss'
import Button from '../Button'
import InputField from '../InputField'

const EstimateForm = () => {
  const handleSubmit = async (e) => {
    // デフォルトの動作をブロック
    e.preventDefault()

    // フォーム送信へ
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputBox}>
        <InputField
          labelText='氏名'
          required
          id='estimate_name'
          name='name'
          placeholder='山田 太郎'
        />
      </div>
      <div className={styles.inputBox}>
        <InputField
          labelText='会社名・屋号'
          id='estimate_company'
          name='company'
          placeholder='サンプル株式会社'
        />
      </div>
      <div className={styles.inputBox}>
        <InputField
          labelText='メールアドレス'
          required
          id='estimate_email'
          name='email'
          placeholder='example@example.com'
        />
      </div>
      <div className={styles.inputBox}>
        <InputField
          labelText='サイトURL'
          comment='（移行前のウェブサイトのURL）'
          id='estimate_url'
          name='url'
          placeholder='https://example.com'
        />
      </div>
      <div className={styles.inputBox}>
        <InputField
          labelText='備考・ご要望等'
          id='estimate_comment'
          name='comment'
          placeholder='備考・ご要望等をご記入ください。'
          multiLine
        />
      </div>
      <div className={styles.btnBox}>
        <Button type='submit'>送信する</Button>
      </div>
    </form>
  )
}

export default EstimateForm
