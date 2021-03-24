import React, { useState } from "react";
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
import "./styles.css";
import JobPost from "./JobPost";
import Home from "./Home";
import SingleJob from "./SingleJob";
import { Link, withRouter } from "react-router-dom";
import { fetchJobs } from "../store/actions/jobs";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress, Collapse, IconButton } from "@material-ui/core";

function MyNav() {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const [selectJob, setSelectJob] = useState(null);
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs.jobs);
  const error = useSelector((state) => state.jobs.error);
  const loading = useSelector((state) => state.jobs.loading);
  const selectedJob = (id) => setSelectJob(id);

  const getJobs = (event, loc, pos) => {
    event.preventDefault();
    dispatch(fetchJobs(loc, pos));
  };

  return (
    <div>
      <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <strong>GitHub</strong>Jobs
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Position"
                className="mr-sm-2"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                id={"position"}
              />
              <FormControl
                type="text"
                id={"location"}
                placeholder="Location"
                className="mr-sm-2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button
                variant="outline-primary"
                onClick={(e) => getJobs(e, position, location)}
              >
                Search
              </Button>
            </Form>
            <Nav className="ml-auto">
              <Nav.Link disabled="true">All jobs</Nav.Link>
              <Nav.Link disabled="true">Post a job</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {error === null ? (
        ""
      ) : (
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            className="error-alert"
            severity="error"
          >
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        </Collapse>
      )}
      <Container className="mt-3">
        <Row>
          {jobs.length > 0 ? (
            <>
            {loading ? <CircularProgress /> :
            <Col lg={4} md={4} sm={4}>
              <JobPost
                key={jobs.id}
                job={jobs}
                selectedJob={selectJob}
                jobSelected={selectedJob}
              />
            </Col>
            }
            </>
          ) : (
            <Home />
          )}
          {selectJob === null ? (
            ""
          ) : (
            <Col lg={8} md={8} sm={8}>
              <SingleJob job={jobs} selectedJob={selectJob} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(MyNav);
