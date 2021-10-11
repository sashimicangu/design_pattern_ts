class NumberModel {
  number: number;
  color: string;
  observers: any[];

  constructor() {
    this.number = 0;
    this.color = 'red';
    this.observers = [];
  }

  increment() {
    const colors = ['orange', 'red', 'green', 'purple', 'grey', 'blue'];
    this.number++;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.notifyObserver(); // update when relize change
  }

  addObserver(o: any) {
    this.observers.push(o);
  }

  notifyObserver() {
    for (let o of this.observers) {
      o.update(this);
    }
  }
}

export default NumberModel
