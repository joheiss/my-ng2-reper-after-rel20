import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {DrugsComponent} from "./drugs.component";
import {DRUGS_ROUTES} from "./drugs.routes";
import {DrugsListComponent} from "./drugs-list/drugs-list.component";

export function loadDrugsModule(): any {
    return DrugsModule;
}

@NgModule({
    imports: [CommonModule, RouterModule.forChild(DRUGS_ROUTES), SharedModule],
    declarations: [DrugsComponent, DrugsListComponent],
    exports: [DrugsComponent]

})

export class DrugsModule {}
