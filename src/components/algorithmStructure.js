export default class basicAlgo {
  constructor(startTrack, maxTrack) {
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.planeInfoLog = []; //an array of all the planes you recieved
  }

  //info is track that you got hit on
  receiveHit(info) {
    console.log("CC- got hit");
  }

  //info should be in array [track number, time]
  receivePlane(info) {
    console.log("CC- got plane");
  }

  //info is track you teleported to
  receiveMove(info) {
    console.log("CC- got move");
  }
}

/*  template

class basicAlgo {
  constructor(startTrack, maxTrack) {
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.planeInfoLog = []; //an array of all the planes you recieved
  }

  //info is track that you got hit on
  receiveHit(info) {}

  //info should be in array [track number, time]
  receivePlane(info) {}

  //info is track you teleported to
  receiveMove(info) {}
}

*/
