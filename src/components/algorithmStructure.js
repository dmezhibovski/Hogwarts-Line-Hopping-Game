export class Algo {
  constructor(startTrack, maxTrack) {
    this.maxTrack = maxTrack;
    this.planeInfoLog=[]//an array of all the planes you recieved
    this.curTrack = startTrack;
  }


  //info should be in array [track number, time]
  receivePlane(info) {
    this.planeInfoLog.push(info);
  }
  getCurTrack(){
    return this.curTrack
  }

  //info is track you teleported to
  receiveMove(info) {}
}

export class BasicAlgo extends Algo {
  constructor(startTrack, maxTrack) {
    super(startTrack, maxTrack)
  }

  receiveHit(info){
    this.jump()
    // console.log(this.curTrack+1)
  }
  //info is track you teleported to
  upTrack() {
    if (this.curTrack != this.maxTrack-1) {
      this.curTrack++;
    }
  }

  downTrack() {
    if (this.curTrack != 0) {
      this.curTrack--;
    }
 
  }

  jump() {
    let info=this.planeInfoLog.shift()
    console.log("NEXTTRAIN    "+info[0])
    if(info[0]==this.curTrack){
      if(this.curTrack<this.maxTrack-1){
        this.upTrack()
      }
      else{
        this.downTrack()
      }
    }
  } 
    
}

export class SmartAlgo extends Algo {
  constructor(startTrack, maxTrack) {
    super(startTrack, maxTrack);
  }
  receiveHit(info){}
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
