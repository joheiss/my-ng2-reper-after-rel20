export class Customer {

    constructor(public $key: string,
                public name: string,
                public countryIso: string,
                public zipcode: string,
                public city: string,
                public street: string) {}
}
