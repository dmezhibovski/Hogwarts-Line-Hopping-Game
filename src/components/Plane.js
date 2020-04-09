import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Popover, OverlayTrigger, Button, Tooltip } from "react-bootstrap";

export default class Plane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: (
        <Popover>
          <Popover.Title as="h3">title</Popover.Title>
          <Popover.Content>
            This is the content {this.props.message}
          </Popover.Content>
        </Popover>
      ),
      simpleMessage: <h3>Hello I am plane</h3>
    };
    this.displayMessagePopup = this.displayMessagePopup.bind(this);
  }

  displayMessagePopup(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        info: {this.props.message}
      </Tooltip>
    );
  }

  render() {
    return (
      <div>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={this.displayMessagePopup}
        >
          <Image src={require("../images/paper-plane-3.png")}></Image>
        </OverlayTrigger>
      </div>
    );
  }
}
