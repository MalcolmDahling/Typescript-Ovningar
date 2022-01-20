import { Service } from '../services/Service';
import { IService } from '../interfaces/IService';

class Main{
    start(service:IService){
        console.log(service.GetData());
    }
}

let main = new Main();
let service = new Service();
main.start(service);

