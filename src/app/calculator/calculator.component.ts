import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public num1: number=0;
  public num2: number=0;
  public result: number=0;
  public msg: string='sum';

  addition(){
    this.result=this.num1 + this.num2;
    this.msg='sum';
  }

  subtraction(){
    this.result=this.num1 - this.num2;
    this.msg='subtraction';
  }

  multiplication(){
    this.result=this.num1 * this.num2;
    this.msg='multiplication';
  }

  division(){
    this.result=(this.num1) / (this.num2)
    this.msg='division';
  }

}
