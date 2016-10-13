export class Drug {

    static fromJsonArray(json: any[]): Drug[] {
        return json.map(Drug.fromJson);
    }

    static fromJson({$key, shortname, name}): Drug {
        return new Drug($key, shortname, name);
    }

    constructor(public $key: string,
                public shortname: string,
                public name: string) {};
}
