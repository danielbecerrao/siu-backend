import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { OpenAPIObject, SwaggerCustomOptions } from '@nestjs/swagger';
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
    .setTitle('SIU')
    .setDescription('Sistema usuarios')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const options: SwaggerCustomOptions = {
    customJsStr: `
    const img = document.createElement("img");
    img.src = "./logo.png";
    img.style.width = "100px";
    img.style.height = "30px";
    const elementInterval = setInterval(function(){
      const element = document.querySelector(".topbar-wrapper a");
      if(element){
        element.appendChild(img);
        clearInterval(elementInterval);
      }
    }, 100);
    `,
    customCss: `
      .swagger-ui .topbar { background: linear-gradient(90deg, rgba(4,89,163,1) 35%, rgba(42,49,127,1) 100%); }
    `,
    swaggerOptions: {
      persistAuthorization: true,
    },
    customfavIcon: '/favicon.ico',
  };
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, options);
  await app.listen(configService.getOrThrow<string>('PORT'));
}
void bootstrap();
