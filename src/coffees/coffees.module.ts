import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// class ConfigService {}
// class DevelopmentConfigService {}
// class ProductionConfigService {}

// @Injectable()
// export class CoffeeBrandsFactory {
//   create() {
//     // do something
//     return ['buddy brew', 'nescafe', 'jacobs'];
//   }
// }

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    // this technique below is called 'partial registration' => https://docs.nestjs.com/techniques/configuration#partial-registration
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],

  // Custom providers
  // providers: [{provide: CoffeesService, useValue: new MockCoffeeService()}],

  // Nonclassabased Provider Tokens
  // providers: [
  //   CoffeesService,
  //   { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
  // ],

  // Class Providers
  // providers: [
  //   CoffeesService,
  //   {
  //     provide: ConfigService,
  //     useClass:
  //       process.env.NODE_ENV === 'development'
  //         ? DevelopmentConfigService
  //         : ProductionConfigService,
  //   },
  // ],

  // usefactory Providers
  // providers: [
  //   CoffeesService,
  //   CoffeeBrandsFactory,
  //   {
  //     provide: COFFEE_BRANDS,
  //     useFactory: (brandsFactory: CoffeeBrandsFactory) =>
  //       brandsFactory.create(),
  //     inject: [CoffeeBrandsFactory],
  //   },
  // ],

  // Async Providers
  // providers: [
  //   CoffeesService,
  //   {
  //     provide: COFFEE_BRANDS,
  //     useFactory: async (dataSource: DataSource): Promise<string[]> => {
  //       // const coffeeBrands = await dataSource.query('....')
  //       console.log(`*Async factory*`);
  //       const coffeeBrands = await Promise.resolve([
  //         'buddy brew',
  //         'nescafe',
  //         'jacobs',
  //       ]);
  //       return coffeeBrands;
  //     },
  //     inject: [DataSource],
  //   },
  // ],
  exports: [CoffeesService],
})
export class CoffeesModule {}

// https://docs.nestjs.com/fundamentals/custom-providers
