import { Request, Response } from "express";
import { FetchQuoteService } from "../services/FetchQuoteService";

class FetchQuoteController {
  async handle(request: Request, response: Response) {
    const fetchQuoteService = new FetchQuoteService();

    const quote = await fetchQuoteService.execute();

    return response.json(quote);
  }
}

export { FetchQuoteController };
