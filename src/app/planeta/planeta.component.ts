import { Component, Input } from "@angular/core";
import { Planeta } from "./planeta";

@Component({
    selector: 'solar-planeta',
    templateUrl: './planeta.component.html',
    styles:[''] 
})
export class PlanetaComponent {
    
    @Input('dados') planeta = new Planeta;

}