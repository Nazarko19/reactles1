import axios from 'axios';

let config = {
    baseURL:'https://jsonplaceholder.typicode.com/comments'
}
let axioscomment = axios.create(config);

const getaxioscomment = () => {
    return axioscomment.get('')
}

export {getaxioscomment}