import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Popover, OverlayTrigger } from "react-bootstrap";

export default class Track extends Component {
  constructor(props) {
    super(props);
    const openPlane = (
      <Popover>
        <Popover.Title as="h3">title</Popover.Title>
        <Popover.Content>
          This is the content {this.props.message}
        </Popover.Content>
      </Popover>
    );
    this.state = {
      displayMessage: openPlane
    };
  }

  render() {
    return (
      <div>
        <OverlayTrigger
          trigger="click"
          placement="left"
          overlay={this.state.displayMessage}
        >
          <Image src={require("../images/paper-plane-3.png")}></Image>
        </OverlayTrigger>

        <div>
          <h1>My info is {this.props.message}</h1>
        </div>
      </div>
    );
  }
}
