import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';

import {PageContainer} from './authentication.styles.jsx';

const Authentication = () => {
  return (
    <PageContainer>
      <SignInForm/>
      <SignUpForm />
    </PageContainer>
  )
}

export default Authentication;