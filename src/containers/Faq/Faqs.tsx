import React from 'react'
import faqs from '../../fixtures/faqs.json';
import Accordion, 
{ 
    Accordion_Title, 
    Accordion_Item, 
    Accordion_Frame, 
    Accordion_Header, 
    Accordion_Body 
} from '../../components/Accordion';


export interface FaqsProps {

}

const Faqs: React.FC<FaqsProps> = () => {
    return (
        <Accordion>
            <Accordion_Title>Frequently Asked Questions</Accordion_Title>
            {faqs.map((item: any) => {
                return <Accordion_Item key={item.id}>
                    <Accordion_Header>{item.header}</Accordion_Header>
                    <Accordion_Body>{item.body}</Accordion_Body>
                </Accordion_Item>
            })}


        </Accordion>
    );
}

export default Faqs;