import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const Protocol = createParamDecorator(
  (defaultValue: string, ctx: ExecutionContext) => {
    // we pass 'https' to @Protocol in coffees.controller
    console.log({ defaultValue }); // { defaultValue: 'https' }

    const request = ctx.switchToHttp().getRequest();

    return request.protocol;
  },
);
