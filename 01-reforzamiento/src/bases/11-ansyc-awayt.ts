import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'MziEkymRhg38U5ebIKZxfYSpVFXEWMvd';

// Peticion HTTP;


// Extraemos la funcion de crear imagen para mantener el codigo limpio
const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement)
}


// Tarea asincrona con promesa de traer la URL (async)
const getRandomGifUrl = async (): Promise<string> => {

    // Para que funcione un await debe ir dentro de un async;
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

    const { data }: GiphyRandomResponse = await response.json();

    return data.images.original.url;

}

// DOS FORMAS DE HACER LO MISMO, Como el argumento que se pasa es el mismo en ambas funciones, 
// podemos pasar directamente la funcion;
// getRandomGifUrl().then((url) => createImageInsideDOM(url));
getRandomGifUrl().then(createImageInsideDOM);