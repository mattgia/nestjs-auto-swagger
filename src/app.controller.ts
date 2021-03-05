import { Controller, Get, Post, Body } from '@nestjs/common';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';


class RequestObject {
  @IsString()
  aString: string;

  @IsNumber()
  aNumber: number;

  @IsObject()
  anObject: {
    aString: string;
    aNumber: number
  }
}


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  doSomething(@Body() obj: RequestObject): string {
    console.log(obj)
    return JSON.stringify(obj);
  }
}
