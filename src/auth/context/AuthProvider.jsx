
import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

// const initialState = {
//     logged: false
// }

//Mantener al usuario activo, grabar en el storage
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        logged: !!user,
        user: user,
    }
}
export const AuthProvider = ({ children }) => {

    //tercer argumento es la función inicializadora, initializer
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {
        const user = {
            id: 'ABC',
            name: name
        }
        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)

    }

    const logout = () => {
        localStorage.removeItem('user');

        const action = {
            type: types.logout
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            ...authState,

            //Methods
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
