import React, { Component, OverlayTrigger, Tooltip, Button } from "react";
import Image from "react-bootstrap/Image";
//import { Figure } from "react-bootstrap";
// import Timer from './Timer'
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

export default class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackNum: props.maxTracks,
      algoStatus: props.algoStatus,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState) => ({
      algoStatus: nextProps.algoStatus,
    }));
  }

  renderMultTracks(numOfTracks, hoboArr) {
    // let personLen = (30 / hoboArr.length).toString(10);
    // let trackLen = (70 / numOfTracks).toString(10);
    let tracks = [];
    for (let i = 0; i < numOfTracks; i++) {
      let hobosOnTrack = [];
      hoboArr.forEach((element) => {
        if (element[0] == i) {
          hobosOnTrack.push(
            <Figure>
              <Figure.Image
                src={require("./../images/user.png")}
                className="bobbing"
                alt="this is alt"
                width="200"
                // fluid
              />
              <Figure.Caption className="text-white text-center">
                Player {}
              </Figure.Caption>
            </Figure>
          );
        }
      });

      tracks.push(
        <div>
          {hobosOnTrack}
          <Image
            src={require("./../images/tilted-tracks.png")}
            fluid
            // height={trackLen}
          />
        </div>
      );
    }
    return tracks;
  }

  render() {
    return (
      <div>
        {this.renderMultTracks(this.state.trackNum, this.state.algoStatus)}
      </div>
    );
  }
}
