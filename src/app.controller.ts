import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { IsArray, IsIn, IsNumber, IsObject, IsString } from 'class-validator';
import { AppService } from './app.service';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import * as fs from 'fs';

class PostRequestObject {

  @ApiProperty({
    required: true
  })
  @IsString()
  aString: string;

  @ApiProperty(
    { required: true }
  )
  @IsNumber()
  aNumber: number;

  @ApiProperty({
    required: false
  })
  @IsObject()
  meta: {
    aString?: string
    aNumber?: number
  } = {};

  private static readonly validSubscriptions = ['EMAIL', 'SMS'];
  @ApiProperty({
    example: PostRequestObject.validSubscriptions
  })
  @IsArray()
  @IsIn(PostRequestObject.validSubscriptions, { each: true })
  subscriptions: string[];
}

class GetRequestObject {
  @ApiProperty()
  queryParam: string;
}


@Controller()

export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOperation({
    summary: 'this gets something',
    description: fs.readFileSync('src/docs/get.html').toString(),
    externalDocs: {
      description: 'App Wiki:',
      url: 'http://google.ca'
    }
  })
  getHello(@Query() queryParams: GetRequestObject): string {
    return `${queryParams.queryParam} ${this.appService.getHello()}`;
  }
  @Post()
  @ApiOperation({
    summary: 'this creates something',
    description: 'this is where the description would go, if I had one'
  })
  doSomething(@Body() obj: PostRequestObject): string {
    console.log(obj);
    return JSON.stringify(obj);
  }
}
