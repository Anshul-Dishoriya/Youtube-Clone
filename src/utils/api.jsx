import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '5d65816d41msh80c78e11810c84dp13c8ebjsn98d3d86141a3',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return true ? data : undefined ;
}
export default fetchDataFromApi