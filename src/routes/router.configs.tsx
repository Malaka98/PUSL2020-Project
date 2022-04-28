import {useRoutes} from "react-router-dom";
import LoginPage from "../pages/login/login.page";
import MainLayout from "../layouts/main-layouts/main.layout";
import DashboardPage from "../pages/dashboard/dashboard.page";

const RouterConfigs = () => {
    return useRoutes([
        {
            path: "/",
            element: <LoginPage/>
        },
        {
            path: "/app",
            element: <MainLayout/>,
            children: [
                {
                    index: true,
                    element: <DashboardPage/>
                }
            ]
        }
    ]);
}

export default RouterConfigs;