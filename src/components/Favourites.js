import React, { Component } from 'react'
import { connect } from "react-redux";
import { Container, Card, Row, Col  } from 'react-bootstrap'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) =>
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id }),
  });
class Favourites extends Component {
    render() {
        /*const favs = this.props.favourites.map((jobId) => (
            this.props.job.find((job) => job.id === jobId)
        ));*/
        console.log(this.props.jobSelected, "ALLL  JOBSSSSSS ")
        console.log(this.props.favourites, "FAVOURITES")
        return (
            <div>
                <h1>HELO</h1>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Favourites)
