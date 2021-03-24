import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../store/actions/jobs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedChips() {
  const classes = useStyles();
    const dispatch = useDispatch()

  const arrayOfHashTags = [
    "Developer",
    "Full Stack Developer",
    "Junior developer",
    "Senior",
    "JavaScript",
    "Redux",
    "Python",
    "Java",
  ];

  return (
    <Container>
      <Row>
          <h4 className="home-title">Come help us make collaboration even <strong>better</strong>.<br /> At <strong>GitHub</strong> we build the tools
        that make collaborating and writing software easier for <strong>everyone</strong>. We’ve
        built a company we truly <strong>love</strong> working for, and we think you will too.</h4>
        <h4>
          <strong> Popular searches:</strong>
        </h4>
        <div className={classes.root}>
          {arrayOfHashTags.map((hash, i) => (
            <Chip
              key={i}
              icon={<SearchIcon />}
              label={hash}
              clickable
              onClick={() => dispatch(fetchJobs(hash,""))}
              color="primary"
              variant="outlined"
            />
          ))}
        </div>
      </Row>
    </Container>
  );
}
