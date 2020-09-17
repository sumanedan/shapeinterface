import { ThrowStmt } from '@angular/compiler';
import { createInjectable } from '@angular/compiler/src/core';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { Circle, IShapes, rectangle, Square } from '../shapes';
@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  choice: string;

  constructor() { }

  ngOnInit(): void {
  }
  enter(choice) {
    console.log(this.choice)
    if (this.choice == "Circle") {
      let c = new Circle()
      this.clearcanvas();
      c.draw();
    }
    else if (this.choice == "Rectangle") {
      let c1 = new rectangle()
      this.clearcanvas();
      c1.draw();

    } else {
      let c2 = new Square()
      this.clearcanvas();
      c2.draw();
    }
  }
  
  clearcanvas() {
    const context = <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx = context.getContext("2d");
    context.width=context.width;
  }
}


