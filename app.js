require('dotenv').config()
const request = require('request')

const geocoding_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`

request({ url: geocoding_url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to the location service.')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location.')
    } else {
        console.log('Latitude is ' + response.body.features[0].center[1])
        console.log('Longitude is ' + response.body.features[0].center[0])
    }
})

const weather_url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=37.8267,-122.4233`

request({ url: weather_url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } else {
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
    }
})