/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import { useHistory} from 'react-router-dom';

import Form, {
    Form_Link,
    Form_Input,
    Form_Base,
    Form_Error,
    Form_Title,
    Form_Submit,
    Form_SmallText,
    Form_Text,
} from '../../components/Form';
import {useSelector} from 'react-redux';
import * as ROUTES from '../../Routes';

export interface SignInFormProps {
    
}
 
const SignInForm: React.FC<SignInFormProps> = () => {
    const [emailAddress, setemailAddress] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const history = useHistory();//CUSTOM HOOKS
    const firebase =  useSelector((stateCurrent: any) => {
        return stateCurrent.App.firebase;
    });
    //check fro input elements are validate
    // email & 
    //we can change this validation OUTSOURCING IT ... REGEX
    const isInValid = password === '' || emailAddress === '';

    const handleSignIn = (event: any) => {
        event.preventDefault();
        //firebase authentication && and error Modal
        firebase.auth().signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            //push user information to state
            seterror('');
            history.push(ROUTES.HOME);
        })
        .catch((error: any) => {
            seterror(error.message);
            setemailAddress('')
            setpassword('')
        })
    }

    return (  
        <Form>
            <Form_Title>Sign In</Form_Title>
            {error && <Form_Error>{error}</Form_Error>}
            <Form_Base onSubmit={handleSignIn} method="POST">

                <Form_Input placeholder="Email address" value={emailAddress} 
                    onChange={(event: any) => setemailAddress(event.target.value)} />
                
                <Form_Input placeholder="Password" value={password} type="password"
                    autoComplete="off"
                    onChange={(event: any) => setpassword(event.target.value)} />

                <Form_Submit disabled={isInValid} type={"submit"}>
                    Sign In
                </Form_Submit>
            </Form_Base>
            <Form_Text>
                New to Nextflix? <Form_Link to={"/signup"}>Sign up now.</Form_Link>
            </Form_Text>
            <Form_SmallText>
                This page is protected by Google reCAPTCHA to ensure you are not a bot.
                Learn More.
            </Form_SmallText>
        </Form>
    );
}
 
export default SignInForm;