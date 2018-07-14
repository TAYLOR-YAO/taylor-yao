import React, {Component} from "react";
import {Grid, Cell, List, ListItemContent, ListItem} from "react-mdl";

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Taylor .A. Yao</h2>
                    <img src={require("../Images/taylor-yao.JPG")} alt="Avatar" style={{height:"150px", borderRadius:"50%"}}/>
                    <p style={{width:"75%", margin:"auto", paddingTop:"1em"}}>
                    I’m a full stack Web developer, Highly creative problem-solver and dependable with
                     a great knowledge of techniques and superb work ethic. I work well when collaborating 
                     with others or independently and the ability to speak English, French and 5 native languages.

                       </p>
                    </Cell>                
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <Grid className="demo-grid-ruler">
                            <List>
                            <ListItem>
                                <ListItemContent style={{fontFamily:"Anton", fontSize:"25px"}}>
                                    <i className="fa fa-map-marker-alt" aria-hidden="true"/>
                                    512 Allen Rd NE, Atlanta,GA 30324
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontFamily:"Anton", fontSize:"25px"}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    +1 404 862 9078
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontFamily:"Anton", fontSize:"25px"}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    yaotaylor@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent className="contact-list" style={{fontFamily:"Anton", fontSize:"25px"}}>
                                    <i className="fab fa-skype" aria-hidden="true"/>
                                    tayloryao25
                                    </ListItemContent>
                                </ListItem>
                            </List>
                            </Grid >

                        </div>
                        
                    </Cell>                
                </Grid>
            </div>
        )
    }
}

export default Contact;