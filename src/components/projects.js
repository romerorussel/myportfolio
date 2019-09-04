import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <Grid>
                    <Cell col={3}>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pt-br.reactjs.org/logo-og.png) center / cover'}}> 
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pt-br.reactjs.org/logo-og.png) center / cover'}}> 
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pt-br.reactjs.org/logo-og.png) center / cover'}}> 
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pt-br.reactjs.org/logo-og.png) center / cover'}}> 
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pt-br.reactjs.org/logo-og.png) center / cover'}}> 
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pt-br.reactjs.org/logo-og.png) center / cover'}}> 
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pt-br.reactjs.org/logo-og.png) center / cover'}}> 
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    
                    
                    
                </Grid>
            )
        } else if(this.state.activeTab === 1){
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return (
                <div><h1>This is NodeJS</h1></div>
            )
        } else if(this.state.activeTab === 3){
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={ (tabId) => this.setState({activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Projects;