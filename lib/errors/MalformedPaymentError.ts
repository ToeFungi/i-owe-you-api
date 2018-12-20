class MalformedPaymentError extends Error {
  constructor (message?: string) {
    super(message || 'Payment malformed. All data is required')
  }
}

export { MalformedPaymentError }
