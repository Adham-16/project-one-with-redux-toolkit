import React from "react";
import Footer from "./shared/footer/Footer";
import { Outlet } from "react-router-dom";
import MainNav from './shared/header/MainNav';
import './stylelayout.css'

const Layout = () => {
    return (
        <div>
            <MainNav />
            <div className="mainContainer">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
