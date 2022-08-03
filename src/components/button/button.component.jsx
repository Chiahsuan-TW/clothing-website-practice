import './button.styles.scss';

const buttonTypes = {
  'google': 'google-sign-in',
  'inverted': 'inverted'
}

const Button = ({label, variant, ...otherProps}) => {
  return (
    <button className={`button-container ${buttonTypes[variant]}`} {...otherProps}>
      {label}
    </button>
  )
}


export default Button;