import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>
  <fieldset>
  <img [src]="image">
  </fieldset>
  <label [style.color]=color>Favorite color</label>
  <button (click)="toggleColor()">Toggle Color</button>
  <select (change)="colorChange($event.target.value)">
    <option>red</option>
    <option>blue</option>
    <option>green</option>
  </select>
  <button (click)=showHide()>show/hide</button>
  <p>
  <div [hidden]="hideAddress">
  {{street}} , {{city}} , {{region}}
  </div>
  <p>
  <select (change)="regionChange($event.target.value)">
    <option>East</option>
    <option>North</option>
    <option>South</option>
    <option>West</option>
  </select> 
  `
})
export class AppComponent  {
  name = 'Alex Smith';
  street = 'quevillon';
  city = 'st-hubert';
  region = 'quebec';
  hideAddress = false;
  image = 'favicon.ico';
  color = 'red';

  toggleColor(){
    this.color= this.color==="red"?"blue":"red";
  }

  colorChange(color: string){
    this.color = color;
  }

  showHide(){
    this.hideAddress = this.hideAddress===true?false:true;  
  }


}
