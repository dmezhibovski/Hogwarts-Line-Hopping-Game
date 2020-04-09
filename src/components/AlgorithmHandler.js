import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithms: [], //Will contain lists of [algo ref,trackOn,nextJump,time of jump]
      nextTimeJump: null,
    };
  } //end of constructor

  //info should be in array [traing number, time]
  //sendPlaneInfoToAlgo(info) {}
}
