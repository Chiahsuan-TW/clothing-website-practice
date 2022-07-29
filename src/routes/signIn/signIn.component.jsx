import {signInWithGooglePopup} from '../../utils/firebase/config.js';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log('access', response)
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