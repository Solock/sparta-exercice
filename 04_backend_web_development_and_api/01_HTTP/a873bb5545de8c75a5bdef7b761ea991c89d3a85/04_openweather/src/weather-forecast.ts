import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string): void {
  request(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`, (error, body) => {
    if(error) {
      console.error(error);
    } else {
      const weatherZipCode = JSON.parse(body);
      console.log(weatherZipCode);
    }
  })
  // code the function here
}

function weatherByLatitudeAndLongitude(latitude: number, longitude: number): void {
  request(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=16&&appid=${process.env.OPENWEATHER_API_KEY}`, (error, body) => {
    if(error) {
      console.error(error);
    } else {
      const weatherLatLon = JSON.parse(body);
      console.log(weatherLatLon);
    }
  })
  // code the function here
}

// leave lines below for tests to work properly
export {
  weatherByZipcode,
  weatherByLatitudeAndLongitude
}
