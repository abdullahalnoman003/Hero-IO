import React from "react";
import { Link } from "react-router";

const Error404 = () => {
    return (
        <section className="min-h-[70vh] px-4 pt-24 pb-12 flex items-center justify-center">
            <div className="text-center max-w-xl space-y-5">
                <img src="/assets/error-404.png" alt="404" className="w-full max-w-md mx-auto" />
                <h1 className="text-3xl md:text-4xl font-bold">Oops, page not found!</h1>
                <p className="text-base-content/70">
                    The page you are looking for is not available.
                </p>
                <Link to="/" className="btn btn-primary">
                    Go Back!
                </Link>
            </div>
        </section>
    );
};

export default Error404;