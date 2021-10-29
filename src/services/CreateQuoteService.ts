import { QuoteRepository } from "../repositories/QuoteRepository";
import { getCustomRepository } from "typeorm";

interface IQuoteRequest {
  quote: string;
  author: string;
}

class CreateQuoteService {
  async execute({ quote, author }: IQuoteRequest) {
    const quoteRepository = getCustomRepository(QuoteRepository);

    const quote_info = quoteRepository.create({
      quote,
      author,
    });

    await quoteRepository.save(quote_info);

    return quote_info;
  }
}

export { CreateQuoteService };
