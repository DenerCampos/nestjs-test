import { IsEmail, IsOptional, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validator/uniqueEmailValidator';

export class UpdateUserDTO {
  @IsOptional()
  name: string;

  @IsOptional()
  @IsEmail()
  @IsUniqueEmail({ message: 'Já existe um usuario com esse email' })
  email: string;

  @IsOptional()
  @MinLength(6, { message: 'A senha deve ser maior ou igual a 6' })
  pass: string;
}
