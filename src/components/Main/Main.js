import React from "react";
import Home from "../Home";
import  AboutMe from "../AboutMe";
// import Resume from "../Resume";
import Contact from "../Contact";
import Projects from "../Projects";
import {Switch, Route} from "react-router-dom";

const Main =() =>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        {/* <Route exact path="/resume" component={Resume}/> */}
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
    </Switch>
)
export default Main;