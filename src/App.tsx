import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import RouterConfigs from "./routes/router.configs";
import {ConfirmationProvider} from "./components/dialog-box/alert-provider";

const App = () => {
    return (
        <ChakraProvider>
            <ConfirmationProvider>
                <BrowserRouter>
                    <RouterConfigs/>
                </BrowserRouter>
            </ConfirmationProvider>
        </ChakraProvider>
    )
}

export default App;