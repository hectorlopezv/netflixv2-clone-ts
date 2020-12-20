import {createGlobalStyle} from 'styled-components';

const GlobalStyles =  createGlobalStyle<any>`

    * 
    {
    margin: 0;
    padding: 0;

    }

    *, *::after, *::before 
    {
        box-sizing: inherit;
    }

    html 
    {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        font-size: 62.5%;
        background-color: black;
        color: #333333;
    }
`;

export default GlobalStyles ;
