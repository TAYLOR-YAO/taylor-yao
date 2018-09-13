import React, {Component} from "react";
import {Grid,Cell} from "react-mdl";

class Home extends Component {
    render(){
        return(
        <div style={{width:"100%",margin:"auto"}}>
            <Grid className="home-grid">
                <Cell col={12}>
                    <img className="profile-picture" src={require("../Images/taylor.jpg")} alt="Profile View"/>
                    <h3 style={{margin:"auto",marginTop:"-20px", color:"#fff"}}>TAYLOR .A. YAO</h3>
                    <div className="show-skills">
                        <h2>Full Stack Web Developper</h2>
                        <hr/>
                        <div className="icone-menu">
                            <ul>
                                <li className="html5"> 
                                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank" rel="noopener noreferrer"> <i className="fab fa-html5" aria-hidden="true" style={{color:"orange"}}></i></a>
                                <span>HTML</span>
                                </li>
                                <li className="css3">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" > <i className="fab fa-css3-alt" aria-hidden="true"  style={{color:"blue"}}></i></a>
                                    <span>CSS</span>
                                </li>
                                
                                <li className="js">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" > <i className="fab fa-js-square" aria-hidden="true" style={{color:"yellow"}}></i></a>
                                    <span> JavaScript</span>
                                </li>

                                <li className="node">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node" target="_blank" rel="noopener noreferrer" > <i className="fab fa-node-js" aria-hidden="true" style={{color:"green"}}></i></a>
                                    <span> Node.JS</span>
                                </li>
                                
                                <li className="react">
                                    <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer" > <i className="fab fa-react" aria-hidden="true" style={{color:"teal"}}></i></a>
                                    <span> React.JS</span>
                                </li>

                                <li className="mongoDB">
                                    <a href="https://www.mongodb.com/what-is-mongodb" target="_blank" rel="noopener noreferrer" > <img src="http://www.thisissanjeeva.com/wp-content/uploads/2017/07/mongo-db.png" alt="MongoDB logo" style={{marginTop:"5px", height:"45px", width:"45px"}}/>
                                    </a>
                                    <span> MongoDB</span>
                                </li>

                                <li className="sequelize">
                                    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" ><img src="http://www.grupotitan.com/wp-content/uploads/2015/05/mysql-respaldo-767x767.png" alt="MongoDB logo" style={{marginTop:"5px", height:"45px", width:"45px"}}/>
                                    </a>
                                    <span>MySql</span>
                                </li>

                                <li className="firebase">
                                    <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" ><img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1490630196/firebase.png" alt="MongoDB logo" style={{marginTop:"5px", height:"45px", width:"45px"}}/></a>
                                    <span> Firebase</span>
                                </li>
                                <li className="firebase">
                                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Git" target="_blank" rel="noopener noreferrer" ><i className="fab fa-git" style={{color:"#000"}}></i></a>
                                    <span> Command line</span>
                                </li>
                            </ul>  
                        </div>
                        
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/taylor-yao-a75325153/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" style={{color:"teal"}}></i>
                            </a>                          
                            <a href="https://github.com/TAYLOR-YAO" target="_blank" rel="noopener noreferrer">
                                < i className="fab fa-github" style={{color:"#fff"}}></i>
                            </a>                         
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Home;