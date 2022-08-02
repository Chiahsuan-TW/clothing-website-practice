import {useState} from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/config';


const SignUpForm = () => {

  const formFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [fieldValue, setFieldValue] = useState(formFields)
  const {displayName, email, password, confirmPassword} = fieldValue;
  // console.log('re-render', fieldValue)

  const resetFormFields = () => {
    setFieldValue(formFields)
  }
  
  const handleChange = (event) => {
    const {name, value} = event.target

    // console.log('before setState object', fieldValue )
    // setFieldValue({...fieldValue, [name]: value})
    setFieldValue((prev) => ({...prev, [name]:value}))
    // console.log('after setState object', fieldValue )
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
    <div>
      <h2>Sign Up with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <label >Display Name</label>
        <input type="text" required onChange={handleChange} name='displayName' value={displayName} />
        <label >Email</label>
        <input type="email" required onChange={handleChange} name='email' value={email}/>
        <label >Password</label>
        <input type="password" required onChange={handleChange} name='password' value={password}/>
        <label >Confirm Password</label>
        <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default SignUpForm