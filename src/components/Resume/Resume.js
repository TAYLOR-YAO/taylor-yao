import React, {Component} from "react";
import {Grid, Cell, ListItem} from "react-mdl";
import Education from "../Education";
import Experience from "../WorkExperience";
import Skills from "../Skills";
class Resume extends Component {
    render(){
        return(
            <div className="resume-body">
                <Grid>
                    <Cell col={4} >
                    <div style={{textAlign:"center"}}>
                        <img src={require("../Images/taylor-yao.JPG")} alt="My view" style={{height:"200px", borderRadius:"100%"}}/>
                    </div>
                    <h2 >Taylor .A. Yao</h2>
                    <h4 style={{color:"gray"}}>Full Stack Web Developper</h4>
                    <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
                    <p>
                        From Pagala-Gare to Lome, Togo then Conakry, I'm proud to build my entier life and career
                        in a verry diversified cultures and civilisations. I is my first strength because It make me
                        feel confident every where I'm and ready to face any new challenge.
                        
                    </p>
                    <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
                    <h5>Adress</h5>
                    <p>512 Allen Rd NE Atlanta, GA 30324</p>
                    
                    <h5>Phone</h5>
                    <p>+1 404 962 9078</p>

                    <h5>Email</h5>
                    <p>yaotaylor@gmail.com</p>

                    </Cell>
                    <Cell className="resume-right" col={8}>
                    <h2 style={{paddingTop:"0"}}>Education</h2>

                    <Education
                        startYear="02/2018"
                        endYear="07/2018"
                        schoolName={"Georgia Institut of Technology"}
                        country=" Atlanta, GA, US"
                        description="Full Stack Coding Boot-Camp."

                    />
                    
                    <Education
                        startYear={2013}
                        endYear={2015}
                        schoolName={"University Of Lome"}
                        country=" Lome, Togo"
                        description="Stutudent of Sociology in the Faculty of Human Science."

                    />
                    
                    <Education
                        startYear={2010}
                        endYear={2013}
                        schoolName={"Hadja Mariama Soumah, Cobaya"}
                        country=" Conakry, Guinee"
                        description="Social Science Hight School diploma."

                    />

                    <hr style={{borderT:"3px solid #e22947"}}/>
                    <h2 style={{paddingTop:"0"}}>Experience</h2>

                    <Experience
                    position=" Administrative Assistant; Volonteers Guids; Responsible in charge of Cultural and Educational activities"
                    jobName=" Future Foundation Togo"
                    jobCountry=" Togo, West Africa"
                    startYear=" 09/2013"
                    endYear = " 04/2016"
                    jobContact="www.ongff.org"
                    task={
                        <div>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i>Language Translator for The NGO (during sensibilizations in rural Communities).</ListItem>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i> Prospection to indentify children in vulnerable situation in streets</ListItem>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i> Organize social-cultural and educational activities for children (Dances, Scketches Theatrs, Fun Games</ListItem>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i> Supervise Children during learning reinforcements.</ListItem>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i> Asist the coordination in the administrative activities</ListItem>
                        </div>
                    }
                    
                    />


                    <Experience
                    position=" volunteer in ONG Future Foundation, Togo"
                    jobName=" Future Foundation Togo"
                    jobCountry=" Togo, West Africa"
                    startYear=" 06/2009"
                    endYear = " 08/2012"
                    jobContact="www.ongff.org"
                    task={
                        <div>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i>Language Translator for The NGO (during sensibilizations in rural Communities).</ListItem>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i> Supervise Children during learning reinforcements.</ListItem>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i> Organize social-cultural and educational activities for children</ListItem>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i> Supervise Children during learning reinforcements.</ListItem>
                            <ListItem style={{color:"#fff", fontSize:"16px"}}><i className="fas fa-bowling-ball" style={{marginRight:"10px"}}></i> Asist the coordination in the administrative activities</ListItem>
                        </div>
                    }
                    
                    />

                    <hr style={{borderT:"3px solid #e22947"}}/>
                    <h2 style={{paddingTop:"0"}}>Skills</h2>
 
                    <Skills
                    skill="HTML/CSS"
                    progress={90}/>

                    <Skills
                    skill="Boostrap"
                    progress={60}/>

                    <Skills
                    skill="Jquery"
                    progress={80}/>

                    <Skills
                    skill="Firebase"
                    progress={60}/>

                    <Skills
                    skill="JavasCript"
                    progress={70}/>

                    <Skills
                    skill="Node.JS"
                    progress={50}/>

                    <Skills
                    skill="MySql"
                    progress={60}/>
                    <Skills
                    skill="Sequelize"
                    progress={50}/>

                    <Skills
                    skill="MongoDB"
                    progress={70}/>

                    <Skills
                    skill="React.JS"
                    progress={60}/>

                    </Cell>                    

                </Grid>
            </div>
        )
    }
}

export default Resume;