import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

/**
 * The component for the list of series in the BookStore
 */
@Component({
    selector: 'list-serie',
    templateUrl: './serie-list.component.html', 
})
export class SerieListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param serieService The author's services provider
     */
    constructor(private serieService: SerieService) { }
    
    /**
     * The list of series which belong to the BookStore
     */
    series: Serie[];
    average: number;

    /**
     * Asks the service to update the list of series
     */
    getSeries(): void {
        this.serieService.getSeries().subscribe(series => 
          {this.series = series; 
            let sumSeasons: number;
            sumSeasons = 0;
            for (let serie of this.series) {
              sumSeasons += serie.seasons;
            }
            this.average = sumSeasons/series.length
          
          });
        
    }


    /**
     * This will initialize the component by retrieving the list of series from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getSeries();
    }
}