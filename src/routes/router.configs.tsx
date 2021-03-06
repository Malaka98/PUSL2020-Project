import {useRoutes} from "react-router-dom";
import LoginPage from "../pages/login/login.page";
import MainLayout from "../layouts/main-layouts/main.layout";
import DashboardPage from "../pages/dashboard/dashboard.page";
import AccidentReportPage from "../pages/accident-report/accident-report.page";
import {RegisterPage} from "../pages/register-page/register.page";
import AccidentViewPage from "../pages/view-accident/accident-view.page";
import AccidentListPage from "../pages/accident-list/accident-list.page";

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
                    element: <AccidentReportPage/>
                },
                {
                    path: '/app/view_accident',
                    element: <AccidentViewPage/>
                },
                {
                    path: '/app/accident_list',
                    element: <AccidentListPage/>
                }
            ]
        },
        {
            path: "/register",
            element: <RegisterPage/>
        },
        {path: "*", element: <h1>page not found</h1>},
    ]);
}

export default RouterConfigs;