import { Request, Response } from 'express'
import { Payment } from '../models/Payment'
import { PaymentNotFoundError } from '../errors/PaymentNotFoundError'
import { MalformedPaymentError } from '../errors/MalformedPaymentError'
import { PaymentExistsError } from '../errors/PaymentExistsError'

class PaymentController {
  public paymentList: Array<Payment>

  constructor () {
    this.paymentList = [
      new Payment('ff-ww-qq', 'ipw-fd', 'asd-ew', '245.06'),
      new Payment('aa-ww-qq', 'ipw-fd', 'asd-ew', '245.06'),
      new Payment('dd-ww-qq', 'ipw-fd', 'asd-ew', '245.06')
    ]
  }

  /**
   * Create a new payment
   * @param req
   * @param res
   * @throws PaymentExistsError|MalformedPaymentError
   */
  public createPayment (req: Request, res: Response) {
    const payment = this.paymentList.find((payment: Payment) => req.body.id === payment.getId())

    if (payment) {
      throw new PaymentExistsError()
    }

    try {
      this.paymentList.push(new Payment(
        req.body.id,
        req.body.recipientId,
        req.body.payeeId,
        req.body.amount
      ))
    } catch (error) {
      throw new MalformedPaymentError()
    }

    res.status(200).send()
  }

  /**
   * Get all payments available
   * @param req
   * @param res
   * @throws PaymentNotFoundError
   */
  public getPayments (req: Request, res: Response) {
    let payments = []

    this.paymentList.forEach((payment: Payment) => payments.push(payment.toJson()))

    if (!payments.length) {
      throw new PaymentNotFoundError()
    }

    res.status(200).send({
      payments: payments
    })
  }

  /**
   * Get a payment by its ID
   * @param req Request
   * @param res Response
   * @throws PaymentNotFoundError
   */
  public getPaymentById (req: Request, res: Response) {
    const payment = this.paymentList.find((payment: Payment) => req.params.paymentId === payment.getId())

    if (!payment) {
      throw new PaymentNotFoundError()
    }

    res.status(200).send({
      payment: payment.toJson()
    })
  }

  /**
   * Updates a specific payment
   * @param req
   * @param res
   * @throws PaymentNotFoundError|MalformedPaymentError
   */
  public updatePayment (req: Request, res: Response) {

    const paymentIndex = this.paymentList.findIndex((payment: Payment) => {
      return req.params.paymentId === payment.getId()
    })

    if (paymentIndex === -1) {
      throw new PaymentNotFoundError()
    }

    try {
      const payment = new Payment(
        req.params.paymentId,
        req.body.recipientId,
        req.body.payeeId,
        req.body.amount
      )

      this.paymentList.splice(paymentIndex, 1, payment)
    } catch (error) {
      throw new MalformedPaymentError()
    }


    res.status(200).send()
  }

  /**
   * Delete a specific payment
   * @param req
   * @param res
   * @throws PaymentNotFoundError
   */
  public deletePayment (req: Request, res: Response) {
    const payments = this.paymentList.filter((payment: Payment) => {
      return req.params.paymentId !== payment.getId()
    })

    if (payments.length === this.paymentList.length) {
      throw new PaymentNotFoundError()
    }

    this.paymentList = payments

    res.status(200).send()
  }
}

export { PaymentController }
