import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import "./styles.css"

export default function JobPost(props) {

useEffect(() => {
  props.jobSelected(props.job[0].id)
}, [])

    return (
        <div className="jobs-list">
                {props.job.map((j,i) => (
                    <Card onClick={() => props.jobSelected(j.id)} key={i} className="mb-3 job-card">
                    <Card.Body>
                      <Card.Title>{j.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{j.company}</Card.Subtitle>
                      <Card.Text>
                        {j.location}
                      </Card.Text>
                     </Card.Body>
                  </Card>
                ))}
            </div>
    ) 
}
