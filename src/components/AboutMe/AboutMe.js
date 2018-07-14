import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";;

class AboutMe extends Component {
    render(){
        return(
            <div className="about-me">
                 <Grid className="demo-grid-2">
                    <Cell col={6}>
                    <img src={require("../Images/taylor-yao.JPG")} alt="My view"/>
                    </Cell>
                    <Cell col={6}>
                    <h2 className="brand-title" style={{color:"#fff", marginLeft:"100px"}}>About Me</h2>
                    <div className="about-me-story">
                    <p style={{textAlign:"left", color:"#F5F5F5", textIndent: "2em", fontSize:"18px"}}>
                        I stayed around the web since I graduate from Georgia Institute Of Technology's Coding Boot Camp.
                        <br/>
                        I'm an exceptionally creative and dependable full stack web developer with a great knowledge of techniques
                        and superb work ethic.
                        I love solving general problems that require my skills by myself but 
                        also in a team because it gives me more opportunities to learn and get better every single day.
                    </p>
                    </div>
                    
                    </Cell>
                    <Cell col={12} >
                        <h2 className="bio-title" style={{color:"#fff"}}>Mini Biography</h2>
                        <div className="about-me-bio">
                            <p style={{textAlign:"left", color:"#F5F5F5", textIndent: "2em", fontSize:"18px"}}>
                                We were a Christian family of 15 people in the village of Pagala-gare in the West African country of Togo. 
                            My father was a teacher and my mother runs a little restaurant. 
                            Pagala-gare was made up with several tribes so my education includes 5 native languages (Akposso, Ewe, Mina, Kotokoli, Kabye) 
                            beside our official language which is French. I spend a lot of time translating and solving problems in between those fellow 
                            villagers who found it difficult to communicate with each other. I also worked for an NGO (ONG Future Foundation Togo) putting 
                            on social and educational programs for children that did not have the advantage of a stable family grouping.
                            <br/>
                                In 2013 I was stile I moved to Guinea to become a semi-professional soccer player, 
                                unfortunately I was injured in a game which cut my dream of soccer stardom,
                            so I decided to enroll in the University to study sociology in 2014.
                             After a year, my name was selected by the US Diversity Visa program to move to the US and 
                            I'm currently a fresh graduated of Full Stack Coding Boot-Camp at Georgia Institute of Technology.
                             What a journey, and it just started!
                            </p>

                            <h6 style={{float:"right", color:"#fff"}}>Taylor .A. Yao</h6>
                        </div>
                    
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default AboutMe;