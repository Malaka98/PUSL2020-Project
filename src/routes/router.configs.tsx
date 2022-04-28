import {useRoutes} from "react-router-dom";
import LoginPage from "../pages/login/login.page";

const RouterConfigs = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <LoginPage/>
        }
    ])

    return element;
}

export default RouterConfigs;