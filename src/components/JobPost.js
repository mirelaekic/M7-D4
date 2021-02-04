import React, { Component } from 'react'
import { Container, Card, Row, Col  } from 'react-bootstrap'
import { connect } from "react-redux";

class JobPost extends Component {
    render() {
        console.log(this.props.job,"ALL JOBS")
        console.log(this.props.jobSelected)
        return (
            <div>
                {this.props.job.map((j,index) => (
                    <Card key={index.id} className="mb-3" style={{ width: 'auto', height:"auto", border:"2px solid aliceblue", backgroundColor:"aliceblue" }}>
                    <Card.Body>
                      <Card.Title>{j.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{j.company}</Card.Subtitle>
                      <Card.Text>
                        {j.location}
                      </Card.Text>
                      <Card.Link onClick={() => this.props.changeJob(j.id)}>See more</Card.Link>
                     </Card.Body>
                  </Card>
                ))}
            </div>
        )   
    }
}
export default JobPost