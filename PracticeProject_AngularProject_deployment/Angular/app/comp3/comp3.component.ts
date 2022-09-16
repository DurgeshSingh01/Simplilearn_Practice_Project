import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  str !: string
  constructor() {
   
   }
   result !: string;
  ngOnInit(): void {
  }
  getdata(event:any){
    this.result = event.toString();
  }
  gen(){
    this.str = Math.random().toString();
  }
}
