import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed
} from "@react-firebase/auth";
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Provider } from 'react-redux';
import store from './CarStore/Store'

let Config = {
  apiKey: "AIzaSyADDhJSA_hg7k4G56u0K4WiUvoCK8A1sFA",
  authDomain: "eride-8b0ae.firebaseapp.com",
  projectId: "eride-8b0ae",
  storageBucket: "eride-8b0ae.appspot.com",
  messagingSenderId: "542614516957",
  appId: "1:542614516957:web:0d8f15f2e4d325d49fd734",
  databaseURL: "DATABASE_URL"
}

const signOut =() =>{
  firebase.default.auth().signOut();
}
const signIn =() =>{
  const googleAuthProvider = new firebase.default.auth.GoogleAuthProvider();
      firebase.default.auth().signInWithPopup(googleAuthProvider);
}
function App() {
  
  // React.useEffect(()=>{
  //   if(!firebase.default.auth().currentUser){
  //     const googleAuthProvider = new firebase.default.auth.GoogleAuthProvider();
  //     firebase.default.auth().signInWithPopup(googleAuthProvider);
  //   }
    
  //   // firebase.default.auth().signOut();
  //   // console.log(firebase.default.auth())
  // },[])
  return (
    <FirebaseAuthProvider firebase={firebase.default} {...Config}>
      <BrowserRouter>
      <Provider store={store}>
    <div className="App">
    
      <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <>
              {isSignedIn && (<Layout signOut={signOut}></Layout>)}
              {!isSignedIn && (<p>Welcome to E-Ride!
                <button onClick={signIn}>SignIn</button>
              </p>)}
              </>
            );
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return <div></div>;
            }}
          </IfFirebaseAuthed>
          {/* <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd> */}
        </div>

    </div>
    </Provider>
    </BrowserRouter>
    </FirebaseAuthProvider>
  );
}

export default App;
