import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@S481516t!',
      database: 'db_lojagames',
      entities: [Categoria],
      synchronize: true,
    }),
    CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
