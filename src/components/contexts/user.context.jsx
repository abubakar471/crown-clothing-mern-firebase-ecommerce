import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

const USER_ACTION_TYPE = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {
    const { type, payload } = action;
    console.log('dispatched')
    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                currentUser: payload
            }

        default:
            throw new Error(`unhandlerd tyoe ${type} in userReducer`)
    }


}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));
    }

    const value = {
        currentUser, setCurrentUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);

            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

