

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    //actions tienen dos tipos, el type y el payload
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
}