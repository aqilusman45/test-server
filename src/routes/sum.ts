import { sum } from "@shared/SumNumbers";
import { requestErrors } from "@shared/RequestErrors";
import { Request, Response, Router } from "express";
import { getSumRequest } from "../validations";
import { ISum } from "../lib/sum";
const router = Router();

/******************************************************************************
 *                      Get Sum of Numbers - "POST /api/sum/"
 ******************************************************************************/

router.post(
  "/calculate-sum",
  getSumRequest,
  requestErrors,
  async (req: Request<{}, {}, ISum>, res: Response) => {
    const { number1, number2 } = req.body;

    res.json(sum(number1, number2));
  }
);

export default router;
