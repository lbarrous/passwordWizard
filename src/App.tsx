import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './store';
import { PasswordAction, StepAction } from './store/types';
import { PasswordWizardContainer } from './containers/PasswordWizardContainer';

const App = () => {
    const { password } = useSelector((state: AppState) => state.password);
    console.log('password: ', password);
    const { currentStep } = useSelector((state: AppState) => state.step);
    console.log('step: ', currentStep);
    const passwordDispatch = useDispatch<Dispatch<PasswordAction>>();
    const stepDispatch = useDispatch<Dispatch<StepAction>>();

    return <PasswordWizardContainer/>
}
export default App;