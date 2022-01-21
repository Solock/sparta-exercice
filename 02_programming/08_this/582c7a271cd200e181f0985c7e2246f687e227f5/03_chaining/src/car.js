// Complete and add needed car properties:
const car = {
  speed: 0,
  timer: 0,
  distance: 0,
  cumulDistance: 0,
  start: function () {
    return this;
  },
  changeSpeed: function (newSpeed) {
    this.speed = newSpeed;
    // console.log("changeSpeed", this.cumulDistance);
    return this;
  },
  drive: function (minute) {
    this.timer = minute;
    // console.log("drive", this.cumulDistance);
    this.calculDistance();
    this.cumulDistance = this.cumulDistance + this.distance;
    return this;
  },
  showDistance: function () {
    console.log(this.cumulDistance + " Km");
    // console.log((this.timer * this.speed) / 60 + " Km") ;
    return this;
  },
  calculDistance: function (distance) {
    //Calculer la distance parcouru et MAJ la clé distance
    // this.distance = this.changeSpeed;
    // this.cumulTrajet = this.distance + this.cumulTrajet;
    this.distance = (this.timer * this.speed) / 60;
    // console.log("caluclDistance ", this.distance);
  }
};
console.log(car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance());
module.exports = car;
