"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoanRecordService_1 = require("../services/LoanRecordService");
const libraryErrors_1 = require("../utils/libraryErrors");
function createRecord(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let record = req.body;
        try {
            let createRecord = yield (0, LoanRecordService_1.generateRecord)(record);
            res
                .status(201)
                .json({ message: "New record generated", record: createRecord });
        }
        catch (error) {
            res.status(500).json({ message: "Something went wrong", error });
        }
    });
}
function updateRecord(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let record = req.body;
        try {
            let updateRecord = yield (0, LoanRecordService_1.modifyRecord)(record);
            res
                .status(200)
                .json({ message: " Record updated successfully", record: updateRecord });
        }
        catch (error) {
            if (error instanceof libraryErrors_1.LoanRecordDoesNotExistError) {
                res
                    .status(400)
                    .json({ message: "Unable to modify record", error: error.message });
            }
            else {
                res.status(500).json({ message: "Something went wrong", error });
            }
        }
    });
}
function getAllRecord(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let record = yield (0, LoanRecordService_1.findAllRecords)();
            res.status(200).json({ message: " Retrived All records", record });
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "unable to retrive records at this time", error });
        }
    });
}
function getRecordsByProperty(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let param = req.body;
        try {
            let record = yield (0, LoanRecordService_1.queryRecords)(param);
            res
                .status(200)
                .json({ message: " Retrived  records from your query", record });
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "unable to retrive records at this time", error });
        }
    });
}
exports.default = {
    createRecord,
    updateRecord,
    getAllRecord,
    getRecordsByProperty,
};
