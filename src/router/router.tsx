import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DefaultPage from "../pages/DefaultPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <DefaultPage />
            }
        ]
    }
])