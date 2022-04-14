import { useForm } from 'react-hook-form'
import * as styles from './styles.module.scss'
import Button from '../Button'
import InputField from '../InputField'

const EstimateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange' })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBox}>
        <InputField
          labelText='氏名'
          required
          id='estimate_name'
          placeholder='山田 太郎'
          registerReturn={register('name', {
            required: '氏名を入力してください。'
          })}
          error={errors.name}
        />
      </div>
      <div className={styles.inputBox}>
        <InputField
          labelText='会社名・屋号'
          id='estimate_company'
          placeholder='サンプル株式会社'
          registerReturn={register('company')}
        />
      </div>
      <div className={styles.inputBox}>
        <InputField
          labelText='メールアドレス'
          required
          id='estimate_email'
          placeholder='example@example.com'
          registerReturn={register('email', {
            required: 'メールアドレスを入力してください。',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'メールアドレスを正しく入力してください。'
            }
          })}
          error={errors.email}
        />
      </div>
      <div className={styles.inputBox}>
        <InputField
          labelText='サイトURL'
          comment='（移行前のウェブサイトのURL）'
          id='estimate_url'
          placeholder='https://example.com'
          registerReturn={register('url')}
        />
      </div>
      <div className={styles.inputBox}>
        <InputField
          labelText='備考・ご要望等'
          id='estimate_comment'
          placeholder='備考・ご要望等をご記入ください。'
          multiLine
          registerReturn={register('comment')}
        />
      </div>
      <div className={styles.btnBox}>
        <Button type='submit'>送信する</Button>
      </div>
    </form>
  )
}

export default EstimateForm
