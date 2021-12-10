import React from "react";
import styled from "styled-components";
import "./App.css";
import tw from "twin.macro";
import HomePage from "./app/containers/HomePage";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <AppContainer className="App">
      <HomePage />
    </AppContainer>
  );
}

export default App;
