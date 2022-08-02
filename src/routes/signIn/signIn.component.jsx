import {signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/config.js';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef  = await createUserDocumentFromAuth(user);
    console.log('signin', userDocRef)
  }
  return (
    <div>
      <h1>This is sign in page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;