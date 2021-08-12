import React, { useState, useCallback } from "react";
import { UserSignUpFields } from "../../types/user/types";

type InputKeys = keyof UserSignUpFields;

function useLoginInputStatus() {
    const [loginInput, setLoginInput] = useState<UserSignUpFields>({
        email: "",
        password: "",
    });

    const onChangeInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const targetId: InputKeys = e.target.id as InputKeys;
            const targetValue: string = e.target.value ?? "";

            setLoginInput({ ...loginInput, [targetId]: targetValue });
        },
        [loginInput]
    );

    return [loginInput, onChangeInput] as const;
}

export default useLoginInputStatus;
