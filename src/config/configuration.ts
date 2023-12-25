import { registerAs, ConfigService } from '@nestjs/config';

const configService = new ConfigService();
const token = 'allConfigs';

export default registerAs(token, () => ({
  db_host: configService.get<string>('MYSQL_HOST'),
  db_port: configService.get<number>('MYSQL_PORT'),
  db_username: configService.get<string>('MYSQL_USERNAME'),
  db_password: configService.get<string>('MYSQL_PASSWORD'),
  db_database: configService.get<string>('MYSQL_DB'),
}));
