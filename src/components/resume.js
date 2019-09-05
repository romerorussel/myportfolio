import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="../../images/avatar-male.png"
                            alt="avatar"
                            style={{ height: '200px'}} />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Romero Russel</h2>
                        <h4 style={{color: '#A9A9A9'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '60%'}} />
                        <p style={{textAlign: 'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '60%'}} />
                        <h5>Adress</h5>
                        <p>Bairro Novo Camragibe, 540</p>
                        <h5>Phone</h5>
                        <p>55(81)988273662</p>
                        <h5>Email</h5>
                        <p>romerorussel.job@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '60%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2014}
                            endYear={2018}
                            schoolName="UNINABUCO"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
                        />

                        <Education
                            startYear={2020}
                            endYear={2022}
                            schoolName="CESAR"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
                         />
                         <hr style={{borderTop: '3px solid #e22947', width: '95%', margin: 'auto'}} />
                         <h2>Experience</h2>
                        <Experience 
                            startYear={2015}
                            endYear={2017}
                            jobName="Accenture"
                            jobDescription="Full stack developer"
                        />
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobName="FACEPE"
                            jobDescription="Front end developer"
                        />
                        <hr style={{borderTop: '3px solid #e22947', width: '95%', margin: 'auto'}} />
                        <h2>Skills</h2>
                        <Skills skill="HTML/CSS" progress={80} />
                        <Skills skill="Javascript" progress={50} />
                        <Skills skill="NodeJS" progress={40} />
                        <Skills skill="React" progress={25} />
                        <Skills skill="React Native" progress={5} />
                        <Skills skill="Angular" progress={60} />
                        <Skills skill="Php" progress={50} />
                        <Skills skill="Java" progress={50} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Resume; 