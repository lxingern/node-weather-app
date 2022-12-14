require('dotenv').config()
const request = require('request')

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=37.8267,-122.4233`

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})