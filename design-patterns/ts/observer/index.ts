import { Subject, Observer } from "./observer";

class SMSModule extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.addObserver(this);
  }

  update(): void {
    console.log("Got state update from SMSModule", this.subject.getState());
  }
}

class PumpObserver extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.addObserver(this);
  }

  update(): void {
    console.log("Got state update from PumpObserver", this.subject.getState());
  }
}

class WebServiceObserver extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.addObserver(this);
  }

  update(): void {
    console.log("Got state update from WebService", this.subject.getState());
  }
}

const temperatureSubject = new Subject();

const smsModule = new SMSModule(temperatureSubject);
const pumpObserver = new PumpObserver(temperatureSubject);
const webServiceObserver = new WebServiceObserver(temperatureSubject);

temperatureSubject.setState(85);
temperatureSubject.setState(90);
temperatureSubject.setState(95);
