import React from 'react'
import LottieAnimation from "../lottie";
import home from "../animation/something.json";
import styled from "styled-components";



function Openingpage() {
  return (
    <LoginContainer>
    <LoginInnerContainer>
      <h1>Select a room to start a chat</h1>
<LottieAnimation lotti={home} height="40%" width="40%" />
      

    </LoginInnerContainer>
  </LoginContainer>
  )
}

export default Openingpage;


const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 80vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 6px 6px 6px rgba(0, 0, 0, 0.24);

  >h1{
    text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 50px;


  }
  @keyframes textclip {
  to {
    background-position: 200% center;
  }
  }
`;

