import { Component, OnInit } from '@angular/core';

// Drag & drop
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  

  categories: any = [
    {
      id: 1,
      name: 'Category 1',
      subCategories: [
        {
          id: 5,
          name: 'Sub-category 5',
          dragulaName: 'category-1'
        },
        {
          id: 6,
          name: 'Sub-category 6',
          dragulaName: 'category-1'
        },
        {
          id: 7,
          name: 'Sub-category 7',
          dragulaName: 'category-1'
        },
        {
          id: 8,
          name: 'Sub-category 8',
          dragulaName: 'category-1'
        }
      ]
    },
    {
      id: 2,
      name: 'Category 2',
      subCategories: []
    },
    {
      id: 3,
      name: 'Category3',
      subCategories: []
    },
    {
      id: 4,
      name: 'Category 4',
      subCategories: []
    },

  ];


    constructor(private _dragulaService: DragulaService) {}
    
    public ngOnInit() {


      this._dragulaService.drop.asObservable().subscribe((value) => {

        console.log(value);

      });

      /**
       * Used to get the dragged question original position.
       */
      this._dragulaService.drag.asObservable().subscribe((value) =>       {

        console.log(value);

      });
  }

}
