import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BoxComponent } from "./box.component";
import { TemperaturePanelModule } from "../temperature.panel/temperature.panel.module";
import { BoxService } from "./box.service";

@NgModule({
    imports: [ TemperaturePanelModule, CommonModule ],
    declarations: [ BoxComponent ],
    exports: [ BoxComponent ],
    providers: [ BoxService ]
})

export class BoxModule{}