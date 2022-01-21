import { Service } from '../services/Service';
import { IService } from '../interfaces/IService';

class Main{
    start(service:IService){
        let movieArray = service.GetData();

        movieArray.then(data => {
            console.log(data.Search);

            for(let i = 0; i < data.Search.length; i++){
                document.body.insertAdjacentHTML('beforeend', `
                    <div style="border:2px solid black; margin-bottom:10px; padding:10px; width:fit-content;">
                        <h2>${data.Search[i].Title}</h2>
                        <p>Type: ${data.Search[i].Type}</p>
                        <p>Year: ${data.Search[i].Year}</p>
                        <p>IMDB-ID: ${data.Search[i].imdbID}</p>
                        <img src="${data.Search[i].Poster}"></img>
                    </div>
                `);
            }
        });

        
    }
}

let main = new Main();
let service = new Service();
main.start(service);

