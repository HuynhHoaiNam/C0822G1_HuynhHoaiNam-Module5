import {Component, OnInit} from '@angular/core';
import {Colors} from "../model/colors";


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Colors = {
    name: "#11E037",
    size: "200px"
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  colorChange(colorInput: any) {
    this.colors.name = colorInput.value;
  }
}
