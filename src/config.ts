const config = {
  app: {
    name: process.env.APP_NAME || 'TS Express App',
    port: parseInt(process.env.APP_PORT, 10) || 80,
    env: process.env.APP_ENV || 'dev', // dev | staging | production | debug
  },
  metrics: {
    host: process.env.STATSD_HOST || '127.0.0.1',
    port: parseInt(process.env.STATSD_PORT, 10) || 8125
  }
}

export default config
