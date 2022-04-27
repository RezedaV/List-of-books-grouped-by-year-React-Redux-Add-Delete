import {CHANGE_SHOW_NAME} from "./actions";

const initialState = {
    name: 'Имя',
    showName: true,
}

export const primerReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_SHOW_NAME:{
            return {
                ...state,
                showName: !state.showName,
            };
        }

        default:
            return state
    }
}