import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true }) //validator assincrono, espera a função
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private UserRepository: UserRepository) {}

  async validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const user = await this.UserRepository.emailExist(value);

    return !user;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    throw new Error('Method not implemented.');
  }
}

//decoration
export const IsUniqueEmail = (validationOptions: ValidationOptions) => {
  return (object: object, props: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
