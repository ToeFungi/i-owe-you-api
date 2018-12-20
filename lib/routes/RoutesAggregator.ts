import { UserRoutes } from './UserRoutes'
import { PaymentRoutes } from './PaymentRoutes'

class RoutesAggregator {
  private userRoutes: UserRoutes = new UserRoutes()
  private paymentRoutes: PaymentRoutes = new PaymentRoutes()

  public setupRoutes(app): void {
    this.userRoutes.initRoutes(app)
    this.paymentRoutes.initRoutes(app)
  }
}

export { RoutesAggregator }
