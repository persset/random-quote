import { EntityRepository, Repository } from "typeorm";
import { Quote } from "../entities/Quote";

@EntityRepository(Quote)
class QuoteRepository extends Repository<Quote> {}

export { QuoteRepository };
