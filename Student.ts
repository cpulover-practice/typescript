import { Person } from "./Person";

export class Student extends Person {


    constructor(firstName: string, lastName: string, private _course: string) {
        super(firstName, lastName);
    }
    public get course(): string {
        return this._course;
    }
    public set course(value: string) {
        this._course = value;
    }

    //overriding method
    toString(): string {
        return super.toString() + ` - Course: ${this._course}`;
    }
}