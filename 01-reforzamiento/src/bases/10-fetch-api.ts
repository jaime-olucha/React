import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'MziEkymRhg38U5ebIKZxfYSpVFXEWMvd';

// Peticion HTTP;
const myReguest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);



// Extraemos la funcion de crear imagen para mantener el codigo limpio
const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement)
}

//Hacemos una promesa
myReguest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        console.log(imageUrl);

        createImageInsideDOM(imageUrl);
    })
    .catch((err) => {
        console.error(err);
    })


/* ↓ MAL ↓ - Sin tipado fuerte y todo en uno  */
/* Tipado any (COMO EN JS, todo es tipado any, no se sabe que tipo es)
myReguest
.then((response) => response.json())
.then((data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);


    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.append(imgElement)

})
.catch((err) => {
    console.error(err);
})
*/
