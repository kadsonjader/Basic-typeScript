"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("../lesson01-classes/person");
var dao_1 = require("./dao");
var dao = new dao_1.Dao();
var person = new person_1.Person('João');
dao.insert(person);
//# sourceMappingURL=main.js.map