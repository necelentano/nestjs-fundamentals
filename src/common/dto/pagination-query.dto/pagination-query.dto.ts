import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  //@Type(() => Number) - don't need if we set transformOptions on "global" level => enableImplicitConversion: true
  limit: number;

  @IsOptional()
  @IsPositive()
  //@Type(() => Number)
  offset: number;
}
