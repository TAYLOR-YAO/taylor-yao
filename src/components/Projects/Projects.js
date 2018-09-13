import React, {Component} from "react";
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu} from "react-mdl";
class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab : 0
        }
    }
    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
            <div className="project-grid"  style={{width: '80%', margin: 'auto'}}>
                <Grid className="demo-grid-ruler">
                    <Card shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                        <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(https://starecat.com/content/wp-content/uploads/how-web-browsers-consume-ram-memory-chrome-eats-it-all-gif-animation.gif) center / cover"}}>Clicky Game</CardTitle>
                        <CardText>
                        <h3>Clicky Mamory</h3>
                        Clicky Mamory Game is image click game in witch user have to remember to not click one image twice.
                        </CardText>
                        <CardActions border>
                            <Button colored> <a href="https://github.com/TAYLOR-YAO/react-memory-game" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                            <Button colored> <a href="https://taylor-yao.github.io/react-memory-game/" target="_blank" rel="noopener noreferrer">Try It</a></Button>                 
                        </CardActions>
                        <CardMenu style={{color:"#fff" }}>
                        </CardMenu>
                    </Card>

                    <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                        <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(http://crcdigital.com/wp-content/uploads/2016/10/giphy-mario.gif) center / cover"}}></CardTitle>
                        <CardText>
                        <h3>Giphy Search</h3>
                        Search any type of GIF image you like.
                        </CardText>
                        <CardActions border>
                            <Button colored> <a href="https://github.com/TAYLOR-YAO/Giphy-Search" target="_blank" rel="noopener noreferrer">GitHub</a></Button>   
                            <Button colored> <a href="https://taylor-yao.github.io/Giphy-Search/index.html" target="_blank" rel="noopener noreferrer">Try It</a></Button>                                          
                        </CardActions>
                        <CardMenu style={{color:"#fff" }}>
                        </CardMenu>
                    </Card>
                  
                    <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                        <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(https://gifimage.net/wp-content/uploads/2017/10/crystal-gif-7.gif) center / cover"}}></CardTitle>
                        <CardText>
                        <h3>Crystal Collector</h3> 
                        This I Crystal Math based Game
                        </CardText>
                        <CardActions border>
                            <Button colored> <a href="https://github.com/TAYLOR-YAO/week-4-game" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                            <Button colored> <a href="https://taylor-yao.github.io/week-4-game/index.html" target="_blank" rel="noopener noreferrer">Try It</a></Button>                 
                        </CardActions>
                        <CardMenu style={{color:"#fff" }}>
                        </CardMenu>
                    </Card>               
                </Grid>
           </div>
            ) 
        }else if(this.state.activeTab === 1){
            return(
                <div className="project-grid"  style={{width: '80%', margin: 'auto'}}>
                <Grid className="demo-grid-ruler">

                    <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                    <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(https://vignette.wikia.nocookie.net/scribblenauts/images/5/52/Snow_Melter.png/revision/latest?cb=20130116205324) center / cover"}}></CardTitle>
                    <CardText>
                    <h3>Train Activity</h3> 
                    This application is built to track the train schedule and frequency.
                    </CardText>
                    <CardActions border>
                        <Button colored> <a href="https://github.com/TAYLOR-YAO/Firebase" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored> <a href="https://taylor-yao.github.io/Firebase/index.html" target="_blank" rel="noopener noreferrer">Try It</a></Button>                 
                    </CardActions>
                    <CardMenu style={{color:"#fff" }}>
                    </CardMenu>
                </Card>

                <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/rhqunD2Gioflxfgx/portrait-of-two-people-kissing-silhouette-white_ralsduemjg_thumbnail-full01.png) center / cover"}}></CardTitle>
                <CardText> 
                <h3>Friend Finder</h3> 
                This application is built to match Friends based on a suggested survy
                </CardText>
                <CardActions border>
                    <Button colored> <a href="https://github.com/TAYLOR-YAO/FriendFinder" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                    <Button colored> <a href="https://frind-finder-tyao.herokuapp.com/" target="_blank" rel="noopener noreferrer">Try It</a></Button>           
                </CardActions>
                <CardMenu style={{color:"#fff" }}>
                </CardMenu>
                </Card>

                <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(http://pluspng.com/img-png/burger-png-burger-png-hd-png-image-556.png) center / cover"}}></CardTitle>
                <CardText>
                <h3>Eat That Burger</h3> 
                This application is for order place application.
                User can create a burger and eat thier burger and if they want render the burger.
                </CardText>
                <CardActions border>
                    <Button colored> <a href="https://github.com/TAYLOR-YAO/burger" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                    <Button colored> <a href="https://thawing-thicket-21663.herokuapp.com/" target="_blank" rel="noopener noreferrer">Try It</a></Button>           
                </CardActions>
                <CardMenu style={{color:"#fff" }}>
                </CardMenu>
                </Card>
                </Grid>
            </div>
                ) 
        }else if(this.state.activeTab === 2){
            return(
            <div className="project-grid"  style={{width: '80%', margin: 'auto'}}>
            <Grid className="demo-grid-ruler">

                <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                    <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(https://www.sonolens.fr/81861/shure-casque-studio-pro-sse-srh440.jpg) center / cover"}}>Liri-Node-App</CardTitle>
                    <CardText>
                    <h3>Liri-Node-App</h3>
                    Liri-Node-App Is multy functional application.
                    </CardText>
                    <CardActions border>
                        <Button colored> <a href="https://github.com/TAYLOR-YAO/liri-node-app/" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored> <a href="https://github.com/TAYLOR-YAO/liri-node-app/" target="_blank" rel="noopener noreferrer">Try It</a></Button>                 
                    </CardActions>
                    <CardMenu style={{color:"#fff" }}>
                    </CardMenu>
                </Card>
                <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                    <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png) center / cover"}}></CardTitle>
                    <CardText>
                    <h3>Bamazon</h3>
                    Bamazon Is a store managment back-end application that handle inventory.
                    </CardText>
                    <CardActions border>
                        <Button colored> <a href="https://github.com/TAYLOR-YAO/bamazon" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored> <a href="https://github.com/TAYLOR-YAO/bamazon" target="_blank" rel="noopener noreferrer">Try It</a></Button>                 
                    </CardActions>
                    <CardMenu style={{color:"#fff" }}>
                    </CardMenu>
                </Card>
                </Grid >

            </div>
                ) 
        }else if(this.state.activeTab === 3){
            return(
            <div className="project-grid"  style={{width: '80%', margin: 'auto'}}>
            <Grid className="demo-grid-ruler">
                <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                    <CardText> 
                    <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(http://soszajadran.hr/wp-content/uploads/2015/08/SOS-ADRIATIC-logo-transparent-e1440255632476.png) center / cover"}}></CardTitle>
                    <h3>Eso-Ess</h3>
                    This application is built to help help realise NGO during desaster times.
                    </CardText>
                    <CardActions border>
                        <Button colored> <a href="https://github.com/JGCollinson/ShopList" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored> <a href="https://jgcollinson.github.io/ShopList/" target="_blank" rel="noopener noreferrer">Try It</a></Button>                 
                    </CardActions>
                    <CardMenu style={{color:"#fff" }}>
                    </CardMenu>
                </Card>

                <Card className="card" shadow={5} style={{minWidth:"450", margin:"auto", marginTop:"20px"}}>
                    <CardText> 
                    <CardTitle style={{color:"#DCDCDC", height:"176px", background: "url(https://brewbroski.com/content/uploads/2018/04/B1B5AED5-66AA-4113-BDD7-9260F9DA65CB-780x405.jpeg) center / cover"}}></CardTitle>
                    <h3>One.Beer.Leter</h3>
                    This application is built to help help Craft beer fan to quicly localised where to find craft beer by typing thier city name.
                    </CardText>
                    <CardActions border>
                        <Button colored> <a href="https://github.com/jpaffenback/One.Beer.Later." target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                        <Button colored> <a href="https://one-beer-later.herokuapp.com/" target="_blank" rel="noopener noreferrer">Try It</a></Button>                 
                    </CardActions>
                    <CardMenu style={{color:"#fff" }}>
                    </CardMenu>
                </Card>

                </Grid>

            </div>
            )}
        
    }

    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab = {this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                <Tab style={{color:"#fff" }}>Front-End</Tab>
                <Tab style={{color:"#fff" }}>Full Stack</Tab>
                <Tab style={{color:"#fff" }}>Terminal</Tab>
                <Tab style={{color:"#fff" }}>Team Work</Tab>             
                             
            </Tabs>
            <section>
            <Grid className="project-grid">
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>

                </Cell>
            </Grid>

            </section>

            </div>
        )
    }
}

export default Projects;