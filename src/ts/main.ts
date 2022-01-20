import { Service } from '../services/Service';
import { IService } from '../interfaces/IService';

class Main{
    start(service:IService){
        let movieArray = service.GetData();

        console.log(movieArray);
    }
}

let main = new Main();
let service = new Service();
main.start(service);

