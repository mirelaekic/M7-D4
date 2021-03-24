import React from 'react'
import { Card } from 'react-bootstrap'
import "./styles.css"
import { useSelector } from "react-redux";
import { CircularProgress } from '@material-ui/core';
export default function JobPost(props) {
    const loading = useSelector((state) => state.jobs.loading);

    return loading ? (<CircularProgress />) :(
        <div className="jobs-list">
                {props.job.map((j,index) => (
                    <Card key={index.id} className="mb-3 job-card">
                    <Card.Body>
                      <Card.Title>{j.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{j.company}</Card.Subtitle>
                      <Card.Text>
                        {j.location}
                      </Card.Text>
                      <Card.Link onClick={() => props.jobSelected(j.id)} >See more</Card.Link>
                     </Card.Body>
                  </Card>
                ))}
            </div>
    ) 
}
