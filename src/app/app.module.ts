import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {APP_ROUTES} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {Aux1Component} from "./aux1/aux1.component";
import {Aux2Component} from "./aux2/aux2.component";
import {FormComponent} from "./form/form.component";
import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyAwlVR2wZD3Ad_b-vI0janxZgiotaGU7ls",
    authDomain: "angular-fb1.firebaseapp.com",
    databaseURL: "https://angular-fb1.firebaseio.com",
    storageBucket: "angular-fb1.appspot.com",
    messagingSenderId: "46104038968"
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(APP_ROUTES, {enableTracing: false}),
        SharedModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        Aux1Component,
        Aux2Component,
        FormComponent
    ],

    providers: [
        {provide: LOCALE_ID, useValue: navigator.language}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
