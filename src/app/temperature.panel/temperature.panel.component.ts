import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'temperature-panel',
    templateUrl: './temperature.panel.component.html'
})

export class TemperaturePanelComponent{

    @Input() day: string;
    @Input() min: string;
    @Input() max: string;

}