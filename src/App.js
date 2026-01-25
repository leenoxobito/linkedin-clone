import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useEffect } from "react";
//import { getUserAuth } from "./actions";
import { connect } from 'react-redux';
import { auth } from "./firebase";
import { setUser } from "./actions";

function App(props) {
  useEffect(() => {
  const unsubscribe =  auth.onAuthStateChanged((user) => {
    console.log("App.js -> Firebase user =", user);
    if (user) {
      props.setUser( {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      });
    } else {
      props.setUser(null);
    }
  });

  return () => unsubscribe();

  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={
            <><Header />
            <Home /> </> 
          } />

        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  //getUserAuth: () => dispatch(getUserAuth()),
  setUser: (payload) => dispatch(setUser(payload)),
});

export default connect(null, mapDispatchToProps)(App);