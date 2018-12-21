const config = {
  app: {
    name: process.env.APP_NAME || 'TS Express App',
    port: parseInt(process.env.PORT, 10) || 3000,
    env: 'dev', // dev | staging | production | debug
  },
  metrics: {
    host: process.env.STATSD_HOST || '127.0.0.1',
    port: parseInt(process.env.STATSD_PORT, 10) || 8125
  }
}

export default config