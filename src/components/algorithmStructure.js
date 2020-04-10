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

class Algo {
  constructor(startTrack, maxTrack) {
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.planeInfoLog = []; //an array of all the planes you recieved
    this.curTrack = this.track;
  }
  //info is track that you got hit on
  receiveHit(info) {}

  //info should be in array [track number, time]
  receivePlane(info) {}

  //info is track you teleported to
  receiveMove(info) {}
}

class basicAlgo extends Algo {
  constructor(startTrack, maxTrack) {
    super(startTrack, maxTrack);
  }

  upTrack() {
    if (this.curTrack != this.maxTrack) {
      this.curTrack++;
    }
  }

  downTrack() {
    if (this.curTrack != 1) {
      this.curTrack--;
    }
  }

  jump() {}
}

class SmartAlgo {
  constructor(startTrack, maxTrack) {
    super(startTrack, maxTrack);
  }
}
