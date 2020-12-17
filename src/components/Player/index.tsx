import React, {useState, useContext, createContext} from 'react';
//here is the big MODAL using React Portal
import ReactDom from 'react-dom';
import {Container, Button, Overlay, Inner, Close} from './styles/Player';

export interface PlayerProps {
    
}
const PlayerContext = createContext<{[prop: string]: any}>({});
const Player: React.FC<PlayerProps> = ({children, ...props}) => {
    const [showPlayer, setshowPlayer] = useState(false);

    return (  
        <PlayerContext.Provider value={{showPlayer, setshowPlayer}}>
            <Container {...props}>{children}</Container>
        </PlayerContext.Provider> 
    );
}

export default Player;


export interface Player_VideoProps {
    src: string;
}
 
export const Player_Video: React.FC<Player_VideoProps> = ({src, ...props}) => {
    const { showPlayer, setshowPlayer } = useContext(PlayerContext);
    return showPlayer ? ReactDom.createPortal(
    <Overlay data-testid="player" onClick={() => setshowPlayer(false)  }>
        <Inner>
            <video id="netflix-player" controls>
                <source src={src} type="video/mp4" />
            </video>
            <Close />
        </Inner>
    </Overlay>, document.body): null;
}


export interface Player_ButtonProps {
    
}
 
export const Player_Button: React.FC<Player_ButtonProps> = () => {
    const { showPlayer, setshowPlayer } = useContext(PlayerContext);

    return <Button onClick={() => setshowPlayer( (prevstate: boolean) => !prevstate )}>
        Play
    </Button>
}
 

 