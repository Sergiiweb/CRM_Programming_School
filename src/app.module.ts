import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CustomConfigModule } from './config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: () => {
        return {
          type: 'mysql',
          host: 'http://owu.linkpc.net',
          port: 3306,
          username: 'progschool',
          password: 'progschool',
          database: 'progschool',
          entities: [],
          synchronize: true,
        };
      },
      inject: [],
    }),
    UsersModule,
    AuthModule,
    CustomConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
