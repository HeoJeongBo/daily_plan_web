import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { fireStore } from "./firebase/firebaseInit";

function App() {
  useEffect(() => {
    fireStore
      .collection("test")
      .doc("frienddd")
      .set({ abc: "123" })
      .then((doc) => {
        console.log(doc);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
