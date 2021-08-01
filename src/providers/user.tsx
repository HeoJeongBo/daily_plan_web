import React, { createContext, Dispatch, useContext, useReducer } from "react";
import type { User } from "../types/user/types";

const initialState: User = {
    email: "",
    accessToken: "",
    refreshToken: "",
};

interface LoginAction {
    type: "LOGIN";
    data: User;
    //  Login 시 데이터
}
// const test = typeof FetchActionType
interface LogOutAction {
    type: "LOGOUT";
}

interface SignUpAction {
    type: "SIGN_UP";
    data: User;
}

type Action = LoginAction | LogOutAction | SignUpAction;

// type ActionType = Pick<Action, "type">;

type UserDispatch = Dispatch<Action>;

// state와 dispatch 각각 context로 관리
const UserStateContext = createContext<User>(initialState);
const UserDispatchContext = createContext<UserDispatch>(() => null);

function reducer(state: User, action: Action): User {
    switch (action.type) {
        case "SIGN_UP":
        case "LOGIN":
            return action.data;
        case "LOGOUT":
            return initialState;
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

export function useUserState() {
    const state = useContext(UserStateContext);
    if (!state) {
        throw new Error("Cannot find UserProvider");
    }

    return state;
}

export function useUserDispatch() {
    const dispatch = useContext(UserDispatchContext);
    if (!dispatch) {
        throw new Error("Cannot find UserProvider");
    }

    return dispatch;
}

export function useUser() {
    const state = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);
    if (!state || !dispatch) {
        throw new Error("Cannot find UserProvider");
    }

    return [state, dispatch];
}
