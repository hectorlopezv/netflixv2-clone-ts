import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 70px 50px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px){
        padding: 70px 30px;

    }
`;


export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;


    @media (max-width: 1000px){
        grid-template-columns: repeat(4, minmax(120px, 1fr));
    }


    @media (max-width: 580px){
        grid-template-columns: repeat(2, minmax(50px, 1fr));
    }

    @media (max-width: 440px){
        grid-template-columns: repeat(2, minmax(110px, 1fr));
    }



`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;


export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.div`
    font-size: 13px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;