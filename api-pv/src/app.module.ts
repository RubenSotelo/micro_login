import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './modules/producto/producto.module';
import { VentaModule } from './modules/venta/venta.module';
import { ConfigModule } from '@nestjs/config';
import configurationApp from 'config/configuration-app';
import databaseConnect from 'config/database.connect';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      load: [configurationApp],
      isGlobal: true,
    }),
    databaseConnect,
    ProductoModule, 
    VentaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
