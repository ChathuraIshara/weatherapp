export interface WeatherData {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherList[];
    city: City;
}

export interface WeatherList {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain?: Rain;
    sys: Sys;
    dt_txt: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Clouds {
    all: number;
}

export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface Rain {
    '3h': number;
}

export interface Sys {
    pod: string;
}

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export type SunTimes = {
    sunrise: number;
    sunset: number;
  };

 export interface WeatherForecastData {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    rain?: { // Make rain optional
        '3h': number;
      };
    sys: {
      pod: string;
    };
    dt_txt: string;
  }
  
