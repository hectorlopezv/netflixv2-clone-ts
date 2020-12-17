/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';

import JumboTron, { Jumbo_Container, Jumbo_Title, Jumbo_SubTitle, Jumbo_Image, JumboTron_Pane } from '../../components/JumboTron';
import dataJumbo from '../../fixtures/jumbo.json';

describe('JumboTron', () => {
    it('JumboTron <JumboTron /> render with populated data', () => {
        const {container, getByText, getByAltText, getByTestId} = render(
            <Jumbo_Container>
                {dataJumbo.map((j: any) => (
                <JumboTron key={j.id} direction={j.direction}>
                    <JumboTron_Pane>
                    <Jumbo_Title>{j.title}</Jumbo_Title>
                    <Jumbo_SubTitle>{j.subTitle}</Jumbo_SubTitle>
                    </JumboTron_Pane>
        
                    <JumboTron_Pane>
                    <Jumbo_Image src={j.image} alt={j.alt} data-testid={`${j.id}-jumbo-image`} />
                    </JumboTron_Pane>
        
                </JumboTron>
                ))}
            </Jumbo_Container>
        );

        //assertions
        expect(getByText('Enjoy on your TV.')).toBeTruthy();
        expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
        expect(getByTestId('1-jumbo-image')).toBeTruthy();
        expect(getByText('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')).toBeTruthy();
        
        expect(container.firstChild).toMatchSnapshot();
        

    });
});