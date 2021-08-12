import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { UserProvider } from "./providers/user";
import { SignUp, Main } from "./components/main";
import { RequestProvider } from "./providers/request";
import Spinner from "./components/commons/Spinner";
import { DashBoard } from "./components/dashboard";

function App() {
    return (
        <UserProvider>
            <RequestProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/signUp" component={SignUp} />
                        <Route path="/dashboard" component={DashBoard} />
                    </Switch>
                    <Spinner />
                </Router>
            </RequestProvider>
        </UserProvider>
    );
}

export default App;
