import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { SET_USER } from './actionType';

export const setUser = (user) => ({  
    type: SET_USER,
    user,
});

let isSigningIn = false;
export function signInAPI() {
    return (dispatch) => {

        if (isSigningIn) return;
        isSigningIn = true; 

        signInWithPopup(auth, provider)
        .then((payload) => {
            dispatch(
                setUser({
                    uid: payload.user.uid,
                    name: payload.user.displayName,
                    email: payload.user.email,
                  photoURL: payload.user.photoURL
                })
            );
        })
        .catch((error) => alert(error.message));
    };
} 
export const signOutAPI =() => {
  return (dispatch) => {
    auth.signOut().then(()=> {
      dispatch(setUser(null));
    });
  };
};

export const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  };
};



/*import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

let isSigningIn = false;

export function signInAPI() {
  return async (dispatch) => {
    if (isSigningIn) return;
    isSigningIn = true;

    try {
      
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error("Backend authentication failed");
      }
      const user = await response.json();
    dispatch(setUser(user));
    } catch (error) {
      alert(error.message);
    } finally {
      isSigningIn = false;
    }
  };
}
*/