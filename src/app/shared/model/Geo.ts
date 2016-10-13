export class Geo {

    static fromJsonArray(json: any[]): Geo[] {
        return json.map(Geo.fromJson);
    }

    static fromJson({$key, cca2, cca3, ccn3, cioc, region, subregion, landlocked, area, latitude, longitude}): Geo {
        return new Geo($key, cca2, cca3, ccn3, cioc, region, subregion, landlocked, area, longitude, latitude);
    }

    constructor(public $key: string,
                public cca2: string,
                public cca3: string,
                public ccn3: string,
                public cioc: string,
                public region: string,
                public subregion: string,
                public landlocked: boolean,
                public area: number,
                public longitude: string,
                public latitude: string) {}

}

export class GeoCountryNameTranslation {

    static fromJsonArray(json: any[]): GeoCountryNameTranslation[] {
        return json.map(GeoCountryNameTranslation.fromJson);
    }

    static fromJson({$key, countryKey, languageKey, official, common}): GeoCountryNameTranslation {
        return new GeoCountryNameTranslation($key, countryKey, languageKey, official, common);
    }

    constructor(public $key: string,
                public countryKey: string,
                public languageKey: string,
                public official: string,
                public common: string) {}
}

export class GeoCountryBorder {

    static fromJsonArray(json: any[]): GeoCountryBorder[] {
        return json.map(GeoCountryBorder.fromJson);
    }

    static fromJson({$key, countryKey, cca3}): GeoCountryBorder {
        return new GeoCountryBorder($key, countryKey, cca3);
    }
    constructor(public $key: string,
                public countryKey: string,
                public cca3: string) {}

}

export class GeoCurrency {

    constructor(public $key: string,
                public cuca: string,
                public cucn: string) {}
}

export class GeoCurrencyNameTranslation {

    constructor(public $key: string,
                public currencyKey: string,
                public language: string,
                public name: string) {}
}

export class GeoCountryCurrency {

    static fromJsonArray(json: any[]): GeoCountryCurrency[] {
        return json.map(GeoCountryCurrency.fromJson);
    }

    static fromJson({$key, countryKey, currencyKey}): GeoCountryCurrency {
        return new GeoCountryCurrency($key, countryKey, currencyKey);
    }

    constructor(public $key: string,
                public countryKey: string,
                public currencyKey: string) {}
}

export class GeoCountryCallingCode {

    static fromJsonArray(json: any[]): GeoCountryCallingCode[] {
        return json.map(GeoCountryCallingCode.fromJson);
    }

    static fromJson({$key, countryKey, callingCode}): GeoCountryCallingCode {
        return new GeoCountryCallingCode($key, countryKey, callingCode);
    }

    constructor(public $key: string,
                public countryKey: string,
                public callingCode: string ) {}
}

export class GeoCountryTopLevelDomain {

    static fromJsonArray(json: any[]): GeoCountryTopLevelDomain[] {
        return json.map(GeoCountryTopLevelDomain.fromJson);
    }

    static fromJson({$key, countryKey, topLevelDomain}): GeoCountryTopLevelDomain {
        return new GeoCountryTopLevelDomain($key, countryKey, topLevelDomain);
    }

    constructor(public $key: string,
                public countryKey: string,
                public topLevelDomain: string ) {}
}

export class GeoLanguage {

    static fromJsonArray(json: any[]): GeoLanguage[] {
        return json.map(GeoLanguage.fromJson);
    }

    static fromJson({$key, lca2, lca3}): GeoLanguage {
        return new GeoLanguage($key, lca2, lca3);
    }

    constructor(public $key: string,
                public lca2: string,
                public lca3: string ) {}
}

export class GeoLanguageNameTranslation {

    static fromJsonArray(json: any[]): GeoLanguageNameTranslation[] {
        return json.map(GeoLanguageNameTranslation.fromJson);
    }

    static fromJson({$key, languageKey, name}): GeoLanguageNameTranslation {
        return new GeoLanguageNameTranslation($key, languageKey, name);
    }

    constructor(public $key: string,
                public languageKey: string,
                public name: string ) {}
}

export class GeoCountryLanguage {

    static fromJsonArray(json: any[]): GeoCountryLanguage[] {
        return json.map(GeoCountryLanguage.fromJson);
    }

    static fromJson({$key, countryKey, languageKey}): GeoCountryLanguage {
        return new GeoCountryLanguage($key, countryKey, languageKey);
    }

    constructor(public $key: string,
                public countryKey: string,
                public languageKey: string) {};
}

export class GeoInfo {

    static fromJsonArray(json: any[]): GeoInfo[] {
        return json.map(GeoInfo.fromJson);
    }

    static fromJson({country, borders, domains, currencies, callingCodes, languages, translations}): GeoInfo {
        return new GeoInfo(country, borders, domains, currencies, callingCodes, languages, translations);
    }
    constructor(public country: Geo,
                public borders?: string[],
                public topLevelDomains?: string[],
                public currencies?: string[],
                public callingCodes?: string[],
                public languages?: string[],
                public nameTranslations?: {languageKey:string, common: string; official: string}[]) {
        if (!borders) {
            borders = [];
        }
    }

}
