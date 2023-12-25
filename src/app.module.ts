import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CustomConfigModule } from './config/config.module';
import { CustomConfigService } from './config/config.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CustomConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: (customConfigService: CustomConfigService) => {
        return {
          type: 'mysql',
          host: customConfigService.db_host,
          port: customConfigService.db_port,
          username: customConfigService.db_username,
          password: customConfigService.db_password,
          database: customConfigService.db_database,
          entities: [path.join(__dirname, '**', '*.entity{.js,.ts}')],
          synchronize: true,
        };
      },
      inject: [CustomConfigService],
    }),
    UsersModule,
    AuthModule,
    CustomConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
