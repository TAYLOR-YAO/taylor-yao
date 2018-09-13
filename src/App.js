import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import {Layout,Header, Navigation, Content, Drawer} from "react-mdl";
import {Link} from "react-router-dom";
class App extends Component {
  render() {
    return (
            <div className="demo-big-content">
              <Layout>
                <Header className="header-color" title={<Link to="/" style={{textDecoration:"none", color:"#fff"}}>Taylor Yao</Link>} scroll>
                  <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>                                
                  </Navigation>
                </Header>
                <Drawer title={<Link to="/" style={{textDecoration:"none", color:"#000"}}>Taylor Yao</Link>}>
                  <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>                                                               
                  </Navigation>
                </Drawer>
                <Content >
                      <Main/>
                </Content>
              </Layout>
        </div>
    );
  }
}

export default App;
