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
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // /coffees?limit=20&offset=10
    //const { limit, offset } = paginationQuery;
    // return `This action returns all coffees! Limit: ${limit}, offset: ${offset}`;
    return this.coffeesService.findAll();
  }

  // Response Status Code
  //   @Get()
  //   findAll(@Res() response) {
  //     return response.status(200).send('This action returns all coffees!');
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //return `This action returns #${id} coffee!`;
    return this.coffeesService.findOne(id);
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    //return body;
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    //return `This action updates #${id} coffee!`;
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return `This action removes #${id} coffee!`;
    return this.coffeesService.remove(id);
  }
}
