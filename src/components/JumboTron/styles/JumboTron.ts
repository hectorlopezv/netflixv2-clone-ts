import styled from 'styled-components/macro';

interface typesProps {
    direction : string;
}

export const Inner = styled.div<typesProps>`
    display: flex;
    flex-direction: ${ ({direction}) => direction  };
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px){
        flex-direction: column;
    }
`;


export const Container =  styled.div<>``;

export const JumboTitle = styled.h1<>``;



export const JumboSubTitle = styled.div<>``;


interface imageProps {
    src: string;
    alt: string;
}
export const JumboImage = styled.div<imageProps>``;