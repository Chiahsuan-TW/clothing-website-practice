import {useState, } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/config';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import {FormContainer} from './sign-up-form.styles';


const SignUpForm = () => {

  const formFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [fieldValue, setFieldValue] = useState(formFields)
  const {displayName, email, password, confirmPassword} = fieldValue;


  const resetFormFields = () => {
    setFieldValue(formFields)
  }
  
  const handleChange = (event) => {
    const {name, value} = event.target

    // setFieldValue({...fieldValue, [name]: value})
    setFieldValue((prev) => ({...prev, [name]:value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('confirm password is not the same as the password')
      return 
    }

    try{
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();

    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use')
      } else {
        console.error('user creation encountered error', error)
      }
    }
  }

  return (
    <FormContainer>
      <h2>Don't have an account?</h2>
      <p>Sign Up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" required onChange={handleChange} name='displayName' value={displayName} />
        <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>
        <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
        <FormInput label="Confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <Button label="Submit" type="submit"/>
      </form>
    </FormContainer>
  )
}


export default SignUpForm