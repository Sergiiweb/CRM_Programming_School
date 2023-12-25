export class CreateUserDto {
  email: string;
  name: string;
  surname: string;
  is_active: boolean;
  last_login: Date;
}
