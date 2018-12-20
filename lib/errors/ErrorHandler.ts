import { PaymentNotFoundError } from './PaymentNotFoundError'
import config from '../config'
import { MalformedPaymentError } from './MalformedPaymentError'
import { PaymentExistsError } from './PaymentExistsError'

class ErrorHandler {
  private error: Error

  public handle(err, req, res, next) {
    this.error = err

    if (err instanceof PaymentNotFoundError) {
      res.status(404).send(this.decorateResponse)
    } else if (err instanceof MalformedPaymentError) {
      res.status(400).send(this.decorateResponse)
    } else if (err instanceof PaymentExistsError) {
      res.status(409).send(this.decorateResponse)
    } else {
      res.status(500).send({
        message: err.message,
        stack_trace: err.stack
      })
    }
  }

  private decorateResponse (): object {
    let body: object = {
      message: this.error.message
    }

    if (config.env.level !== 'production') {
      body = {
        ...body,
        stack_trace: this.error.stack
      }
    }

    return body
  }
}

export { ErrorHandler }
