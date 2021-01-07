import * as React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import Home from "./Home"

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider >
      <CSSReset />
      <Home bg="blue.400" />
    </ChakraProvider>
  )
}

export default App;
