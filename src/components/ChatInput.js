import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId,chatRef }) {
 const [user]=useAuthState(auth);
 console.log(user);
    const [input, setInput] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(channelId);
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage:user.photoURL 
        
    });
    chatRef.current.scrollIntoView({ behavior: "smooth" });
    setInput('');
  };
  return (
    <ChatInputConatiner>
      <form >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputConatiner>
  );
}

export default ChatInput;

const ChatInputConatiner = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    border-radius: 10px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    padding: 10px;
    outline: 0;
  }

  > form > button {
    display: none !important;
  }
`;
