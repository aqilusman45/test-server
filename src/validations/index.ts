import { body } from "express-validator";

export const getSumRequest = [
  body("number1").exists().isNumeric(),
  body("number2").exists().isNumeric(),
];
