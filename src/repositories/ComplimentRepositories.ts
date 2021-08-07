import { Repository, EntityRepository } from "typeorm";
import { Compliments } from "../entities/Compliments";

class ComplimentsRepositories extends Repository<Compliments> {}

export { ComplimentsRepositories };