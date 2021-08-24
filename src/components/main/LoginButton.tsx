import React from "react";
import { History } from "history";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import useUserService from "../../services/user/user";
import { UserSignUpFields } from "../../types/user/types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "50px",
            borderRadius: "25px",
            backgroundImage:
                "linear-gradient(to right, #32be8f, #38d39f, #32be8f)",
            cursor: "pointer",
            color: "#fff",
            backgroundSize: "200%",
            transition: ".5s",
            "&:hover": {
                backgroundPosition: "right",
            },
        },
    })
);

export default function LoginButton({
    history,
    userInfo,
    setError,
}: {
    history: History;
    userInfo: UserSignUpFields;
    setError: Function;
}): JSX.Element {
    const classes = useStyles();
    const { login } = useUserService();

    const onClickButton = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();

        try {
            const loginRequestResult = await login(userInfo);
            if (loginRequestResult) {
                return history.push("/dashboard");
            } else {
                setError(true);
            }
        } catch (e) {
            setError(true);
        }
    };

    return (
        <Button onClick={(e) => onClickButton(e)} className={classes.root}>
            로그인
        </Button>
    );
}
