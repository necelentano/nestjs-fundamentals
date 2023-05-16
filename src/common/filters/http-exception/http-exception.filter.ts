import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    // switchToHttp() method gives us access to the native inflight Request or Response objects
    const ctx = host.switchToHttp();

    // getResponse() will return our -underlying plarforms- Reponse (Express (default) or Fastify)
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const error =
      typeof response === 'string'
        ? { message: exceptionResponse }
        : (exceptionResponse as object);

    response
      .status(status)
      .json({ ...error, timestamp: new Date().toISOString() });
  }
}
