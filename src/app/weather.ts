interface WeatherInfo {
  main: string;
  icon: string;
}

export interface CurrentWeather {
  weather: WeatherInfo[];
  coord: {
    lon: number,
    lat: number
  };
  main: {
    temp: number,
    pressure: number,
    humidity: number
  };
  wind: {
    speed: number
  };
  sys: {
    country: string
  };
  name: string;
}

interface WeatherForecastList extends Pick<CurrentWeather, 'main' | 'wind' | 'weather'> {
  dt: number;
  dt_txt: string;
}

interface City {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherForeCast {
  list: WeatherForecastList[];
  city: City;
}
