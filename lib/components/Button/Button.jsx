import styles from "./button.module.scss"

export default function Button(props) {
  const { children, type, intent, disabled } = props

  return (
    <button className={`${styles.btn} ${styles[intent]}`} disabled={disabled} type={type}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: "button"
}
