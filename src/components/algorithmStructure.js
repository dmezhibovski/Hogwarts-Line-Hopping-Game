export class Algo {
  constructor(startTrack, maxTrack) {
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.planeInfoLog = []; //an array of all the planes you recieved
    this.curTrack = this.track;
    this.scoreFromTime = 0;
    this.trainsHit = 0;
    this.lastMove = Date.getTime();
  }
  receiveHit(info) {
    this.trainsHit++;
  }

  //info should be in array [track number, time]
  receivePlane(info) {
    this.planeInfoLog.push(info);
  }

  //info is track you teleported to
  receiveMove(info) {}

  addScoreFromTime() {
    this.scoreFromTime += Date.getTime() - this.lastMove; //millis seconds
  }

  getScore() {
    return this.scoreFromTime / 100 - this.trainsHit * 100;
  }
}

export class BasicAlgo extends Algo {
  constructor(startTrack, maxTrack) {
    super(startTrack, maxTrack);
  }

  //info is track you teleported to
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

  jump() {
    let bestPick = [0, 0];
    let nextTrack, nextTime, jumpUp;
    this.planeInfoLog.forEach((plane) => {
      nextTrack = plane[0];
      nextTime = plane[1];
      if (nextTrack == this.curTrack + 1 || nextTrack == this.curTrack - 1) {
        if (nextTime > bestPick[1] && nextTime > new Date().getTime) {
          bestPick = [nextTrack, nextTime](nextTrack > this.curTrack)
            ? (jumpUp = true)
            : (jumpUp = false);
        }
      }
      jumpUp ? this.upTrack() : this.downTrack();
    });
  }
}

export class SmartAlgo extends Algo {
  constructor(startTrack, maxTrack) {
    super(startTrack, maxTrack);
  }
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
