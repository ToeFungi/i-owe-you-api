const config = {
  appName: process.env.APP_NAME || 'IOU Server',
  env: {
    level: 'dev', // dev | staging | production | debug
    port: parseInt(process.env.PORT, 10) || 3000
  }
}

export default config
