import axios from "axios";

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        lang: 'es',
        api_key: import.meta.env.VITE_GIPHY_API_KEY
        // api_key: 'MziEkymRhg38U5ebIKZxfYSpVFXEWMvd' // Esto no debe estar aquí, deve estar en variables de entorno
    }
});