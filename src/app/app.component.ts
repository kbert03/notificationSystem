import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/mock.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Notification System';
  quotes:any= {};
  scheduleDate:boolean = false;

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.getQuotes().subscribe(data =>{
      this.quotes = data;
    });
  }
  
}
