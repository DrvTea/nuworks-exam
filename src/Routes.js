import React from "react";
import Home from "./components/Home/Home"
import { Routes as ReactRoutes, Route } from "react-router-dom";

export default function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Home />} />
        </ReactRoutes>
    );
};