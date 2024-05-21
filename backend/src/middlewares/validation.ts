import { z, ZodError, ZodSchema } from "zod";
import { NextFunction, Request, Response } from "express";

export function validateSchema(schema: ZodSchema, property: string) {
  return (req: Request, res: Response, next: NextFunction) => {
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
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).json({
          message: "Object validation failed, please include a valid object",
          errors: error.errors, // Provide detailed error information
        });
      }
      next(error);
    }
  };
}

export const Schemas = {
  user: {
    create: z.object({
      type: z.enum(["ADMIN", "EMPLOYEE", "PATRON"]),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().regex(/[^@ \t\r\n]+\.[^@ \t\r\n]+/),
      password: z.string(),
    }),
    login: z.object({
      email: z.string().regex(/[^@ \t\r\n]+\.[^@ \t\r\n]+/),
      password: z.string(),
    }),
    userId: z.object({
      userId: z.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
    update: z.object({
      _id: z.string().regex(/^[0-9a-fA-F]{24}$/),
      type: z.enum(["ADMIN", "EMPLOYEE", "PATRON"]),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().regex(/[^@ \t\r\n]+\.[^@ \t\r\n]+/),
      password: z.string(),
    }),
  },
  book: {
    create: z.object({
      barcode: z.string().regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/),
      cover: z.string(),
      title: z.string(),
      authors: z.array(z.string()),
      description: z.string(),
      subjects: z.array(z.string()),
      publicationDate: z.preprocess((arg) => {
        if (typeof arg === "string" || arg instanceof Date)
          return new Date(arg);
      }, z.date()),
      publisher: z.string(),
      pages: z.number(),
      genre: z.string(),
    }),
    update: z.object({
      _id: z.string().regex(/^[0-9a-fA-F]{24}$/),
      barcode: z.string().regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/),
      cover: z.string(),
      title: z.string(),
      authors: z.array(z.string()),
      description: z.string(),
      subjects: z.array(z.string()),
      publicationDate: z.preprocess((arg) => {
        if (typeof arg === "string" || arg instanceof Date)
          return new Date(arg);
      }, z.date()),
      publisher: z.string(),
      pages: z.number(),
      genre: z.string(),
    }),
    delete: z.object({
      barcode: z.string().regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/),
    }),
  },
  libraryCard: {
    create: z.object({
      user: z.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
    get: z.object({
      cardId: z.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
  },
  loan: {
    create: z.object({
      status: z.enum(["AVAILABLE", "LOANED"]),
      loanedDate: z.date(),
      dueDate: z.date(),
      returnedDate: z.date().optional(),
      patron: z.string().regex(/^[0-9a-fA-F]{24}$/),
      employeeOut: z.string().regex(/^[0-9a-fA-F]{24}$/),
      employeeIn: z
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .optional(),
      item: z.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
    update: z.object({
      _id: z.string().regex(/^[0-9a-fA-F]{24}$/),
      status: z.enum(["AVAILABLE", "LOANED"]),
      loanedDate: z.date(),
      dueDate: z.date(),
      returnedDate: z.date().optional(),
      patron: z.string().regex(/^[0-9a-fA-F]{24}$/),
      employeeOut: z.string().regex(/^[0-9a-fA-F]{24}$/),
      employeeIn: z
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .optional(),
      item: z.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
    query: z.object({
      property: z.enum([
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
      value: z.union([z.string(), z.date()]),
    }),
  },
};
