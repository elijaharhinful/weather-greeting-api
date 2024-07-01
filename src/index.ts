require('dotenv').config();
import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;
const weatherApiKey = process.env.WEATHER_API_KEY;

app.get('/api/hello', async (req: Request, res: Response) => {
  const visitorName = req.query.visitor_name as string || "Anonymous";
  let clientIp = req.ip;

  // Handle local IP (localhost) case
  if (clientIp === '::1' || clientIp === '127.0.0.1') {
    clientIp = '8.8.8.8'; // Use a public IP for testing
  }

  try {
    // Get location data from IP-API
    const locationResponse = await axios.get(`http://ip-api.com/json/${clientIp}`);
    // console.log(locationResponse.data);
    // console.log("-----------------**************----------------");
    const { city} = locationResponse.data;

    // Get weather data from WeatherAPI
    const weatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`);
    // console.log(weatherResponse.data);
    const { temp_c } = weatherResponse.data.current;

    res.json({
      client_ip: clientIp,
      location: city,
      greeting: `Hello, ${visitorName}!, the temperature is ${temp_c} degrees Celsius in ${city}`
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
