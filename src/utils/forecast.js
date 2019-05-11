const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1e9a17bf63d0749cf5e9e9686cb54725/'+latitude+','+longitude+'?units=si'

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location service', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, 
                body.daily.data[0].summary + ' The temperature is ' + body.currently.temperature + ' and there is ' + body.currently.precipProbability + '% chance of precipitation'
            );
        }
    })
}

module.exports = forecast