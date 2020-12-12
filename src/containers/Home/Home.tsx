/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import JumboTron, { Jumbo_Container, Jumbo_Title, Jumbo_SubTitle, Jumbo_Image, JumboTron_Pane } from '../../components/JumboTron';
import dataJumbo from '../../fixtures/jumbo.json';

export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return (

      <Jumbo_Container>
        {dataJumbo.map((j: any) => (
          <JumboTron key={j.id} direction={j.direction}>
            <JumboTron_Pane>
              <Jumbo_Title>{j.title}</Jumbo_Title>
              <Jumbo_SubTitle>{j.subTitle}</Jumbo_SubTitle>
            </JumboTron_Pane>

            <JumboTron_Pane>
              <Jumbo_Image src={j.image} alt={j.alt} />
            </JumboTron_Pane>

          </JumboTron>
        ))}
      </Jumbo_Container>
      );
}
 
export default Home;