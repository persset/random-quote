import { Request, Response } from "express";
import { CreateQuoteService } from "../services/CreateQuoteService";

class CreateQuoteController {
  async handle(request: Request, response: Response) {
    const { quote, author } = request.body;

    const createQuoteService = new CreateQuoteService();

    const quote_info = await createQuoteService.execute({
      quote,
      author,
    });

    return response.json(quote_info);
  }
}

export { CreateQuoteController };
