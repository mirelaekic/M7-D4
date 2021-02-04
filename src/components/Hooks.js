/*import React, {useState, useEffect} from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const MyNav = () => {
  const [position,setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]); // I have to pass the searched jobs as props to another component to display them 
  
 async function fetchJobs(){
      await fetch(`https://jobs.github.com/positions.json?description="${position}"&location="${location}"`,{
        method:"GET",
        mode: 'no-cors'
      })
      .then(res => res.json())
      .then(res => setJobs(res))
      .catch(e => console.log(e))
      console.log(jobs)
  }
  return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><strong>GitHub</strong>Jobs</Navbar.Brand>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Position"
                className="mr-sm-2"
                onChange={(e) => {setPosition(e.target.value)}}
              />
              <FormControl
                type="text"
                placeholder="Location"
                className="mr-sm-2"
                onChange={(e) => {setLocation(e.target.value)}}
              />
              <Button variant="outline-primary" onClick={() => fetchJobs()}>Search </Button>
            </Form>
            <Nav className="ml-auto">
              <Nav.Link href="#home">All jobs</Nav.Link>
              <Nav.Link href="#features">Post a job</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
export default MyNav; */
