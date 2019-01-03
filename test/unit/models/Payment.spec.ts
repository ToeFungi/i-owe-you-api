import { Payment } from '../../../src/models/Payment'

/**
 * Example test for reference
 */

describe('Payment Model $Payment', () => {
  let payment: Payment

  const id: string = 'xxx-xxx-xxx'
  const amount: string = '23.59'
  const payeeId: string = 'xxx-xxx-yyy'
  const recipientId: string = 'xxx-yyy-xxx'

  const paymentJson = { id, amount, payeeId, recipientId }

  before(() => {
    payment = new Payment(id, recipientId, payeeId, amount)
  })

  describe('toJson()', () => {
    it('returns a serialized Payment object', () => {
      return payment.toJson().should.deep.equal(paymentJson)
    })
  })
})
