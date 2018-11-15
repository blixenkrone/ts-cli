
import { MongoClass } from './config';

class App {
    private mdb = new MongoClass();
    constructor() { }
    private waiter = async () => await new Promise((resolve) => setTimeout(resolve, 3000));

}

export = new App();
