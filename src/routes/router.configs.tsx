import {useRoutes} from "react-router-dom";
import LoginPage from "../pages/login/login.page";
import MainLayout from "../layouts/main-layouts/main.layout";
import DashboardPage from "../pages/dashboard/dashboard.page";
import AccidentReportPage from "../pages/accident-report/accident-report.page";
import {RegisterPage} from "../pages/register-page/register.page";

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
                },
                {
                    path: '/app/accidentreport',
                    element: <AccidentReportPage />
                }
            ]
        },
        {
            path: "/register",
            element: <RegisterPage />
        },
        {path: "*", element: <h1>page not found</h1>},
    ]);
}

export default RouterConfigs;