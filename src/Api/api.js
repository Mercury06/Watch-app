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
    },

    getGender (gender) {
        //debugger;
        return axios.get (`https://rickandmortyapi.com/api/character?gender=${gender}`)
        .then(response => {
            return response
        });
    },

    getSpecies (species) {
        //debugger;
        return axios.get (`https://rickandmortyapi.com/api/character?species=${species}`)
        .then(response => {
            return response
        });
    },

    getStatus (status) {
        //debugger;
        return axios.get (`https://rickandmortyapi.com/api/character?status=${status}`)
        .then(response => {
            return response
        });
    },


}

export const episodesAPI = {
    
    getEpisodes (currentPage) {
        //debugger;
        return axios.get (`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
        .then(response => {
            return response
        });
    }  
}




