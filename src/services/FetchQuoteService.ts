import { getCustomRepository } from "typeorm";
import { QuoteRepository } from "../repositories/QuoteRepository";
import { classToPlain } from "class-transformer";

class FetchQuoteService {
  async execute() {
    const quoteRepository = getCustomRepository(QuoteRepository);

    const count = await quoteRepository.count();

    const quote = await quoteRepository.findOneOrFail({
      where: {
        id: Math.floor(Math.random() * count) + 1,
      },
    });

    return classToPlain(quote);
  }
}

export { FetchQuoteService };
