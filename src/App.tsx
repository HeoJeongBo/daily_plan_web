import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import { fireStore } from "./firebase/firebaseInit";
import { UserProvider } from "./providers/user";
import { SignUp, Main } from "./components/main";

function App() {
    // useEffect(() => {
    //   fireStore
    //     .collection("test")
    //     .doc("frienddd")
    //     .set({ abc: "123" })
    //     .then((doc) => {
    //       console.log(doc);
    //     });
    // }, []);

    return (
        <UserProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/signUp" component={SignUp} />
                </Switch>
            </Router>
        </UserProvider>
    );
}

export default App;
