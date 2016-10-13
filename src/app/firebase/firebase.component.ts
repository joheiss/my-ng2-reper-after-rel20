import {Component, OnInit} from "@angular/core";
import {FirebaseService} from "./firebase-service";
import {Observable} from "rxjs";
import {Customer} from "../shared/model/Customer";
import {Drug} from "../shared/model/Drug";
import {Geo} from "../shared/model/Geo";

@Component({
    selector: 'jo-rep-fb',
    templateUrl: 'firebase.component.html',
    styleUrls: ['firebase.component.css'],
    providers: [FirebaseService]
})

export class FirebaseComponent implements OnInit {

    private today = Date.now();
    // customers$: Observable<Customer[]>;
    drugs$: Observable<Drug[]>;
    geos$: Observable<Geo[]>;

    constructor(private _firebaseService: FirebaseService) {
    }

    ngOnInit() {
        // this.customers$ = this._firebaseService.findAllCustomers();
        this.drugs$ = this._firebaseService.findAllDrugs();
        // this._customer$ = this._af.database.object('customers/5001');
        this.geos$ = this._firebaseService.findAllGeos();
    }

    onLoadDrugs() {
        const count = this._firebaseService.loadAllDrugs();
    }

    onRemoveDrugs() {
        this._firebaseService.removeAllDrugs();
    }

    onLoadGeos() {
        const count = this._firebaseService.loadAllGeos();
    }

    onRemoveGeos() {
        this._firebaseService.removeAllGeos();
    }
}
