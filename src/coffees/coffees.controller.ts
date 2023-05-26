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
  SetMetadata,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { resolve } from 'path';

//@UsePipes(new ValidationPipe()) - we can use the instance to pass specific configurations, but the best practice is to use a class
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  //@UsePipes(ValidationPipe)
  //@SetMetadata('isPublic', true)
  @Public()
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // /coffees?limit=20&offset=10
    //const { limit, offset } = paginationQuery;
    // return `This action returns all coffees! Limit: ${limit}, offset: ${offset}`;
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.coffeesService.findAll(paginationQuery);
  }

  // Response Status Code
  //   @Get()
  //   findAll(@Res() response) {
  //     return response.status(200).send('This action returns all coffees!');
  //   }

  @Get(':id')
  findOne(@Param('id') id: number) {
    //return `This action returns #${id} coffee!`;
    console.log(typeof id);
    return this.coffeesService.findOne('' + id);
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    //return body;
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto,
  ) {
    //return `This action updates #${id} coffee!`;
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return `This action removes #${id} coffee!`;
    return this.coffeesService.remove(id);
  }
}
