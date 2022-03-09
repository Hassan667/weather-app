// npm i request
const request = require("request");

//const url = "https://api.weatherapi.com/v1/current.json?key=51a20bc2793045b6b26142621220803&q=30.050,31.250"

//shorthand
// request --> package httprequests
// Parse manually
// request({url},(error,response)=>{
//     // console.log(error)
//     console.log(response.body)  // json
//     // error
//     // console.log(response.body.location.name)
//     const data = JSON.parse(response.body)
//     console.log(data)
//     console.log(data.location.name)
// })

////////////////////////////////////////////////////////////////////
// json:true --> convert automatically from json to object
// request({url,json:true},(error,response)=>{
//     // console.log(response.body)
//     // // console.log(error)
//     console.log(response.body.location.name)  //object
//     console.log(response.body.current.condition.text)
// })
////////////////////////////////////////////////////////////////////////

// request({url,json:true},(error,response)=>{
//     // low level error
//     if(error){
//         console.log('Error has occurred')
//     }
//     else if(response.body.error){
//         console.log(response.body.error.message)
//     }
//     else {
//         console.log(response.body.location.name,
//             response.body.current.condition.text)
//     }
// })
///////////////////////////////////////////////////////////////////////

// const geocodeUrl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'
// request({url:geocodeUrl,json:true},(error,response)=>{
//     if(error){
//         console.log('Error has occurred')
//     }
//     else if(response.body.message){
//         console.log(response.body.message)
//     }
//     else if(response.body.features.length ==0){
//         console.log('Your search is invalid')
//     }
//     else {
//         const longtitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(latitude,longtitude)
//     }
// })
//////////////////////////////////////////////////////////////////////////////

// Version 2 Customize code
// We moved forecast & geocode functions to tools folder

const forecast = require("./tools/forecastFile");
// forecast(26.4941838299718,29.871903452398, (error,data)=>{
//     console.log('Error ' , error)
//     console.log('Data ', data)
// } )

///////////////////////////////////////////////////////////////////////////

const geocode = require("./tools/geocode");
// geocode("egypt",(error,data)=>{
//     console.log('Error ' , error)
//     console.log('Data ' , data)
// })

// // function sum(x,y){}

// console.log('test')

///////////////////////////////////////////////////////////////////////////

// Version 3
console.log(process.argv);
const country = process.argv[2];
geocode(country, (error, data) => {
    console.log("Error ", error);
    console.log("Data ", data);
    if (data) {
        forecast(data.latitude, data.longitude, (error, data) => {
            console.log("Error ", error);
            console.log("Data ", data);
        });
    } else {
        console.log("Error");
    }
});