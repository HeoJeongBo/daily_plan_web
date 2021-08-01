import { createContext, Dispatch, useContext, useReducer } from "react";
import type { Request } from "../types/common/request";

const initialState: Request = {
    state: "doNoting",
    errorMessage: "",
};

interface RequestStartAction {
    type: "REQUEST_START";
}

interface RequestEndAction {
    type: "REQUEST_END";
}

interface RequestErrorAction {
    type: "REQUEST_ERROR";
    code: string;
}

type Action = RequestStartAction | RequestEndAction | RequestErrorAction;

type RequestDispatch = Dispatch<Action>;

const RequestStateContext = createContext<Request>(initialState);
const RequestDispatchContext = createContext<RequestDispatch>(() => null);

function reducer(state: Request, action: Action): Request {
    switch (action.type) {
        case "REQUEST_START":
            return {
                state: "start",
                errorMessage: "",
            };
        case "REQUEST_END":
            return {
                ...state,
                state: "end",
            };
        case "REQUEST_ERROR":
            return {
                state: "error",
                errorMessage: action.code,
            };
        default:
            throw new Error("Unhandled Action");
    }
}

export function RequestProvider({ children }: { children: JSX.Element }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <RequestStateContext.Provider value={state}>
            <RequestDispatchContext.Provider value={dispatch}>
                {children}
            </RequestDispatchContext.Provider>
        </RequestStateContext.Provider>
    );
}

export function useRequestDispatch() {
    const dispatch = useContext(RequestDispatchContext);
    if (!dispatch) {
        throw new Error("Cannot find RequestProvider");
    }

    return dispatch;
}

export function useRequestState() {
    const state = useContext(RequestStateContext);
    if (!state) {
        throw new Error("Cannot find RequestProvider");
    }
    return state;
}
