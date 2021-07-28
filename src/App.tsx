import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import { fireStore } from "./firebase/firebaseInit";
import Main from "./components/main/Main";
import { UserProvider } from "./providers/user";

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
                    <Route path="/" component={Main} />
                </Switch>
            </Router>
        </UserProvider>
    );
}

export default App;
