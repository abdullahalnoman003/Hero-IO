import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Error404 from "../Error/Error404";
import Hero from "../Components/Home/Hero";
import States from "../Components/Home/States";
import Trending from "../Components/Home/Trending";
import AllApps from "../Components/AppsPage/AllApps";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                index: true,
                element:<>
                <Hero></Hero>
                <States></States>
                <Trending></Trending>
                </>,
            },
            {
                path:"/*",
                element:<Error404></Error404>
            },
            {
                path:"/all-apps",
                element:<AllApps></AllApps>
            },
        ]
    }
])
export default router;