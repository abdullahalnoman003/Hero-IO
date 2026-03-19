import React from "react";
import { Link } from "react-router";

const AppNotFound = () => {
    return (
        <section className="px-4 pt-24 pb-16 min-h-[70vh] flex items-center justify-center">
            <div className="text-center max-w-lg space-y-5">
                <img
                    src="/assets/App-Error.png"
                    alt="App not found"
                    className="w-full max-w-sm mx-auto"
                />
                <h1 className="text-3xl font-bold">OPPS!! APP NOT FOUND</h1>
                <p className="text-base-content/70">
                    The App you are requesting is not found on our system.  please try another apps
                </p>
                <Link to="/" className="btn btn-primary">
                    Go Back!
                </Link>
            </div>
        </section>
    );
};

export default AppNotFound;