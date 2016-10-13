import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {SearchComponent} from "./search.component";
import {SEARCH_ROUTES} from "./search.routes";
import {JsonpModule} from "@angular/http";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(SEARCH_ROUTES), JsonpModule, SharedModule],
    declarations: [SearchComponent],
    exports: [SearchComponent],
    providers: []
})

export class SearchModule {}
