import { Inject, Injectable } from "@nestjs/common";
import { CreateOrderRequest } from "./create-order-request.dto";
import { ClientKafka } from "@nestjs/microservices";
import { CreateOrderEvent } from "./create-order.event";

@Injectable()
export class AppService {

  constructor(@Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,) { }
  
  getHello(): string {
    return 'Hello World!';
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    this.billingClient.emit('order_created', new CreateOrderEvent('123', userId, price))
  }

}
