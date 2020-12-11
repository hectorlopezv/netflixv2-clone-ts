import React from 'react';
import JumboTron, {JumboContainer, JumboTitle} from './components/JumboTron';
import dataJumbo from './fixtures/jumbo.json';

const App = () => {
  return (
    <div className="app">
      hello im app
      <JumboContainer>
          {dataJumbo.map((j: any) =>( 
          <JumboTron key={j.id} direction= {j.direction}>
            <JumbOTitle>{j.title}</JumbOTitle>
            <JumboSubTitle>{j.subTitle}</JumboSubTitle>
            <JumboImage src={j.image} alt={j.alt} />
          </JumboTron>
          
          ))}
      </JumboContainer>

    </div>
  );
}

export default App;
