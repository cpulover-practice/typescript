export class Customer {
     //Traditional constructor
    private _firstName: string;
    private _lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Accessor setter/getter
    get firstName(): string{
        return this._firstName;
    }

    set firstName(value:string){
        this._firstName=value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}

let customer = new Customer("Cpulover", "Justa");
console.log(customer.firstName); //this calls firstName() accessor
console.log(customer.lastName); //this calls lastName() accessor
