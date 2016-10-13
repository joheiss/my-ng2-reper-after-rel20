import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {GEOS_LIST} from "../../data/geos-data";
import {
    Geo, GeoCountryBorder, GeoCountryTopLevelDomain, GeoCountryCurrency,
    GeoCountryCallingCode, GeoCountryNameTranslation, GeoInfo, GeoCountryLanguage
} from "../shared/model/Geo";

@Injectable()
export class GeosService {

    constructor(private _af: AngularFire) {}

    findAllGeoInfo(): Observable<GeoInfo[]> {
        return this.findAllGeos()
            .flatMap(geos => geos)
            .map(geo => new GeoInfo(geo, [], [], [], [], [], []))
            .flatMap((geo: GeoInfo) => {
                return this.findBordersByCountryKey(geo.country.$key)
                    .map(borders => {
                        borders.forEach(border => geo.borders.push(border.cca3));
                        return geo;
                    });
            })
            .flatMap((geo: GeoInfo) => {
                return this.findTopLevelDomainsByCountryKey(geo.country.$key)
                    .map(domains => {
                        domains.forEach(domain => geo.topLevelDomains.push(domain.topLevelDomain));
                        return geo;
                    });
            })
            .flatMap((geo: GeoInfo) => {
                return this.findCallingCodesByCountryKey(geo.country.$key)
                    .map(callingCodes => {
                        callingCodes.forEach(code => geo.callingCodes.push(code.callingCode));
                        return geo;
                    });
            })
            .flatMap((geo: GeoInfo) => {
                return this.findCurrenciesByCountryKey(geo.country.$key)
                    .map(currencies => {
                        currencies.forEach(currency => geo.currencies.push(currency.currencyKey));
                        return geo;
                    });
            })
            .flatMap((geo: GeoInfo) => {
                return this.findCountryLanguagesByCountryKey(geo.country.$key)
                    .map(languages => {
                        languages.forEach(language => geo.languages.push(language.languageKey));
                        return geo;
                    });
            })
            .flatMap((geo: GeoInfo) => {
                return this.findCountryNameTranslationsByCountryKey(geo.country.$key)
                    .map(translations => {
                        translations.forEach(translation => {
                            const name = {
                                languageKey: translation.languageKey,
                                common: translation.common,
                                official: translation.official
                            };
                            geo.nameTranslations.push(name);
                        });
                        return geo;
                    });
            })
            .scan(function(geos: GeoInfo[], geo: GeoInfo) {
                geos.push(geo);
                return geos;
            }, [] );
    }

    findAllGeos(): Observable<Geo[]> {

        return this._af.database.list('geos').map(json => Geo.fromJsonArray(json));
    }

    findBordersByCountryKey(countryKey: string): Observable<GeoCountryBorder[]> {

        return this._af.database.list('geo-borders', {
            query: {
                orderByChild: 'countryKey',
                equalTo: countryKey
            }
        })
            .map(json => GeoCountryBorder.fromJsonArray(json));
    }

    findTopLevelDomainsByCountryKey(countryKey: string): Observable<GeoCountryTopLevelDomain[]> {

        return this._af.database.list('geo-topleveldomains', {
            query: {
                orderByChild: 'countryKey',
                equalTo: countryKey
            }
        })
            .map(json => GeoCountryTopLevelDomain.fromJsonArray(json));
    }

    findCurrenciesByCountryKey(countryKey: string): Observable<GeoCountryCurrency[]> {

        return this._af.database.list('geo-currencies', {
            query: {
                orderByChild: 'countryKey',
                equalTo: countryKey
            }
        })
            .map(json => GeoCountryCurrency.fromJsonArray(json));
    }

    findCallingCodesByCountryKey(countryKey: string): Observable<GeoCountryCallingCode[]> {

        return this._af.database.list('geo-callingcodes', {
            query: {
                orderByChild: 'countryKey',
                equalTo: countryKey
            }
        })
            .map(json => GeoCountryCallingCode.fromJsonArray(json));
    }

    findCountryLanguagesByCountryKey(countryKey: string): Observable<GeoCountryLanguage[]> {

        return this._af.database.list('geo-languages', {
            query: {
                orderByChild: 'countryKey',
                equalTo: countryKey
            }
        })
            .map(json => GeoCountryLanguage.fromJsonArray(json));
    }

    findCountryNameTranslationsByCountryKey(countryKey: string): Observable<GeoCountryNameTranslation[]> {

        return this._af.database.list('geo-translations', {
            query: {
                orderByChild: 'countryKey',
                equalTo: countryKey
            }
        })
            .map(json => GeoCountryNameTranslation.fromJsonArray(json));
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
            let borders: any[] = data['borders'];
            borders.forEach(border => this._af.database.list('geo-borders').push({
                countryKey: geoRef.key,
                cca3: border
            }));
            let translations = data['translations'];
            for (let key in translations) {
                this._af.database.list('geo-translations').push({
                    countryKey: geoRef.key,
                    languageKey: key,
                    official: translations[key].official,
                    common: translations[key].common
                });
            }
            let currencies: any[] = data['currency'];
            currencies.forEach(currency => this._af.database.list('geo-currencies').push({
                countryKey: geoRef.key,
                currencyKey: currency
            }));
            let topLevelDomains: any[] = data['tld'];
            topLevelDomains.forEach(domain => this._af.database.list('geo-topleveldomains').push({
                countryKey: geoRef.key,
                topLevelDomain: domain
            }));
            let callingCodes: any[] = data['callingCode'];
            callingCodes.forEach(code => this._af.database.list('geo-callingcodes').push({
                countryKey: geoRef.key,
                callingCode: code
            }));
            let languages = data['languages'];
            for (let key in languages) {
                this._af.database.list('geo-languages').push({
                    countryKey: geoRef.key,
                    languageKey: key
                });
            }
        });

        return GEOS_LIST.length;
    }

    public removeAllGeos() {
        this._af.database.list('geos').remove();
        this._af.database.list('geoBorders').remove();
    }
}


