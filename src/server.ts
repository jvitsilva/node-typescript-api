import './util/module-alias';
import bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { ForecastController } from './controllers/forecast';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  //inicia o servidor
  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  //configura o express
  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  //configura os controllers
  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Express.Application {
    return this.app;
  }
}
