import { Router } from "express";
import { CreateQuoteController } from "./controllers/CreateQuoteController";
import { FetchQuoteController } from "./controllers/FetchQuoteController";

const router = Router();

const createQuoteController = new CreateQuoteController();
const fetchQuoteController = new FetchQuoteController();

router.post("/quotes", createQuoteController.handle);
router.get("/quotes", fetchQuoteController.handle);

export { router };
