import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '/transaction  -  para o CRUD de Transações <br/>/category   -  para o CRUD de Categorias ';
  }
}
