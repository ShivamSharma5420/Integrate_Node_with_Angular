import { Component, OnInit } from '@angular/core';
import { CustomPipe } from "../customPipe/custom.pipe"
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


  name = "Shivam sharma";

  names = ['Jay', 'Shivam Sharma', 'Suyash Misra', 'Snehal Patra', 'Manish Suthar', 'Rahul Chaubey'];



  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
