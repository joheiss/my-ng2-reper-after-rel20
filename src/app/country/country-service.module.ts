import {NgModule} from "@angular/core";
import {CountryService} from "./country.service";

@NgModule({})

export class CountryServiceModule {

    static forRoot() {
        return {
            ngModule: CountryServiceModule,
            providers: [CountryService]
        };
    }
}

export {
    CountryService
};
