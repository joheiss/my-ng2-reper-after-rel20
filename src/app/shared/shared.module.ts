import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule, TranslatePipe, TranslateService} from "ng2-translate/ng2-translate";
import {AngularFireModule, AngularFire} from "angularfire2";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot()
    ],
    declarations: [],
    exports: [
        TranslatePipe
    ]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [TranslateService]
        }
    }
}
