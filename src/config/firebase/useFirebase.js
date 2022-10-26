import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { logout } from "../../features/userSlice";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const useFirebase = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  // creating user with email & pass
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Swal.fire({
          icon: "success",
          title: `Success`,
          text: "Enjoy your favorite movies & Tv shows",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `Opps! You did wrong`,
          text: `${error.message}`,
        });
      });
  };

  // user login
  const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("logged in");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //user logout
  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout);
        alert("Your are logged out now");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return {
    registerUser,
    logInUser,
    logOutUser,
  };
};

export default useFirebase;
