export interface ICountryName {
    _id: string,
    language: string,
    name: string
}

export class Country {

    constructor(public _id?: string,
                public isoCode?: string,
                public names?: ICountryName[]) {}
}
