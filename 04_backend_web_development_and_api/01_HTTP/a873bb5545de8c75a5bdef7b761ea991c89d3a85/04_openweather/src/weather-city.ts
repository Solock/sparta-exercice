import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByCity(cityName: string): void {
  //console.log(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=process.env.OPENWEATHER_API_KEY`);
  request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`, (error, body) => {
    if(error) {
      console.error(error);
    } else {
      const weatherCity = JSON.parse(body);
      console.log(weatherCity);
    }
  })
  // code the function here
}

// leave lines below for tests to work properly
export { weatherByCity }


