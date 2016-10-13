import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Country} from "../shared/model/Country";
import {Http} from "@angular/http";

@Injectable()
export class CountryService {

    public countries: Observable<Country[]>;

    private _language: string;

    constructor(private _http:Http) {

        this._language = navigator.language;
    }

    public getList(): Observable<Country[]> {
        const url: string = "http://localhost:4400/api/commons/countries";
        return this._http.get(url)
                   .map(res => res.json());
    }
}
