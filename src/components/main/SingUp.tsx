import React from "react";
import { RouteComponentProps } from "react-router-dom";

const SignUp: React.FC<RouteComponentProps> = ({
    history,
}: RouteComponentProps) => {
    const renderSignUpForm = (): JSX.Element => {
        return (
            <div className="sign-up-form-container">
                {renderID()}
                {renderPassword()}
                {renderConfirmPassword()}
                {renderSubmitBtn()}
            </div>
        );
    };

    const renderID = (): JSX.Element => {
        return <div className="id-container">ID</div>;
    };

    const renderPassword = (): JSX.Element => {
        return <div className="password-container">Password</div>;
    };

    const renderConfirmPassword = (): JSX.Element => {
        return (
            <div className="confirm-password-container">Confirm password</div>
        );
    };

    const renderSubmitBtn = (): JSX.Element => {
        return <div className="submit-btn-container">회원가입</div>;
    };

    console.log("asdasd");
    return <div className="sign-up-container">{renderSignUpForm()}</div>;
};

export default SignUp;
