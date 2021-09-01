import * as axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/';

export const charactersAPI = {
    
    getCharacters (currentPage) {
        
        return axios.get ( baseURL+`character?page=${currentPage}`)
        .then(response => {
            return response
        });
    },

    getGender (gender) {
       
        return axios.get ( baseURL+`character?gender=${gender}`)
        .then(response => {
            return response
        });
    },

    getSpecies (species) {
       
        return axios.get ( baseURL+`character?species=${species}`)
        .then(response => {
            return response
        });
    },

    getStatus (status) {
        
        return axios.get ( baseURL+`character?status=${status}`)
        .then(response => {
            return response
        });
    },


}

export const episodesAPI = {
    
    getEpisodes (currentPage) {
      
        return axios.get ( baseURL+`episode?page=${currentPage}`)
        .then(response => {
            return response
        });
    }  
}

export const locationsAPI = {
    
    getLocations (currentPage) {
       
        return axios.get ( baseURL+`location?page=${currentPage}`)
        .then(response => {
            return response
        });
    },

    getType (type) {
      
        return axios.get ( baseURL+`location?type=${type}`)
        .then(response => {
            return response
        });
    },

    getDimension (dimension) {
        
        return axios.get ( baseURL+`location?dimension=${dimension}`)
        .then(response => {
            return response
        });
    },

}




