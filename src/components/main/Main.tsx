import React, { useState, FocusEvent, MouseEvent } from "react";
import Grid from "@material-ui/core/Grid";
import {
    createStyles,
    makeStyles,
    TextField,
    Theme,
    Typography,
} from "@material-ui/core";
import MainLeftImage from "../../assets/images/main_image.svg";
import { FaLock, FaUserAlt } from "react-icons/fa";

import type { LoginFormId } from "../../types/main/types";
import { RouteComponentProps } from "react-router";
import paths from "../../constants/path";
import LoginButton from "./LoginButton";
import useLoginInputStatus from "../../hooks/main/useUserInfoInput";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            height: "100vh",
        },
        inputContainer: {
            width: "360px",
        },
        inputText: {
            flexGrow: 1,
        },
        leftImage: {
            width: "360px",
            "@media (max-width: 780px)": {
                display: "none",
            },
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
        title: {
            fontSize: "3rem",
            margin: "15px 0",
            color: "#333",
            textAlign: "center",
        },
        inputRoot: {
            position: "relative",
            marginBottom: "15px",
            "& svg": {
                color: "#d9d9d9",
                position: "absolute",
                left: 0,
                bottom: "1rem",
                "& .Mui-focused": {
                    color: "red",
                },
            },
            "& input": {
                paddingBottom: "1rem",
                paddingLeft: "30px",
            },
            "& label": {
                left: "30px",
                fontWeight: "bold",
            },
            "& .MuiInput-underline:after": {
                borderBottom: "2px solid #38d39f",
            },
            "& .MuiFormLabel-root.Mui-focused": {
                color: "#38d39f",
            },
            "&.focus svg": {
                color: "#38d39f",
            },
        },
        forgotPassword: {
            textAlign: "right",
            color: "#999",
            cursor: "pointer",
            margin: "20px 0",
            "&:hover": {
                color: "#38d39f",
            },
        },
        signUp: {
            width: "100%",
            textAlign: "right",
            position: "relative",
            paddingTop: "40px",
            "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                left: 0,
                borderTop: "1px solid #d9d9d9",
                top: "20px",
            },
            "& span": {
                color: "#38d39f",
                cursor: "pointer",
            },
        },
        errorText: {
            color: "red",
            fontWeight: "bolder",
        },
    })
);

const Main: React.FC<RouteComponentProps> = ({
    history,
}: RouteComponentProps) => {
    const classes = useStyles();

    const [loginInput, onChangeInput] = useLoginInputStatus();
    const [focusedElem, setFocusedElem] = useState<LoginFormId | null>(null);
    const [isError, setIsError] = useState<boolean>(false);

    const onFocusOnInputElem = (event: FocusEvent): void => {
        event.preventDefault();

        const targetId: LoginFormId = event.target.id as LoginFormId;
        setFocusedElem(targetId);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeInput(event);
    };

    const renderLeftImage = (): JSX.Element => {
        return (
            <Grid item className={classes.leftImage}>
                <img style={{ width: "100%" }} src={MainLeftImage} alt="" />
            </Grid>
        );
    };

    const onBlurOnInputElem = (event: FocusEvent<HTMLInputElement>): void => {
        setFocusedElem(null);
    };

    const onClickSingUp = (event: MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();

        history.push(paths.signUp);
    };

    const renderLoginForm = (): JSX.Element => {
        return (
            <Grid item className={classes.inputContainer}>
                <h2 className={classes.title}>하루 알람</h2>
                {renderIdInput()}
                {renderPasswordInput()}
                {renderForgotPassword()}
                {renderError()}
                <LoginButton
                    history={history}
                    userInfo={loginInput}
                    setError={setIsError}
                />
                {renderSignUp()}
            </Grid>
        );
    };

    const renderIdInput = (): JSX.Element => {
        return (
            <Grid
                container
                justifyContent="center"
                alignItems="flex-end"
                className={`${classes.inputRoot}${
                    focusedElem === "email" ? " focus" : ""
                }`}
                onFocus={onFocusOnInputElem}
                onBlur={onBlurOnInputElem}
            >
                <FaUserAlt />
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        );
    };

    const renderPasswordInput = (): JSX.Element => {
        return (
            <Grid
                container
                justifyContent="center"
                alignItems="flex-end"
                className={`${classes.inputRoot}${
                    focusedElem === "password" ? " focus" : ""
                }`}
                onFocus={onFocusOnInputElem}
                onBlur={onBlurOnInputElem}
            >
                <FaLock />
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        );
    };

    const renderError = (): JSX.Element | null => {
        if (!isError) {
            return null;
        }

        return (
            <Grid item>
                <Typography className={classes.errorText}>
                    로그인중 에러가 발생했습니다.
                </Typography>
            </Grid>
        );
    };

    const renderSignUp = (): JSX.Element => {
        return (
            <div className={classes.signUp}>
                아직 계정이 없으신가요 ?
                <span onClick={onClickSingUp}> 지금 가입하기</span>
            </div>
        );
    };

    const renderForgotPassword = (): JSX.Element => {
        return (
            <div className={classes.forgotPassword}>
                비밀번호를 잊으셨나요 ?
            </div>
        );
    };

    return (
        <Grid
            container
            className={classes.root}
            justifyContent="center"
            alignItems="center"
            spacing={6}
        >
            {renderLeftImage()}
            {renderLoginForm()}
        </Grid>
    );
};

export default Main;
