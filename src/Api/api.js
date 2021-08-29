import * as axios from 'axios';

// const instance = axios.create({    
//     baseURL: `https://rickandmortyapi.com/api/`,   
// });

// {
//     "characters": "https://rickandmortyapi.com/api/character",
//     "locations": "https://rickandmortyapi.com/api/location",
//     "episodes": "https://rickandmortyapi.com/api/episode"
//   }

export const charactersAPI = {
    
    getCharacters (currentPage) {
        //debugger;
        return axios.get (`https://rickandmortyapi.com/api/character?page=${currentPage}`)
        .then(response => {
            return response
        });
    }   
   
}




