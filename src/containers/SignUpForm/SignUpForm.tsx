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

export interface SignUpFormProps {
    
}
 
const SignUpForm: React.FC<SignUpFormProps> = () => {
    const [FirtName, setFirtName] = useState('');
    const [emailAddress, setemailAddress] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');

    const history = useHistory();//CUSTOM HOOKS
    const firebase =  useSelector((stateCurrent: any) => {
        return stateCurrent.App.firebase;
    });

    const isInValid = password === '' || emailAddress === '' || FirtName === '';

    const handleSignUp = (event: any) => {
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
        .then((result: any) => {//update user
            result.user.updateProfile({
                displayName: FirtName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            });

        })
        .then( () => {
            history.push(ROUTES.BROWSE);
        })
        .catch((error: any) => {
            setFirtName('');
            setemailAddress('');
            setpassword('');
            seterror(error.message)
        })

    }

    return (  
        <Form>
            <Form_Title>Sign Up</Form_Title>
            {error && <Form_Error>{error}</Form_Error>}
            <Form_Base onSubmit={handleSignUp} method="POST">
                
                <Form_Input placeholder="First Name" value={FirtName} 
                    onChange={(event: any) => setFirtName(event.target.value)} />

                <Form_Input placeholder="Email address" value={emailAddress} 
                    onChange={(event: any) => setemailAddress(event.target.value)} />
                
                <Form_Input placeholder="Password" value={password} type="password"
                    autoComplete="off"
                    onChange={(event: any) => setpassword(event.target.value)} />

                <Form_Submit disabled={isInValid} type={"submit"}>
                    Sign Up
                </Form_Submit>
            </Form_Base>
            <Form_Text>
                already A User? <Form_Link to={"/signin"}>Sign in now.</Form_Link>
            </Form_Text>
            <Form_SmallText>
                This page is protected by Google reCAPTCHA to ensure you are not a bot.
                Learn More.
            </Form_SmallText>
        </Form>
    );
}

export default SignUpForm;