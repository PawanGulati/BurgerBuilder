import axios from 'axios'

const instance = axios.create({
    baseURL:'https://burgerbuilder-30671.firebaseio.com/'
})

export default instance


 