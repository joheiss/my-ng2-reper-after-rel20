import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs";
import {Drug} from "../shared/model/Drug";
import {DRUGS_BASE_LIST} from "../../data/drugs-data";
import {Customer} from "../shared/model/Customer";
import {GEOS_LIST} from "../../data/geos-data";
import {Geo} from "../shared/model/Geo";

@Injectable()
export class FirebaseService {

    constructor(private _af: AngularFire) {}

    public findAllCustomers(): Observable<Customer[]> {

        return this._af.database.list('customers');
    }
    public findAllDrugs(): Observable<Drug[]> {

        return this._af.database.list('drugs').map(json => Drug.fromJsonArray(json));
    }

    public findAllGeos(): Observable<Geo[]> {

        return this._af.database.list('geos').map(json => Geo.fromJsonArray(json));
    }

    public loadAllDrugs(): number {

        DRUGS_BASE_LIST.forEach(drug => {
            let drugRef = this._af.database.list('drugs').push({
                shortname: drug.shortname,
                name: drug.name
            });
            // console.log(drugRef.key);
        });

        return DRUGS_BASE_LIST.length;
    }

    public loadAllGeos(): number {

        GEOS_LIST.forEach(data => {
            console.log(data);
            let latitude = data['latlng'][0] || '';
            let longitude = data['latlng'][1] || '';
            const geoRef = this._af.database.list('geos').push({
                cca2: data['cca2'],
                cca3: data['cca3'],
                ccn3: data['ccn3'],
                cioc: data['cioc'],
                region: data['region'],
                subRegion: data['subregion'],
                landlocked: data['landlocked'],
                area: data['area'],
                latitude: latitude,
                longitude: longitude
            });
         });

        return GEOS_LIST.length;
    }

    public removeAllDrugs() {
        this._af.database.list('drugs').remove();
    }

    public removeAllGeos() {
        this._af.database.list('geos').remove();
    }
}

