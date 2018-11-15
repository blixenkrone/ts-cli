
import { MongoClass } from './config';
import { CLI } from './cli';

class App {
    private mdb = new MongoClass();
    private cli = new CLI();
    constructor() {
        this.mdb.createModel();
    }

    private waiter = async () => await new Promise((resolve) => setTimeout(resolve, 3000));

}

export = new App();
