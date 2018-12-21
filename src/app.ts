import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Application } from 'express'
import { RoutesAggregator } from './routes/RoutesAggregator'
import { ErrorHandler } from './errors/ErrorHandler'
import { Metrics } from './middleware/Metrics'

class App {
  public app: Application
  public metrics: Metrics = new Metrics()
  public routes: RoutesAggregator = new RoutesAggregator()
  public errorHandler: ErrorHandler = new ErrorHandler()

  constructor() {
    this.app = express()
    this.config()

    this.routes.setupRoutes(this.app)

    this.app.use(this.errorHandler.handle.bind(this.errorHandler))
  }

  private config(): void{
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(this.metrics.handle.bind(this.metrics))
  }
}

export default new App().app
