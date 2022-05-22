import { css } from '@emotion/react'
import { colors } from '../../utilities/styleUtilities'

const Button = ({
  children,
  type = 'link',
  href = null,
  onClick = null,
  disabled = false
}) => {
  if (type === 'submit') {
    return (
      <button type='submit' css={styles.btn} disabled={disabled}>
        {children}
      </button>
    )
  } else {
    return (
      <a href={href} css={styles.btn} onClick={onClick}>
        {children}
      </a>
    )
  }
}

export default Button

const styles = {
  btn: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 440px;
    height: 86px;
    border-radius: 4px;
    border-style: none;
    background-color: ${colors.purple};
    font-size: 24px;
    color: ${colors.white};
    text-decoration: none;
    cursor: pointer;

    @include sm {
      width: 100%;
      height: 60px;
      font-size: 18px;
    }

    &:disabled {
      opacity: 0.4;
      cursor: default;
    }

    &:hover {
      opacity: 0.8;
    }
  `
}
