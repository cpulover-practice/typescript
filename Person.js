"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    //Shorcut constructor
    function Person(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        // Accessor setter/getter
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.toString = function () {
        return "Full name: " + this._firstName + " " + this._lastName;
    };
    return Person;
}());
exports.Person = Person;
var person = new Person("Cpulover", "Justa");
