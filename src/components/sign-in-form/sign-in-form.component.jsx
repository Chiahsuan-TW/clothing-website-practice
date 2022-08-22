import { useState } from 'react';

import {signInWithGooglePopup,createUserDocumentFromAuth, signInUserWithEmailAndPassword } from '../../utils/firebase/config.js';
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"

import {SignInContainer, ButtonGroup} from './sign-in-form.styles';

const formValues = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [fieldValue, setFieldValue] = useState(formValues);
  const {email, password} = fieldValue

  const resetFieldValue = () => {
    setFieldValue(formValues)
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFieldValue((prev)=> ({...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);

      alert('succesfully signed in')
      resetFieldValue();
    } catch(error) {
      switch(error.code) {
        case 'auth/user-not-found':
        alert('user not found, please check again')
        break;
        case 'auth/wrong-password':
        alert('incorrect password for email')
        break
        default: 
        console.error(error)
      }
    }
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }


  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
        <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange}/>
        <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange}/>
        <ButtonGroup>
          <Button label="sign in" type="submit"/>
          <Button label="sign in with google" type="button" variant="google" onClick={signInWithGoogle}/>
        </ButtonGroup>
      </form>
    </SignInContainer>
  )
}

export default SignInForm;