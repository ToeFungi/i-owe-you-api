import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Application } from 'express'
import { RoutesAggregator } from './routes/RoutesAggregator'
import { ErrorHandler } from './errors/ErrorHandler'

class App {
  public app: Application
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
  }
}

export default new App().app
