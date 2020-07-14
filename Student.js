"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, _course) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this._course = _course;
        return _this;
    }
    Object.defineProperty(Student.prototype, "course", {
        get: function () {
            return this._course;
        },
        set: function (value) {
            this._course = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.toString = function () {
        return _super.prototype.toString.call(this) + (" - Course: " + this._course);
    };
    return Student;
}(Person_1.Person));
exports.Student = Student;
