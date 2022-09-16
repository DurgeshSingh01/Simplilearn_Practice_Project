import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  movie_list = ["Vikranth Rona","Major","Vikram","Jugg Jugg Jeeyo","Shang-Chi","Kaduva"];
}
