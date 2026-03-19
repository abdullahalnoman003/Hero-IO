import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state !== "idle";

    return (
        <div className="inter min-h-screen flex flex-col">
           <nav className='max-w-7xl mx-auto w-full'>
                <Navbar />
           </nav>

           <main className='max-w-7xl mx-auto w-full flex-1'>
                {isPageLoading ? (
                    <div className="min-h-screen flex items-center justify-center">
                        <span className="loading loading-bars loading-lg text-primary" />
                    </div>
                ) : (
                    <Outlet />
                )}
           </main>

           <footer className='bg-base-content'>
                <Footer />
           </footer>
        </div>
    );
};

export default HomeLayout;