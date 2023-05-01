import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    // /coffees?limit=20&offset=10
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees! Limit: ${limit}, offset: ${offset}`;
  }

  // Response Status Code
  //   @Get()
  //   findAll(@Res() response) {
  //     return response.status(200).send('This action returns all coffees!');
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee!`;
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee!`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee!`;
  }
}
