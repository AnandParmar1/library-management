"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = exports.validateSchema = void 0;
const zod_1 = require("zod");
function validateSchema(schema, property) {
    return (req, res, next) => {
        try {
            switch (property) {
                case "query":
                    schema.parse(req.query);
                    break;
                case "params":
                    schema.parse(req.params);
                    break;
                default:
                    schema.parse(req.body);
                    break;
            }
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return res.status(422).json({
                    message: "Object validation failed, please include a valid object",
                    errors: error.errors, // Provide detailed error information
                });
            }
            next(error);
        }
    };
}
exports.validateSchema = validateSchema;
exports.Schemas = {
    user: {
        create: zod_1.z.object({
            type: zod_1.z.enum(["ADMIN", "EMPLOYEE", "PATRON"]),
            firstName: zod_1.z.string(),
            lastName: zod_1.z.string(),
            email: zod_1.z.string().regex(/[^@ \t\r\n]+\.[^@ \t\r\n]+/),
            password: zod_1.z.string(),
        }),
        login: zod_1.z.object({
            email: zod_1.z.string().regex(/[^@ \t\r\n]+\.[^@ \t\r\n]+/),
            password: zod_1.z.string(),
        }),
        userId: zod_1.z.object({
            userId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
        }),
        update: zod_1.z.object({
            _id: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
            type: zod_1.z.enum(["ADMIN", "EMPLOYEE", "PATRON"]),
            firstName: zod_1.z.string(),
            lastName: zod_1.z.string(),
            email: zod_1.z.string().regex(/[^@ \t\r\n]+\.[^@ \t\r\n]+/),
            password: zod_1.z.string(),
        }),
    },
    book: {
        create: zod_1.z.object({
            barcode: zod_1.z.string().regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/),
            cover: zod_1.z.string(),
            title: zod_1.z.string(),
            authors: zod_1.z.array(zod_1.z.string()),
            description: zod_1.z.string(),
            subjects: zod_1.z.array(zod_1.z.string()),
            publicationDate: zod_1.z.preprocess((arg) => {
                if (typeof arg === "string" || arg instanceof Date)
                    return new Date(arg);
            }, zod_1.z.date()),
            publisher: zod_1.z.string(),
            pages: zod_1.z.number(),
            genre: zod_1.z.string(),
        }),
        update: zod_1.z.object({
            _id: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
            barcode: zod_1.z.string().regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/),
            cover: zod_1.z.string(),
            title: zod_1.z.string(),
            authors: zod_1.z.array(zod_1.z.string()),
            description: zod_1.z.string(),
            subjects: zod_1.z.array(zod_1.z.string()),
            publicationDate: zod_1.z.preprocess((arg) => {
                if (typeof arg === "string" || arg instanceof Date)
                    return new Date(arg);
            }, zod_1.z.date()),
            publisher: zod_1.z.string(),
            pages: zod_1.z.number(),
            genre: zod_1.z.string(),
        }),
        delete: zod_1.z.object({
            barcode: zod_1.z.string().regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/),
        }),
    },
    libraryCard: {
        create: zod_1.z.object({
            user: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
        }),
        get: zod_1.z.object({
            cardId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
        }),
    },
    loan: {
        create: zod_1.z.object({
            status: zod_1.z.enum(["AVAILABLE", "LOANED"]),
            loanedDate: zod_1.z.date(),
            dueDate: zod_1.z.date(),
            returnedDate: zod_1.z.date().optional(),
            patron: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
            employeeOut: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
            employeeIn: zod_1.z
                .string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .optional(),
            item: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
        }),
        update: zod_1.z.object({
            _id: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
            status: zod_1.z.enum(["AVAILABLE", "LOANED"]),
            loanedDate: zod_1.z.date(),
            dueDate: zod_1.z.date(),
            returnedDate: zod_1.z.date().optional(),
            patron: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
            employeeOut: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
            employeeIn: zod_1.z
                .string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .optional(),
            item: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
        }),
        query: zod_1.z.object({
            property: zod_1.z.enum([
                "_id",
                "status",
                "loanedDate",
                "dueDate",
                "returnedDate",
                "patron",
                "employeeOut",
                "employeeIn",
                "item",
            ]),
            value: zod_1.z.union([zod_1.z.string(), zod_1.z.date()]),
        }),
    },
};
