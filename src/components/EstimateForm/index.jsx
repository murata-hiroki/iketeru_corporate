import { useState } from 'react'
import axios from 'axios'
import Button from '../Button'
import InputField from '../InputField'
import { navigate } from 'gatsby'

const EstimateForm = () => {
  // 項目を設定
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [url, setUrl] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = async (e) => {
    // デフォルトの動作をブロック
    e.preventDefault()

    // フォーム送信へ
    await submitHubspotForm(name, company, email, url, comment)
  }

  const submitHubspotForm = async (name, company, email, url, comment) => {
    const portalId = '21765463'
    const formGuid = '3eac8334-a797-44d8-b6d1-3462bedec7a7'
    const config = {
      headers: {
        'Message-Type': 'application/json'
      }
    }

    return await axios.post(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          {
            name: 'name',
            value: name
          },
          {
            name: 'company',
            value: company
          },
          {
            name: 'email',
            value: email
          },
          {
            name: 'url',
            value: url
          },
          {
            name: 'comment',
            value: comment
          }
        ]
      },

      config
    ).then(() => {
      console.log('送信成功')
      // フォーム送信後にリダイレクトする
      navigate('/')
    })
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <InputField
        labelText='氏名'
        required
        id='estimate_name'
        name='name'
        placeholder='山田 太郎'
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <InputField
        labelText='会社名・屋号'
        id='estimate_company'
        name='company'
        placeholder='サンプル株式会社'
        onChange={e => setCompany(e.target.value)}
        value={company}
      />
      <InputField
        labelText='メールアドレス'
        required
        id='estimate_email'
        name='email'
        placeholder='example@example.com'
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <InputField
        labelText='サイトURL'
        comment='（移行前のウェブサイトのURL）'
        id='estimate_url'
        name='url'
        placeholder='https://example.com'
        onChange={e => setUrl(e.target.value)}
        value={url}
      />
      <InputField
        labelText='備考・ご要望等'
        id='estimate_comment'
        name='comment'
        placeholder='備考・ご要望等をご記入ください。'
        multiLine
        onChange={e => setComment(e.target.value)}
        value={comment}
      />
      <Button type='submit'>送信する</Button>
    </form>
  )
}

export default EstimateForm
