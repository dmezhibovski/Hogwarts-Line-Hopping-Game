export class Algo {
  constructor(startTrack, maxTrack, eventCallback) {
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.planeInfoLog = []; //an array of all the planes you recieved
    this.curTrack = this.track;
    this.scoreFromTime = 0;
    this.trainsHit = 0;
    this.trainPassed = 0;
    this.lastMove = Date.now();
    this.eventFunc = eventCallback;
    this.name = "algo";
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
    return this.trainPassed * 100 - this.trainsHit * 300;
  }

  upTrack() {
    if (this.curTrack !== this.maxTrack - 1) {
      this.curTrack++;
    } else {
      this.downTrack();
    }
  }

  downTrack() {
    if (this.curTrack !== 0) {
      this.curTrack--;
    } else {
      this.upTrack();
    }
  }

  jump() {
    let info = this.planeInfoLog.shift();
    if (info === null) return;
    // console.log("NEXTTRAIN    "+info[0])
    if (info[0] === this.curTrack) {
      if (this.curTrack >= 0 && this.curTrack < this.maxTrack) {
        this.upTrack();
      } else {
        this.downTrack();
      }
    }
    this.movedTracks();
  }
}

export class BasicAlgo extends Algo {
  constructor(startTrack, maxTrack, callBackFun) {
    super(startTrack, maxTrack, callBackFun);
    this.name = "BasicAglo";
  }
  receivePlane(info) {
    this.trainPassed++;
    this.planeInfoLog.push(info);
  }
  receiveHit(info) {
    super.receiveHit(info);
    this.jump();
  }
  //info is track you teleported to
}

export class SmartAlgo extends Algo {
  constructor(startTrack, maxTrack, callBackFun) {
    super(startTrack, maxTrack, callBackFun);
    this.name = "SmartAlgo";
  }
  receivePlane(info) {
    this.trainPassed++;
    this.planeInfoLog.push(info);
    this.jump();
  }
  receiveHit(info) {
    super.receiveHit(info);
    this.movedTracks();
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

export class BigJumpAlgo extends Algo {
  constructor(startTrack, maxTrack, callBackFun) {
    super(startTrack, maxTrack, callBackFun);
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.lastPlane = [];
    this.curTrack = this.track;
    this.name = "BigJumpAlgo";
  }
  receiveHit(info) {
    super.receiveHit(info);
  }

  receivePlane(info) {
    this.trainPassed++;
    this.lastPlane = info;
    var nexTrack = Math.floor(Math.random() * this.maxTrack);
    if (this.lastPlane[0] == nexTrack) {
      nexTrack = Math.floor(Math.random() * this.maxTrack);
    }
    this.curTrack = nexTrack;
    this.movedTracks();
  }
  receiveMove(info) {}
}
