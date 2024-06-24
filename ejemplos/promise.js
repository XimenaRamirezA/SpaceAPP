const solicitud = new Promise ((resolve, reject) => {
    const response = "resolve"

    if (response == "resolve"){
        resolve("La promesa se cumplió")
    }
    else{
        reject("La promesa no se cumplió")
    }
})

console.log(solicitud)
