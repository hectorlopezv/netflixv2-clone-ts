/* eslint-disable react/jsx-pascal-case */
import React from 'react'

import { render, fireEvent } from '@testing-library/react';
import Player , { Player_Button, Player_Video} from '../../components/Player';

///we ca use Enzyme
//Jest Magic
//Describre --> beforeEach() --> it(  --> expect())

describe('Testing Player Componnet <Player />', () => {

    it('renders the <Player /> with a bunny video', () => {
        //we are testing components
        //we prefer end to end test (all funcitonality)
        const {container, getByText, queryByTestId, debug} = render(
            <Player>
                <Player_Button />
                <Player_Video src="videos/bunny.mp4"/>
            </Player>
        );
        //debugg
        //debug();
        //to set data-testid="player" for the componnetn to be teste
        expect(queryByTestId('player')).toBeFalsy();
        //fire event play click on play component PLAY DE VIDEO
        fireEvent.click(getByText('Play'));

        expect(queryByTestId('player')).toBeTruthy();
        //pause video
        fireEvent.click(queryByTestId('player')!);

        expect(queryByTestId('player')).toBeFalsy();

        expect(container.firstChild).toMatchSnapshot();
    });

});
