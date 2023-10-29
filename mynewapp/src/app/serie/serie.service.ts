import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from './serie';
import { Observable } from 'rxjs';

const baseUrl = 'https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/';
const series = 'series.json';

/**
* The service provider for everything related to series
*/
@Injectable()
export class SerieService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getSeries() : Observable<Serie[]> {
        return this.http.get<Serie[]>(baseUrl + series);
    }
    
}