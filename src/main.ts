import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { OpenAPIObject } from '@nestjs/swagger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

const configService: ConfigService = new ConfigService();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('Base')
    .setDescription('project base')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(configService.getOrThrow<string>('PORT'));
}
void bootstrap();
