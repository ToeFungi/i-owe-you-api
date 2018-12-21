import { PaymentController } from '../controllers/PaymentController'

class PaymentRoutes {
  private paymentController: PaymentController = new PaymentController()

  public initRoutes (app): void {
    app.route('/payments')
      .get(this.paymentController.getPayments.bind(this.paymentController))
      .post(this.paymentController.createPayment.bind(this.paymentController))

    app.route('/payments/:paymentId')
      .get(this.paymentController.getPaymentById.bind(this.paymentController))
      .put(this.paymentController.updatePayment.bind(this.paymentController))
      .delete(this.paymentController.deletePayment.bind(this.paymentController))
  }
}

export { PaymentRoutes }
