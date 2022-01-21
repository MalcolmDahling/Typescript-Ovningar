import { Service } from '../services/Service';
import { IService } from '../interfaces/IService';

class Main{
    start(service:IService){



        document.body.insertAdjacentHTML('beforeend', `
            <form style="border:2px solid black; width:fit-content; padding:10px; margin-bottom:10px;">
                <h2 style="margin:0px;">Search for movies</h2>
                <input type="text" id="searchText" placeholder="Search...">
                <input type="button" id="searchButton" value="Search">
            </form>
        `);


        document.getElementById('searchButton').addEventListener('click', function(){
            
            if( document.getElementById('movies') ){ //remove previous movies
                document.getElementById('movies').remove();
            }
            
            document.body.insertAdjacentHTML('beforeend', '<div id="movies"></div>');
           
            

            
            let searchMovie = document.getElementById('searchText').value;
            console.log('Searching for: ' + searchMovie);
            document.getElementById('searchText').value = '';


            let movieArray = service.GetData(searchMovie);

            movieArray.then(data => {
                console.log(data.Search);
    
                
    
                for(let i = 0; i < data.Search.length; i++){
                    document.getElementById('movies').insertAdjacentHTML('beforeend', `
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


        });

 
    }
}

let main = new Main();
let service = new Service();
main.start(service);

