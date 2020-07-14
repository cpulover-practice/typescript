class Person {
    //Shorcut constructor
    constructor(private _firstName: string, 
        private _lastName: string) {
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

let person = new Person("Cpulover", "Justa");
console.log(person.firstName); //this calls firstName() accessor
console.log(person.lastName); //this calls lastName() accessor