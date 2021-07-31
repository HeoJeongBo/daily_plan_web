import {
    Button,
    createStyles,
    Grid,
    TextField,
    makeStyles,
    Theme,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

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
    })
);

type FormFields = {
    email: string;
    password: string;
    confirmPassword: string;
};

const SignUp: React.FC<RouteComponentProps> = ({
    history,
}: RouteComponentProps) => {
    const classes = useStyles();

    const [fieldsValue, setFieldsValue] = useState<FormFields>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const setField = (event: ChangeEvent<HTMLInputElement>): void => {
        setFieldsValue({
            ...fieldsValue,
            [event.target.id]: event.target.value,
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
                    onChange={(e) =>
                        setField(e as ChangeEvent<HTMLInputElement>)
                    }
                />
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
                {renderSignUpBtn()}
            </Grid>
        </div>
    );
};

export default SignUp;
