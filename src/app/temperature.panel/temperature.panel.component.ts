import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'temperature-panel',
    templateUrl: './temperature.panel.component.html'
})

export class TemperaturePanelComponent{

    @Input() min: number;
    @Input() max: number;
    @Input() humidity: number;
    @Input() img: string;
    @Input() day: string;

}