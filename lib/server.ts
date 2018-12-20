import app from "./app";
import config from './config'

app.listen(config.env.port, () => {
  console.log(`${config.appName} is running on port ${config.env.port}`)
})
