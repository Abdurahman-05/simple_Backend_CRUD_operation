import {body, validationResult } from "express-validator";
import express from "express";

export const validateJob = [
  body("title")
    .notEmpty()
    .withMessage("title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  body("description")
    .notEmpty().withMessage("Description is required")
    .

  body("location")
  .notEmpty().withMessage("Location is required"),

  body("salary")
    .notEmpty()
    .isNumeric()
    .withMessage("Salary is required and must be a number"),
  
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// export const handleValidationErrors = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     // Transform the errors to a cleaner array format
//     const formattedErrors = errors.array().map((error) => ({
//       path: error.path,
//       message: error.msg,
//     }));
    
//     return res.status(400).json({ 
//       message: "Validation failed", 
//       errors: formattedErrors 
//     });
//   }
//   next();
// };
