import {signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/config.js';

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
    </div>
  )
}

export default SignIn;