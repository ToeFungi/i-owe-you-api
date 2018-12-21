import * as StatsdClient from 'statsd-client'
import config from '../config'

class PaymentExistsError extends Error {
  constructor (message?: string) {
    super(message || 'Payment exists already')

    new StatsdClient({
      host: config.metrics.host,
      port: config.metrics.port
    }).increment('PaymentExistsError.counter')
  }
}

export { PaymentExistsError }
