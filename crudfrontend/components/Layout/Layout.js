import React from "react";
import Helmet from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>FastAPI</title>
                {/* <link rel="icon" type="image/png" href={imgFavicon.src} /> */}
            </Helmet>
            <div className="container my-3">
                {children}
            </div>
        </>
    );

};

export default Layout;