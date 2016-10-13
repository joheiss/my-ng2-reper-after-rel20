import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {HttpModule} from "@angular/http";
import {CountryServiceModule} from "./country-service.module";
import {NgModule} from "@angular/core";
import {CountryComponent} from "./country.component";
import {RouterModule} from "@angular/router";
import {COUNTRY_ROUTES} from "./country.routes";
import {CountryListComponent} from "./country-list/country-list.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(COUNTRY_ROUTES),
        HttpModule,
        SharedModule,
        CountryServiceModule
    ],
    declarations: [CountryComponent, CountryListComponent],
    exports: [CountryComponent],
})

export class CountryModule {}
