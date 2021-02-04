import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <h1 style={{position:"fixed",left:"30rem",top:"13rem", fontSize:"3.5rem"}}>Come help us make</h1>
                <h1 style={{position:"fixed",left:"26rem",top:"17rem", fontSize:"3.5rem"}}>collaboration even better</h1>
                <p style={{position:"fixed",left:"22rem",top:"23rem", fontSize:"1.5rem"}}>At GitHub we build the tools that make collaborating and writing software</p>
                <p style={{position:"fixed",left:"21rem",top:"25rem", fontSize:"1.5rem"}}>easier for everyone. We’ve built a company we truly love working for, and we</p>
                <p style={{position:"fixed",left:"39rem",top:"27rem", fontSize:"1.5rem"}}>think you will too.</p>
                <a style={{position:"fixed",left:"36rem",top:"32rem", fontSize:"1.2rem"}} href="#">Open positions</a> <a style={{position:"fixed",left:"47rem",top:"32rem", fontSize:"1.2rem"}} href="#">Internships</a>
            </Container>
        )
    }
}
