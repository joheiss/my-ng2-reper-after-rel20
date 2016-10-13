import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {GeosComponent} from "./geos.component";
import {GEOS_ROUTES} from "./geos.routes";
import {GeosListComponent} from "./geos-list/geos-list.component";


export function loadGeosModule(): any {
    return GeosModule;
}

@NgModule({
    imports: [CommonModule, RouterModule.forChild(GEOS_ROUTES), SharedModule],
    declarations: [GeosComponent, GeosListComponent],
    exports: [GeosComponent]

})

export class GeosModule {}
