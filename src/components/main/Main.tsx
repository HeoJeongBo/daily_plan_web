import React, { FocusEvent, useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import MainLeftImage from "../../assets/images/main_image.svg";
import type { LoginFormId } from "../../types/main/types";

const Main: React.FC = () => {
    const [focusElem, setFocusElem] = useState<LoginFormId>(null);

    const onFocusOnInputElem = (event: FocusEvent<HTMLInputElement>): void => {
        event.preventDefault();

        const targetId: LoginFormId = event.target.id as LoginFormId;
        setFocusElem(targetId);
    };

    const onBlurOnInputElem = (event: FocusEvent<HTMLInputElement>): void => {
        setFocusElem(null);
    };

    const renderLeftImage = (): JSX.Element => {
        return (
            <div className="left-image">
                <img src={MainLeftImage} alt="left" />
            </div>
        );
    };

    const renderForm = (): JSX.Element => {
        return (
            <div className="form-container">
                {renderInput()}
                {renderForgotPassword()}
                {renderLoginBtn()}
            </div>
        );
    };

    const renderInput = (): JSX.Element => {
        return (
            <div className="input-form-container">
                <h2>하루 알람</h2>
                <div
                    className={`input-wrapper${
                        focusElem === "id" ? " focus" : ""
                    }`}
                >
                    <div className="i">
                        <FaUserAlt />
                    </div>
                    <div
                        className="input-container"
                        onFocus={onFocusOnInputElem}
                        onBlur={onBlurOnInputElem}
                    >
                        <h5>ID</h5>
                        <input className="input" type="text" id="id" />
                    </div>
                </div>
                <div
                    className={`input-wrapper${
                        focusElem === "password" ? " focus" : ""
                    }`}
                >
                    <div className="i">
                        <FaLock />
                    </div>
                    <div
                        className="input-container"
                        onFocus={onFocusOnInputElem}
                        onBlur={onBlurOnInputElem}
                    >
                        <h5>Password</h5>
                        <input
                            className="input"
                            type="password"
                            id="password"
                        />
                    </div>
                </div>
            </div>
        );
    };

    const renderForgotPassword = (): JSX.Element => {
        return (
            <div className="forgot-password-container">
                <a href="#">Forgot Password?</a>
            </div>
        );
    };

    const renderLoginBtn = (): JSX.Element => {
        return (
            <div className="login-btn-container">
                <input type="submit" className="login-btn" value="로그인" />
            </div>
        );
    };

    return (
        <div className="main-wrapper">
            {renderLeftImage()}
            {renderForm()}
        </div>
    );
};

export default Main;
