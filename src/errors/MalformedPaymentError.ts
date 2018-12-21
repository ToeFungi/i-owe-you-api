import * as StatsdClient from 'statsd-client'
import config from '../config'

class MalformedPaymentError extends Error {
  constructor (message?: string) {
    super(message || 'Payment malformed. All data is required')

    new StatsdClient({
      host: config.metrics.host,
      port: config.metrics.port
    }).increment('MalformedPaymentError.counter')
  }
}

export { MalformedPaymentError }
