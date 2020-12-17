import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import faqsData from '../../fixtures/faqs.json';
import Accordion, {
    Accordion_Title, 
    Accordion_Item, 
    Accordion_Frame, 
    Accordion_Header, 
    Accordion_Body  
} from '../../components/Accordion';

describe('Testing Accordion', () => {

    it('test <Accordion /> with populated data', () => {

        const {container, getByText} = render(
            <Accordion>
            <Accordion_Title>Frequently Asked Questions</Accordion_Title>
            {faqsData.map((item: any) => {
                return <Accordion_Item key={item.id}>
                    <Accordion_Header>{item.header}</Accordion_Header>
                    <Accordion_Body>{item.body}</Accordion_Body>
                </Accordion_Item>
            })}
        </Accordion>
        );

        expect(getByText('What is Netflix?')).toBeTruthy();
        expect(getByText('How much does Netflix cost?')).toBeTruthy();
        expect(getByText('Where can I watch?')).toBeTruthy();
        expect(getByText('How do I cancel?')).toBeTruthy();
        expect(getByText('What can I watch on Netflix?')).toBeTruthy();
    });

    it('opens and closes the accordion <Accordion /> Component', () => {
        const {container, getByText, queryByText} = render(
            <Accordion>
            <Accordion_Title>Frequently Asked Questions</Accordion_Title>
            {faqsData.map((item: any) => {
                return <Accordion_Item key={item.id}>
                    <Accordion_Header>{item.header}</Accordion_Header>
                    <Accordion_Body>{item.body}</Accordion_Body>
                </Accordion_Item>
            })}
        </Accordion>
        );
        const text = "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";
        
        expect(queryByText(text)).toBeFalsy();

        // //we expect now to be true when we click it
        // fireEvent.click(queryByText("What is Netflix?")!);
        // expect(queryByText(text)).toBeTruthy();

        // fireEvent.click(queryByText("What is Netflix?")!);
        // expect(queryByText(text)).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    
    });
});