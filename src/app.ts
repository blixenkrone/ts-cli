
import { MongoClass } from './config';

class App {
    private mdb = new MongoClass();
    constructor() {
        console.log('start')
        this.mdb.connect();
    }
}

export = new App();
