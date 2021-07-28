import React, { createContext, Dispatch, useReducer } from "react";

type User = {
    email: string;
    isLogin: boolean;
};

const initialState: User = {
    email: "",
    isLogin: false,
};

interface LoginAction {
    type: "LOGIN";
    //  Login 시 데이터
}
// const test = typeof FetchActionType
interface LogOutAction {
    type: "LOGOUT";
}

type Action = LoginAction | LogOutAction;

type ActionType = Pick<Action, "type">;

type UserDispatch = Dispatch<Action>;

const UserStateContext = createContext<User>(initialState);
const UserDispatchContext = createContext<UserDispatch>(() => null);

function reducer(state: User, action: Action): User {
    switch (action.type) {
        case "LOGIN":
        // return {

        // };
        case "LOGOUT":
        default:
            throw new Error("Unhandled Action");
    }
}

export function UserProvider({ children }: { children: JSX.Element }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}
