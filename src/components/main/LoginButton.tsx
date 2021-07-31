import React, { MouseEventHandler } from "react";
import { History } from "history";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import paths from "../../constants/path";

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
}: {
    history: History;
}): JSX.Element {
    const classes = useStyles();

    const onClickButton = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        event.preventDefault();

        // history.push(paths.login);
    };

    return (
        <Button onClick={(e) => onClickButton(e)} className={classes.root}>
            로그인
        </Button>
    );
}
