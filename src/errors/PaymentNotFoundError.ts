import * as StatsdClient from 'statsd-client'
import config from '../config'

class PaymentNotFoundError extends Error {
  constructor (message?: string) {
    super(message || 'Payment not found')

    new StatsdClient({
      host: config.metrics.host,
      port: config.metrics.port
    }).increment('PaymentNotFoundError.counter')
  }
}

export { PaymentNotFoundError }
