import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import RouterConfigs from "./routes/router.configs";

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <RouterConfigs/>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;