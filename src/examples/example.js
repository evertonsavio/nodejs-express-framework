function getCountryById(id){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(id == 1){
                resolve("ID FOUND")
            }
            else{
                reject("ERROR FOUND")
            }
        }, 2000, id)
    })
}

function getTemperaturesOnJapan(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve([{
                id: 1,
                temperature: 45,
                country: "japan",
                data: "03/03/2022"
            }, {
                id: 2,
                temperature: 35,
                country: "korea",
                data: "03/03/2022"
            }])
        }, 2000)
    })
}

async function makeRequests(id){
    const tempObject = await getTemperaturesOnJapan()
    console.log(tempObject)

    return await getCountryById(id)

}

makeRequests(1)
.then(data => console.log(data))
.catch(error => console.log(error))
