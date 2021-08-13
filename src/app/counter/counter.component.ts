import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  start = false;
  counter = 5;
  interval:any;

constructor(private router: Router){}


  startCounter(){
    this.start = !this.start;    
    
  
        this.router.navigate(['start']);
     
  }


}
