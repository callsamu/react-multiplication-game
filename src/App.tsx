import { ChakraProvider } from "@chakra-ui/react";
import MultiplicationGame from "./MultiplicationGame";

function App() {
  return (
    <ChakraProvider>
      <MultiplicationGame />
    </ChakraProvider>
  );
}

export default App;
