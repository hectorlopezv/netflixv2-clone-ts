/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import OptForm, {OptForm_Input, OptForm_Button, OptForm_Text, OptForm_Break} from '../../components/optForm';


export interface FormProps {
    
}
 
const Form: React.FC<FormProps> = () => {
    return (  
        <OptForm>
            <OptForm_Input placeholder="Email Address"/>
            <OptForm_Button>Try it now</OptForm_Button>
            <OptForm_Break/> 
            <OptForm_Text>
                Ready to watch? enter your email 
                to create or restart your membership
            </OptForm_Text>
        </OptForm>
    );
}
export default Form;