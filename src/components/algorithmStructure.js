export class Algo {
  constructor(startTrack, maxTrack, eventCallback) {
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.planeInfoLog = []; //an array of all the planes you recieved
    this.curTrack = this.track;
    this.scoreFromTime = 0;
    this.trainsHit = 0;
    this.lastMove = Date.now();
    this.eventFunc = eventCallback;
  }
  receiveHit(info) {
    this.trainsHit++;
  }

  //info should be in array [track number, time]

  getCurTrack() {
    return this.curTrack;
  }

  //info is track you teleported to
  receiveMove(info) {}

  movedTracks() {
    this.eventFunc();
    //update score
    this.scoreFromTime += Date.now() - this.lastMove; //millis seconds
    this.lastMove = Date.now();
  }

  getScore() {
    return this.scoreFromTime / 100 - this.trainsHit * 100;
  }

  upTrack() {
    if (this.curTrack != this.maxTrack - 1) {
      this.curTrack++;
    }
  }

  downTrack() {
    if (this.curTrack != 0) {
      this.curTrack--;
    }
  }

  jump() {
    let info = this.planeInfoLog.shift();
    if (info == null) return;
    // console.log("NEXTTRAIN    "+info[0])
    if (info[0] == this.curTrack) {
      if (this.curTrack < this.maxTrack - 1) {
        this.upTrack();
      } else {
        this.downTrack();
      }
    }
  }
}

export class BasicAlgo extends Algo {
  constructor(startTrack, maxTrack, callBackFun) {
    super(startTrack, maxTrack, callBackFun);
  }
  receivePlane(info) {
    this.planeInfoLog.push(info);
  }
  receiveHit(info) {
    this.jump();
    console.log("GOT HIT");
    this.movedTracks();
    console.log(this.curTrack + 1);
  }
  //info is track you teleported to
}

export class SmartAlgo extends Algo {
  constructor(startTrack, maxTrack, callBackFun) {
    super(startTrack, maxTrack, callBackFun);
  }
  receivePlane(info) {
    this.planeInfoLog.push(info);
    this.jump();
  }
  receiveHit(info) {
    this.jump();
    this.movedTracks();
    console.log(this.curTrack + 1);
  }
  //info is track you teleported to
}

//tester code
export class TestAlgo {
  constructor(startTrack, maxTrack) {
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.planeInfoLog = []; //an array of all the planes you recieved
    this.curTrack = this.track;
  }
  receiveHit(info) {
    console.log("CC- hit " + info);
  }

  //info should be in array [track number, time]
  receivePlane(info) {
    this.planeInfoLog.push(info);
    console.log("CC- plane " + info);
  }

  //info is track you teleported to
  receiveMove(info) {
    console.log("CC- move");
  }
}
