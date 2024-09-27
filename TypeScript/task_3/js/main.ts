/// <reference path="./crud.d.ts"/>
import {RowID, RowElement} from './interface';
let CRUD = require("./crud");
const row: RowElement = {
    firstName: "Alex",
    lastName: "Santos"
}

const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { firstName: "Alex", lastName: "Santos", age: 30};
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);
