import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, 
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3010,
      },
    }
  );
  app.listen();
}
bootstrap();
