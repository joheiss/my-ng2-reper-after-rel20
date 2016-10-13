import {Injectable} from "@angular/core";
import {Jsonp, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class SearchService {

    constructor(private _jsonp: Jsonp) {}

    search(terms: Observable<string>, debounceMs = 400) {
        return terms
            .debounceTime(debounceMs)
            .distinctUntilChanged()
            .switchMap(term => this.rawsearch(term));
    }

    rawsearch(term: string) {
        let search = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');

        return this._jsonp.get("http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK", {search})
            .map(res => res.json()[1]);
    }
}

