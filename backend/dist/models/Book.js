"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const LoanRecord_1 = require("./LoanRecord");
const BookSchema = new mongoose_1.Schema({
    barcode: { type: String, required: true, unique: true },
    cover: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    authors: { type: [String], required: true },
    description: { type: String, required: true },
    subjects: { type: [String], required: true },
    publicationDate: { type: Date, required: true },
    publisher: { type: String, required: true },
    pages: { type: Number, required: true },
    genre: { type: String, required: true },
    records: [LoanRecord_1.LoanRecordSchema],
});
exports.default = mongoose_1.default.model("Book", BookSchema);