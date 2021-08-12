import {
    Button,
    createStyles,
    Grid,
    TextField,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import useUserService from "../../services/user/user";
import type { UserSignUpFields } from "../../types/user/types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: "100vw",
            height: "100vh",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        title: {
            textAlign: "center",
            lineHeight: "2rem",
        },
        root: {
            width: "360px",
            padding: "30px 20px",
            borderRadius: "20px",
            border: "1px solid black",
            "& .MuiTextField-root": {
                "& .MuiOutlinedInput-input": {
                    padding: "15.5px 14px",
                },
            },
            "& .MuiInputBase-input": {
                height: "1.3em",
            },
        },
        btn: {
            width: "100%",
            borderRadius: "20px",
            height: "45px",
        },
        errorText: {
            color: "red",
            fontWeight: "bolder",
        },
    })
);

type FormFields = UserSignUpFields & {
    confirmPassword: string;
};

type ErrorFields = {
    helperText: string;
};

const SignUp: React.FC<RouteComponentProps> = ({
    history,
}: RouteComponentProps) => {
    const classes = useStyles();
    const [{ signUp }] = useUserService();

    const [fieldsValue, setFieldsValue] = useState<FormFields>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorFields, setErrorFields] = useState<ErrorFields>({
        helperText: "",
    });

    const setField = (event: ChangeEvent<HTMLInputElement>): void => {
        setFieldsValue({
            ...fieldsValue,
            [event.target.id]: event.target.value,
        });
    };

    const onSignUp = () => {
        const errorFields: ErrorFields = { helperText: "" };

        if (
            !/^[a-zA-Z0-9._-]+@[a-zA-Z09.-]+\.[a-zA-z]{2,4}$/.test(
                fieldsValue.email
            )
        ) {
            errorFields.helperText = "유효한 이메일이 아닙니다";
        }
        if (fieldsValue.password.length === 0) {
            errorFields.helperText = "비밀번호를 입력해주세요.";
        }
        if (
            fieldsValue.password.length !== 0 &&
            fieldsValue.password !== fieldsValue.confirmPassword
        ) {
            errorFields.helperText = "비밀번호와 동일하게 입력해주세요.";
        }

        if (!!errorFields.helperText.length) {
            return setErrorFields(errorFields);
        }
        requestSignUp(fieldsValue.email, fieldsValue.password);
    };

    const requestSignUp = (email: string, password: string) => {
        signUp({
            email: fieldsValue.email,
            password: fieldsValue.password,
        }).then((result) => {
            if (result) {
                return history.push("/dashboard");
            }
            return setErrorFields({
                helperText: "회원가입 중 오류가 발생했습니다.",
            });
        });
    };

    const renderTitle = (): JSX.Element => {
        return (
            <div className={classes.title}>
                <h1>매일 알림</h1>
                <h2>회원 가입</h2>
            </div>
        );
    };

    const renderEamil = (): JSX.Element => {
        return (
            <Grid item>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    id="email"
                    onChange={(e) =>
                        setField(e as ChangeEvent<HTMLInputElement>)
                    }
                />
            </Grid>
        );
    };

    const renderPassword = (): JSX.Element => {
        return (
            <Grid item>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Password"
                    id="password"
                    type="password"
                    onChange={(e) =>
                        setField(e as ChangeEvent<HTMLInputElement>)
                    }
                />
            </Grid>
        );
    };

    const renderConfirmPassword = (): JSX.Element => {
        return (
            <Grid item>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Confirm Password"
                    id="confirmPassword"
                    type="password"
                    onChange={(e) =>
                        setField(e as ChangeEvent<HTMLInputElement>)
                    }
                />
            </Grid>
        );
    };

    const renderError = (): JSX.Element | null => {
        if (!errorFields.helperText.length) {
            return null;
        }
        return (
            <Grid item>
                <Typography className={classes.errorText}>
                    {errorFields.helperText}
                </Typography>
            </Grid>
        );
    };

    const renderSignUpBtn = (): JSX.Element => {
        return (
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    onClick={onSignUp}
                >
                    회원가입
                </Button>
            </Grid>
        );
    };

    return (
        <div className={classes.container}>
            <Grid
                container
                direction="column"
                className={classes.root}
                spacing={3}
            >
                {renderTitle()}
                {renderEamil()}
                {renderPassword()}
                {renderConfirmPassword()}
                {renderError()}
                {renderSignUpBtn()}
            </Grid>
        </div>
    );
};

export default SignUp;
