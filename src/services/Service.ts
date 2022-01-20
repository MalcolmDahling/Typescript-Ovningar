import { IService } from "../interfaces/IService";


export class Service implements IService{

    GetData(){
        let movie = new Map<string, string>();

        fetch('https://www.omdbapi.com/?apikey=f6e0fd65&s=gunde')
            .then(response => response.json)
            .then(data => function(data){
                movie.set('title', data.title);
                movie.set('year', data.year);
                movie.set('imdbID', data.imdbID);
                movie.set('type', data.type);
                movie.set('poster', data.poster);
            });

        //return movie;
    }

}


