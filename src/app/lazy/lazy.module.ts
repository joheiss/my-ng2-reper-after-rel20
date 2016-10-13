import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LazyComponent} from "./lazy.component";
import {LAZY_ROUTES} from "./lazy.routes";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(LAZY_ROUTES), SharedModule],
    declarations: [LazyComponent],
    exports: [LazyComponent],
    providers: []
})

export class LazyModule {}
