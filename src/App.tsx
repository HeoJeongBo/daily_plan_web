import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import { fireStore } from "./firebase/firebaseInit";
import Main from "./components/main/Main";

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
        <Router>
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </Router>
    );
}

export default App;
