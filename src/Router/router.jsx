import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Error404 from "../Error/Error404";
import Hero from "../Components/Home/Hero";
import States from "../Components/Home/States";
import Trending from "../Components/Home/Trending";
import AllApps from "../Components/AppsPage/AllApps";
import AppDetails from "../Components/AppsPage/AppDetails";
import MyInstallation from "../Components/AppsPage/MyInstallation";

const routeLoadingDelay = async () => {
    await new Promise((resolve) => setTimeout(resolve, 280));
    return null;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                loader: routeLoadingDelay,
                element: (
                    <>
                        <Hero />
                        <States />
                        <Trending />
                    </>
                ),
            },
            {
                path: "apps",
                loader: routeLoadingDelay,
                element: <AllApps />,
            },
            {
                path: "apps/:id",
                loader: routeLoadingDelay,
                element: <AppDetails />,
            },
            {
                path: "installation",
                loader: routeLoadingDelay,
                element: <MyInstallation />,
            },
            {
                path: "*",
                element: <Error404 />,
            },
        ],
    },
]);

export default router;