import { Component, Input } from '@angular/core';

interface StarLine
{
  lineColor: string
  starStyle: string
}

@Component({
  selector: 'app-starline',
  imports: [],
  templateUrl: './starline.html',
  styleUrl: './starline.css'
})
export class Starline
{

  @Input()
  starLineStyle: StarLine = {
      lineColor: "background-color: white;",
      starStyle: "color:white;background-color: #1ABC9C;",
  }
}
