import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {Aux1Component} from "./aux1/aux1.component";
import {Aux2Component} from "./aux2/aux2.component";
import {LazyModule} from "./lazy/lazy.module";
import {CountryModule} from "./country/country.module";
import {FormComponent} from "./form/form.component";
import {SearchModule} from "./search/search.module";
import {MdModule} from "./md/md.module";
import {FirebaseModule} from "./firebase/firebase.module";
import {loadDrugsModule} from "./drugs/drugs.module";
import {loadGeosModule} from "./geos/geos.module";

function loadCountryModule(): any {
    return CountryModule;
}

function loadLazyModule(): any {
    return LazyModule;
}

function loadSearchModule(): any {
    return SearchModule;
}

function loadMdModule(): any {
    return MdModule;
}

function loadFirebaseModule(): any {
    return FirebaseModule;
}

export const APP_NAVIGATION: {url:string, content: string}[] = [
    { url: "",        content: "HOME" },
    { url: "lazy",    content: "LAZY" },
    { url: "country", content: "COUNTRY" },
    { url: "form",    content: "FORM"},
    { url: "search",  content: "SEARCH"},
    { url: "md",      content: "MNU_MATERIAL_DESIGN"},
    { url: 'firebase',content: "MNU_FIREBASE" },
    { url: 'drugs',content: "MNU_DRUGS" },
    { url: 'geos',content: "MNU_GEOS" },
    { url: "about",   content: "ABOUT"}
];

export const APP_ROUTES = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lazy',
        loadChildren: loadLazyModule
    },
    {
        path: 'country',
        loadChildren: loadCountryModule
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: 'search',
        loadChildren: loadSearchModule
    },
    {
        path: 'md',
        loadChildren: loadMdModule
    },
    {
        path: 'firebase',
        loadChildren: loadFirebaseModule
    },
    {
        path: 'drugs',
        loadChildren: loadDrugsModule
    },
    {
        path: 'geos',
        loadChildren: loadGeosModule
    },
    {
        path: 'aux1',
        component: Aux1Component,
        outlet: 'aux1'
    },
    {
        path: 'aux2',
        component: Aux2Component,
        outlet: 'aux2'
    },
    {
        path: '**',
        component: HomeComponent
    }
];
