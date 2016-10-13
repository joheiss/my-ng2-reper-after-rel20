import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MdComponent} from "./md.component";
import {MD_ROUTES} from "./md.routes";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule, MdIconRegistry} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(MD_ROUTES), MaterialModule, SharedModule],
    declarations: [MdComponent],
    exports: [MdComponent],
    providers: [
        MdIconRegistry
    ],
})

export class MdModule {}
