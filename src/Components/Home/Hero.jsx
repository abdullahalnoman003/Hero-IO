import React from "react";
import heroImage from "../../assets/heropage.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="px-4 pt-24 pb-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-black text-base-content">
                    We Build <br /> <span className="bg-linear-to-br from-purple-800 to-purple-500 bg-clip-text text-transparent ">Productive</span>  Apps
                </h1>

                <p className="text-base md:text-lg text-base-content/80 max-w-3xl mx-auto">
                    HERO.IO crafts modern apps that make daily life smarter, faster, and
                    simpler. We turn practical ideas into polished digital products people
                    love to use.
                </p>

                <div className="flex items-center justify-center flex-wrap gap-3">
                    
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline btn-primary"
                    >
                      <IoLogoGooglePlaystore/>  Play Store
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline btn-primary"
                    >
                       <FaAppStoreIos/> App Store
                    </a>
                </div>

                <img
                    src={heroImage}
                    alt="Hero illustration"
                    className="w-full max-w-4xl mx-auto"
                />
            </div>
        </section>
    );
};

export default Hero;