import { UsersRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({name, email, admin} : IUserRequest) {
        // mesmo email ?
        const usersRepository = getCustomRepository(UsersRepositories);

        // se não tiver email preenchido
        if(!email){
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await usersRepository.findOne({email})

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const user = usersRepository.create({name, email, admin});

        await usersRepository.save(user);

        return user;


    }

}

export { CreateUserService };