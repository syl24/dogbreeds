import axios from 'axios';

// Store API here

export default {
    getDog: function(){
        return axios.get("https://dog.ceo/api/breeds/list/all")
    }
};
