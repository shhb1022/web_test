import React from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Header";
import Ahn from "../member/Ahn";
import Kim from "../member/Kim";
import Ku from "../member/Ku";

export default () => (
    <Router>
        <Header/>
        <Route path="/Ahn" component={Ahn} />
        <Route path="/Kim" component={Kim} />
        <Route path="/Ku" component={Ku} />
    </Router>
        )
