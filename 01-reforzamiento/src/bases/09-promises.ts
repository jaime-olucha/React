

const myPromise = new Promise((resolve, reject) => {   //Funcion Callback como parametro en new Promise;

    setTimeout(() => {
        resolve(100) // Lo que devuelve si se cumple la promesa (.then)
        reject('Mi amigo se perdió'); // Lo que devuelve si no se cumple (.catch)
    }, 2000);
})

// Cuando se cumple la promesa
myPromise.then(
    (myMoney) => {
        console.log(`My money is back: ${myMoney}`);
    }

    // Cuando no se cumple (Enlazamos nuestra promesa con un .catch)
).catch((reason) => {
    console.warn(reason);

    // finally, se ejecuta siempre, si se cumple o si no se cumple
}).finally(() => {
    console.log('Ha seguir con  mi vida');
})

