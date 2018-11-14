
import { MongoClass } from './config';

class App {
    private mdb = new MongoClass();
    constructor() { }
}

export = new App();
