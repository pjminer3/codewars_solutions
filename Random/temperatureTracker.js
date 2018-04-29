class TempTracker {
  constructor() {
    this.temperatureCount = 0;
    this.maxTemp = -Infinity;
    this.minTemp = Infinity;
    this.combinedTemps = 0;
    
    // for mode
    this.temperatures = [];
    for (let i = 0; i < 111; i++) {
      this.temperatures.push(0);
    }
    this.modeTemp = null;
  }

  insert(temp) {
    // records new temperature
    // check (and replace) if new maxTemp
    this.maxTemp = Math.max(this.maxTemp, temp);
    // check (and replace) if new minTemp
    this.minTemp = Math.min(this.minTemp, temp);
    // add to combinedTemps
    this.combinedTemps += temp;
    // push into temperatures
    this.temperatureCount += 1;

    // for mode
    this.temperatures[temp] += 1;
    this.modeTemp = (this.modeTemp === null || this.temperatures[temp] > this.temperatures[this.modeTemp]) ? temp : this.modeTemp;

  }

  getMax() {
    // returns highest temp so far
    // constant time/space
    return this.maxTemp;
  }

  getMin() {
    // returns lowest temp so far
    // O(1) time & space
    return this.minTemp;
  }

  getMean() {
    // returns the average temperature
    // O(1) time & space
    return this.combinedTemps / this.temperatureCount;
  }

  getMode() {
    // returns the mode (if more than 1, return any)
    return this.modeTemp;
  }
}

const tracker = new TempTracker();

tracker.insert(50);
tracker.insert(60);
tracker.insert(70);
tracker.insert(80);
tracker.insert(90);
tracker.insert(70);

console.log(tracker.getMax()); // 90
console.log(tracker.getMin()); // 50
console.log(tracker.getMean()); // 70
console.log(tracker.getMode()); // 70

