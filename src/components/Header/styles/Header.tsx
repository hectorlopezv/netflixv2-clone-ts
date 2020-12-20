import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';
import { FaPlay } from "react-icons/fa";

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
    dontShowSmallVp?: boolean;
}
export const Background = styled.div<backgroundProps>`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

    @media (max-width: 1100px){
        ${({dontShowSmallVp}) => dontShowSmallVp && 'background: none;'}
    }


`;


//aply style to react route link
export const Header_ButtonLink = styled<any>(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 18px;
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

//create copy of container and add new styles or overwrite
export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media(max-width: 1100px){
        display: none;
    }
`;


export const Text = styled.p`
   color: white;
   font-size: 22px;
   line-height: normal;
   text-shadow: 2px 2px 4px rgba(0,0,0,.45); 
   margin: 0;
`;

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    padding: 5px 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45); 
   
    margin-bottom: 20px;
`;

interface LinkProps {
    active?: any;
}
export const Link = styled.p<LinkProps>`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-size: 13.5px;
    cursor: pointer;

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;
interface PictureProps {
    src: string;
}

export const Picture = styled.button<PictureProps>`
    background: url(${({src}) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    padding: 8px 15px;
    height: 32px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;
    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        button {
            margin-right: 10px;
        }

        ${Link}, ${Picture}{
            cursor: default;
        }

        p {
            font-size: 12px;
            margin-bottom: 0;
            margin-top: 0;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    marign-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown}{
        display: flex;
        flex-direction: column;
    }
`;


export const Search = styled.div`
    display: flex;
    align-item: center;

    svg {
        color: white;
        cursosr: pointer;
    }

    @media (max-width: 700px){
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin-right: 6px;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

interface SearchProps {
    value: any;
    active: any;
}
export const SearchInput = styled.input<SearchProps>`

    background-color: #444444;
    color: white;
    border: 1px solid white;
    transition : width 0.4s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({active}) => active === true ? '10px' : '0'};
    margin-right: ${({active}) => active === true ? '10px' : '0'};
    padding: ${({active}) => active === true ? '10px' : '0'};
    opacity: ${({active}) => active === true ? '1' : '0'};
    width: ${({active}) => active === true ? '200px' : '0'};
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, .35);
    background-color: white;
    color: black;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    max-width: 180px;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    margin-top: 30px;
    cursor: pointer;
    transition: background-color .25s;
    &: hover {
        background-color: rgba(255,255,255,0.75); 
    }

`;

export const GroupPlayButton = styled(Group)`
    justify-content: space-between;
`;
export const PlayIcon = styled(FaPlay)`
    color: black;
    font-size: 30px;
`;