import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validator/uniqueEmailValidator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsUniqueEmail({ message: 'Já existe um usuario com esse email' })
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ser maior ou igual a 6' })
  pass: string;
}
