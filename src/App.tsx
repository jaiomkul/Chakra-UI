import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Header } from "./Components/Header";
import { Pricing } from "./Components/Pricing";
import { Features } from "./Components/Features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Pricing></Pricing>
      <Features></Features>
    </div>
  );
}

export default App;
