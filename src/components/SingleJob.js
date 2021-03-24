import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Moment from 'react-moment';
import "./styles.css"

export default function SingleJob(props) {
  const job = props.job.find((job) => job.id === props.selectedJob )

  return job ? (
    <div >
        <Row>
          <Card className="single-job-card" style={{width: "50rem"}}>
              <Card.Header>
                <Card.Text>
                <Row>
          <Col lg={8}>
            <h1>{job.company}</h1>
            <a target="_blank" rel="noopener noreferrer" href={props.job.company_url}>{props.job.company_url}</a>
          </Col>
          <Col lg={4}>
            <img src={job.company_logo} alt="company logo" style={{ width: "100%" }} />
          </Col>
        </Row>
                </Card.Text>
              <Card.Text className="text-muted ml-auto">
              Posted at: <Moment format="Do MMMM YYYY">{job.created_at}</Moment> 
              </Card.Text>
              <Card.Text className="text-muted mr-auto">
              </Card.Text>
              </Card.Header>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>
              Location: {job.location}
              </Card.Text>
              <Card.Text>
              <p dangerouslySetInnerHTML={{__html:job.description}}></p>
              </Card.Text>
            </Card.Body>
              <Card.Footer>
                  <Card.Link target="_blank" rel="noopener noreferrer" href={job.how_to_apply}>Apply here</Card.Link>
              </Card.Footer>
          </Card>
        </Row>
      </div>
  ) : null
}
