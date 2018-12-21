class Payment {
  private readonly id: string
  private readonly recipientId: string
  private readonly payeeId: string
  private readonly amount: string

  constructor (id: string, recipientId: string, payeeId: string, amount: string) {
    this.id = id
    this.recipientId = recipientId
    this.payeeId = payeeId
    this.amount = amount
  }

  public getId (): string {
    return this.id
  }

  public getRecipientId (): string {
    return this.recipientId
  }

  public getPayeeId (): string {
    return this.payeeId
  }

  public getAmount (): string {
    return this.amount
  }

  public toJson (): object {
    return {
      id: this.id,
      recipientId: this.recipientId,
      payeeId: this.payeeId,
      amount: this.amount
    }
  }
}

export { Payment }
