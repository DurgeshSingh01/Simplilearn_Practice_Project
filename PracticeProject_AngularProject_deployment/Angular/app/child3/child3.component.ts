import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Input() message !: string
  @Output() notify : EventEmitter<string> = new EventEmitter<string>();
  constructor( ) { }

  triggerEvent(){
    this.notify.emit(Math.random().toString())
  }
 
  ngOnInit(): void {
  }

}
