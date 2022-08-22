import {BaseButton, GoogleSignInButton, InvertedButton} from './button.styles.jsx';

const buttonTypes = {
  'base': BaseButton,
  'google': GoogleSignInButton,
  'inverted': InvertedButton
}

const getButton = (variant = 'base') => buttonTypes[variant]

const Button = ({label, variant, ...otherProps}) => {
  const CustomButton = getButton(variant);
  return (
    <CustomButton  {...otherProps}>
      {label}
    </CustomButton>
  )
}


export default Button;