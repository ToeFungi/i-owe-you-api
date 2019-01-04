# iOweU
## (Project Bravo) The above name to be confirmed

This is the API that will be powering the front-end. It is written in TypeScript and powered
by Node and uses the Express framework. It is an API that allows a person to track who owes
them money. A payment can be recorded with a description and the person who owes the money's
name and details. The system will automatically notify the individual when payment is past due
which alleviates those awkward situations of asking for the money back.

### Installation
Below will clone the repo and install all dependencies
```bash
$ git clone https://github.com/ToeFungi/i-owe-you-api.git
$ cd i-owe-you-api
$ npm i
```

To host the various preconfigured environments
```bash
$ npm run dev
$ npm run start // Only works after build
$ npm run prod
```

### Tests
At the moment, there aren't really any test suites but there is a somewhat of a stub test case.
The test can be run with the following command
```bash
$ npm run tests
```
The test suite uses
- Chai
- Chai-as-promised
- Sinon
- Sinon-chai
- Mocha
- Nyc (code coverage)

### Optional Metrics
This API has integrations with StatsD, Grafana and InfluxDB for basic metrics reporting. The manner
in which the metrics are dispatched is subject to change in future as well as the types that are 
being recorded.

[StatsD, InfluxDB & Grafana](https://github.com/samuelebistoletti/docker-statsd-influxdb-grafana)

### Environment
The current variables available to be adjusted are as follows with their default values

| Variable    | Defaults      | Description                                                                   |
|-------------|---------------|-------------------------------------------------------------------------------|
| APP_NAME    | "@TS/Express" | The name of the application                                                   |
| APP_PORT    | 80            | The port to access the application over                                       |
| APP_ENV     | "dev"         | The environment the application is running. (dev, staging, production, debug) |
| STATSD_HOST | "127.0.0.1"   | The IP the metrics should be sent to over UDP                                 |
| STATSD_PORT | 8125          | The port to be used for the UDP stream                                        |

All of the environment variables are accessible through a singular config file and grouped in
a logical manner.

```typescript
import config from './config'
const port = config.app.port
```