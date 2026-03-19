import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer';

const HomeLayout = () => {
    return (
        <div>
           <nav className='max-w-7xl mx-auto'><Navbar></Navbar></nav>
           <main className='max-w-7xl mx-auto' ><Outlet></Outlet> </main> {/**/}
           <footer className='bg-base-content' ><Footer></Footer></footer>
        </div>
    );
};

export default HomeLayout;