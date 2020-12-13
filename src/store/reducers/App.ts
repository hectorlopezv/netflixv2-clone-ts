import * as actionTypes from '../actions/actionTypes';
import {firebase} from '../../lib/firebase.prod';


const initialState = {
    firebase: firebase
}

const AppReducer = (state = initialState, action: any) => {
     if(action.type === actionTypes.SET_CHANNEL){
         return {
             ...state,
            channelId: action.payload.channelId,
            channelName: action.payload.channelName
         }
     }


    return  state;

}

export default AppReducer;