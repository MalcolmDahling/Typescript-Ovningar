import { IService } from "../interfaces/IService";



export class Service implements IService{

    async GetData(searchMovie){

        let response = await fetch('https://www.omdbapi.com/?apikey=f6e0fd65&s='+searchMovie);
        let data = await response.json();
        return data;
        
    }

}






// export class Service implements IService{

//     GetData(){

//         let movieArray = [];

//         fetch('https://www.omdbapi.com/?apikey=f6e0fd65&s=indiana')
//             .then(response => response.json())
//             .then(data => {
//                 for(let i = 0; i < data.Search.length; i++){
//                     movieArray.push(data.Search[i]);
//                 }
//             }
//         );

//         return movieArray;
//     }


// }


