import React, {Component} from "react";
import {Grid, Cell, List } from "react-mdl";

class  Exeperience extends Component {
    render(){
        return(
            <Grid>
                <Cell col={4}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                <h5 style={{marginTop:"0px"}}><span style={{fontSize:"24px"}}>Job Position:</span> {this.props.position}</h5>
                <p style={{marginTop:"0px"}}><span style={{fontSize:"18px"}}>Job Name: </span>{this.props.jobName}</p>
                <p style={{marginTop:"0px"}}><span style={{fontSize:"18px"}}>Location: </span>{this.props.jobCountry}</p>
                <p style={{marginTop:"0px"}}><span style={{fontSize:"18px"}}>Job Contacts: </span>{this.props.jobContact}</p>                                                                                                  
                <p>My Tasks:</p>
                <List>
                    {this.props.task}
                </List>          
                </Cell>
            </Grid>
        )
    }
}

export default Exeperience;