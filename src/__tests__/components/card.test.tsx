/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';


import Card, 
{Card_Text,
    Card_Feature,
    Card_Group, Card_Title, Card_Entities, Card_Item, Card_Image, Card_Meta, Card_SubTitle
} from '../../components/Card';

import Player, 
{
    Player_Button, Player_Video
} from '../../components/Player';



const category = 'series';
const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        description: 'Tiger King description',
        id: '07adcf19-517f-41b4-8f8b-04fee694bce1',
        title: 'Tiger King',
        docId: 'IcRxJBanzE7nmIp2GMGb',
      },
    ],
  },
  {
    title: 'Feel Good',
    data: [
      {
        title: 'Juno',
        genre: 'feel-good',
        description: 'Juno description',
        maturity: '0',
        id: 'a938b5a6-fe25-4a06-8050-353bc7146ccd',
        slug: 'juno',
        docId: '4JDgdf5vE0K3YrW9ZnbP',
      },
    ],
  },
];


describe('<Card /> Component', () => {

    it('<Card > Renders the card with populated data', () => {
        const {container, getByText, queryByText} =  render (
            <Card_Group>
                {slideRows.map((slideItem: any) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>{/* carc container*/}
                        <Card_Title>{slideItem.title}</Card_Title>
                        <Card_Entities>{/*Card Carrousel*/}
                            {/* Card Item*/}
                            {slideItem.data.map((item: any) => ( 
                                <Card_Item key={item.docId} item={item}>
                                    <Card_Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                    <Card_Meta>
                                        <Card_SubTitle>{item.title}</Card_SubTitle>
                                        <Card_Text>{item.description}</Card_Text>
                                    </Card_Meta>
                                </Card_Item>
                            ))}
                        </Card_Entities>
                        <Card_Feature category={category}>
                            <Player>
                                <Player_Button />
                                <Player_Video src={"/videos/bunny.mp4"}/>
                            </Player>
                        </Card_Feature>

                    </Card> 
                ))}
            </Card_Group>
        );

        //asertions
        expect(getByText('Documentaries')).toBeTruthy();
        expect(getByText('Tiger King')).toBeTruthy();
        expect(getByText('Tiger King description')).toBeTruthy();

        expect(getByText('Feel Good')).toBeTruthy();
        expect(getByText('Juno')).toBeTruthy();
        expect(getByText('Juno description')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();


    });


    it('renders <Card > testing toogling  setFeature and showFeature', () => {
        const {container, getByText, queryByText, getByAltText, queryByTestId, getByTestId} =  render (
            <Card_Group>
                {slideRows.map((slideItem: any) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>{/* carc container*/}
                        <Card_Title>{slideItem.title}</Card_Title>
                        <Card_Entities>{/*Card Carrousel*/}
                            {/* Card Item*/}
                            {slideItem.data.map((item: any) => ( 
                                <Card_Item key={item.docId} item={item} data-testid={`${item.slug}-item-feature`}>
                                    <Card_Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                    <Card_Meta>
                                        <Card_SubTitle>{item.title}</Card_SubTitle>
                                        <Card_Text>{item.description}</Card_Text>
                                    </Card_Meta>
                                </Card_Item>
                            ))}
                        </Card_Entities>
                        <Card_Feature category={category}>
                            <Player>
                                <Player_Button />
                                <Player_Video src={"/videos/bunny.mp4"}/>
                            </Player>
                        </Card_Feature>

                    </Card> 
                ))}
            </Card_Group>
        );

        //asertions
        expect(queryByText('18')).toBeFalsy();
        fireEvent.click(getByTestId('tiger-king-item-feature')!);
        expect(queryByText('18')).toBeTruthy();

        //click close button
        fireEvent.click(getByAltText('Close')!);
        expect(queryByText('18')).toBeFalsy();

        expect(queryByText('PG')).toBeFalsy();
        
        fireEvent.click(getByTestId('juno-item-feature')!);
        expect(queryByText('PG')).toBeTruthy();

        fireEvent.click(getByAltText('Close')!);
        expect(queryByText('PG')).toBeFalsy();

        expect(container.firstChild).toMatchSnapshot();
        
    });
});