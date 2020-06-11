export class Subject {
  state!: number;
  observerList: Observer[] = [];

  setState(state: number): void {
    this.state = state;
    this.notifyObservers();
  }

  getState(): number {
    return this.state;
  }

  addObserver(observer: Observer) {
    this.observerList.push(observer);
  }

  notifyObservers(): void {
    for (let obs of this.observerList) {
      obs.update();
    }
  }
}

export abstract class Observer {
  protected subject!: Subject;
  update() : void {};
}
