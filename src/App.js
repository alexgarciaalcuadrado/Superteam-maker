import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactDOM from "react-dom";
import Home from "../src/pages/home";
import Seeker from "../src/pages/seeker";
import NotFound from "../src/pages/notFound";


ReactDOM.render(
    <BrowserRouter history={createBrowserHistory}> 
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="seeker" element={<Seeker />} />
            <Route path="*" element={<NotFound />}/>
        </Routes> 
    </BrowserRouter>,
    document.getElementById("root"))

