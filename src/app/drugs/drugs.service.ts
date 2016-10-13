import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Drug} from "../shared/model/Drug";
import {DRUGS_BASE_LIST} from "../../data/drugs-data";

@Injectable()
export class DrugsService {

    constructor(private _af: AngularFire) {}

    public findAllDrugs(): Observable<Drug[]> {

        return this._af.database.list('drugs').map(json => Drug.fromJsonArray(json));
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

    public removeAllDrugs() {
        this._af.database.list('drugs').remove();
    }


}
