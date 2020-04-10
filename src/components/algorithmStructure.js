class Algo{
  constructor(startTrack, maxTrack) {
    this.track = startTrack;
    this.maxTrack = maxTrack;
    this.planeInfoLog = []; //an array of all the planes you recieved
    this.curTrack = this.track

  }
   //info is track that you got hit on
   receiveHit(info) {}

   //info should be in array [track number, time]
   receivePlane(info) {
     this.planeInfoLog.push(info)
   }
 
   //info is track you teleported to
   receiveMove(info) {}
}

export class BasicAlgo extends Algo{
  constructor(startTrack, maxTrack) {
    super(startTrack,maxTrack)
  }

  upTrack (){
      if(this.curTrack!=this.maxTrack){
          this.curTrack++
      }
  }

  downTrack (){
      if(this.curTrack!=1){
          this.curTrack--
      }
  }

  jump(){
    for(var i=0;i<this.planeInfoLog.length;i++){

    }
  }

}

export class SmartAlgo extends Algo{
  constructor(startTrack, maxTrack) {
    super(startTrack,maxTrack)
  }
}