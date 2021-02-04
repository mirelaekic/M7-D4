import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Moment from 'react-moment';
import { connect } from "react-redux";
import StarBorderIcon from '@material-ui/icons/StarBorder';

class SingleJob extends Component {
  constructor(props){
    super(props);
    this.state = {
      job: {},
      favourites: []
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.jobSelected !== this.props.jobSelected) {
      this.setState({
        job: this.props.job.find(j => j.id === this.props.jobSelected)
      })
    }
    console.log(prevProps.jobSelected,"Component updated")
  } 
  render() {
    console.log(this.state.favourites,"FAVSSS")
    console.log(this.state.job, "single job");
    const { job } = this.state;
    return (
      <div sticky="top">
        <Row >
          <Col lg={8}>
            <h1>{job.company}</h1>
            <a target="_blank" rel="noopener noreferrer" href={job.company_url}>{job.company_url}</a>
          </Col>
          <Col lg={4}>
            <img src={job.company_logo} style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row>
          <Card style={{ width: "50rem" ,marginTop:"34px"}}>
              <Card.Header>
              <Card.Text className="text-muted ml-auto">
              Posted at: <Moment format="Do MMMM YYYY">{job.created_at}</Moment> | {job.type}
              </Card.Text>
              <Card.Text className="text-muted mr-auto">
              <StarBorderIcon onClick={() => this.props.addToFavourites(this.state.job)} /> Save this job
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
    );
  }
}
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (job) => 
  dispatch({
    type:"ADD_TO_FAVOURITES",
    playload:job,
  })
  
});
console.log(mapDispatchToProps.addToFavourites,"ADDED TO FAVVV")
console.log(mapStateToProps,"STATEEEE",mapDispatchToProps)
export default connect(mapStateToProps,mapDispatchToProps)(SingleJob)
