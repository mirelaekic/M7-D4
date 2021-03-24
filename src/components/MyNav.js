import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import JobPost from "./JobPost";
import Home from "./Home"
import SingleJob from "./SingleJob";
import {Link,withRouter} from "react-router-dom"
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class MyNav extends Component {
  state = {
    newSearch: { position: "", location: "" },
    jobs: [],
    jobSelected: {},
  };
  
  changeHandler = (e) => {
    this.setState({
      newSearch: {
        ...this.state.newSearch,
        [e.target.id]: e.target.value,
      },
    });
  };
  fetchJobs = async () => {
    try {
      let proxy = "https://miksflame-observablehq.herokuapp.com/";
      let position = this.state.newSearch.position;
      let location = this.state.newSearch.location;
      let response = await fetch(
        `/positions.json?description=${position}&location=${location}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ jobs: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  changeJob = (id) => this.setState({ jobSelected: id });
  render() {
    console.log(this.state.jobs, "FOUND JOBS");
    return (
      <div>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container>
            <Link to="/"><Navbar.Brand>
              <strong>GitHub</strong>Jobs
            </Navbar.Brand></Link>
            
            <Form inline>
              <FormControl
                type="text"
                placeholder="Position"
                className="mr-sm-2"
                value={this.state.position}
                onChange={(e) => this.changeHandler(e)}
                id={"position"}
              />
              <FormControl
                type="text"
                id={"location"}
                placeholder="Location"
                className="mr-sm-2"
                value={this.state.location}
                onChange={(e) => this.changeHandler(e)}
              />
              <Button variant="outline-primary" onClick={this.fetchJobs}>
                Search
              </Button>
            </Form>
            <Nav className="ml-auto">
              <Nav.Link>All jobs</Nav.Link>
              <Nav.Link href="#features">Post a job</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container className="mt-3">
          <Row >
          <Col lg={4}>
         {this.state.jobs < 0 ? <JobPost 
            key={this.state.jobs.id}
            job={this.state.jobs}
            changeJob={this.changeJob}
            jobSelected={this.state.jobSelected}
          /> : <h2>loading..</h2>}
          </Col>
          <Col lg={8}>
            {this.state.jobs < 0 ? <SingleJob
          job={this.state.jobs}
          jobSelected={this.state.jobSelected} /> : <h1>please look up</h1>}</Col>
        </Row>
        </Container>
      </div>
    );
  }
}
export default connect (mapStateToProps)(withRouter(MyNav))
