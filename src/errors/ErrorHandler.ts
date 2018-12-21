import { PaymentNotFoundError } from './PaymentNotFoundError'
import config from '../config'
import { MalformedPaymentError } from './MalformedPaymentError'
import { PaymentExistsError } from './PaymentExistsError'
import * as StatsdClient from 'statsd-client'
import { HttpCodes } from '../lib/HttpCodes'

class ErrorHandler {
  private error: Error
  private statsdClient: StatsdClient

  constructor () {
    this.statsdClient = new StatsdClient({
      host: config.metrics.host,
      port: config.metrics.port
    })
  }


  public handle(err, req, res, next) {
    this.error = err

    if (err instanceof PaymentNotFoundError) {
      res.status(HttpCodes.NOT_FOUND).send(this.decorateResponse)
    } else if (err instanceof MalformedPaymentError) {
      res.status(HttpCodes.BAD_REQUEST).send(this.decorateResponse)
    } else if (err instanceof PaymentExistsError) {
      res.status(HttpCodes.CONFLICT).send(this.decorateResponse)
    } else {
      this.statsdClient.increment('UnknownError.counter')
      res.status(HttpCodes.INTERNAL_SERVER_ERROR).send({
        message: err.message,
        stack_trace: err.stack
      })
    }
  }

  private decorateResponse (): object {
    let body: object = {
      message: this.error.message
    }

    if (config.app.env !== 'production') {
      body = {
        ...body,
        stack_trace: this.error.stack
      }
    }

    return body
  }
}

export { ErrorHandler }
