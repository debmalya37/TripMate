import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Swipe from "./Components/Swipe";
import Navbar from "./Components/Navbar";
import Chat from "./Components/Chat";
import Activity from "./Components/Activity";
import firebase from 'firebase/compat/app'; // Modified import statement
import 'firebase/compat/auth'; // Modified import statement
import 'firebase/compat/firestore'; // Modified import statement

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Rest of your code remains the same


firebase.initializeApp({
  apiKey: "AIzaSyCum38eZivN4x_h4yMjzabYaEs9RqK43xg",
  authDomain: "zupchat-24df0.firebaseapp.com",
  projectId: "zupchat-24df0",
  storageBucket: "zupchat-24df0.appspot.com",
  messagingSenderId: "201702933735",
  appId: "1:201702933735:web:ab1cf0510b52d1e9020e42",
  measurementId: "G-QJSG9KTS70"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);

  const [user] = useAuthState(auth);

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
  }

  function SignOut() {
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button> // Use 'auth.signOut()' instead of 'auth.SignOut()'
    )
  }

  function ChatRoom() {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25); // Correct the field name to 'createdAt'

    const [messages] = useCollectionData(query, { idField: 'id' })

    return (
      <>
        <div>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>
      </>
    )
  }

  function ChatMessage(props) {
    const { text, uid } = props.message;

    return <> <p>{text}</p></> // Use lowercase 'p' for paragraph tag
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Swipe
                onAcceptUser={(user) => setAcceptedUsers([...acceptedUsers, user])}
                onRejectUser={(user) => setRejectedUsers([...rejectedUsers, user])}
              />
            }
          />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/activity"
            element={<Activity acceptedUsers={acceptedUsers} rejectedUsers={rejectedUsers} />}
          />
        </Routes>
        <Navbar />
        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
    </Router>
  );
}

export default App;
