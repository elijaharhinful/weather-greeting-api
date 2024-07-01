# Weather Greeting API

This is a simple Node.js Express application that provides a personalized greeting along with the current temperature based on the client's IP address.

## Features

- Determines the client's location using their IP address.
- Fetches the current temperature for the client's location.
- Returns a greeting message along with the current temperature.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- An API key from [WeatherAPI](https://www.weatherapi.com/)

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/weather-greeting-api.git
    ```

2. Navigate to the project directory:

    ```
    cd weather-greeting-api
    ```

3. Install the dependencies:

    ```
    npm install
    ```

4. Create a `.env` file in the root directory of the project and add your WeatherAPI key:

    ```
    WEATHER_API_KEY=your_weather_api_key_here
    ```

### Running the Application

Start the server:

```
npm start
```

### Testing the Application

You can test the API by navigating to the following URL in your browser or using a tool like Postman:
```
http://localhost:3000/api/hello?visitor_name=your_name
```

Replace `your_name` with any name you want.

### Sample response

```
{
  "client_ip": "8.8.8.8",
  "location": "Ashburn",
  "greeting": "Hello, Mark! The temperature is 21.7 degrees Celsius in Ashburn"
}
```

### Notes

- If the server is running on localhost, the IP address is hardcoded to 8.8.8.8 for testing purposes.
- npm (Node Package Manager)
- The IP-to-location service used is [IP-API](https://www.ip-api.com/)

