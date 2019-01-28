import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<string>(baseUrl + 'api/SampleData/Greet').subscribe(result => {
      console.log(result);
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
