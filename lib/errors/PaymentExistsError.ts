class PaymentExistsError extends Error {
  constructor (message?: string) {
    super(message || 'Payment exists already')
  }
}

export { PaymentExistsError }
