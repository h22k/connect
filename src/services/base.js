import axios from "axios"

const instance = axios.create({
    baseURL: 'https://public.connectnow.org.uk/'
})

export default instance