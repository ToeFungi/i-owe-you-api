import * as StatsdClient from 'statsd-client'
import config from '../config'
import { NextFunction, Request, Response } from 'express'

class Metrics {
  private statsdClient: StatsdClient

  constructor () {
    this.statsdClient = new StatsdClient({
      host: config.metrics.host,
      port: config.metrics.port
    })
  }

  public handle (req: Request, res: Response, next: NextFunction) {
    const time = new Date()
    const method = req.method
    const basePath = req.url.split('/')[1]

    res.on('finish', () => {
      this.statsdClient.timing(`timer.${method}.${basePath}`, time)
    })

    this.statsdClient.increment(`http.${method}.${basePath}`)

    next()
  }
}

export { Metrics }
