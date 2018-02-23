class Driver {
  constructor(name, joined){
    this.name = name;
    this.joined = joined
    this.startDate = new Date(joined)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
};

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const verticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    const beginningBlock = eastWest.findIndex((element) => (element === this.beginningLocation.horizontal));
    const endingBlock = eastWest.findIndex((element) => (element === this.endingLocation.horizontal));
    return Math.abs(beginningBlock - endingBlock) + verticalBlocks;
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
