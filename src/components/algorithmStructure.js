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
  receivePlane(info) {
    this.planeInfoLog.push(info);
  }
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
}

export class BasicAlgo extends Algo {
  constructor(startTrack, maxTrack, callBackFun) {
    super(startTrack, maxTrack, callBackFun);
  }

  receiveHit(info) {
    this.jump();
    this.movedTracks();
    console.log(this.curTrack + 1);
  }
  //info is track you teleported to
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
    let bestPick = [-1, 0];
    let nextTrack, nextTime, jumpUp;
    this.planeInfoLog.forEach((plane) => {
      nextTrack = plane[0];
      nextTime = plane[1];
      if (nextTrack == this.curTrack + 1 || nextTrack == this.curTrack - 1) {
        if (nextTime > bestPick[1] && nextTime > new Date().getTime) {
          bestPick = [nextTrack, nextTime];
          jumpUp = nextTrack > this.curTrack;
        }
      }
    });
    jumpUp ? this.upTrack() : this.downTrack();
  }
}

export class SmartAlgo extends Algo {
  constructor(startTrack, maxTrack, callBackFun) {
    super(startTrack, maxTrack, callBackFun);
  }
  receiveHit(info) {}
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
