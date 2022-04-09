import Button from '../Button'
import InputField from '../InputField'

const EstimateForm = () => {
  return (
    <form action=''>
      <InputField
        labelText='氏名'
        required
        id='estimate_name'
        name='name'
        placeholder='山田 太郎'
      />
      <InputField
        labelText='会社名・屋号'
        id='estimate_company'
        name='company'
        placeholder='サンプル株式会社'
      />
      <InputField
        labelText='メールアドレス'
        required
        id='estimate_email'
        name='company'
        placeholder='example@example.com'
      />
      <InputField
        labelText='サイトURL'
        comment='（移行前のウェブサイトのURL）'
        id='estimate_url'
        name='url'
        placeholder='https://example.com'
      />
      <InputField
        labelText='備考・ご要望等'
        id='estimate_comment'
        name='comment'
        placeholder='備考・ご要望等をご記入ください。'
        multiLine
      />
      <Button>送信する</Button>
    </form>
  )
}

export default EstimateForm
