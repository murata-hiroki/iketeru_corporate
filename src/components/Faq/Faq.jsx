import { css } from '@emotion/react'
import Container from '../Container'
import Heading2 from '../Heading2'
import Section from '../Section'
import { faqList } from './faqList'
import IconQ from '../../inline-svg/icon-q.svg'
import IconA from '../../inline-svg/icon-a.svg'
import { colors, mq } from '../../utilities/styleUtilities'

const Faq = () => {
  return (
    <Section>
      <Container>
        <Heading2>よくあるご質問</Heading2>
        <div>
          {faqList.map(faqItem =>
            <section key={faqItem.q} css={styles.item}>
              <h3 css={styles.title}>
                <span css={styles.textInner}>
                  <IconQ css={styles.iconQ} />
                  {faqItem.q}
                </span>
              </h3>
              <p css={styles.answer}>
                <span css={styles.textInner}>
                  <IconA css={styles.iconA} />
                  {faqItem.a}
                </span>
              </p>
            </section>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default Faq

const textStyle = css`
  padding: 30px 20px;
  font-size: 22px;
  line-height: 1.6;
  ${mq.sm} {
    padding: 20px 10px;
    font-size: 18px;
  }
`

const iconStyle = css`
  position: absolute;
  top: -4px;
  left: 0;
  ${mq.sm} {
    top: 2px;
  }
`

const styles = {
  item: css`
    padding: 40px 30px;
    background-color: ${colors.purple3};
    &:nth-of-type(n+2) {
      margin-top: 40px;
    }
    ${mq.sm} {
      padding: 20px 10px;
    }
  `,

  title: css`
    ${textStyle};
    margin-bottom: 20px;
    font-weight: bold;
    ${mq.sm} {
      padding-top: 0;
      margin-bottom: 0;
    }
  `,

  answer: css`
    ${textStyle};
    background-color: ${colors.white};
    ${mq.sm} {
      font-size: 16px;
    }
  `,

  textInner: css`
    position: relative;
    display: block;
    padding-left: 55px;
    ${mq.sm} {
      padding-left: 30px;
    }
  `,

  iconQ: css`
    ${iconStyle};
    ${mq.sm} {
      width: 20.5px;
      height: 18.5px;
    }
  `,

  iconA: css`
    ${iconStyle};
    ${mq.sm} {
      width: 21.5px;
      height: 17.5px;
    }
  `
}
