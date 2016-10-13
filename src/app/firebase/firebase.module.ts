import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FIREBASE_ROUTES} from "./firebase.routes";
import {SharedModule} from "../shared/shared.module";
import {AngularFireModule} from "angularfire2";
import {FirebaseComponent} from "./firebase.component";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(FIREBASE_ROUTES), SharedModule],
    declarations: [FirebaseComponent],
    exports: [FirebaseComponent]

})

export class FirebaseModule {}
