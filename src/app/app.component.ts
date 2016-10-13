import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "ng2-translate/ng2-translate";
import {APP_NAVIGATION} from "./app.routes";
import {AngularFire} from "angularfire2";

@Component({
    selector: 'jo-rep-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    private navi = APP_NAVIGATION;
    private today = Date.now();

    /*
     * constructor
     */
    constructor(private _router: Router,
                private _translate: TranslateService) {

        // setup i18n
        this._setupI18n(this._translate);
    }

    /*
     * lifecycle hooks
     */

    ngOnInit(): void {
        this.toggleAux(false, false);
    }

    /*
     * public methods
     */
    toggleAux(aux1: boolean, aux2:boolean): void {

        console.log(aux1, aux2);

        let auxPaths: string = "";

        if (aux1) {
            auxPaths += "aux1:aux1";
        }

        if (aux2) {
            if (auxPaths) {
                auxPaths += "//";
            }
            auxPaths += "aux2:aux2";
        }

        let url = '/home';
        if (auxPaths) {
            url += `(${auxPaths})`;
        }
        console.log(url);
        this._router.navigateByUrl(url);
    }

    /*
     * private methods
     */
    _setupI18n(translate: TranslateService) {

        // determine user language
        let userLang = navigator.language.split('-')[0];
        userLang = /(de|en)/gi.test(userLang) ? userLang : 'en';

        // default language
        translate.setDefaultLang('en');

        // use language
        translate.use(userLang);
    }
}
