import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config/database.config';
import { ModelProvider } from './provider/model.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    DatabaseConfig,
    ModelProvider
  ],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
  ]
})
export class DbModule { }
