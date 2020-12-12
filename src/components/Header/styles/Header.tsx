import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    margin: 0 59px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a{
        display: flex;
    }

    @media ( max-width: 1000px){
        margin: 0 30px;

    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;



export const Frame = styled.div`

`;

interface backgroundProps {
    src?: string;
}
export const Background = styled.div<backgroundProps>`
display: flex;
flex-direction: column;
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
no-repeat;

`;


//aply style to react route link
export const Header_ButtonLink = styled<any>(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
    background: #f40612;
    }
`;



