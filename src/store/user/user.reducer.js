import { USER_ACTION_TYPE } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    console.log('dispatched');

    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                currentUser: payload
            }

        default:
            // it is mandatory in redux to return the state at default case, if nothing matched type
            return state;
    }


}